import { UserType } from "../../../userTypes/userType";
import { LogoutUserAction } from "../../types/Action";

export const LogOutAC = (): LogoutUserAction => ({
  type: "LOGOUT_USER",
  // payload: {
  //   id,
  // },
});
