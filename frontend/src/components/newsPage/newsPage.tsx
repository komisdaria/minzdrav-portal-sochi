import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMySelector } from '../../hooks/customHook';
import { getNewsAc } from '../../redux/ActionCreators/ApiAC/getNewsAc';
import Spinner from '../Spinner/Spinner';
require('dotenv').config()

export const OurNews = () => {
  const newsState = useMySelector(state => state.news)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewsAc())
  }, [dispatch]);

  return (
    <div>
      {
        newsState.length ? newsState.map((el) => (
          <div>
            <h3>{el.title}</h3>
            {/* <div>{el.description}</div> */}
          </div>
        )) : <Spinner />
      }
    </div>
  )
}
