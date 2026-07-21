import {
  ActionPlan,
  ExecutionReport,
} from "apex-types";

export async function executePlan(
  plan: ActionPlan
): Promise<ExecutionReport> {

  throw new Error(
    "Execution Engine ainda não implementado."
  );

}