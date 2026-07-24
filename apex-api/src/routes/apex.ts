
import {
  Router
} from "express";

import {
  processCommand,
  generateResponse
} from "apex-agent";

import {
  executePlan
} from "apex-core";

const router =
  Router();

router.post(

  "/command",

  async (
    req,
    res
  ) => {

    try {

      const {
        command,
        sessionId
      } = req.body;

      console.log(
        "Comando recebido:",
        command
      );

      const result =
        processCommand(
          command,
          sessionId
        );

      const execution =
        await executePlan(
          result.response.plan
        );

      const finalMessage =
        generateResponse(
          execution
        );

      return res.json({

        sessionId:
          sessionId,

        message:
          finalMessage,

        understanding:
          result.response.understanding,

        plan:
          result.response.plan,

        execution

      });

    }

    catch (error) {

      console.error(
        error
      );

      return res
        .status(500)
        .json({

          message:
            "Erro ao comunicar com Apex Core"

        });

    }

  }

);

export default router;