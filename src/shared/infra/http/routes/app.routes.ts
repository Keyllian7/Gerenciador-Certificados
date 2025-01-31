import certificateRouter from "@modules/certificate/infra/http/routes/CertificateRoutes";
import eventRouter from "@modules/events/infra/http/routes/EventRoutes";
import { Router, Request, Response } from "express";

const route = Router();

route.get('/', (req: Request, res: Response) => {
    res.json({message: 'Application test route'});
});

route.use('/certificate/', certificateRouter)
route.use('/event/', eventRouter)

export default route;