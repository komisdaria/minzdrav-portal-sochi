import { AppDispatch } from "../../store/store";
import { UserType } from "../../../userTypes/userType";

export const getUserAC = () => async (dispatch: AppDispatch) => {
  const response = await fetch("http://localhost:8080/checkUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const result = await response.json();
  if (result.user) {
    dispatch({
      type: "GET_USER",
      payload: {
        name: result.user.name,
        email: result.user.email,
        oms: result.user.oms,
        id: result.user._id,
        appoint: result.appoint,
        lastName: result.user.lastName,
        dateBorn: result.user.dateBorn,
      },
    });
  }
};
