import React from 'react'
import css from './account.module.css';
import {CalendarForUser} from '../Calendar/Calendar'
import { useMySelector } from '../../hooks/customHook';
import Appointments from '../Appointments/Appointments';

export default function Account() {
  
const state = useMySelector(state => state.user)
console.log('STATE v accounte', state);

  return (
    <>
    <div className={css.account_container}>
      <div className={css.account_container_item}>
        <div className={css.left_column}>
          <div className={css.left_item}>
            ФОТО и ин-фо о человеке
            {state ? state.name : 'Пользователь не найден'}
          </div>
        </div>
        <div className={css.container_right_items}>
          <div className={css.right_item}>
                <Appointments />
          </div>
          <div className={css.right_item}>
                Архив приемов и вся инфа о них
          </div>
        </div>
                <CalendarForUser />
      </div>
    </div>
    </>
  )
}
