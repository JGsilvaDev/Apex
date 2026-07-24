import {
  ApexActionType,
  ExecutionReport
} from "apex-types";

import {
  MemoryStore
} from "../MemoryStore";

type MemoryHandler =
(
  report: ExecutionReport,
  memory: MemoryStore
)=>void;

class MemoryRegistry{

  private handlers =
    new Map<
      ApexActionType,
      MemoryHandler
    >();

  register(
    action: ApexActionType,
    handler: MemoryHandler
  ){

    this.handlers.set(
      action,
      handler
    );

  }

  execute(
    report: ExecutionReport,
    memory: MemoryStore
  ){

    for(
      const step of report.steps
    ){

      const handler =
        this.handlers.get(
          step.action.type
        );

      if(handler){

        handler(
          report,
          memory
        );

      }

    }

  }

}

export const memoryRegistry =
  new MemoryRegistry();