import { State } from "../types/state";
import { Actions } from "../types/Action";

export const showAppointReducer = (
  state: State["userAppoints"] = [],
  action: Actions
): State["userAppoints"] => {
  switch (action.type) {
    case "SHOW_APPOINT_IN_ACCOUNT":
      return action.payload
    case "REMOVE_APPOIN":
      console.log('STATEAPPOINT', state);
      return state.filter((appoint) => appoint._id !== action.payload)
    default:
      return state;
  }
}

