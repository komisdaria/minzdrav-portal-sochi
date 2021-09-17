import { AppointmentType } from "../../../userTypes/appointmentType";
import { AppDispatch } from "../../store/store";

export const  returnAppointToBaseAC = (id : AppointmentType['id']) => async (dispatch: AppDispatch) => {
  const response = await fetch("http://localhost:8080/returnAppoint", {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body : JSON.stringify({id}),
  });
  const result = await response.json();
  console.log("result updateStatus", result);
  dispatch({
    type: "RETURN_APPOINT",
    payload: {...result.appointment, id: result.appointment._id}
  });
};
