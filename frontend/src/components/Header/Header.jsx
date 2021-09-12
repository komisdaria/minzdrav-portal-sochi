import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "antd";
import { useMySelector } from "../../hooks/customHook";
import { useDispatch } from "react-redux";
import { LogOutAC } from "../../redux/ActionCreators/UserAC/logOutAC";
import TelefonHeader from "../TelefonHeader/TelefonHeader";
import css from "./Header.module.css";

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
            <NavLink activeClassName={css.selected} exact to="/">
              <Title
                activeClassName={css.selected}
                style={{ color: "white" }}
                level={2}
              >
                Главная
              </Title>
            </NavLink>
          </li>
          <NavLink activeClassName={css.selected} exact to="/appointments">
            <Title
              activeClassName={css.selected}
              style={{ color: "white" }}
              level={2}
            >
              Записи к врачам
            </Title>
          </NavLink>

          {isLogin?.name ? (
            <>
              <li>
                <NavLink
                  activeClassName={css.selected}
                  exact
                  to="/"
                  onClick={logOut}
                >
                  <Title
                    style={(isActive) => ({
                      color: isActive ? "red" : "blue",
                    })}
                    level={2}
                  >
                    Выход
                  </Title>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={css.selected} exact to="/account">
                  <Title
                    style={(isActive) => ({
                      color: isActive ? "green" : "blue",
                    })}
                    level={2}
                  >
                    Личный кабинет
                  </Title>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink activeClassName={css.selected} exact to="/login">
                  <Title
                    activeClassName={css.selected}
                    style={{ color: "white" }}
                    level={2}
                  >
                    Логин
                  </Title>
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={css.selected}
                  exact
                  to="/registration"
                >
                  <Title
                    activeClassName={css.selected}
                    style={{ color: "white" }}
                    level={2}
                  >
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
