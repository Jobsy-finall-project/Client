import Card from "../../models/Card";
import User from "../../models/User";
import { Action } from "../actions/index";
import { ActionType } from "../action-types/index";
import SortAttribute from "../../models/SortAttribute";

const initialCardState: Card[] = [
  { id: 0, title: "Card 1", content: "Card Content 1" },
  { id: 1, title: "Card 2", content: "Card Content 2" },
  { id: 2, title: "Card 2", content: "Card Content 2" },
  { id: 3, title: "Card 2", content: "Card Content 2" },
];

const initialUserState: User[] = [
  {
    id: 0,
    fullName: "Maya Assayag",
    email: "maya@gmail.com",
    password: "123",
    role: "Admin",
  },
  {
    id: 1,
    fullName: "Lior Lapid",
    email: "lior@gmail.com",
    password: "123",
    role: "Client",
  },
];

const initialLoginUserState: User = {
  id: 0,
  fullName: "Maya Assayag",
  email: "maya@gmail.com",
  password: "123",
  role: "Admin",
};

const initialSortAttribute: SortAttribute = { attribute: "", order: "" };

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
    default:
      return state;
  }
};

const loginUserReducer = (
  state: User = initialLoginUserState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.CREATE_USER:
      return action.payload;
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

export { cardReducer, userReducer, loginUserReducer, sortAttributeReducer };
