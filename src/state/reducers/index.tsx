import { combineReducers } from "redux";
import {
  cardReducer,
  userReducer,
  loginUserReducer,
  sortAttributeReducer,
} from "./reducer";

const reducers = combineReducers({
  cards: cardReducer,
  users: userReducer,
  loginUser: loginUserReducer,
  sortAttribute: sortAttributeReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
