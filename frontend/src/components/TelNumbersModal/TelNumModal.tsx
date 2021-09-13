import React, { useState } from "react";
import { Modal, Button } from "antd";

export const TelNumModal = () => {
  const [Tel, setTel] = useState(false);

  const showModal = () => {
    setTel(true);
  };

  const handleOk = () => {
    setTel(false);
  };

  const handleCancel = () => {
    setTel(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Номера телефонов
      </Button>
      <Modal
        title="Номера телефонов"
        visible={Tel}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          "Горячая линия" Росздравнадзора по соблюдению прав граждан в сфере
          охраны здоровья: 8 (800) 550-99-03
        </p>
        <p>
          Начальник отдела координации медицинской помощи в городe Сочи
          Официальный e-mail: mz@krasnodar.ru Контактные телефоны: 8 (861)
          266-06-06
        </p>
        <p>
          Телефон горячей линии министерства здравоохранения Краснодарского края
          8-800-200-03-66 (круглосуточно).
        </p>
      </Modal>
    </>
  );
};
