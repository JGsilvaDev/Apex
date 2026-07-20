import {
  processCommand
} from "./brain/router";

export function apexAgent(
  command:string
){

  return processCommand(
    command
  );

}