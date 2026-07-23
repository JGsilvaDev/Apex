import {
  Session
} from "./Session";

export class SessionManager {

  private sessions =
    new Map<
      string,
      Session
    >();

  createSession(): Session {

    const session =
        new Session();

    this.sessions.set(
        session.id,
        session
    );

    return session;

    }

    getOrCreateSession(
        sessionId?: string
    ): Session {

        if (
            sessionId
        ) {

            const existing =
            this.sessions.get(
                sessionId
            );

            if (existing) {

            return existing;

            }

        }

        const session =
            new Session();

        this.sessions.set(
            session.id,
            session
        );

        return session;

    }

    getSession(
        id:string
    ){

        return this.sessions.get(id);

    }

    removeSession(
        id:string
    ){

        this.sessions.delete(id);

    }

}