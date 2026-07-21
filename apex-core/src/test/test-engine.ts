import "./../tools/registerTools";

import {
  executePlan
} from "../engine";

const plan = {

  goal:
    "Criar pasta de teste",

  actions: [

    {
      type:
        "CREATE_FOLDER",

      payload: {

        name:
          "TesteEngine",

        location:
          "DOCUMENTS"

      }

    }

  ]

};


async function run(){

  const result =
    await executePlan(
      plan as any
    );


  console.log(
    JSON.stringify(
      result,
      null,
      2
    )
  );

}


run();