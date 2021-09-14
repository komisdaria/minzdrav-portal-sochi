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
    console.log(response);

    if (response.ok) {
      dispatch({
        type: "LOGIN_USER",
        payload: {
          name: result.user.name,
          email,
          oms: result.user.oms,
          id: result.user._id,
          appoint: result.appoint,
        },
      });
      // dispatch({
      //   type: "SET_LOGIN_ERROR",
      //   payload: null,
      // });
    } else {
      dispatch({
        type: "SET_LOGIN_ERROR",
        payload: result.message,
      });
    }

    // console.log("result.message----->>>", result);
    // if (result.message) {
    //   // сделать нормальную проверку
    //   alert(result.message);
    //   return;
    // }
  };
