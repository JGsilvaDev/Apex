import "./registerStrategies";

import {
  ActionPlan,
  Understanding
} from "apex-types";

import {
  plannerRegistry
} from "./registry";

export function createPlan(
  understanding: Understanding
): ActionPlan {

  const actions =
    plannerRegistry.execute(
      understanding
    );

  return {

    id:
      crypto.randomUUID(),

    goal:
      "Executar comando",

    actions

  };

}