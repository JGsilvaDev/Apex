import {
  ProcessCommandResponse
} from "apex-types";

import {
  sessionManager
} from "../context/contextContainer";

import {
  think
} from "../brain/brain";

export function processCommand(
  command: string,
  sessionId?: string
): ProcessCommandResponse {

  const session =
    sessionManager.getOrCreateSession(
      sessionId
    );

  return {

    sessionId:
        session.id,

    response:
        think(
        session,
        command
        )

    };

}