export type ApexStatus =
  | "IDLE"
  | "PROCESSING"
  | "RESPONDING"
  | "ERROR";


export interface ApexResponse {

  message: string;

  status: ApexStatus;

  action?: string;

}

export type ApexPanel =
  | "CHAT"
  | "PROCESS"
  | "MEMORY"
  | "LOGS";


export interface ApexMessage {

  id:string;

  type:
    | "USER"
    | "APEX"
    | "SYSTEM"
    | "ACTION";

  message:string;

  timestamp?:string;

}