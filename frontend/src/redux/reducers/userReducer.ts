import { UserType } from "../../userTypes/userType";
import { initialState } from "../initial/initState";
import { State } from "../types/state";
import { Actions } from "../types/userActions";

export const userReducer = (
  state: State = initialState,
  action: Actions
): State => {
  switch (action.type) {
    case "CREATE_USER":
      const user: UserType = {
        email: action.payload.email,
        oms: action.payload.oms,
        id: action.payload.id,
      };
      return {
        ...state,
        user: [...state.user, user],
      };
    case "LOGIN_USER":
      const userLogin: UserType = {
        email: action.payload.email,
        oms: action.payload.oms,
        id: action.payload.id,
      };
      return {
        ...state,
        user: [...state.user, userLogin],
      };
    case "LOGOUT_USER":
      const userLogout: { id: string } = {
        id: action.payload.id,
      };
      return {
        ...state,
        user: state.user.filter((user) => user.id !== userLogout.id),
      };

    default:
      return state;
  }
};
