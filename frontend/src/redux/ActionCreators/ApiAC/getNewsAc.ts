import { AppDispatch } from "../../store/store";

export const getNewsAc = () => (dispatch: AppDispatch) => {
  const APIkey = '5562c7fab17e475e94915c1d788a8f5e';
  const API_URL = `https://newsapi.org/v2/top-headlines?country=ru&category=health&apiKey=${APIkey}`;
  fetch(API_URL, {
    headers: {
      //внутри ключ хедерс, для обращения к API
      "Authorization": `${APIkey}`, // ключ и значение хедерс
    },
  })
    .then((response) => response.json()) // полученный ответ преобразуй в json
    .then((data) => {
      dispatch({
        type: 'DOWNLOAD_NEWS',
        payload: {
          news: data.articles
        }
      })
    })
}
