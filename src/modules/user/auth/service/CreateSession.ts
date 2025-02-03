import { IUserRepository } from "@modules/user/domain/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { IRequestCreateSession } from "../domain/models/IRequestCreateSession";
import { IResponseSession } from "../domain/models/IResponseSession";
import { compare } from 'bcryptjs';
import { sign, Secret } from 'jsonwebtoken';
import session from '@config/session';
import AppError from "@shared/errors/AppError";

@injectable()
class CreateSessionService {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository
    ) {}
    public async execute({
        email,
        password
    }: IRequestCreateSession): Promise<IResponseSession>{
        if(!email || !password){
            throw new Error('incomplete data in create session service')
        }
        const user = await this.userRepository.findByEmail(email)
        if(!user){
            throw new Error('there is no account with that email')
        }
        const confirmPasswrord  = await compare(password, user.password)
        if(!confirmPasswrord){
            throw new Error('incorrect password')
        }
        const secret = session.jwt.secret as Secret
        const token = sign({}, secret, {
            subject: user.id,
            expiresIn: session.jwt.expiresIn
        })
        return { user, token }
    }
}

export default CreateSessionService;