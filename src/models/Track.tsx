import Position from "./forms/Position";
import Step from "./forms/StepModel";

export default interface Track {
  id: String;
  companyName: string;
  position: Position;
  isActive: boolean;
  isFavorite: boolean;
  steps: Step[];
  comments?: string[];
  emails?: string[];
  cvFiles?: string[];
}
