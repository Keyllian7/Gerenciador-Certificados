import { IUserRepository } from "@modules/user/domain/repositories/IUserRepository";
import { User } from "../entities/User";
import { getRepository, Repository } from "typeorm";
import { IUser } from "@modules/user/domain/models/IUser";

export class UserRepository implements IUserRepository {
    private ormRepository: Repository<User>;

    constructor(){
        this.ormRepository = getRepository(User);
    }

    public async create(user: IUser): Promise<IUser>{
        const newUser = this.ormRepository.create(user);
        await this.ormRepository.save(newUser);
        return newUser;
    }

    public async findByEmail(email: string): Promise<IUser | undefined>{
        const user = await this.ormRepository.findOne({
            where: { email:
                email
            }
        })
        return user;
    }
}