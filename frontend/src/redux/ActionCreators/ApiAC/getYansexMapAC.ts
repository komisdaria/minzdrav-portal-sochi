import { AppDispatch } from "../../store/store";

export const getYansexMapAC = () => (dispatch: AppDispatch) => {
  const APIkey = "284715ff-529c-4be0-ade7-d13fa96b26b6";
  const API_URL = `https://search-maps.yandex.ru/v1/?lang=ru&text=health&apiKey=${APIkey}`;
  fetch(API_URL, {
    headers: {
      //внутри ключ хедерс, для обращения к API
      Authorization: `${APIkey}`, // ключ и значение хедерс
    },
  })
    .then((response) => response.json()) // полученный ответ преобразуй в json
    .then((data) => {
      dispatch({
        type: "GET_YANDEXMAP",
        payload: {
          yandexmap: data.data,
        },
      });
    });
};
