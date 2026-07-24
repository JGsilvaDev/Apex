import {
  ActionPlan
} from "apex-types";

export function validateRisk(
  plan: ActionPlan
): void {

  if (
    plan.execution.riskLevel === "CRITICAL"
  ) {

    throw new Error(
      "Plano bloqueado por risco crítico."
    );

  }

}