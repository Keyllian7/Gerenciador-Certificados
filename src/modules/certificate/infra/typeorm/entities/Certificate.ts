import { User } from "@modules/user/infra/typeorm/entities/User";
import { Event } from "@modules/events/infra/typeorm/entities/Event";
import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity("certificate")
export class Certificate {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "student" })
  student: User;

  @ManyToOne(() => Event)
  @JoinColumn({ name: "event" })
  event: Event;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deletedAt" })
  deletedAt: null | Date;
}
