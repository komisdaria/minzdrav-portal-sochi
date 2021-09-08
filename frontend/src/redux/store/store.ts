import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { initialState } from "../initial/initState";

export const store = createStore(
  textReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
