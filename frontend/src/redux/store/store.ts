import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { initialState } from "../initial/initState";
import { userReducer } from "../reducers/userReducer";


export const store = createStore(
  userReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch;
