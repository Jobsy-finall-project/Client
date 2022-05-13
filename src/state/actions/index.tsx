import Card from "../../models/Card";
import User from "../../models/User";
import CV from "../../models/CV";
import SortAttribute from "../../models/SortAttribute";
import { ActionType } from "../action-types/index";
import Step from "../../models/forms/StepModel";

import Track from "../../models/Track";

import Company from "../../models/forms/Company";


interface CreateCardAction {
  type: ActionType.CREATE_CARD;
  payload: Card;
}
interface DeleteCardAction {
  type: ActionType.DELETE_CARD;
  payload: number;
}

interface CreateTrackAction {
  type: ActionType.CREATE_TRACK;
  payload: Track;
}
interface DeleteTrackAction {
  type: ActionType.DELETE_TRACK;
  payload: string;
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

interface CreateCompany {
  type: ActionType.CREATE_COMPANY;
  payload: Company
}

interface CreatePosition {
  type: ActionType.CREATE_POSITION;
  payload: Company
}

export type Action =
  | CreateCardAction
  | DeleteCardAction
  | CreateUserAction
  | SortAttributeAction
  | CreateStepAction
  | AddCV
  | DeleteCV
  | CreateTrackAction
  | DeleteTrackAction;
  | CreateCompany
  | CreatePosition;

