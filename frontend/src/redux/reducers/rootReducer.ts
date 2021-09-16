import { combineReducers } from "redux";
import { doctorsReducer } from "./doctorReducer";
import { covidReducer } from "./covidReducer";
import { newsReducer } from "./newsReducer";
import { userReducer } from "./userReducer";
import { appointmentsReducer } from "./appointments";
import { showAppointReducer } from "./showAppoint";
import { loginErrorReducer } from "./loginErrorReducer";
import { currentDoctorsReducer } from "./currentDoctorReducer";
import { RegErrorReducer } from "./regErrorReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
  doctors: doctorsReducer,
  covid: covidReducer,
  appointments: appointmentsReducer,
  userAppoints: showAppointReducer,
  loginErrorMessage: loginErrorReducer,
  currentDoctor: currentDoctorsReducer,
  RegErrorMessage: RegErrorReducer,
});
