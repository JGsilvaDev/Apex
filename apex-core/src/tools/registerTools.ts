import {
  toolRegistry
} from "../registry/toolRegistry";

import {
  filesystemTool
} from "./filesystem";


toolRegistry.register(
  "CREATE_FOLDER",
  filesystemTool
);