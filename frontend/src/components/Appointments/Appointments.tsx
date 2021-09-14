import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useMySelector } from "../../hooks/customHook";
import { getAppointmentsAC } from "../../redux/ActionCreators/AppointmentsAC/AppointmentsAC";
import { Card } from "antd";
import styles from "./appointments.module.css";
import { Select } from "antd";
import { AppointmentType } from "../../userTypes/appointmentType";
import { addToUserAppointmentAC } from "../../redux/ActionCreators/AppointmentsAC/addToUserAppointmentAC";
import { idText } from "typescript";

const Appointments = () => {

  const appointmentsState = useMySelector((state) => state.appointments);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [findSpecial, setFindSpecial] = useState<AppointmentType[]>([])

  console.log(appointmentsState);



  const { Option } = Select;

  // функции, относящиеся к select
  function onChange(value: string) {
    console.log(`selected ${value}`);
    setSearch(value);
  }

  const handleKey = (event: { key: string; }) => {
    if (event.key === "Enter") {
      const filteredSpecial = appointmentsState.filter((el) => el.doctorSpecialization === search)
      console.log('filteredSpecial', filteredSpecial);
      setFindSpecial(filteredSpecial);

    }
  };
  useEffect(() => {
    dispatch(getAppointmentsAC());
  }, [dispatch]);

  const reservedAppoint = (id: AppointmentType['id']) => {
    dispatch(addToUserAppointmentAC(id))

  }

  return (
    <div>
      <h1>Для вашего удобства выберите нужного специалиста</h1>
      <form
        onKeyDown={handleKey}
      >
        <Select
          showSearch
          style={{ width: 350 }}
          placeholder="Специальность врача"
          optionFilterProp="children"
          onChange={onChange}
          // onSearch={onSearch}
          filterOption={(input, option: any) => {
            if (typeof option.value === 'string') {
              return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            return false
          }
          }
        >
          <Option value="Терапевт">Терапевт</Option>
          <Option value="Ортопед">Ортопед</Option>
          <Option value="Психотерапевт">Психотерапевт</Option>
          <Option value="Хирург">Хирург</Option>
          <Option value="Офтальмолог">Офтальмолог</Option>
          <Option value="Акушер - гинеколог">Акушер - гинеколог</Option>
        </Select>

      </form>

      <div className={styles.cardwrapper}>
        {findSpecial.length ? (
          findSpecial.map((appoint: { id: string; date: string, time: string, doctorSpecialization: string }) => (
            <div key={appoint.id}>
              <Card
                title={`Запись к врачу: ${appoint.doctorSpecialization}`}
                bordered={true}
                style={{ width: 300 }}
              >
                <p>Дата: {appoint.date}</p>
                <p>Время: {appoint.time}</p>
                <button onClick={() => reservedAppoint(appoint.id)}>Записаться на прием</button>
                {/* <p>Статус приема: {appoint.status ? "Прием завершен" : "прием предстоит"}</p>
                <p className={styles.comments}>{appoint.comments.length >=1 ? `Назначения врача: ${appoint.comments}` : null}</p> */}
                {/* <p>{appoint.patientsOms}</p> */}
              </Card>
            </div>
          ))
        ) : (
          appointmentsState.map((appoint: { id: string; date: string, time: string, doctorSpecialization: string }) => (
            <div key={appoint.id}>
              <Card
                title={`Запись к врачу: ${appoint.doctorSpecialization}`}
                bordered={true}
                style={{ width: 300 }}
              >
                <p>Дата: {appoint.date}</p>
                <p>Время: {appoint.time}</p>
                <button onClick={() => reservedAppoint(appoint.id)}>Записаться на прием</button>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Appointments;
