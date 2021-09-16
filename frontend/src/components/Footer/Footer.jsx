import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./footer.module.css";
import { Typography } from "antd";

const Footer = () => {
  const { Title } = Typography;

  return (
    <div className={styles.footer}>
      <div className={styles.wrap}></div>
      <div className={styles.text}>
        © 2021 ГОРЗДРАВ г.Сочи. Все права защищены
      </div>
    </div>
  );
};

export default Footer;
