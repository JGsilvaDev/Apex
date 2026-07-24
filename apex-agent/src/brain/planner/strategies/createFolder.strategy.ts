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
    actions: [
        {
          type: ActionTypes.CREATE_FOLDER,
          payload: {
              name:
                  understanding.entities.name,
              location:
                  understanding.entities.location
          }
        }
    ]
};

}