import {
  IntentHandler
} from "./types";


export const createFolderIntent:
IntentHandler = {


  intent:
    "CREATE_FOLDER",


  match(
    text:string
  ){

    return (
      /(criar|crie|cria|fazer|faça|faz|gerar|gere|montar|monte).*(pasta|diretório|diretorio|área|area)/
      .test(text)
    );

  }

};