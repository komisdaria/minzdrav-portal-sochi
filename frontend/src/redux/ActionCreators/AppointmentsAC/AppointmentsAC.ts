import { AppDispatch } from '../../store/store';

export const getAppointmentsAC = () => async (dispatch: AppDispatch) => {
  const response = await fetch('http://localhost:8080/appointments', {
    method: "GET",
  });
  const result = await response.json();
  console.log('result getAppointmets AC', result);
  dispatch({
    type: "GET_APPOINTMENTS",
    payload: {
      appointments: result.allAppointments,
    },
  });
};