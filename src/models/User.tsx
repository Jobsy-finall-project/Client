import Company from "./Company";
import CV from "./CV";
import Track from "./Track";
export default interface UserModel {
  _id?: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "Anonymous" | "Candidate" | "Admin" | "HR";
  company?: Company;
  applications?: Track[];
  cvs?: CV[];
  intersectionTags?: string[];
}
