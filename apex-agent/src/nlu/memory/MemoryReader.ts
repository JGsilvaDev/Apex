import {
  MemoryKeys
} from "apex-types";

import {
  memoryStore
} from "../../memory/memoryContainer";


export function getMemory<T>(

  key:MemoryKeys

):T|undefined{

  return memoryStore.get<T>(
    key
  );

}