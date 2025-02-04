import CreateUserService from "@modules/user/service/CreateUser";
import { NextFunction, Response, Request } from "express";
import { container } from "tsyringe";

export default class UserController {
    public async create(req: Request, res: Response, next: NextFunction): Promise<any>{
        try {
            const { name, email, password } = req.body;
            const createUser = container.resolve(CreateUserService);
            const user = await createUser.execute({ name, email, password });
            res.json(user);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}