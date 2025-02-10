import { User } from "@modules/user/infra/typeorm/entities/User";

export interface IEvent {
  name: string;
  description: string;
  date: Date;
  local: string;
  time: string;
  instructor: User;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: null | Date;
}
