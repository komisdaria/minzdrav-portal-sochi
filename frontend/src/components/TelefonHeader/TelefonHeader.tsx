import React from "react";
import css from "./TelefonHeader.module.css";

export default function TelefonHeader() {
  return (
    <div className={css.TelefonHeader}>
      <a className={css.TelefonHeader} href="tel:+79066452546">
        {" "}
        8-800-200-6000{" "}
      </a>
    </div>
  );
}
