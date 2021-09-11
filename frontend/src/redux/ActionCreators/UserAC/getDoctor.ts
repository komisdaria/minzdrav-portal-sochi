import { AppDispatch } from "../../store/store";

export const getDoctorAC = () => async (dispatch: AppDispatch) => {
  const response = await fetch("http://localhost:8080/doctors", {
    method: "GET",
  });
  const result = await response.json();
  dispatch({
    type: "GET_DOCTORS",
    payload: {
      doctors: result.doctors,
    },
  });
};
