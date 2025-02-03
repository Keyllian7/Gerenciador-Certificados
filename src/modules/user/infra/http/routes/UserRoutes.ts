import { Router } from "express";
import UserController from "../controllers/UserController";
import { celebrate, Segments } from "celebrate";
import Joi from "joi";

const userRouter = Router();
const userController = new UserController();

userRouter.post("/create",
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
        }
    }),
    userController.create
)

export default userRouter;