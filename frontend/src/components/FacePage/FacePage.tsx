import React from "react";
import { Link } from "react-router-dom";
import { OurNews } from "../newsPage/newsPage";
import css from "./FacePage.module.css";
import { CaruselDoctors } from "../caruselDoctors/CaruselDoctors";
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
        <div className={css.h1Foto}>
          <h1>Мы используем самое передовое медицинское оборудование</h1>
        </div>

        <div className={css.main_top_item_bot}>
          <div className={css.item_foto_container}>
            <div className={css.item_foto_left}>
              <div className={css.item_foto}>
                <img
                  src={"/img/med4.jpg"}
                  className={css.fotoOneCol}
                  alt="med"
                />
              </div>
              <div className={css.item_foto}>
                <img src={"/img/med7.jpg"} className={css.foto} alt="med" />
              </div>
              <div className={css.item_foto}>
                <img
                  src={"/img/med9.jpg"}
                  className={css.fotoOneColTwo}
                  alt="med"
                />
              </div>
              <div className={css.item_foto}>
                <img src={"/img/med11.jpg"} className={css.foto} alt="med" />
              </div>
            </div>
            <div className={css.item_foto_right}>
              <img src={"/img/med14.jpg"} className={css.bigFoto} alt="med" />
            </div>
          </div>
          {/* /* 123123123  */}
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
        <div>
          <Map />
        </div>
        <div className={css.main_bottom_item}>
          <div>
            <h2>Улица Виноградная, 43/2, Сочи, Краснодарский край</h2>
          </div>
          <div className={css.main_bottom_item}>
            <TelNumModal />
          </div>
        </div>
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
