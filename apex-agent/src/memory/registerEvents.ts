import {
  ActionTypes
} from "apex-types";

import {
  memoryRegistry
} from "./registry/memoryRegistry";

import {
  createFolderEvent
} from "./events/createFolder.event";

memoryRegistry.register(

  ActionTypes.CREATE_FOLDER,

  createFolderEvent

);