
import { AppDispatch } from "../../redux/store/store";

export const RaitingUpdatedAC = (id: string, rait: number) => async(dispach: AppDispatch) => {
  const response = await fetch("http://localhost:8080/docInfo/:id", {
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
  console.log('result AC RAITING', result);
  dispach({
    type: "UPDATE_RAITING",
    payload: result.raiting,
  })
  
}

