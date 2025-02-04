import CreateCertificateService from "@modules/certificate/service/CreateCertificate";
import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";

export default class CertificateController {
  public async create(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
    const { student, course, hours, instructor, date, city } = req.body;
    const createCertificate = container.resolve(CreateCertificateService);
    const certificate = await createCertificate.execute({ student, course, hours, instructor, date, city });
    res.json(certificate);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
}
  }
}
