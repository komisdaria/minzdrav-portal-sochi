import { AppDispatch } from "../../store/store";

export const getAppoinmentAccountAC = () => async (dispatch: AppDispatch) => {
  const response = await fetch("http://localhost:8080/account", {
    method: "POST",
    credentials: "include",
  });
  const result = await response.json();
  dispatch({
    type: "SHOW_APPOINT_IN_ACCOUNT",
    payload: result,
  });
};
