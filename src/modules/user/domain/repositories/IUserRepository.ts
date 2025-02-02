import { IUser } from "../models/IUser";

export interface IUserRepository {
    create(IUser: IUser): Promise<IUser>
}