import React from "react";
import css from "./FacePage.module.css";

export default function FacePage() {
  return (
    <div className={css.main_container}>
      <div className={css.main_container_item}>
        <div className={css.item}>Новости</div>
        <div className={css.item}>Корона</div>
        <div className={css.item}>Запись</div>
      </div>

      <div className={css.main_container_item}>
        <div className={css.item}>Наши услуги</div>
        <div className={css.item}>Карта</div>
        <div className={css.item}>номера телефонов</div>
      </div>

      <div className={css.main_container_item}>
        <div className={css.item}>Наши врачи</div>
        <div className={css.item}>Наши проекты</div>
        <div className={css.item}>Наши партнеры</div>
      </div>
    </div>
  );
}
