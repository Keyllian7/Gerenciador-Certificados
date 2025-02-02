import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../domain/repositories/IUserRepository";
import { IUser } from "../domain/models/IUser";
import AppError from "@shared/errors/AppError";
import { IRequestCreateUser } from "../domain/models/request/IRequestCreateUser";

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ){}
  public async execute({
    name,
    email,
    password
  }: IRequestCreateUser): Promise<IUser>{
    if(!name || !email || !password){
        throw new AppError('incomplete data in create user service')
    }
    const user = this.userRepository.create({
        name,
        email,
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
    })
    return user;
  }
}

export default CreateUserService;