import Card from "../../models/Card";
import User from "../../models/User";
import CV from "../../models/CV"
import SortAttribute from "../../models/SortAttribute";
import { ActionType } from "../action-types/index";
import Step from "../../models/forms/Step";

interface CreateCardAction {
  type: ActionType.CREATE_CARD;
  payload: Card;
}
interface DeleteCardAction {
  type: ActionType.DELETE_CARD;
  payload: number;
}
interface CreateUserAction {
  type: ActionType.CREATE_USER;
  payload: User;
}
interface SortAttributeAction {
  type: ActionType.SORT_ATTRIBUTE;
  payload: SortAttribute;
}

interface CreateStepAction {
  type: ActionType.CREATE_STEP;
  payload: Step;
}
interface AddCV {
  type: ActionType.ADD_CV;
  payload: CV; // change when theres add cv
}

interface DeleteCV {
  type: ActionType.DELETE_CV;
  payload: CV; // change when theres add cv
}

export type Action =
  | CreateCardAction
  | DeleteCardAction
  | CreateUserAction
  | SortAttributeAction
  | CreateStepAction
  | AddCV
  | DeleteCV;
