import Card from "../../models/Card";
import Company from "../../models/Company";
import CV from "../../models/CV";
import DecodeJwt from "../../models/DecodeJwt";
import SortAttribute from "../../models/SortAttribute";
import Track from "../../models/Track";
import User from "../../models/User";
import { ActionType } from "../action-types/index";
import { Action } from "../actions/index";

const initialCardState: Card[] = [];

const initialUserState: User[] = [];

const initialLoginUserState: DecodeJwt = {
    _id: "0",
    firstName: "Maya",
    lastName: "Assayag",
    role: "Admin",
    userName: "maya222",
    email: "email@gmail.com",
    cvs: [],
    applications: [],
};

const initialSortAttribute: SortAttribute = { attribute: "", order: "" };

const initialCVsState: CV[] = [];

const initialRecTracks: Track[] = [];

const initialCompanyState: Company[] = [];

const cardReducer = (state: Array<Card> = initialCardState, action: Action) => {
    switch (action.type) {
        case ActionType.CREATE_CARD:
            return [...state, action.payload];
        case ActionType.DELETE_CARD:
            return state.filter((card: any) => card.id === action.payload);
        default:
            return state;
    }
};

const userReducer = (state: Array<User> = initialUserState, action: Action) => {
    switch (action.type) {
        case ActionType.CREATE_USER:
            return [...state, action.payload];
        case ActionType.CLEAR_USERS:
            return [];
        default:
            return state;
    }
};

const cvsReducer = (state: Array<CV> = initialCVsState, action: Action) => {
    switch (action.type) {
        case ActionType.ADD_CV:
            return [...state, action.payload];
        case ActionType.DELETE_CV:
            var array = [...state]; // make a separate copy of the array
            var index = array.indexOf(action.payload);
            array.splice(index, 1);
            return array;
        case ActionType.CLEAR_CVS:
            return [];
        default:
            return state;
    }
};

const loginUserReducer = (
    state: DecodeJwt = initialLoginUserState,
    action: Action
) => {
    switch (action.type) {
        case ActionType.LOGIN_USER:
            return action.payload;
        case ActionType.CLEAR_CURR_USER:
            return {};
        default:
            return state;
    }
};

const sortAttributeReducer = (
    state: SortAttribute = initialSortAttribute,
    action: Action
) => {
    switch (action.type) {
        case ActionType.SORT_ATTRIBUTE:
            return action.payload;
        default:
            return state;
    }
};

const trackReducer = (
    state: Array<Track> = initialRecTracks,
    action: Action
) => {
    switch (action.type) {
        case ActionType.CREATE_TRACK:
            let distinctState = [...state];
            const trackIndex = distinctState.findIndex((track) => {
                return track._id === action.payload._id;
            });
            if (trackIndex === -1) {
                return [...distinctState, action.payload];
            } else {
                distinctState[trackIndex] = action.payload;
                return distinctState;
            }
        case ActionType.DELETE_TRACK:
            return state.filter((track: Track) => track._id !== action.payload);
        case ActionType.CREATE_STEP:
            const updatedTrack = action.payload;
            const oldTrack = state.findIndex(
                (curr) => curr._id === updatedTrack._id
            );
            if (oldTrack !== -1) {
                state[oldTrack].steps = updatedTrack.steps;
                return state;
            } else {
                return [...state, updatedTrack];
            }
        case ActionType.CLEAR_TRACKS:
            return [];
        default:
            return state;
    }
};

const companyReducer = (
    state: Array<Company> = initialCompanyState,
    action: Action
) => {
    switch (action.type) {
        case ActionType.CREATE_COMPANY:
            let distinctState = [...state];
            if (
                !distinctState.find(
                    (company) => company._id === action.payload._id
                )
            ) {
                console.log(action.payload);
                distinctState = [...distinctState, action.payload];
            }
            return distinctState;
        case ActionType.DELETE_POSITION:
            const updateCompany = action.payload;
            const company = state.map((curr) => {
                if (curr._id === updateCompany._id) {
                    return updateCompany;
                } else {
                    return curr;
                }
            });
            return company;
        case ActionType.CREATE_POSITION:
            const updatedCompany = action.payload;
            const oldCompany = state.findIndex(
                (curr) => curr._id === updatedCompany._id
            );

            if (oldCompany !== -1) {
                updatedCompany &&
                    updatedCompany.positions &&
                    updatedCompany.positions.forEach((posToAdd) => {
                        if (
                            !state[oldCompany].positions.find(
                                (oldPos) => oldPos._id === posToAdd._id
                            )
                        ) {
                            state[oldCompany].positions.push(posToAdd);
                        }
                    });
                return state;
            } else {
                return [...state, updatedCompany];
            }
        case ActionType.ADD_STEP_TO_TEMPLATE:
            const companyToUpdate = action.payload;
            const positionToUpdate = companyToUpdate.positions[0];
            const newStep = positionToUpdate.template!!.at(0)!!;

            const companyIndex = state.findIndex(
                (curr) => curr._id === companyToUpdate._id
            );

            if (companyIndex !== -1) {
                const positionIndex = state[companyIndex].positions.findIndex(
                    (curr) => curr._id === positionToUpdate._id
                );

                if (positionIndex !== -1) {
                    const template =
                        state[companyIndex].positions[positionIndex].template;

                    if (template) {
                        state[companyIndex].positions[
                            positionIndex
                        ].template!!.push(newStep);
                    } else {
                        state[companyIndex].positions[positionIndex].template =
                            [newStep];
                    }
                } else {
                    state[companyIndex].positions.push(positionToUpdate);
                }
                console.log(state);

                return state;
            } else {
                return [...state, companyToUpdate];
            }
        case ActionType.CLEAR_COMPANYS:
            return [];
        default:
            return state;
    }
};

export {
    cardReducer,
    userReducer,
    loginUserReducer,
    sortAttributeReducer,
    cvsReducer,
    trackReducer,
    companyReducer,
};
