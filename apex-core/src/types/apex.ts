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