import { AgentResponse } from "./agentResponse"

export interface ProcessCommandResponse {

  sessionId: string;

  response: AgentResponse;

}