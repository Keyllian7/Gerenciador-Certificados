export interface IRequestCreateUser {
  name: string;
  email: string;
  password: string;
  role: "user" | "instructor";
}
