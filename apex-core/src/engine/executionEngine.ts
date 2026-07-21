import {
  ActionPlan,
  ExecutionReport,
  ExecutionStep
} from "apex-types";


import {
  createExecutionContext
} from "./executionContext";


import {
  runAction
} from "./executionRunner";


export async function executePlan(

  plan:ActionPlan

):Promise<ExecutionReport>{


  const context =
    createExecutionContext();


  const startedAt =
    new Date();


  const steps: ExecutionStep[] = [];


  for(
    const action of plan.actions
  ){

    const result =
      await runAction(
        action,
        context
      );


    steps.push({

      action,

      status:
        result.success
        ?
        "SUCCESS"
        :
        "FAILED",

      startedAt,

      finishedAt:
        new Date(),

      message:
        result.message

    });


    if(!result.success){

      break;

    }

  }


  return {

    id:
      context.executionId,

    goal:
      plan.goal,

    status:
      steps.every(
        step =>
        step.status === "SUCCESS"
      )
      ?
      "SUCCESS"
      :
      "FAILED",

    startedAt,

    finishedAt:
      new Date(),

    context,

    steps

  };

}