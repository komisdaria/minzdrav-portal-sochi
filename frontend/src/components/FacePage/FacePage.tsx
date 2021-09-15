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
      <div className={css.main_top}>
        <div className={css.main_top_item}>
          <div className={css.news_container}>
            <div className={css.news_container_item}>
              <OurNews />
            </div>
          </div>
          <div className={css.cards_container}>
            <div className={css.cards_item}>
              <Link to="/covid">
                <img 
                  src={"/img/Corona_g.png"}
                  className={css.Corona_g}
                  alt="unnamed"
                />
              </Link>
            </div>
            <div className={css.cards_item}>
              <Link to="/donor">
                <img src={"/img/donor.png"} className={css.donor} alt="donor" />
              </Link>
            </div>
            <div className={css.cards_item}>
              <Link to="/volunteer">
                <img
                  src={"/img/volunteer.jpg"}
                  className={css.volunteer}
                  alt="volunteer"
                />
              </Link>
            </div>
            <div className={css.cards_item}>
              <Link to="/sport">
                <img
                  src={"/img/work-out.jpg"}
                  className={css.work_out}
                  alt="work-out"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={css.main_top_item}>
          <div className={css.item_foto_container}>
            <div className={css.item_foto}>
              ФОТКИ
            </div>
          </div>
          
          {/* /* 123123123  */ }
          {/* <div className={css.item_card_container}>
            <div className={css.cards_item}>
              <Link to="/yoga">
                <img
                  src={"/img/doyoga.jpg"}
                  className={css.doyoga}
                  alt="yoga"
                />
              </Link>
            </div>
          </div> */}
        </div>
      </div>
      <div className={css.main_middle}>
        <div className={css.carusel}>
          <CaruselDoctors />
        </div>
      </div>
      <div className={css.main_bottom}>

      </div>

    </div>
    // <div className={css.main_container}>
    //   <div className={css.main_container_item}>
    //     <div className={css.item}>
    //       <OurNews />
    //     </div>
    //     <div className={css.item}>
    //       <Link to="/covid">
    //         <img
    //           src={"/img/Corona_g.png"}
    //           className={css.Corona_g}
    //           alt="unnamed"
    //         />
    //       </Link>
    //     </div>
    //     <div className={css.item}>
    // <Link to="/donor">
    //   <img src={"/img/donor.png"} className={css.donor} alt="donor" />
    // </Link>
    //     </div>
    //     <div className={css.item}>
    //       <ModalAppointments />
    //     </div>
    //   </div>

    //   <div className={css.main_container_item}>
    //     <div className={css.main_container_item}>
    // <Link to="/volunteer">
    //   <img
    //     src={"/img/volunteer.jpg"}
    //     className={css.volunteer}
    //     alt="volunteer"
    //   />
    // </Link>
    //     </div>
    //     <div className={css.main_container_item}>
    // <Link to="/sport">
    //   <img
    //     src={"/img/work-out.jpg"}
    //     className={css.work_out}
    //     alt="work-out"
    //   />
    // </Link>
    //     </div>
    //     <div className={css.main_container_item}>
    // <Link to="/yoga">
    //   <img
    //   src={"/img/doyoga.jpg"}
    //   className={css.doyoga}
    //   alt="yoga"
    //   />
    // </Link>
    //     </div>
    //     <div className={css.item}>
    //       <TelNumModal />{" "}
    //     </div>
    //   </div>
    //   <div className={css.main_container_map}>
    //     <div>
    //       <Map />
    //     </div>
    //   </div>

    //   <div className={css.carusel}>
    //     <CaruselDoctors />
    //   </div>
    // </div>
  );
}
