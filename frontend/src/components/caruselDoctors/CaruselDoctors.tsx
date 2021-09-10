import { Carousel } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useMySelector } from "../../hooks/customHook";
import doctor from "../img/doctor.jpeg";
import doctor2 from "../img/doctor2.jpeg";
import doctor3 from "../img/doctor3.jpeg";
import doctor4 from "../img/doctor4.jpeg";
import doctor5 from "../img/doctor5.jpeg";
import doctor6 from "../img/doctor6.jpeg";
import css from "./caruselDocrot.module.css";
import { getDoctorAC } from "../../redux/ActionCreators/UserAC/getDoctor";

export function CaruselDoctors() {
  const doctorsState = useMySelector((state) => state.doctors);
  const dispatch = useDispatch();
  console.log(doctorsState);

  useEffect(() => {
    console.log("----->");

    dispatch(getDoctorAC());
  }, [dispatch]);

  return (
    <>
      {doctorsState.length
        ? doctorsState.map((doctor) => (
            <div>
              <Carousel autoplay>
                <div>
                  <div>
                    <h3 className={css.contentStyle}>
                      {/* <img src={doctor} alt="doc" className={css.fotoDoc} /> */}
                      <div className={css.wrapper}>
                        <Link to="/doctors/">{doctor.name}</Link>
                      </div>
                    </h3>
                  </div>
                </div>
                {/* <div>
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
                </div> */}
              </Carousel>
            </div>
          ))
        : "null"}
    </>
  );
}
