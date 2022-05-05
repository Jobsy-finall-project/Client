import { combineReducers } from "redux";
import {
  cardReducer,
  userReducer,
  loginUserReducer,
  sortAttributeReducer,
  cvsReducer
} from "./reducer";

const reducers = combineReducers({
  cards: cardReducer,
  users: userReducer,
  loginUser: loginUserReducer,
  sortAttribute: sortAttributeReducer,
  cvs: cvsReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;
