import {
  Router
} from "express";

import {
  think
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

      const execution =
        await executePlan(
          agentResponse.plan
        );

      return res.json({

        message:
          agentResponse.message,

        understanding:
          agentResponse.understanding,

        plan:
          agentResponse.plan,

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