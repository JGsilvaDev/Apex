import {
  AgentResponse,
} from "apex-types";

import {
  understand
} from "../nlu";

import {
  createPlan
} from "./planner";

export function think(
  command:string
): AgentResponse {

  const understanding =
    understand(command);

  const plan =
    createPlan(
      understanding
    );

  return {

    message:
      plan?.actions.length > 0
        ? "Entendido. Preparando execução."
        : "Não encontrei uma ação.",

    understanding,

    plan

  };

}