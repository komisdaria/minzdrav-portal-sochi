import { AppDispatch } from "../../store/store";
import axios from "axios";
import { CovidType } from "../../../userTypes/covidType";

export const getCovidAC = () => async (dispatch: AppDispatch) => {
  const response = await axios.get("https://covid.2gis.ru/covid19-global.json");
  if (response.data.items) {
    const value = response.data.items.filter(
      (item: CovidType) => item.countryCode === "Russia" // разобраться с типом item
    );
    if (value.length === 1) {
      console.log(value);
      dispatch({
        type: "DOWLOAD_COVID_API",
        payload: {
          covid: value,
        },
      });
    }
  }
};
