import { IEvent } from "../models/IEvent";

export interface IEventRepository {
  create(event: IEvent): Promise<IEvent>;
}
