import React, { useState } from "react";
import { Modal, Button, Select } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMySelector } from "../../hooks/customHook";
import { getAppointmentsAC } from "../../redux/ActionCreators/AppointmentsAC/AppointmentsAC";
import { getDoctorAC } from "../../redux/ActionCreators/UserAC/getDoctor";

const ModalAppointments = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const appointments = useMySelector((state) => state.appointments);
  const doctors = useMySelector((state) => state.doctors);
  const user = useMySelector((state) => state.user);
  const dispatch = useDispatch();

  const { Option } = Select;

  // функции, относящиеся к модальному окну
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // функции, относящиеся к select
  function onChange(value: string) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val: string) {
    console.log("search:", val);
  }

  useEffect(() => {
    dispatch(getAppointmentsAC());
    dispatch(getDoctorAC());
  }, [dispatch]);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Записаться к врачу
      </Button>
      <Modal
        title="Выберите специальность врача для записи на прием"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Отмена"
        okText="Подтвердить"
      >
        <Select
          showSearch
          style={{ width: 350 }}
          placeholder="Специальность врача"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option: any) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="terapevt">Терапевт</Option>
          <Option value="ortoped">Ортопед</Option>
          <Option value="psyshoterapevt">Психотерапевт</Option>
          <Option value="mango">Хирург</Option>
          <Option value="oftalmolog">Офтальмолог</Option>
          <Option value="ginecolog">Акушер - гинеколог</Option>
        </Select>
      </Modal>
    </>
  );
};

export default ModalAppointments;
