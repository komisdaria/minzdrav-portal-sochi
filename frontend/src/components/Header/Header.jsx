import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Header() {
  return (
    <div>
      <header>
        <ul>
          <li><NavLink exact to='/'>Главная</NavLink></li>
          <li><NavLink exact to='/login'>Логин</NavLink> </li>
          <li><NavLink exact to='/registration'>Регистрация</NavLink> </li>
        </ul>
        <div>
        <h1>
           ГорЗдравСочи
         </h1>
        </div>
        
      </header>
    </div>
  )
}
