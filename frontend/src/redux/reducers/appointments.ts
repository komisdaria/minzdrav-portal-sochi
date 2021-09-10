import { State } from '../types/state';
import { Actions } from '../types/Action';

export const appointmentsReducer = (
  state: State['appointments'] = [],
  action: Actions
): State['appointments'] => {
  switch(action.type) {
    case 'GET_APPOINTMENTS':
      // console.log('from reducer  ----', action.payload.appointments);
      
      return action.payload.appointments;
      default:
        return state;
  }
};