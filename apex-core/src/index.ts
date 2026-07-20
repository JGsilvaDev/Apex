import {
  executeAction
} from "./executor/actionRouter";


export async function apexCore(
  action:any
){

  return executeAction(
    action
  );

}