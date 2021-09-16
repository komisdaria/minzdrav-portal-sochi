import { State } from '../types/state';
import { Actions } from '../types/Action';
import { AppointmentType } from '../../userTypes/appointmentType';

export const appointmentsReducer = (
  state: State['appointments'] = [],
  action: Actions
): State['appointments'] => {
  switch (action.type) {
    case 'GET_APPOINTMENTS':
      return action.payload.appointments;
    case "UPDATE_STATUS_APPOINTMENT":
      return state.map((appoint) => appoint.id === action.payload.id ? { ...appoint, status: action.payload.status } : appoint)
    default:
      return state;
  }
};
