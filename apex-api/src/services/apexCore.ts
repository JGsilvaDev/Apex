import {
  apexCore,
  ApexAction
} from "apex-core";


export async function sendToCore(
  action:ApexAction
){

  const response =
    await apexCore(
      action
    );


  return response;

}