import { NewsType } from "../../userTypes/newsType";
import { UserType } from "../../userTypes/userType";

type ActionTypes = "CREATE_USER" | "LOGIN_USER" | "LOGOUT_USER" | "DOWNLOAD_NEWS";

export interface Action {
  type: ActionTypes;
}

export interface CreateUserAction extends Action {
  type: "CREATE_USER";
  payload: UserType; // будет все включать
}

export interface LoginUserAction extends Action {
  type: "LOGIN_USER";
  payload: UserType;
}

export interface LogoutUserAction extends Action {
  type: "LOGOUT_USER";
  payload: {
    id: UserType["id"];
  };
}

export interface DownloadNewsAction extends Action {
  type: "DOWNLOAD_NEWS";
  payload: {
    news: NewsType;
  };
}

export type Actions = CreateUserAction | LoginUserAction | LogoutUserAction | DownloadNewsAction;
