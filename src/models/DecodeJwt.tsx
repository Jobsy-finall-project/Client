import CV from "./CV"
import Track from "./Track"
import Company from "./Company";

export default interface DecodeJwt {
  _id: String;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "Anonymous" | "User" | "Admin" | "HR";
  company?: Company;
  applications?: Track[]
  cvs?: CV[]
}
