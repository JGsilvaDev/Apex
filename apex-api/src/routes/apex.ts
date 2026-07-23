
import {
  Router
} from "express";

import {
  think,
  generateResponse,
  SessionManager
} from "apex-agent";

import {
  executePlan
} from "apex-core";

const router =
  Router();

const sessionManager =
  new SessionManager();

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

      const session =
        sessionManager.getOrCreateSession(
          sessionId
        );

      const agentResponse =
        think(
          session,
          command
        );

      const execution =
        await executePlan(
          agentResponse.plan
        );

      const finalMessage =
        generateResponse(
          execution
        );

      return res.json({

        sessionId:
          session.id,

        message:
          finalMessage,

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