import { State } from "../types/state";
import { Actions } from "../types/Action";

export const currentDoctorsReducer = (
  state: State["currentDoctor"] = null,
  action: Actions
): State["currentDoctor"] => {
  switch (action.type) {
    case "FIND_CURRENT_DOCTOR":
      return action.payload;

    case "UPDATE_RAITING":
      if(state){
        return {...state, sumRaiting: action.payload.sumRaiting }
      } return state

    default:
      return state;
  }
};
