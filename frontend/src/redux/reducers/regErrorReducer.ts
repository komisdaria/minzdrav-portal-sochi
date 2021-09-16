import { State } from "../types/state";
import { Actions } from "../types/Action";

export const RegErrorReducer = (
  state: State["RegErrorMessage"] = null,
  action: Actions
): State["RegErrorMessage"] => {
  switch (action.type) {
    case "CHECK_REG_ERROR":
      return action.payload;

    default:
      return state;
  }
};
