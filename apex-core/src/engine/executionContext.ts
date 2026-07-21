import {
  ExecutionContext
} from "apex-types";


export function createExecutionContext()
: ExecutionContext {

  return {

    executionId:
      crypto.randomUUID(),

    workspace:
      undefined,

    currentDirectory:
      undefined,

    variables:{},

    outputs:{},

    logs:[]

  };

}