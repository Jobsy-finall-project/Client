import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions/index";
import Card from "../../models/Card";
import User from "../../models/User";
import CV from "../../models/CV"
import SortAttribute from "../../models/SortAttribute";


export const addCv = (cv: CV) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_CV,
      payload: cv,
    });
  };
};

export const deleteCv = (cv: CV) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_CV,
      payload: cv,
    });
  };
};

export const createCard = (card: Card) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CREATE_CARD,
      payload: card,
    });
  };
};

export const deleteCard = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_CARD,
      payload: id,
    });
  };
};

export const createUser = (user: User) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CREATE_USER,
      payload: user,
    });
  };
};

export const loginUser = (user: User) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CREATE_USER,
      payload: user,
    });
  };
};

export const sortAttribute = (sortAttribute: SortAttribute) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SORT_ATTRIBUTE,
      payload: sortAttribute,
    });
  };
};
