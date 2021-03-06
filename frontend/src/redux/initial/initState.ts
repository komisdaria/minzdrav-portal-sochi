import { State } from "../types/state";

export const initialState: State = {
  user: null,
  news: [],
  doctors: [],
  covid: [],
  appointments: [],
  userAppoints: [],
  yandexmap: [],
  loginErrorMessage: null,
  currentDoctor: null,
  FilterDoctors: [],
  RegErrorMessage: null,
};
