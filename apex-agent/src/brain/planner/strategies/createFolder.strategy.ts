import {
  PlannerResult,
  ActionTypes,
  Understanding
} from "apex-types";

export function createFolderStrategy(
  understanding: Understanding
): PlannerResult {

  return {
    goal:
      `Criar pasta ${understanding.entities.name}`,

    execution:{

        requiresConfirmation:false,

        riskLevel:"LOW",

        estimatedDuration:1,

        allowParallel:false,

        stopOnError:true

    },
    
    actions: [
        {
          type: ActionTypes.CREATE_FOLDER,
          payload: {
            name:
                understanding.entities.name,

            location:
                understanding.entities.location,

            parent:
                understanding.entities.parent
          }
        }
    ]
};

}