import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions/index";
import Card from "../../models/Card";
import User from "../../models/User";
import SortAttribute from "../../models/SortAttribute";
import Step from "../../models/forms/Step";

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


export const createStep = (step: Step) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CREATE_STEP,
      payload: step
    })
  }
}