git import { DoctorType } from "../../userTypes/doctorsType";
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

export type Actions =
  | CreateUserAction
  | LoginUserAction
  | LogoutUserAction
  | DownloadNewsAction
  | GetDoctorsAction
  | DowloadCovidAction
  | GetAppointment
  | UpdateAppointment
  | UpdateUserAction;
 
