export const ActionTypes = {

  CREATE_FOLDER:
    "CREATE_FOLDER",

  DELETE_FOLDER:
    "DELETE_FOLDER",

  CREATE_FILE:
    "CREATE_FILE",

  DELETE_FILE:
    "DELETE_FILE",

} as const;


export type ApexActionType =
  typeof ActionTypes[keyof typeof ActionTypes];