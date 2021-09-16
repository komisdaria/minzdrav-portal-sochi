import { UserType } from "../../../userTypes/userType";
import { AppDispatch } from "../../store/store";

export const CreateUserAC =
  (
    name: UserType["name"],
    email: UserType["email"],
    oms: UserType["oms"],
    password: string,
    repeatPassword: string,
    lastName: UserType["lastName"],
    dateBorn: UserType["dateBorn"]
  ) =>
  async (dispatch: AppDispatch) => {
    const response = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify({
        name,
        email,
        password,
        repeatPassword,
        oms,
        lastName,
        dateBorn,
      }),
    });
    const result = await response.json();
    if (result.ok) {
      dispatch({
        type: "CREATE_USER",
        payload: {
          name: result.user.name,
          email: result.user.email,
          oms: result.user.oms,
          id: result.user._id,
          appoint: [],
          lastName: result.user.lastName,
          dateBorn: result.user.dateBorn,
        },
      });
    } else {
      console.log(result.message);
      dispatch({
        type: "CHECK_REG_ERROR",
        payload: result.message,
      });
    }
  };
