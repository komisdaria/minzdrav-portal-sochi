import React from "react";
import { Link } from "react-router-dom";
import { OurNews } from "../newsPage/newsPage";
import css from "./FacePage.module.css";
import { CaruselDoctors } from "../caruselDoctors/CaruselDoctors";
import ModalAppointments from "../Appointments/ModalAppointment";
import { TelNumModal } from "../TelNumbersModal/TelNumModal";
import { Map } from "../Map/Map";

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
          <Link to="/donor">
            <img src={"/img/donor.png"} className={css.donor} alt="donor" />
          </Link>
        </div>
        <div className={css.item}>
          <ModalAppointments />
        </div>
      </div>

      <div className={css.main_container_item}>
        <div className={css.item}>
          <TelNumModal />{" "}
        </div>
        <div className={css.main_container_item}>
          <Link to="/volunteer">
            <img
              src={"/img/volunteer.jpg"}
              className={css.volunteer}
              alt="volunteer"
            />
          </Link>
        </div>
        <div className={css.main_container_item}>Добавить что-то</div>
        <div className={css.main_container_item}>Добавить что-то</div>
      </div>
      <div className={css.main_container_map}>
        <div>
          <Map />
        </div>
      </div>

      <div className={css.carusel}>
        <CaruselDoctors />
      </div>
    </div>
  );
}
