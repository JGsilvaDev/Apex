import {
  understand
} from "../nlu";


import {
  createPlan
} from "./planner";


export function think(
  command:string
){

  const result =
    understand(
      command
    );


  const action =
    createPlan(
      result
    );


  return {

    message:
      action
      ?
      "Entendido. Preparando execução."
      :
      "Não encontrei uma ação.",


    intent:
      result.intent,


    confidence:
      result.confidence,


    entities:
      result.entities,


    action

  };

}