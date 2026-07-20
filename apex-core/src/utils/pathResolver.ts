import {
  userMemory
} from "../memory/user.memory";

export function resolvePath(
  location:string,
  name:string
){

  switch(location){

    case "DOCUMENTS":
      return `${userMemory.documents}\\${name}`;

    case "DESKTOP":
      return `${userMemory.desktop}\\${name}`;

    default:
      return `${userMemory.home}\\${name}`;

  }

}