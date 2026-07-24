export interface PlanMetadata{

    requiresConfirmation:boolean;

    estimatedDuration:number;

    riskLevel:
        "LOW"
        |"MEDIUM"
        |"HIGH"
        |"CRITICAL";

}