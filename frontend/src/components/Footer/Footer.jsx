import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
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
