export interface ExecutionContext {

  executionId: string;

  workspace?: string;

  currentDirectory?: string;

  variables: Record<string, unknown>;

  outputs: Record<string, unknown>;

  logs: string[];

}