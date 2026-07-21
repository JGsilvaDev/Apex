import {
  ApexAction,
  ExecutionContext
} from "apex-types";

import {
  toolRegistry
} from "./registry/toolRegistry";

import "./tools/registerTools";

export async function apexCore(
  action: ApexAction
) {

  const context: ExecutionContext = {

    executionId:
      crypto.randomUUID(),

    workspace:
      undefined,

    currentDirectory:
      undefined,

    variables: {},

    outputs: {},

    logs: []

  };

  return toolRegistry.execute(
    action,
    context
  );

}

export {
  executePlan
} from "./engine";