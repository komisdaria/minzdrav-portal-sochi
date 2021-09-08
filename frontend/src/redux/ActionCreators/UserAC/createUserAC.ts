import { UserType } from "../../../userTypes/userType";
import { CreateUserAction } from "../../types/userActions";

export const CreateUserAC = (
  id: UserType["id"],
  email: UserType["email"],
  oms: UserType["oms"]
): CreateUserAction => ({
  type: "CREATE_USER",
  payload: {
    id,
    email,
    oms,
  },
});
