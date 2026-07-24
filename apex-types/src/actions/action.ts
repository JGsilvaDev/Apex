import {
  ApexActionType
} from "./actionTypes";

export interface ApexAction<T = unknown> {

  type: ApexActionType;

  payload: T;

}