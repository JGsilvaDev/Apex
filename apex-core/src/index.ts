import {
  ApexAction
} from "apex-types";

import {
  toolRegistry
} from "./registry/toolRegistry";

import "./tools/registerTools";


export async function apexCore(
  action:ApexAction
){

  return toolRegistry.execute(
    action
  );

}