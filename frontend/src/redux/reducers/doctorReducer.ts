import { State } from "../types/state";
import { Actions } from "../types/userActions";

export const doctorsReducer = (
  state: State["doctors"] = [],
  action: Actions
): State["doctors"] => {
  switch (action.type) {
    case "GET_DOCTORS":
      return [...state, ...action.payload.doctors];
    default:
      return state;
  }
};
