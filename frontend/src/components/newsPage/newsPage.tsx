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
  <> 
      <h2 className={css.news_title}>Новости</h2>
    <div className={css.newsblock}>
      { 
        newsState.length ? newsState.map((el) => (
          <div key={el.title} className='news_item' style={{margin: "0 0 20px 0"}}>
            <a href={`${el.url}`} target='_blank' rel="noreferrer" style={{color:'black' }}>
              <div className='news_links'>
              {el.title}
              </div>
              </a>
            <hr></hr>
          </div>
        )) : <Spinner />
      }
    </div>
  </>
  )
}
