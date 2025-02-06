import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EventUser } from "./EventUser";

@Entity("events")
export class Event {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type: "varchar"})
    name: string;

    @Column({type: "varchar"})
    description: string;

    @Column({type: "date"})
    date: Date;

    @Column({type: "varchar"})
    local: string;

    @Column({type: "time"})
    time: string;

    @OneToMany(() => EventUser, (eventUser) => eventUser.event)
    users: EventUser[];

    @CreateDateColumn({ name: "createdAt" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updatedAt" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deletedAt" })
    deletedAt: null | Date;

}