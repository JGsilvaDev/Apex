import {
    MemoryKeys
} from "apex-types";

import {
    memoryStore
} from "./memoryContainer";


export function setMemory<T>(
    key: MemoryKeys,
    value: T
){

    memoryStore.set(
        key,
        value
    );

}