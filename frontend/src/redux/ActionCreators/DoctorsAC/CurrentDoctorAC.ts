import { DoctorType } from "../../../userTypes/doctorsType";
import { AppDispatch } from "../../store/store";



export const currentDoctorAC = (id: DoctorType["id"]) => async(dispach: AppDispatch) => {
  const response = await fetch(`http://localhost:8080/doctors/currentDoc`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({id}),
  })
  const result = await response.json();
  // console.log('result AC RAITING', result);
  dispach({
    type: "FIND_CURRENT_DOCTOR",
    payload: result.currentModel,
  })
  
}

