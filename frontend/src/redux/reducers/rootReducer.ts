import { combineReducers } from "redux";
import { doctorsReducer } from "./doctorReducer";
import { newsReducer } from "./newsReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
  doctors: doctorsReducer,
});
