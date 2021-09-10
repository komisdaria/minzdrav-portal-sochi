import { Carousel } from "antd";
import React, { useEffect } from "react";
import { useMySelector } from "../../hooks/customHook";
import { useDispatch } from "react-redux";
import { getDoctorAC } from "../../redux/ActionCreators/UserAC/getDoctor";
import css from "./caruselDocrot.module.css";

export function CaruselDoctors() {
  const doctorsState = useMySelector((state) => state.doctors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctorAC());
  }, [dispatch]);

  return (
    <div>
      <Carousel autoplay>
        {doctorsState.length ? (
          doctorsState.map((doctor) => (
            <div>
              <div>
                <h3 className={css.contentStyle}>
                  <img
                    src={`./img/${doctor.img}`}
                    alt="doc"
                    className={css.fotoDoc}
                  />

                  <div className={css.wrapper}>
                    <p>{doctor.name}</p>
                  </div>
                  <div>
                    <p>{doctor.specialization}</p>
                  </div>
                </h3>
              </div>
            </div>
          ))
        ) : (
          <div>врачи в отпуске :(</div>
        )}
      </Carousel>
    </div>
  );
}
