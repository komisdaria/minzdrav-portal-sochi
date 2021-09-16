import { DoctorType } from "../../userTypes/doctorsType";
import { CovidType } from "../../userTypes/covidType";
import { NewsType } from "../../userTypes/newsType";
import { UserType } from "../../userTypes/userType";
import { AppointmentType } from "../../userTypes/appointmentType";
import { YandexMapType } from "../../userTypes/yandexMapType";

export interface State {
  user: UserType | null;
  news: NewsType[];
  doctors: DoctorType[];
  covid: CovidType[];
  appointments: AppointmentType[];
  yandexmap: YandexMapType[];
  userAppoints: AppointmentType[];
  loginErrorMessage: string | null;
  currentDoctor : DoctorType | null;
}
