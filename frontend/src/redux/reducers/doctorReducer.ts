import { State } from "../types/state";
import { Actions } from "../types/Action";

export const doctorsReducer = (
  state: State["doctors"] = [],
  action: Actions
): State["doctors"] => {
  switch (action.type) {
    case "GET_DOCTORS":
      return action.payload.doctors;

    case "UPDATE_RAITING":
      
      const newDoctorsRaiting = state.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, raiting:  action.payload.raiting};
        }
        return el;
      });
     return  state;

    default:
      return state;
  }
};
