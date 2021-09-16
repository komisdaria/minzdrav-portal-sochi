import { Carousel } from "antd";
import React from "react";
import { useMySelector } from "../../hooks/customHook";
import css from "./caruselDocrot.module.css";
import { NavLink } from "react-router-dom";

export function CaruselDoctors() {
  const doctorsState = useMySelector((state) => state.doctors);

  return (
    <div>
      <Carousel autoplay>
        {doctorsState.length ? (
          doctorsState.map((doctor) => (
            <NavLink
              exact
              to={`/docInfo/${doctor.id}`}
              className={css.link}
              activeClassName={css.activeLink}
            >
              <div>
                <div>
                  <div className={css.contentStyle}>
                    <img
                      src={`./img/${doctor.img}`}
                      alt="doc"
                      className={css.fotoDoc}
                    />

                    <div className={css.content}>
                      <div><span className={css.specialization}>{doctor.specialization} </span>
                      <br/><strong> {doctor.name}</strong></div>
                      <br />
                      <div className={css.function}> {doctor.function}
                       </div>
                       <div className={css.aboute}>Подробнее</div>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          ))
        ) : (
          <div>врачи в отпуске :</div>
        )}
      </Carousel>
    </div>
  );
}
