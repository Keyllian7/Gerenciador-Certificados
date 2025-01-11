import { Router, Request, Response } from "express";

const route = Router();

route.get('/', (req: Request, res: Response) => {
    res.json({message: 'Application test route'});
});

export default route;