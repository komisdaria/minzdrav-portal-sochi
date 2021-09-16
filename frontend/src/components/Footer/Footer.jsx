import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./footer.module.css";
import { Typography } from "antd";

const Footer = () => {
  const { Title } = Typography;

  return (
    <div className={styles.footer}>
      <div className={styles.wrap}>
        <div>
          <NavLink to="/news">
            <Title style={{ color: "white" }} level={4}>
              Новости
            </Title>
          </NavLink>
        </div>
        <div>
          <NavLink to="/doctors">
            <Title style={{ color: "white" }} level={4}>
              Запись к врачу
            </Title>
          </NavLink>
        </div>
        <div>
          <NavLink to="/communication">
            <Title style={{ color: "white" }} level={4}>
              Справочные телефоны
            </Title>
          </NavLink>
        </div>
      </div>
      <div className={styles.text}>
        © 2021 ГОРЗДРАВ г.Сочи. Все права защищены
      </div>
    </div>
  );
};

export default Footer;
