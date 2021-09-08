import { UserType } from "../../../userTypes/userType";
import { LoginUserAction } from "../../types/userActions";

export const LoginUserAC = (
  email: UserType["email"],
  oms: UserType["oms"],
  id: UserType["id"]
): LoginUserAction => ({
  type: "LOGIN_USER",
  payload: {
    email,
    oms,
    id,
  },
});
