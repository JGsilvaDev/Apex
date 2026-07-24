import {
  MemoryKeys
} from "apex-types";

export class MemoryStore {

  private memory =
    new Map<
      MemoryKeys,
      unknown
    >();

  set<T>(
    key: MemoryKeys,
    value: T
  ){

    this.memory.set(
      key,
      value
    );

  }

  get<T>(
    key: MemoryKeys
  ): T | undefined {

    return this.memory.get(
      key
    ) as T;

  }

  has(
    key: MemoryKeys
  ){

    return this.memory.has(
      key
    );

  }

  clear(){

    this.memory.clear();

  }

}