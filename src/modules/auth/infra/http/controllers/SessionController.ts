import CreateSessionService from '@modules/auth/service/CreateSession';
import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';

export default class SessionController {
    public async login(req: Request, res: Response, next: NextFunction): Promise<any>{
        try {
            const { email, password } = req.body;
            const createSession = container.resolve(CreateSessionService);
            const sessions = await createSession.execute({
                email: email as string,
                password: password as string 
            });
            return res.json(sessions);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
    }
}