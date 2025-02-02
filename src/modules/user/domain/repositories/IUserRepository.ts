import { IUser } from "../models/IUser";

export interface IUserRepository {
    create(user: IUser): Promise<IUser>
}