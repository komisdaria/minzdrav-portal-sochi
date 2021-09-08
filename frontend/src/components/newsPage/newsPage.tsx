import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMyDispatch } from '../../hooks/customHook';
import { getNewsAc } from '../../redux/ActionCreators/UserAC/getNewsAc';
import Spinner from '../Spinner/Spinner';
require('dotenv').config()

export const OurNews = () => {
  const newsState = useSelector(state => state)
  // const APIkey = '5562c7fab17e475e94915c1d788a8f5e';
  // const API_URL = `https://newsapi.org/v2/top-headlines?country=ru&category=health&apiKey=${APIkey}`;
  // const [news, setNews] = useState([{title: '', description: ''}]);
  useEffect(() => {
    // getApi();
    // fetch(API_URL, {
    //   headers: {
    //     //внутри ключ хедерс, для обращения к API
    //     "Authorization": `${APIkey}`, // ключ и значение хедерс
    //   },
    // })
    //   .then((response) => response.json()) // полученный ответ преобразуй в json
    //   .then((data) => {
    //     // полученные данные
    //     data.articles && setNews(data.articles); // передаем данные в array news
    //     // setLoading(false); // заканчиваем процедуру загрузки
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.warn('ошибка получения новостей');
    //     console.log(error);
    //   });
    //eslint-disable-next-line
  }, []);
  const dispatch = useMyDispatch()
  dispatch(getNewsAc())

  // console.log(news);

  return (
    <div>
      {
        news.length ? news.map((el) => (
          <div>
            <h3>{el.title}</h3>
            <div>{el.description}</div>
          </div>
        )) : <Spinner />
      }
    </div>
  )
}
// export default News;
