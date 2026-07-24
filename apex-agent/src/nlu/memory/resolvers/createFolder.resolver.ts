import {
  Understanding,
  MemoryKeys
} from "apex-types";

import {
  getMemory
} from "../MemoryReader";


export function createFolderResolver(
  understanding: Understanding
) {

  if (
    understanding.entities.parent
  ) {
    return understanding;
  }


  const command =
    understanding.originalCommand
      .toLowerCase();


  const isRelative =
    /(dentro dela|dentro dele|nela|nele|nessa pasta|nessa|nesse)/i
      .test(command);


  // Se o comando não depende de contexto,
  // respeita a localização informada pelo usuário
  if (!isRelative) {

    return understanding;

  }


  const lastFolder =
    getMemory<{
      name: string;
      location: string;
    }>(
      MemoryKeys.LAST_FOLDER
    );


  console.log(
    "Memory LAST_FOLDER:",
    lastFolder
  );


  if (!lastFolder) {

    return understanding;

  }


  understanding.entities.parent =
    lastFolder;


  understanding.entities.location =
    lastFolder.location;


  return understanding;

}