import React from "react";
import css from "./map.module.css";

export function Map() {
  return (
    <div>
      <div className={css.wrap}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae607268bc695162b6a239dd21c11e0b6c476d5d3c2471e9a323ba5ccd55c938b&amp;source=constructor"
          width="1145"
          height="720"
          title="map"
        ></iframe>
      </div>
    </div>
  );
}
