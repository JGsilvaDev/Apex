import {
  ApexIntent,
  PlannerResult,
  Understanding
} from "apex-types";

type PlannerStrategy =
  (
    understanding: Understanding
  ) => PlannerResult;

class PlannerRegistry {

  private strategies =
    new Map<
      ApexIntent,
      PlannerStrategy
    >();

  register(
    intent: ApexIntent,
    strategy: PlannerStrategy
  ) {

    this.strategies.set(
      intent,
      strategy
    );

  }

  execute(
    understanding: Understanding
  ): PlannerResult {

    const strategy =
      this.strategies.get(
        understanding.intent
      );

    if (!strategy) {

      return {
        goal: "Nenhum plano encontrado",
        execution: {
          requiresConfirmation: false,
          riskLevel: "LOW",
          estimatedDuration: 0,
          allowParallel: false,
          stopOnError: true
        },
        actions: []
      };

    }

    return strategy(
      understanding
    );

  }

}

export const plannerRegistry =
  new PlannerRegistry();