import { AppointmentType } from "../../../userTypes/appointmentType";
import { AppDispatch } from "../../store/store";



export const FilterDoctorsAC = (specialization: AppointmentType['doctorSpecialization']) => async (dispach: AppDispatch) => {
  const response = await fetch(`http://localhost:8080/appoint/filter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ specialization }),
  })
  const result = await response.json();
  console.log('=...>', result);
  const newResult = result.currentsModel.map((el:any)=> ({...el, id: el._id}))
  console.log(newResult);
  
  dispach({
    type: "FILTER_APPOINT",
    payload: newResult,
  })
}

