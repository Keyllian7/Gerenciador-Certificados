import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { EventUser } from "./EventUser";
import { User } from "@modules/user/infra/typeorm/entities/User";

@Entity("events")
export class Event {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "varchar" })
  local: string;

  @Column({ type: "time" })
  time: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "instructor" })
  instructor: User;

  @OneToMany(() => EventUser, (eventUser) => eventUser.event)
  users: EventUser[];

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deletedAt" })
  deletedAt: null | Date;
}
