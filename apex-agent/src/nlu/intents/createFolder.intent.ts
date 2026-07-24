import {
  IntentHandler
} from "./types";


export const createFolderIntent:
IntentHandler = {

  intent:
    "CREATE_FOLDER",

  match(
    text: string
  ) {

    const createVerb =
      /(criar|crie|cria|fazer|faça|faz|gerar|gere|montar|monte)/i;

    const folderReference =
      /(pasta|diretório|diretorio|área|area)/i;

    const contextualReference =
      /(dentro dela|dentro dele|dentro da|dentro do)/i;

    return (

      createVerb.test(text)

      &&

      (
        folderReference.test(text)
        ||
        contextualReference.test(text)
      )

    );

  }

};