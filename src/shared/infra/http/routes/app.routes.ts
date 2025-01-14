import certificateRouter from "@modules/certificate/infra/http/routes/CertificateRoutes";
import { Router, Request, Response } from "express";

const route = Router();

route.get('/', (req: Request, res: Response) => {
    res.json({message: 'Application test route'});
});

route.use('/certificate/', certificateRouter)

export default route;