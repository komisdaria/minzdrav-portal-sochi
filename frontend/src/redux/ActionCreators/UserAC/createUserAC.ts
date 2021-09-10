import { resolveModuleName } from "typescript";
import { UserType } from "../../../userTypes/userType";
import { AppDispatch } from "../../store/store";
import { CreateUserAction } from "../../types/Action";

export const CreateUserAC = (
  name: UserType['name'],
  email: UserType["email"],
  oms: UserType["oms"],
  password: string,
  repeatPassword: string
) => async (dispatch: AppDispatch) => {

  const response = await fetch('http://localhost:8080/register', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      password,
      repeatPassword,
      oms,
    })
  });
  const result = await response.json()
  
  
  dispatch({
    type: "CREATE_USER",
    payload: {
      name: result.user.name,
      email: result.user.email,
      oms: result.user.oms,
      id: result.user._id
    }
  })

};
