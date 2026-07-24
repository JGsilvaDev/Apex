import {
  ExecutionReport,
  MemoryKeys,
  CreateFolderPayload
} from "apex-types";


import {
  MemoryStore
} from "../MemoryStore";


export function createFolderEvent(

  report: ExecutionReport,

  memory: MemoryStore

){

  const step =
    report.steps.find(

      step =>
        step.action.type === "CREATE_FOLDER"

    );


  if(!step){

    return;

  }


  const payload =
    step.action.payload as CreateFolderPayload;


  memory.set(
    MemoryKeys.LAST_FOLDER,
    {

      name:
        payload.name,

      location:
        payload.location,


    }
  );

}