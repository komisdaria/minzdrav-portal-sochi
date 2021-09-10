import React from "react";
import { Link } from "react-router-dom";
import { OurNews } from "../newsPage/newsPage";
import css from "./FacePage.module.css";
import { CaruselDoctors } from "../caruselDoctors/CaruselDoctors";

export default function FacePage() {
  return (
    <div className={css.main_container}>
      <div className={css.main_container_item}>
        <div className={css.item}>
          <OurNews />
        </div>
        <div className={css.item}>
          <Link to="/covid">
            <img
              src={"/img/Corona_g.png"}
              className={css.Corona_g}
              alt="unnamed"
            />
          </Link>
        </div>
        <div className={css.item}>
        <Link to="/appointments">
        Запись
          </Link>
      </div>
      </div>

      <div className={css.main_container_item}>
        <div className={css.item}>Наши услуги</div>
        <div className={css.item}>Карта</div>
        <div className={css.item}>номера телефонов</div>
      </div>

      <div className={css.carusel}>
        <CaruselDoctors />
      </div>
    </div>
  );
}
