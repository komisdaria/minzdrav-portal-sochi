import { State } from "../types/state";
import { Actions } from "../types/userActions";

export const userReducer = (
  state: State['user'] = null,
  action: Actions
): State['user'] => {
  switch (action.type) {
    case "CREATE_USER":
      return action.payload;
    case "LOGIN_USER":
      return action.payload;
    case "LOGOUT_USER":
      return null;
    default:
      return state;
  }
};
