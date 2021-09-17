import { AppointmentType } from "../../../userTypes/appointmentType";
import { AppDispatch } from "../../store/store";

export const removeAppoinfromUserAC = (id: AppointmentType['id']) => async (dispatch: AppDispatch) => {
  const response = await fetch("http://localhost:8080/deleteAppoint", {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id }),
  });

  const result = await response.json();
  if (result.message === "Выполнено") {
    dispatch({
      type: "REMOVE_APPOIN",
      payload: id
    });
  }
};
