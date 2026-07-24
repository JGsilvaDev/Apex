import {
  ApexIntent,
  ApexAction,
  Understanding
} from "apex-types";

type PlannerStrategy =
  (
    understanding: Understanding
  ) => ApexAction[];

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
  ): ApexAction[] {

    const strategy =
      this.strategies.get(
        understanding.intent
      );

    if (!strategy) {

      return [];

    }

    return strategy(
      understanding
    );

  }

}

export const plannerRegistry =
  new PlannerRegistry();