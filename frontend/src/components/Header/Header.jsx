import React from "react";
import { NavLink } from "react-router-dom";
import { useMySelector } from "../../hooks/customHook";
import { useDispatch } from "react-redux";
import { LogOutAC } from "../../redux/ActionCreators/UserAC/logOutAC";
import TelefonHeader from "../TelefonHeader/TelefonHeader";
import css from "./Header.module.css";

const Header = () => {
  const isLogin = useMySelector((state) => state.user);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(LogOutAC());
  };

  return (
    <div>
      <header className={css.header}>
        <div>
          <NavLink
           
            className={css.fontstyles}
            exact
            to="/"
          >
            ГОРЗДРАВ СОЧИ
          </NavLink>
        </div>
        <div>
          <NavLink
           
            className={css.fontstyles}
            exact
            to="/appointments"
          >
            Записаться
          </NavLink>
        </div>

        {isLogin?.name ? (
          <>
            <div>
              <NavLink
               
                className={css.fontstyles}
                exact
                to="/account"
              >
                Личный кабинет
              </NavLink>
            </div>
            <div>
              <NavLink
               
                className={css.fontstyles}
                exact
                to="/"
                onClick={logOut}
              >
                Выход
              </NavLink>
            </div>
          </>
        ) : (
          <>
            <div>
              <NavLink
                className={css.fontstyles}
               
                exact
                to="/login"
              >
                Логин
              </NavLink>
            </div>
            <div>
              <NavLink
               
                className={css.fontstyles}
                exact
                to="/registration"
              >
                Регистрация
              </NavLink>
            </div>
            <div className={css.telDiv}>
              <TelefonHeader />
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default Header;
