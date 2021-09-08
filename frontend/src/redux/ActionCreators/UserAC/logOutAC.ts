import { UserType } from "../../../userTypes/userType";
import { LogoutUserAction } from "../../types/userActions";

export const LogOutAC = (id: UserType["id"]): LogoutUserAction => ({
  type: "LOGOUT_USER",
  payload: {
    id,
  },
});
