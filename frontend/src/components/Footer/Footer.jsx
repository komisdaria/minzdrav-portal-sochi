import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./footer.module.css";
import { Typography } from "antd";

const Footer = () => {
  const { Title } = Typography;

  return (
    <div className={styles.footer}>
      <footer>
        <ul>
          <li>
            <NavLink to="/news">
              <Title style={{ color: "white" }} level={4}>
                Новости
              </Title>
            </NavLink>
          </li>
          <li>
            <NavLink to="/doctors">
              <Title style={{ color: "white" }} level={4}>
                Запись к врачу
              </Title>
            </NavLink>
          </li>
          <li>
            <NavLink to="/communication">
              <Title style={{ color: "white" }} level={4}>
                Справочные телефоны
              </Title>
            </NavLink>
          </li>
        © 2021 ГОРЗДРАВ г.Сочи. Все права защищены
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
