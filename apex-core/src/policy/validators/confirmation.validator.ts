import {
  ActionPlan
} from "apex-types";

export function requiresConfirmation(
  plan: ActionPlan
): boolean {

  return (
    plan.execution.requiresConfirmation
  );

}