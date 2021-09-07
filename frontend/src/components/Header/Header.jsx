import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <header>
        <ul>
           <li>
           ГорЗдравСочи
           </li>
          <li><NavLink exact to='/'>Главная</NavLink></li>
          <li><NavLink exact to='/login'>Логин</NavLink></li>
          <li><NavLink exact to='/registration'>Регистрация</NavLink></li>
        </ul>
      </header>
    </div>
  )
}

export default Header;
