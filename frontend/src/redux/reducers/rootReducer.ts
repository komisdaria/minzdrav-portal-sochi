import { combineReducers } from "redux";
import { covidReducer } from "./covidReducer";
import { newsReducer } from "./newsReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
  covid: covidReducer,
});
