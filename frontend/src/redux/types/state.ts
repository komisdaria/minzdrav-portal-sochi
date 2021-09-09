import { DoctorType } from "../../userTypes/doctorsType";
import { CovidType } from "../../userTypes/covidType";
import { NewsType } from "../../userTypes/newsType";
import { UserType } from "../../userTypes/userType";

export interface State {
  user: UserType | null;
  news: NewsType[];
  doctors: DoctorType[];
  covid: CovidType[];
}
