import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import SessionController from "../controllers/SessionController";

const sessionRoutes = Router();
const sessionController = new SessionController();

sessionRoutes.post('/login',
    celebrate({
        [Segments.BODY]: {
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required()
        }
    }),
    sessionController.login
);

export default sessionRoutes;