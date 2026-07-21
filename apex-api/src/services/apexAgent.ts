import {
  think
} from "apex-agent";


export async function sendToAgent(
  command:string
){

  const response =
    think(
      command
    );


  return response;

}