import { ICertificateRepository } from "@modules/certificate/domain/repositories/ICertificateRepository";
import { CertificateRepository } from "@modules/certificate/infra/typeorm/repositories/CertificateRepository";
import { container } from "tsyringe";
import 'reflect-metadata'
import { IEventRepository } from "@modules/events/domain/repositories/IEventRepository";
import { EventRepository } from "@modules/events/infra/typeorm/repositories/EventRepository";

container.registerSingleton<ICertificateRepository>(
    'CertificateRepository',
    CertificateRepository
)

container.registerSingleton<IEventRepository>(
    'EventRepository',
    EventRepository
)