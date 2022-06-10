import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions/index";
import Card from "../../models/Card";
import User from "../../models/User";
import CV from "../../models/CV";
import SortAttribute from "../../models/SortAttribute";
import Step from "../../models/Step";
import Track from "../../models/Track";
import Company from "../../models/Company";
import Position from "../../models/Position";
import { store } from "../store";
import DecodeJwt from "../../models/DecodeJwt";

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

export const deleteTrack = (id: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DELETE_TRACK,
            payload: id,
        });
    };
};

export const deletePosition = (company: Company) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DELETE_POSITION,
            payload: company,
        });
    };
};

export const createTrack = (track: Track) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CREATE_TRACK,
            payload: track,
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

export const loginUser = (user: DecodeJwt) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGIN_USER,
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

export const createStep = (track: Track) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CREATE_STEP,
            payload: track,
        });
    };
};

export const CreateCompany = (company: Company) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CREATE_COMPANY,
            payload: company,
        });
    };
};

export const AddPosition = (company: Company) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CREATE_POSITION,
            payload: company,
        });
    };
};

export const AddStepToTemplate = (company: Company) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_STEP_TO_TEMPLATE,
            payload: company,
        });
    };
};

export const RemoveTrack = (id: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DELETE_TRACK,
            payload: id,
        });
    };
};

export const clearTracks = () => {
  return (dispatch: Dispatch<Action>) => {
      dispatch({
          type: ActionType.CLEAR_TRACKS,
      });
  };
};

export const clearCompanys = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CLEAR_COMPANYS,
        });
    };
};

export const clearCvs = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CLEAR_CVS,
        });
    };
};

export const clearUsers = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CLEAR_USERS,
        });
    };
};

export const clearCurrUser = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CLEAR_CURR_USER,
        });
    };
};