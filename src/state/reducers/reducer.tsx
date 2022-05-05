import Card from "../../models/Card";
import User from "../../models/User";
import CV from "../../models/CV"
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
    firstName: "Maya",
    lastName: "Assayag",
    userName: "MayaAssayag",
    email: "maya@gmail.com",
    password: "123",
    role: "Admin",
  },
  {
    id: 0,
    firstName: "Emily",
    lastName: "Zborovsky",
    userName: "Emilyz",
    email: "emilyz@gmail.com",
    password: "123",
    role: "Client",
  },
];

const initialLoginUserState: User = {
  id: 0,
  firstName: "Maya",
  lastName: "Assayag",
  userName: "MayaAssayag",
  email: "maya@gmail.com",
  password: "123",
  role: "Admin",
};


const initialSortAttribute: SortAttribute = { attribute: "", order: "" };

var f = new File([""], "filename.txt", {type: "text/plain"})


const initialCVsState: CV[] = [
  {
    title: 'Senior devops engineer',
    file: f
  },
  {
    title: 'Senior fullstack engineer',
    file: f
  }
];


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

const cvsReducer = (state: Array<CV> = initialCVsState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_CV:
      return [...state, action.payload];
    case ActionType.DELETE_CV:
      var array = [...state]; // make a separate copy of the array
      var index = array.indexOf(action.payload)
      array.splice(index, 1);
      return array;
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



export { cardReducer, userReducer, loginUserReducer, sortAttributeReducer, cvsReducer };
