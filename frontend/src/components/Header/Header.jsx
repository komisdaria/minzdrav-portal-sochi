import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from 'antd';



const Header = () => {
  const { Title } = Typography;

  return (
    <div>
      <header>
        <ul>
          <li>
            <Title style={{ color: 'white' }} level={2}>ГОРЗДРАВ СОЧИ</Title>
          </li>
          <li>
            <NavLink exact to='/'>
              <Title style={{ color: 'white' }} level={2}>Главная</Title>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/login'>
              <Title style={{ color: 'white' }} level={2}>Логин</Title>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/registration'>
              <Title style={{ color: 'white' }} level={2}>Регистрация</Title>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/account'>
              <Title style={{ color: 'white' }} level={2}>Личный кабинет</Title>
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header;
