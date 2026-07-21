export interface ApexAction<T = unknown> {

  type: string;

  payload: T;

}