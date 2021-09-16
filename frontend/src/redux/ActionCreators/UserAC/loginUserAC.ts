import { UserType } from "../../../userTypes/userType";
import { AppDispatch } from "../../store/store";

export const LoginUserAC =
  (email: UserType["email"], password: string) =>
  async (dispatch: AppDispatch) => {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify({
        email,
        password,
      }),
    });
    const result = await response.json();

    if (response.ok) {
      dispatch({
        type: "LOGIN_USER",
        payload: {
          name: result.user.name,
          email,
          oms: result.user.oms,
          id: result.user._id,
          appoint: result.appoint,
          lastName: result.user.lastName,
          dateBorn: result.user.dateBorn,
        },
      });
    } else {
      dispatch({
        type: "SET_LOGIN_ERROR",
        payload: result.message,
      });
    }
  };
