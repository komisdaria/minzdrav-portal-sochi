import React from "react";
import css from "./map.module.css";

export function Map() {
  return (
    <div>
      <div className={css.wrap}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A2633b641342313356918aafc0bce97a28bf43af18ae835bb765b2fdbd46cd6e6&amp;source=constructor"
          width="664"
          height="436"
          title="map"
        ></iframe>
      </div>
    </div>
  );
}
