import CreateUserService from "@modules/user/service/CreateUser";
import { NextFunction, Response, Request } from "express";
import { container } from "tsyringe";

export default class UserController {
    public async create(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            const { name, email, password } = req.body;
            const createUser = container.resolve(CreateUserService);
            const user = await createUser.execute({ name, email, password });
            res.json(user);
        } catch (error) {
            next(error)
        }
    }
}