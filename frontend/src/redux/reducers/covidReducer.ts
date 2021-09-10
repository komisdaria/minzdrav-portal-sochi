import { State } from "../types/state";
import { Actions } from "../types/Action";

export const covidReducer = (
  state: State["covid"] = [],
  action: Actions
): State["covid"] => {
  switch (action.type) {
    case "DOWLOAD_COVID_API":
      return [...state, ...action.payload.covid];

    default:
      return state;
  }
};
