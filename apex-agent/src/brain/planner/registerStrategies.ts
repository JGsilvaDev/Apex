import {
  plannerRegistry
} from "./registry";

import {
  createFolderStrategy
} from "./strategies/createFolder.strategy";

plannerRegistry.register(

  "CREATE_FOLDER",

  createFolderStrategy

);