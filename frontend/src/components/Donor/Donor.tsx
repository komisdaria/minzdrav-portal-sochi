import React, { useState } from "react";
import css from "./Donor.module.css";
import { Modal, Button } from "antd";

export default function Donor() {
  const [blood, setBlood] = useState(false);
  const [plasma, setPlasma] = useState(false);

  const showModalBlood = () => {
    setBlood(true);
  };
  const handleOkBlood = () => {
    setBlood(false);
  };
  const handleCancelBlood = () => {
    setBlood(false);
  };

  const showModalPlasma = () => {
    setPlasma(true);
  };
  const handleOkPlasma = () => {
    setPlasma(false);
  };
  const handleCancelPlasma = () => {
    setPlasma(false);
  };

  return (
    <div>
      <div className={css.main_pic}>
        <div className={css.donor_main}>
          <img
            src={"/img/donor_main.jpg"}
            className={css.donor_main}
            alt="donor_main"
          />
          <div className={css.text_main_pic}>
            <h2 className={css.text_main_pic}>
              ГЕРОЕМ СТАТЬ ПРОСТО - СДАЙТЕ КРОВЬ
            </h2>
          </div>{" "}
          <div className={css.text}>
            Донорство крови - добровольная сдача крови и ее компонентов (в том
            числе плазмы) для переливания тяжелобольным или получения
            медицинских препаратов
          </div>
        </div>
      </div>

      <div className={css.view_donor}>
        <h1 className={css.view_donor}>ВЫБЕРИТЕ ВИД ДОНОРСТВА:</h1>
      </div>
      <div className={css.text_donor_blood}>
        <>
          <Button type="primary" onClick={showModalBlood}>
            Доноры крови и ее компонентов
          </Button>
          <Modal
            title="Что следует знать о короновирусе"
            visible={blood}
            onOk={handleOkBlood}
            onCancel={handleCancelBlood}
          >
            <div>
              <h3>Доноры крови и ее компонентов</h3>
              <p>
                Кровь как уникальное лечебное средство незаменима при
                переливании пострадавшим от ожогов и травм, при проведении
                сложных операций и при тяжелых родах. Кровь также жизненно
                необходима больным гемофилией, анемией и онкологическим больным
                при химиотерапии.
              </p>
              <p>
                Искусственной альтернативы компонентам крови на данный момент не
                существует.
              </p>
            </div>
          </Modal>
        </>

        <>
          <Button type="primary" onClick={showModalPlasma}>
            Доноры плазмы
          </Button>
          <Modal
            title="Что следует знать о короновирусе"
            visible={plasma}
            onOk={handleOkPlasma}
            onCancel={handleCancelPlasma}
          >
            <div>
              <h3>Доноры плазмы</h3>
              <p>
                Плазма крови человека — это жидкая часть крови, в которой
                взвешены форменные элементы. Представляет собой однородную
                желтоватую жидкость. Она на 90% состоит из воды, в которой
                содержатся питательные вещества: белки, жиры, углеводы, гормоны,
                витамины, соли, необходимы для построения тканей организма и
                поддержания их жизнедеятельности, а также органические вещества,
                регулирующие обмен веществ.
              </p>
            </div>
          </Modal>
        </>
      </div>

      <div>
        {" "}
        <h1>Кто может сдавать кровь?</h1>
        <p>
          Многие здоровые люди могут сдавать кровь. Доноры крови должны
          соответствовать некоторым основным требованиям. Ниже перечислены
          некоторые основные рекомендации в отношении отбора доноров крови:
        </p>
        <h3>Возраст От 18 до 65 лет.</h3>
        <h3>Вес Не менее 50 кг. </h3>
        <h3>
          Здоровье Хорошее здоровье на момент сдачи крови. Нельзя сдавать кровь
          при наличии простуды, гриппа, ангины, герпеса, расстройства желудка и
          какой-либо другой инфекции. Нельзя сдавать кровь в течение 6 месяцев
          после нанесения татуировки или пирсинга. Если пирсинг был выполнен
          зарегистрированным специалистом здравоохранения и никакого воспаления
          нет, сдавать кровь можно через 12 часов. После посещения стоматолога в
          связи с незначительной процедурой сдавать кровь можно через 24 часа;
          после значительных вмешательств необходимо ждать месяц. Нельзя сдавать
          кровь, если показатели гемоглобина ниже минимального уровня,
          установленного для сдачи крови:
        </h3>
      </div>
      {/* <div className={css.treb}>
        {" "}
        <img src={"/img/treb1.jpg"} className={css.treb} alt="donor_main" />
      </div> */}
    </div>
  );
}
