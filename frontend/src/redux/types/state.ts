import { NewsType } from "../../userTypes/newsType";
import { UserType } from "../../userTypes/userType";

export interface State {
  user: UserType | null;
  news: NewsType[];
}


