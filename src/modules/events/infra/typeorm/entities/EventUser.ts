import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Event } from "./Event";

@Entity("event_users")
export class EventUser {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "uuid" })
    id_event: string

    @Column({ type: "uuid"})
    id_user: string

    @Column({ type: "enum", enum: ["pending", "confirmed", "absent"] })
    presence: string

    @ManyToOne(() => Event, (event) => event.users)
    event: Event

    @CreateDateColumn({ name: "createdAt" })
    createdAt: Date;
    
    @UpdateDateColumn({ name: "updatedAt" })
    updatedAt: Date;
    
    @DeleteDateColumn({ name: "deletedAt" })
    deletedAt: null | Date;
    
}