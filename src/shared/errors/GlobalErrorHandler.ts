import { isCelebrateError } from "celebrate";
import { Request, Response } from "express";
import AppError from "./AppError";

export function globalErrorHandler(err: Error, req: Request, res: Response) {
  if (isCelebrateError(err)) {
    const validationsErrors: string[] = [];

    err.details.forEach((detail) => {
      detail.details.forEach((error) => {
        const cleanMessage = error.message.replace(/["\\]/g, "");
        validationsErrors.push(cleanMessage);
      });
    });

    return res.status(400).json({
      status: "error",
      message: "validation error in the data sent",
      details: validationsErrors
    });
  }
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message
    });
  }

  console.log("internal server error: ", err);

  return res.status(500).json({
    status: "error",
    message: "internal server error"
  });
}
