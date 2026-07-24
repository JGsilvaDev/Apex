import { ActionPlan } from "apex-types";

import {
  validateRisk
} from "./validators/risk.validator";

import {
  requiresConfirmation
} from "./validators/confirmation.validator";

export function validatePlan(
  plan: ActionPlan
){

    validateRisk(plan);

    return{
        requiresConfirmation:
            requiresConfirmation(plan)
    };

}