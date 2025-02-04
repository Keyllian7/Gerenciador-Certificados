import { Router } from "express";
import EventController from "../controllers/EventController";
import { celebrate, Joi, Segments } from "celebrate";
import ensureAuthentication from "@shared/infra/http/middlewares/authentication";

const eventController = new EventController();
const eventRouter = Router();

eventRouter.post("/create", 
    ensureAuthentication,
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            description: Joi.string().required(),
            date: Joi.date().required(),
            local: Joi.string().required(),
            time: Joi.string().regex(/^([01]\d|2[0-3]):?([0-5]\d)$/).required()
        }
    }),
    eventController.create
)

export default eventRouter;