
import { AppDispatch } from "../../redux/store/store";
import { DoctorType } from "../../userTypes/doctorsType";

export const RaitingUpdatedAC = (id: DoctorType["id"], rait: number) => async(dispach: AppDispatch) => {
  const response = await fetch(`http://localhost:8080/doctors/docInfo/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
              id,
              rait,
            }),
  })
  const result = await response.json();
  // console.log('result AC RAITING', result);
  dispach({
    type: "UPDATE_RAITING",
    payload: result.updateRait,
  })
  
}

