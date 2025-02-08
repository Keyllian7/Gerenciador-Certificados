import CreateSessionService from "@modules/auth/service/CreateSession";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class SessionController {
  public async login(req: Request, res: Response): Promise<unknown> {
    try {
      const { email, password } = req.body;
      const createSession = container.resolve(CreateSessionService);
      const sessions = await createSession.execute({
        email: email as string,
        password: password as string
      });
      return res.json(sessions);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "An unknown error occurred" });
      }
    }
  }
}
