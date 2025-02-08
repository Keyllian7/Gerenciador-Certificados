import { Router } from "express";
import CertificateController from "../controllers/CertificateController";
import { celebrate, Segments } from "celebrate";
import Joi from "joi";
import ensureAuthentication from "@shared/infra/http/middlewares/authentication";

const certificateController = new CertificateController();
const certificateRouter = Router();

certificateRouter.post(
  "/create",
  ensureAuthentication,
  celebrate({
    [Segments.BODY]: {
      student: Joi.string().required(),
      course: Joi.string().required(),
      hours: Joi.number().required(),
      instructor: Joi.string().required(),
      date: Joi.date().required(),
      city: Joi.string().required()
    }
  }),
  certificateController.create
);

export default certificateRouter;
