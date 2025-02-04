import { inject, injectable } from "tsyringe";
import { IEventRepository } from "../domain/repositories/IEventRepository";
import { IRequestCreateEvent } from "../domain/models/request/IRequestCreateEvent";
import { IEvent } from "../domain/models/IEvent";
import AppError from "@shared/errors/AppError";

@injectable()
class CreateEventService {
    constructor(
        @inject('EventRepository')
        private eventRepository: IEventRepository
    ){}
    public async execute({
        name, description, date, local, time
    }: IRequestCreateEvent): Promise<IEvent>{
        if(!name || !description || !date || !local || !time){
            throw new AppError('missing required fields in create event service');
        }
        const event = this.eventRepository.create({
            name,
            description,
            date,
            local,
            time,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null
        })
        return event;
    }
}

export default CreateEventService;