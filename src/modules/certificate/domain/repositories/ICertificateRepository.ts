import { ICertificate } from "../models/ICertificate";

export interface ICertificateRepository {
  create(certificate: ICertificate): Promise<ICertificate>;
}
