import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "antd";
import { useMySelector } from "../../hooks/customHook";
import { useDispatch } from "react-redux";
import { LogOutAC } from "../../redux/ActionCreators/UserAC/logOutAC";
import TelefonHeader from "../TelefonHeader/TelefonHeader";

const Header = () => {
  const { Title } = Typography;
  const isLogin = useMySelector((state) => state.user);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(LogOutAC());
  };

  return (
    <div>
      <header>
        <ul>
          <li>
            <Title style={{ color: "white" }} level={2}>
              ГОРЗДРАВ СОЧИ
            </Title>
          </li>
          <li>
            <NavLink exact to="/">
              <Title style={{ color: "white" }} level={2}>
                Главная
              </Title>
            </NavLink>
          </li>
          <NavLink exact to="/appointments">
            <Title style={{ color: "white" }} level={2}>
              Записи к врачам
            </Title>
          </NavLink>

          {isLogin?.name ? (
            <>
              <li>
                <NavLink exact to="/" onClick={logOut}>
                  <Title style={{ color: "white" }} level={2}>
                    Выход
                  </Title>
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/account">
                  <Title style={{ color: "white" }} level={2}>
                    Личный кабинет
                  </Title>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink exact to="/login">
                  <Title style={{ color: "white" }} level={2}>
                    Логин
                  </Title>
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/registration">
                  <Title style={{ color: "white" }} level={2}>
                    Регистрация
                  </Title>
                </NavLink>
              </li>
              <TelefonHeader />
            </>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Header;
