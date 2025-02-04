import { inject, injectable } from "tsyringe";
import { ICertificateRepository } from "../domain/repositories/ICertificateRepository";
import { IRequestCreateCertificate } from "../domain/models/IRequestCreateCertificate";
import { ICertificate } from "../domain/models/ICertificate";
import AppError from "@shared/errors/AppError";
import { v4 as uuidv4 } from 'uuid';

@injectable()
class CreateCertificateService {
    constructor(
        @inject('CertificateRepository')
        private certificateRepository: ICertificateRepository
    ) {}
    public async execute({
        student, course,hours, instructor, date, city
    }: IRequestCreateCertificate): Promise<ICertificate> {
        if(!student || !course || !hours || !instructor ||!date || !city) {
            throw new AppError('missing required fields in create certificate service');
        }

        const certificate = this.certificateRepository.create({
            student,
            course,
            hours,
            instructor,
            identification: uuidv4(),
            date,
            city,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        return certificate;
    }
}

export default CreateCertificateService;