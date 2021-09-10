import { Carousel } from "antd";
import React from "react";
import doctor from "../img/doctor.jpeg";
import doctor2 from "../img/doctor2.jpeg";
import doctor3 from "../img/doctor3.jpeg";
import doctor4 from "../img/doctor4.jpeg";
import doctor5 from "../img/doctor5.jpeg";
import doctor6 from "../img/doctor6.jpeg";
import css from "./caruselDocrot.module.css";

export function CaruselDoctors() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <div>
            <h3 className={css.contentStyle}>
              <img src={doctor} alt="doc" className={css.fotoDoc} />

              <div className={css.wrapper}>
                <p>Виктор Семенов хирург</p>
              </div>
            </h3>
          </div>
        </div>
        <div>
          <h3 className={css.contentStyle}>
            <img src={doctor2} alt="doc" className={css.fotoDoc} />
            <div className={css.wrapper}>
              <p>Семен Петров терапевт</p>
            </div>
          </h3>
        </div>
        <div>
          <h3 className={css.contentStyle}>
            <img src={doctor3} alt="doc" className={css.fotoDoc} />
            <div className={css.wrapper}>
              <p>Дмитрий Сидоров психотерапевт</p>
            </div>
          </h3>
        </div>
        <div>
          <h3 className={css.contentStyle}>
            <img src={doctor4} alt="doc" className={css.fotoDoc} />
            <div className={css.wrapper}>
              <p>Юлия Брежнева генеколог</p>
            </div>
          </h3>
        </div>
        <div>
          <h3 className={css.contentStyle}>
            <img src={doctor5} alt="doc" className={css.fotoDoc} />
            <div className={css.wrapper}>
              <p>Елена Головая акушер-гинеколог</p>
            </div>
          </h3>
        </div>
        <div>
          <h3 className={css.contentStyle}>
            <img src={doctor6} alt="doc" className={css.fotoDoc} />
            <div className={css.wrapper}>
              <p>Юрий Архипов главВрач</p>
            </div>
          </h3>
        </div>
      </Carousel>
    </div>
  );
}
