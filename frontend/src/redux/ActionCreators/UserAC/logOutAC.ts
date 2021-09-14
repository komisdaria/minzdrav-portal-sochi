import { AppDispatch } from "../../store/store";

export const LogOutAC = () => async (dispatch: AppDispatch) => {
  const response = await fetch("http://localhost:8080/logout", {
    method: "GET",
    credentials: "include",
  });
  const result = await response.json();
  if (result.message)
    dispatch({
      type: "LOGOUT_USER",
    });
  dispatch({
    type: "SET_LOGIN_ERROR",
    payload: null,
  });
};
