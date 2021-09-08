import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { initialState } from "../initial/initState";
import { newsInitialState } from "../initial/newsInitialState";
import { userReducer } from "../reducers/userReducer";


export const store = createStore(
  userReducer,
  {...initialState,
  ...newsInitialState},
  composeWithDevTools(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch;
