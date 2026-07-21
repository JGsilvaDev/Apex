import {
  ExecutionStep
} from "./executionStep";

import {
  ExecutionStatus
} from "./executionStatus";

import {
  ExecutionContext
} from "./executionContext";

export interface ExecutionReport {

  id: string;

  goal: string;

  status: ExecutionStatus;

  startedAt: Date;

  finishedAt?: Date;

  context: ExecutionContext;

  steps: ExecutionStep[];

}