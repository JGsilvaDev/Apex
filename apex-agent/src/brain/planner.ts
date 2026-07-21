import {
  ActionPlan,
  ApexAction,
  ActionTypes
} from "apex-types";

import { Understanding } from "apex-types";

export function createPlan(
  understanding: Understanding
): ActionPlan {

  const actions: ApexAction[] = [];

  switch (understanding.intent) {

    case "CREATE_FOLDER":

      actions.push({

        type: ActionTypes.CREATE_FOLDER,

        payload: {

          name: understanding.entities.name,

          location: understanding.entities.location

        }

      });

      break;

  }

  return {

    id: crypto.randomUUID(),

    goal: "Executar comando",

    actions

  };

}