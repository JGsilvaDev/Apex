import {
  ApexAction
} from "apex-types";

import {
  toolRouter
} from "./router/toolRouter";

export async function apexCore(
  action: ApexAction
) {

  return await toolRouter(
    action
  );

}