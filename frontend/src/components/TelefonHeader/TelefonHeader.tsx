import React from "react";
import css from "./TelefonHeader.module.css";

export default function TelefonHeader() {
  return (
    <div>
      <div className={css.TelefonHeader}>
        <a href="tel:+79205678901"> Звоните нам бесплатно! </a>
      </div>
    </div>
  );
}
