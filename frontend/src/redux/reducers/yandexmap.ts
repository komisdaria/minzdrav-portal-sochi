import { State } from "../types/state";
import { Actions } from "../types/Action";

export const yandexMapReducer = (
  state: State["yandexmap"],
  action: Actions
): State["yandexmap"] => {
  switch (action.type) {
    case "GET_YANDEXMAP":
      return { ...state, ...action.payload.yandexmap };

    default:
      return state;
  }
};
