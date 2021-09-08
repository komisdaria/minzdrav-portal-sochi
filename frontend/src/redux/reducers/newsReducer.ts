import { NewsType } from "../../userTypes/newsType";
import { newsInitialState } from "../initial/newsInitialState";
import { NewsState } from "../types/state";
import { Actions } from "../types/userActions";

export const newsReducer = (
  state: NewsState = newsInitialState,
  action: Actions
): NewsState => {
  switch (action.type) {
    case "DOWNLOAD_NEWS":
      const news: NewsType = {
        title: action.payload.news.title,
        description: action.payload.news.description
      };
      return {
        ...state,
        news: [...state.news, news],
      }
      
    default:
    return state;
  }
}
