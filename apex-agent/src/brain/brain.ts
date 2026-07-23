import {
  AgentResponse,
} from "apex-types";

import {
  Session
} from "../context/Session";

import {
  understand
} from "../nlu";

import {
  createPlan
} from "./planner";

export function think(
  session: Session,
  command: string
): AgentResponse {

  const context =
    session.context;

  context.addHistory(
    command
  );

  const understanding =
    understand(
      command
    );

  context.setLastIntent(
    understanding.intent
  );

  context.setLastEntities(
    understanding.entities
  );

  const plan =
    createPlan(
      understanding
    );

  return {

    message:
      plan.actions.length > 0
        ? "Entendido. Preparando execução."
        : "Não encontrei uma ação.",

    understanding,

    plan

  };

}