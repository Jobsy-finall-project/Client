import Card from "../../models/Card";
import User from "../../models/User";
import CV from "../../models/CV";
import SortAttribute from "../../models/SortAttribute";
import { ActionType } from "../action-types/index";
import Step from "../../models/Step";

import Track from "../../models/Track";

import Company from "../../models/Company";
import { AddStepToTemplate } from "../action-creators";
import DecodeJwt from "../../models/DecodeJwt";

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

interface LoginUserAction {
  type: ActionType.LOGIN_USER;
  payload: DecodeJwt;
}
interface SortAttributeAction {
  type: ActionType.SORT_ATTRIBUTE;
  payload: SortAttribute;
}

interface CreateStepAction {
  type: ActionType.CREATE_STEP;
  payload: Track;
}
interface AddCV {
  type: ActionType.ADD_CV;
  payload: CV; // change when theres add cv
}

interface DeleteCV {
  type: ActionType.DELETE_CV;
  payload: CV; // change when theres add cv
}

interface DeletePosition {
  type: ActionType.DELETE_POSITION;
  payload: Company;
}

interface CreateCompany {
  type: ActionType.CREATE_COMPANY;
  payload: Company;
}

interface CreatePosition {
  type: ActionType.CREATE_POSITION;
  payload: Company;
}

interface AddStepToTemplate {
  type: ActionType.ADD_STEP_TO_TEMPLATE;
  payload: Company;
}

interface clear {
  type: ActionType.CLEAR_TRACKS | ActionType.CLEAR_COMPANYS | ActionType.CLEAR_CVS | ActionType.CLEAR_USERS | ActionType.CLEAR_CURR_USER;

}

export type Action =
    | CreateCardAction
    | DeleteCardAction
    | CreateUserAction
    | LoginUserAction
    | SortAttributeAction
    | CreateStepAction
    | AddCV
    | DeleteCV
    | CreateTrackAction
    | DeleteTrackAction
    | CreateCompany
    | CreatePosition
    | AddStepToTemplate
    | DeletePosition
    | clear;
