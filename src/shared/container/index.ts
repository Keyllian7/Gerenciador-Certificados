import { ICertificateRepository } from "@modules/certificate/domain/repositories/ICertificateRepository";
import { CertificateRepository } from "@modules/certificate/infra/typeorm/repositories/CertificateRepository";
import { container } from "tsyringe";
import "reflect-metadata";
import { IEventRepository } from "@modules/events/domain/repositories/IEventRepository";
import { EventRepository } from "@modules/events/infra/typeorm/repositories/EventRepository";
import { UserRepository } from "@modules/user/infra/typeorm/repositories/UserRepository";
import { IUserRepository } from "@modules/user/domain/repositories/IUserRepository";

container.registerSingleton<ICertificateRepository>(
  "CertificateRepository",
  CertificateRepository
);

container.registerSingleton<IEventRepository>(
  "EventRepository",
  EventRepository
);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
