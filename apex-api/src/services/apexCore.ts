import {
  apexCore
} from "apex-core";

interface ApexAction {
  type:string;
  payload?:Record<string, any>;
}

export async function sendToCore(
  action:ApexAction
){
  const response =
    await apexCore(
      action
    );

  return response;

}