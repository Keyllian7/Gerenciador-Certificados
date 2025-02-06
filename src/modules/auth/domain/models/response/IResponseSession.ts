import { IUser } from "@modules/user/domain/models/IUser";

export interface IResponseSession {
  token: string;
  user: IUser;
}
