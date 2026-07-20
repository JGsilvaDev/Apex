export type ApexIntent =
  | "GREETING"
  | "CREATE_FOLDER"
  | "PROJECT_ANALYSIS"
  | "UNKNOWN";

export interface IntentResult {

  intent: ApexIntent;

  confidence: number;

  entities: Record<string, unknown>;

}