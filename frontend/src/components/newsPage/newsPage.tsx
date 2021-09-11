import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMySelector } from '../../hooks/customHook';
import { getNewsAc } from '../../redux/ActionCreators/ApiAC/getNewsAc';
import Spinner from '../Spinner/Spinner';
import css from './newspage.module.css';
require('dotenv').config();

export const OurNews = () => {
  const newsState = useMySelector(state => state.news)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewsAc())
  }, [dispatch]);

  return (
    <div className={css.newsblock}>
      {
        newsState.length ? newsState.map((el) => (
          <div className='news_item'>
            <h3>{el.title}</h3>
            {/* .slice(0, 50)}... */}
            {/* <div>{el.description.slice(0, 50)}</div> */}
          </div>
        )) : <Spinner />
      }
    </div>
  )
}
