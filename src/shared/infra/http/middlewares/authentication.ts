import session from "@config/session";
import AppError from "@shared/errors/AppError";
import { Request, Response, NextFunction } from "express";
import { Secret, verify } from "jsonwebtoken";

interface ITokenPayload {
  sub: string;
  exp: number;
  iat: number;
}

export default function ensureAuthentication(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new AppError("Missing token", 401);
  }
  const [, token] = authHeader.split(" ");
  try {
    const decoded = verify(token, session.jwt.secret as Secret);
    const { sub } = decoded as ITokenPayload;

    req.user = {
      id: sub
    };

    return next();
  } catch (error: unknown) {
    throw new AppError("Invalid JWT Token: " + error);
  }
}
