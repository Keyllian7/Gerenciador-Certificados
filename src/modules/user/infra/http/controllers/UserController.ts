import CreateUserService from "@modules/user/service/CreateUser";
import { Response, Request } from "express";
import { container } from "tsyringe";

export default class UserController {
  public async create(req: Request, res: Response): Promise<unknown> {
    try {
      const { name, email, password } = req.body;
      const createUser = container.resolve(CreateUserService);
      const user = await createUser.execute({ name, email, password });
      return res.json(user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "An unknown error occurred" });
      }
    }
  }
}
