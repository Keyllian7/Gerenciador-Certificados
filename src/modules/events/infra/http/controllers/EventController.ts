import CreateEventService from "@modules/events/service/CreateEvent";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class EventController {
  public async create(req: Request, res: Response): Promise<unknown> {
    try {
      const { name, description, date, local, time } = req.body;
      const createEvent = container.resolve(CreateEventService);
      const event = await createEvent.execute({
        name,
        description,
        date,
        local,
        time
      });
      return res.json(event);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "An unknown error occurred" });
      }
    }
  }
}
