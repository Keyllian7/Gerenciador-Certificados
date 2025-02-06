import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity("certificate")
export class Certificate {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  student: string;

  @Column({ type: "varchar" })
  course: string;

  @Column({ type: "int" })
  hours: number;

  @Column({ type: "varchar" })
  instructor: string;

  @Column({ type: "uuid" })
  identification: string;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "varchar" })
  city: string;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deletedAt" })
  deletedAt: null | Date;
}
