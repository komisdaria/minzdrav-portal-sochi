import { State } from '../types/state';
import { Actions } from '../types/Action';

export const appointmentsReducer = (
  state: State['appointments'] = [],
  action: Actions
): State['appointments'] => {
  switch (action.type) {
    case 'GET_APPOINTMENTS':
      return action.payload.appointments;
    case "UPDATE_STATUS_APPOINTMENT":
      return state.map((appoint) => appoint.id === action.payload.id ? { ...appoint, status: action.payload.status } : appoint)
    case "FILTER_APPOINT":
      console.log('FILTER', action.payload);
      
      return action.payload
    default:
      return state;
  }
};
