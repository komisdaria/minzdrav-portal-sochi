import { AppointmentType } from "../../../userTypes/appointmentType";
import { AppDispatch } from "../../store/store";

export const updateStatusAppoinmentAC = (id : AppointmentType['id']) => async (dispatch: AppDispatch) => {
  console.log('HELLO!');
  
  const response = await fetch("http://localhost:8080/updateStatus", {
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
    type: "UPDATE_STATUS_APPOINTMENT",
    payload: {...result.appointment, id: result.appointment._id}
  });
};
