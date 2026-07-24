export type RiskLevel =

    "LOW"

    | "MEDIUM"

    | "HIGH"

    | "CRITICAL";

export interface ExecutionOptions {

    requiresConfirmation:boolean;

    riskLevel:RiskLevel;

    estimatedDuration:number;

    allowParallel:boolean;

    stopOnError:boolean;

}