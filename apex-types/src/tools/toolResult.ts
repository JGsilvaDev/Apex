import {
  ExecutionContext
} from "../execution/executionContext";

export interface ToolResult {

  success: boolean;

  message: string;

  data?: Record<string, unknown>;

  logs?: string[];

  contextUpdates?: Partial<ExecutionContext>;

}