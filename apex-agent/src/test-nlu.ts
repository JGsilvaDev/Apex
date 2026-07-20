import {
  understand
} from "./nlu";


const commands = [

  "Apex, crie uma pasta chamada Fotos nos documentos",

  "Apex cria uma pasta Projetos",

  "Apex, faça uma pasta chamada Estudos na área de trabalho",

  "Apex, crie um diretório Financeiro",

  "Apex, cria uma área Backup nos documentos"

];



commands.forEach(
  command => {

    console.log(
      "\n================="
    );

    console.log(
      command
    );


    console.log(
      understand(command)
    );

  }
);