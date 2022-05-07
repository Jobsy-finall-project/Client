import { combineReducers } from "redux";
import {
  cardReducer,
  userReducer,
  loginUserReducer,
  sortAttributeReducer,
  cvsReducer,
  stepReducer,
  trackReducer,
} from "./reducer";

const reducers = combineReducers({
  cards: cardReducer,
  users: userReducer,
  loginUser: loginUserReducer,
  sortAttribute: sortAttributeReducer,
  cvs: cvsReducer,
  steps: stepReducer,
  tracks: trackReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
