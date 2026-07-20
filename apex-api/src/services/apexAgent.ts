import {
  think
} from "apex-agent";


export async function sendToAgent(
  command:string
){

  const response =
    await think(
      command
    );


  return response;

}