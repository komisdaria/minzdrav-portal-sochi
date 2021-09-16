import { DoctorType } from "../../userTypes/doctorsType";
import { CovidType } from "../../userTypes/covidType";
import { NewsType } from "../../userTypes/newsType";
import { UserType } from "../../userTypes/userType";
import { AppointmentType } from "../../userTypes/appointmentType";
import { YandexMapType } from "../../userTypes/yandexMapType";

type ActionTypes =
  | "CREATE_USER"
  | "LOGIN_USER"
  | "LOGOUT_USER"
  | "DOWNLOAD_NEWS"
  | "GET_DOCTORS"
  | "DOWLOAD_COVID_API"
  | "GET_APPOINTMENTS"
  | "UPDATE_USER"
  | "UPDATE_APPOINTMENT"
  | "GET_YANDEXMAP"
  | "GET_USER"
  | "ADD_TO_USER_APPOINTMENT"
  | "SHOW_APPOINT_IN_ACCOUNT"
  | "UPDATE_STATUS_APPOINTMENT"
  | "SET_LOGIN_ERROR"
  | "ADD_TO_USER_APPOINTMENT"
  | "UPDATE_RAITING"
  | "FIND_CURRENT_DOCTOR";

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
}

export interface UpdateUserAction extends Action {
  type: "UPDATE_USER";
  payload: UserType;
}

export interface ShowAppointInAccount extends Action {
  type: "SHOW_APPOINT_IN_ACCOUNT"
  payload: AppointmentType[];
}

export interface updateStatusAppointment extends Action {
  type: "UPDATE_STATUS_APPOINTMENT"
  payload: AppointmentType;
}

export interface DownloadNewsAction extends Action {
  type: "DOWNLOAD_NEWS";
  payload: {
    news: NewsType[];
  };
}

export interface GetDoctorsAction extends Action {
  type: "GET_DOCTORS";
  payload: {
    doctors: DoctorType[];
  };
}

export interface DowloadCovidAction extends Action {
  type: "DOWLOAD_COVID_API";
  payload: {
    covid: CovidType[];
  };
}

export interface GetAppointment extends Action {
  type: "GET_APPOINTMENTS";
  payload: {
    appointments: AppointmentType[];
  };
}
export interface UpdateAppointment extends Action {
  type: "UPDATE_APPOINTMENT";
  payload: {
    appointments: AppointmentType[];
  };
}

export interface GetYandexMap extends Action {
  type: "GET_YANDEXMAP";
  payload: {
    yandexmap: YandexMapType;
  };
}

export interface getUserAppointment extends Action {
  type: "ADD_TO_USER_APPOINTMENT";
  payload: AppointmentType["id"];
}

export interface GetUser extends Action {
  type: "GET_USER";
  payload: UserType;
}

export interface SetErrorMessage extends Action {
  type: "SET_LOGIN_ERROR";
  payload: string | null;
}

export interface UpdateRaiting extends Action {
  type: "UPDATE_RAITING";
  payload: DoctorType;
}

export interface FindCurrentDoctor extends Action {
  type: "FIND_CURRENT_DOCTOR";
  payload: DoctorType;
}


export type Actions =
  | CreateUserAction
  | LoginUserAction
  | LogoutUserAction
  | DownloadNewsAction
  | GetDoctorsAction
  | DowloadCovidAction
  | GetAppointment
  | UpdateAppointment
  | UpdateUserAction
  | GetYandexMap
  | GetUser
  | getUserAppointment
  | ShowAppointInAccount
  | updateStatusAppointment
  | SetErrorMessage
  | getUserAppointment
  | UpdateRaiting
  | FindCurrentDoctor;
