import { State } from "../types/state";
import { Actions } from "../types/Action";

export const loginErrorReducer = (
  state: State["loginErrorMessage"] = null,
  action: Actions
): State["loginErrorMessage"] => {
  switch (action.type) {
    case "SET_LOGIN_ERROR":
      return action.payload;
    
    default:
      return state;
  }
};
