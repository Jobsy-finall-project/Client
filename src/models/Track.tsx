import Step from "./Step";
import CV from "./CV"
import Position from "./Position"
import Company from "./Company"

export default interface Track {
  _id?: string;
  company: any;
  position: Position;
  isActive: boolean;
  isFavorite: boolean;
  steps: Step[];
  comments?: string[];
  cvFiles?: CV[];
  isMatch: boolean;
}
