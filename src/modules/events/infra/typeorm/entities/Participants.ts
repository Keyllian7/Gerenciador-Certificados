import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("participants")
export class Participants {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "uuid" })
    id_event: string

    @Column({ type: "uuid"})
    id_user: string

    @CreateDateColumn({ name: "createdAt" })
    createdAt: Date;
    
    @UpdateDateColumn({ name: "updatedAt" })
    updatedAt: Date;
    
    @DeleteDateColumn({ name: "deletedAt" })
    deletedAt: null | Date;
}