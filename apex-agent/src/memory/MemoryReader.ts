import {
  MemoryKeys
} from "apex-types";

import {
  memoryStore
} from "./memoryContainer";

export function getMemory<T>(
  key: MemoryKeys
){

    return memoryStore.get<T>(
        key
    );

}