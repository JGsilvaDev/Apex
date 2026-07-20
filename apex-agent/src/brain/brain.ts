import {
  understand
} from "../nlu";

import {
  createPlan
} from "./planner";

export function think(
  command:string
){

  const intent =
    understand(command);

  const action =
    createPlan(intent);

  return {

    message:
      "Plano criado.",

    action

  };

}