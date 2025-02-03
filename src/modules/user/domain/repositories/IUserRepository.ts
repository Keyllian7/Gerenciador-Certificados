import { IUser } from "../models/IUser";

export interface IUserRepository {
    create(user: IUser): Promise<IUser>
    findByEmail(email: string): Promise<IUser | undefined>
}