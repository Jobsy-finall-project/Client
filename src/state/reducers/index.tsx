import { combineReducers } from "redux";
import {
  cardReducer,
  userReducer,
  loginUserReducer,
  sortAttributeReducer,
  cvsReducer,
  trackReducer,
  companyReducer,
} from "./reducer";

const reducers = combineReducers({
  cards: cardReducer,
  users: userReducer,
  loginUser: loginUserReducer,
  sortAttribute: sortAttributeReducer,
  cvs: cvsReducer,
  tracks: trackReducer,
  companys: companyReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
