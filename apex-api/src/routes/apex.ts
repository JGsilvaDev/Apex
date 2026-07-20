import {
  Router
} from "express";

import {
  sendToCore
} from "../services/apexCore.js";

import {
  think
} from "apex-agent";

const router =
  Router();

router.post(
  "/command",

  async(
    req,
    res
  )=>{

    try {
      const {
        command
      } = req.body;

      console.log(
        "Comando recebido:",
        command
      );

      const agentResponse =
        think(
          command
        );

      if(
        agentResponse.action
      ){

        const coreResponse =
        await sendToCore(
          agentResponse.action
        );

        return res.json({
          message:
          agentResponse.message,
          action:
          agentResponse.action,
          core:
          coreResponse
        });

      }

      res.json(
        agentResponse
      );

    }
    catch(error){
      console.error(
        error
      );

      res.status(500)
      .json({
        message:
          "Erro ao comunicar com Apex Core"

      });
    }
  }
);

export default router;