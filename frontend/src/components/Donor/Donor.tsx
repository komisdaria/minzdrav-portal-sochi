import React, { useState } from "react";
import css from "./Donor.module.css";
import { Modal, Button } from "antd";

export default function Donor() {
  const [blood, setBlood] = useState(false);
  const [plasma, setPlasma] = useState(false);
  const [free, setFree] = useState(false);
  const [social, setSocial] = useState(false);
  const [paid, setPaid] = useState(false);

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

  const showModalFree = () => {
    setFree(true);
  };
  const handleOkFree = () => {
    setFree(false);
  };
  const handleCancelFree = () => {
    setFree(false);
  };

  const showModalSocial = () => {
    setSocial(true);
  };
  const handleOkSocial = () => {
    setSocial(false);
  };
  const handleCancelSocial = () => {
    setSocial(false);
  };

  const showModalPaid = () => {
    setPaid(true);
  };
  const handleOkPaid = () => {
    setPaid(false);
  };
  const handleCancelPaid = () => {
    setPaid(false);
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

      <div className={css.text_treb_main}>
        <h1 className={css.text_treb_h1}>Кто может сдавать кровь?</h1>

        <p className={css.text_treb}>
          Многие здоровые люди могут сдавать кровь. Доноры крови должны
          соответствовать некоторым основным требованиям. Ниже перечислены
          некоторые основные рекомендации в отношении отбора доноров крови:
        </p>
        <div>
          <h3 className={css.text_treb_h3}>Возраст От 18 до 65 лет.</h3>
          <h3 className={css.text_treb_h3}>Вес Не менее 50 кг. </h3>
          <h3 className={css.text_treb_h3}>
            Хорошее здоровье на момент сдачи крови.
          </h3>
          <p className={css.text_treb}>
            {" "}
            Нельзя сдавать кровь при наличии простуды, гриппа, ангины, герпеса,
            расстройства желудка и какой-либо другой инфекции. Нельзя сдавать
            кровь в течение 6 месяцев после нанесения татуировки или пирсинга.
            Если пирсинг был выполнен зарегистрированным специалистом
            здравоохранения и никакого воспаления нет, сдавать кровь можно через
            12 часов. После посещения стоматолога в связи с незначительной
            процедурой сдавать кровь можно через 24 часа; после значительных
            вмешательств необходимо ждать месяц. Нельзя сдавать кровь, если
            показатели гемоглобина ниже минимального уровня, установленного для
            сдачи крови
          </p>
        </div>
      </div>

      <div className={css.donation_main}>
        {" "}
        <img
          src={"/img/donation.jpg"}
          className={css.donation}
          alt="donation"
        />
      </div>

      <div className={css.treb}>
        {" "}
        <img src={"/img/pamatka.jpg"} className={css.pamatka} alt="pamatka" />
      </div>

      <div className={css.help_donor_main}>
        <div>
          <h1 className={css.help_donor_h1}>ДОНОРСКАЯ ПОМОЩЬ БЫВАЕТ:</h1>
        </div>
        <div className={css.help_donor}>
          <div>
            {" "}
            <>
              <Button type="primary" onClick={showModalFree}>
                Безвозмездная
              </Button>
              <Modal
                title="Безвозмездная"
                visible={free}
                onOk={handleOkFree}
                onCancel={handleCancelFree}
              >
                <div>
                  <h3>Безвозмездная сдача крови</h3>
                  <p>Стандартный объем сдачи : Кровь 450 мл; Плазма 600 мл.</p>
                  <p>
                    Донация любого клеточного компонента (эритроцитов,
                    тромбоцитов или гранулоцитов приравнивается к донации
                    цельной крови)
                  </p>
                  <p>Компенсация питания после каждой донации 1 235 руб.</p>
                </div>
              </Modal>
            </>
          </div>
          <div>
            <>
              <Button type="primary" onClick={showModalSocial}>
                С социальной поддержкой
              </Button>
              <Modal
                title="С социальной поддержкой"
                visible={social}
                onOk={handleOkSocial}
                onCancel={handleCancelSocial}
              >
                <div>
                  <h3>С социальной поддержкой</h3>
                  <p>
                    ПЕРВАЯ ДОНАЦИЯ В ТЕЧЕНИЕ ГОДА - 1 235 руб. Компенсация
                    питания после каждой донации
                  </p>
                  <p>
                    ПОВТОРНАЯ ДОНАЦИЯ В ТЕЧЕНИЕ ГОДА : Кровь 4 080 руб, Плазма 3
                    600 руб.
                  </p>
                  <p> + Компенсация питания после каждой донации 1 235 руб.</p>
                  <p>
                    Если донор в течение года выполнял донации безвозмездно и не
                    пользовался данными мерами социальной поддержки (в виде
                    вознаграждения), то:
                  </p>
                  <p>Кровь 4 донации 24 000 руб.</p>
                  <p>Плазма 15 донаций 62 400 руб.</p>
                  <p> + Компенсация питания после каждой донации 1 235 руб.</p>
                </div>
              </Modal>
            </>
          </div>
          <div>
            <>
              <Button type="primary" onClick={showModalPaid}>
                Платная
              </Button>
              <Modal
                title="Платная"
                visible={paid}
                onOk={handleOkPaid}
                onCancel={handleCancelPaid}
              >
                <div>
                  <h3>Платная</h3>
                  <p>Кровь 1 940 руб.</p>
                  <p>Плазма 3 635 руб</p>
                  <p>Без компенсации питания</p>
                  <p>
                    В соответствии с приказом Министерства здравоохранения РФ от
                    17 декабря 2012 г. N 1069н "Об утверждении случаев, в
                    которых возможна сдача крови и (или) ее компонентов за
                    плату, а также размеров такой платы"
                  </p>
                </div>
              </Modal>
            </>
          </div>
        </div>
      </div>
      <div className={css.hero_main_main}>
        {" "}
        <img
          src={"/img/donor_hero.png"}
          className={css.donor_hero}
          alt="donor_hero.png"
        />
      </div>
    </div>
  );
}
