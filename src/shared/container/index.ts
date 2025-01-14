import { ICertificateRepository } from "@modules/certificate/domain/repositories/ICertificateRepository";
import { CertificateRepository } from "@modules/certificate/infra/typeorm/repositories/CertificateRepository";
import { container } from "tsyringe";
import 'reflect-metadata'

container.registerSingleton<ICertificateRepository>(
    'CertificateRepository',
    CertificateRepository
)