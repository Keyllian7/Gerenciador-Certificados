import { IEvent } from "@modules/events/domain/models/IEvent";
import { IEventRepository } from "@modules/events/domain/repositories/IEventRepository";
import { getRepository, Repository } from "typeorm";
import { Event } from "@modules/events/infra/typeorm/entities/Event";

export class EventRepository implements IEventRepository {
  private ormRepository: Repository<Event>;

  constructor() {
    this.ormRepository = getRepository(Event);
  }

  public async create(event: IEvent): Promise<IEvent> {
    const newEvent = this.ormRepository.create(event);
    await this.ormRepository.save(newEvent);
    return newEvent;
  }
}
