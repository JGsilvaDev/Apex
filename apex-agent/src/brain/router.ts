import {
  think
} from "./brain";

export function processCommand(
  command:string
){

  return think(command);

}