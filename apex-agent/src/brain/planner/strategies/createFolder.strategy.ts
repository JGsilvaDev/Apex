import {
  ApexAction,
  ActionTypes,
  Understanding
} from "apex-types";

export function createFolderStrategy(
  understanding: Understanding
): ApexAction[] {

  return [

    {

      type: ActionTypes.CREATE_FOLDER,

      payload: {

        name:
          understanding.entities.name,

        location:
          understanding.entities.location

      }

    }

  ];

}