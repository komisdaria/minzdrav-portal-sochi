import { State } from "../types/state";
import { Actions } from "../types/Action";

export const newsReducer = (
  state: State['news'] = [],
  action: Actions
): State['news'] => {
  switch (action.type) {
    case "DOWNLOAD_NEWS":
      return [...state, ...action.payload.news]
    default:
      return state;
  }
}
