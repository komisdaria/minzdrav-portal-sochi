import { AppointmentType } from "../../../userTypes/appointmentType";
import { AppDispatch } from "../../store/store";

export const addToUserAppointmentAC = (id: AppointmentType['id']) => async (dispatch: AppDispatch) => {
  const response = await fetch("http://localhost:8080/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body : JSON.stringify({id}),
    credentials: "include",
  });
  const result = await response.json();
  const addAppointId = result.updateUser.appoint.pop()
  console.log(typeof addAppointId)
  dispatch({
    type: "ADD_TO_USER_APPOINTMENT",
    payload:  addAppointId,
    
  });
};
