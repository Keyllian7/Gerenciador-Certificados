import CreateEventService from "@modules/events/service/CreateEvent";
import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";

export default class EventController {
    public async create(req: Request, res: Response, next: NextFunction): Promise<any> {
        try{
        const { name, description, date, local, time } = req.body;
        const createEvent = container.resolve(CreateEventService);
        const event = await createEvent.execute({ name, description, date, local, time });
        res.json(event);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
    }
}