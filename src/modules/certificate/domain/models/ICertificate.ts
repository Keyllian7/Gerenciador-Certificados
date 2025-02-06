export interface ICertificate {
  student: string;
  course: string;
  hours: number;
  instructor: string;
  identification: string;
  date: Date;
  city: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: null | Date;
}
