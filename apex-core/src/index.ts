import {
  executeAction
} from "./executor/actionRouter";

export * from "./types/action";


export async function apexCore(
  action:any
){

  return executeAction(
    action
  );

}