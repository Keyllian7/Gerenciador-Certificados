import certificateRouter from "@modules/certificate/infra/http/routes/CertificateRoutes";
import eventRouter from "@modules/events/infra/http/routes/EventRoutes";
import sessionRoutes from "@modules/auth/infra/http/routes/SessionRoutes";
import userRouter from "@modules/user/infra/http/routes/UserRoutes";
import { Router, Request, Response } from "express";

const route = Router();

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "Application test route" });
});

route.use("/certificate/", certificateRouter);
route.use("/event/", eventRouter);
route.use("/auth/", userRouter);
route.use("/session/", sessionRoutes);

export default route;
