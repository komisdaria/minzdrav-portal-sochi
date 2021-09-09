import React, { useState, useEffect } from "react";
import axios from "axios";
import css from "./CovidInfo.module.css";
import covid19 from "../img/covid19.png";
import Simptomy from "../img/Simptomy.png";
import { InfoCovidModel } from "../InfoCovidModel/InfoCovidModel";

export function CovidInfo() {
  const [info, setInfo] = useState({});
  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
    const response = await axios.get(
      "https://covid.2gis.ru/covid19-global.json"
    );
    if (response.data.items) {
      const value = response.data.items.filter(
        (item) => item.countryCode === "Russia"
      );
      if (value.length === 1) {
        setInfo(value[0]);
      }
    }
  }

  return (
    <div>
      <div className={css.board}>
        <img src={covid19} className={css.covid19} alt="covid" />
        <div className={css.text}>
          <div>
            <h1 className={css.covid}>Коронавирус COVID-19:</h1>
            <h3 className={css.covid}>Информация для граждан</h3>
          </div>
          <div className={css.date}>
            <div>Данные на {new Date().toLocaleDateString()}</div>
            <div>
              {Object.keys(info).length > 0 ? (
                <div>Общее количество зараженных : {info.confirmed} </div>
              ) : (
                <div>Загрузка...</div>
              )}
            </div>

            <div>
              {Object.keys(info).length > 0 ? (
                <div>Общее количество смертей : {info.deaths} </div>
              ) : (
                <div>Загрузка...</div>
              )}
            </div>
            <div>
              {Object.keys(info).length > 0 ? (
                <div>
                  Количество смертей за последние сутки: {info.deathsInc}{" "}
                </div>
              ) : (
                <div>Загрузка...</div>
              )}
            </div>
            <div>
              {Object.keys(info).length > 0 ? (
                <div>
                  Количество зараженных за последние сутки : {info.confirmedInc}{" "}
                </div>
              ) : (
                <div>Загрузка...</div>
              )}
            </div>
          </div>
        </div>
        <div className={css.telSk}>
          <h3>Телефон для вызова скорой помощи: 103 (круглосуточно)</h3>
        </div>
        <div className={css.telSk}>
          <h3>Единая горячая линия: 8-800-2000-112</h3>
        </div>
        <div className={css.info}>
          Общие вопросы по коронавирусной инфекции, в том числе информация о
          предоставлении мер социальной поддержки, доставке продуктов и решении
          других бытовых проблем пожилых и хронически больных, доставка
          бесплатных и льготных лекарств и медицинских изделий на дом, получение
          больничного листа в городе Сочи
        </div>
        <div className={css.telSk}>
          <h3>
            Информационная линия Департамента здравоохранения города Сочи:
            8-988-285-99-95 (круглосуточно)
          </h3>
        </div>
        <div className={css.info}>
          Оказание всех видов медицинской помощи в городских больницах и
          поликлиниках, в том числе онкологическим больным и больным на
          гемодиализе в период повышенной готовности
        </div>
      </div>
      <div className={css.textSimptomy}>
        <h1>Основные симптомы короновируса :</h1>
      </div>
      <div className={css.Simptomy}>
        <img src={Simptomy} className={css.Simptomy} alt="Simptomy" />
      </div>

      <div className={css.Textsign}>
        <h3>При наличии признаков:</h3>
      </div>
      <div className={css.sign}>
        <div>Оставайтесь дома</div>
        <div>Вызовите врача</div>
        <div>Следуйте назначенному лечению</div>
      </div>
      <div className={css.sign}>
        <h3>
          В подавляющем большинстве случаев данные симптомы связаны не с
          коронавирусом, а с обычной ОРВИ.
        </h3>
      </div>
      <div>
        <InfoCovidModel />
      </div>
    </div>
  );
}
