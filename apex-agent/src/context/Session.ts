import {
  ContextManager
} from "./ContextManager";

export class Session {

    readonly id: string;

    readonly context: ContextManager;

    constructor() {

        this.id = crypto.randomUUID();

        this.context =
            new ContextManager();

    }

}