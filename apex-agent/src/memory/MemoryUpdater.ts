import "./registerEvents";

import {
  ExecutionReport
} from "apex-types";

import {
  memoryRegistry
} from "./registry/memoryRegistry";

import {
  memoryStore
} from "./memoryContainer";

export function updateMemory(
  report: ExecutionReport
){

    memoryRegistry.execute(

        report,

        memoryStore

    );

}