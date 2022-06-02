import CV from "./CV"
import Track from "./Track"

export default interface DecodeJwt {
  _id: String;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "Anonymous" | "User" | "Admin" | "HR";
  companyName?: string
  applications?: Track[]
  cvs?: CV[]
}
