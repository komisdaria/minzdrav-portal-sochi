import { Carousel } from "antd";
import React, { useEffect } from "react";
import { useMySelector } from "../../hooks/customHook";
import { useDispatch } from "react-redux";

import css from "./caruselDocrot.module.css";
import { NavLink } from "react-router-dom";

export function CaruselDoctors() {
  const doctorsState = useMySelector((state) => state.doctors);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getDoctorAC());
  // }, [dispatch]);

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
                  <h3 className={css.contentStyle}>
                    <img
                      src={`./img/${doctor.img}`}
                      alt="doc"
                      className={css.fotoDoc}
                    />

                    <div>
                      <div>{doctor.name}</div>
                    </div>
                    <div>{doctor.specialization}</div>
                  </h3>
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
