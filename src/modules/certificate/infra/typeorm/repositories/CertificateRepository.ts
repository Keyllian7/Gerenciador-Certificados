import { ICertificateRepository } from "@modules/certificate/domain/repositories/ICertificateRepository";
import { Certificate } from "../entities/Certificate";
import { getRepository, Repository } from "typeorm";
import { ICertificate } from "@modules/certificate/domain/models/ICertificate";

export class CertificateRepository implements ICertificateRepository {
    private ormRepository: Repository<Certificate>;

    constructor() {
        this.ormRepository = getRepository(Certificate);
    }

    public async create(certificate: ICertificate): Promise<ICertificate> {
        const newCertificate = this.ormRepository.create(certificate);
        await this.ormRepository.save(newCertificate);
        return newCertificate;
    }

}