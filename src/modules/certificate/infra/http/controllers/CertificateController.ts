import CreateCertificateService from "@modules/certificate/service/CreateCertificate";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class CertificateController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { student, course, hours, instructor, date, city } = req.body;
    const createCertificate = container.resolve(CreateCertificateService);
    const certificate = await createCertificate.execute({ student, course, hours, instructor, date, city });
    return res.json(certificate);
  }
}
