import CV from "./CV"
import Track from "./Track"
export default interface UserModel {
  id?: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "Anonymous" | "User" | "Admin" | "HR";
  companyName?: string
  applications?: Track[]
  cvs?: CV[]
}
