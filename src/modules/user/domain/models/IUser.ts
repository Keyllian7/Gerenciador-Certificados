export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: "user" | "instructor";
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null | Date;
}
