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

  const result =
    plannerRegistry.execute(
        understanding
    );

  return {

    id:
      crypto.randomUUID(),

    goal:
      result.goal,

    execution:
      result.execution,

    actions:
      result.actions

  };

}