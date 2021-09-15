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
import { updateStatusAppoinmentAC } from "../../redux/ActionCreators/AppointmentsAC/updateStatusAppointmentAC";

const Appointments = () => {

  const appointmentsState = useMySelector((state) => state.appointments);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [findSpecial, setFindSpecial] = useState<AppointmentType[]>([])

  console.log('STATE=',appointmentsState);

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
    console.log(id);
    dispatch(addToUserAppointmentAC(id))
    dispatch(updateStatusAppoinmentAC(id))
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
          findSpecial.map((appoint: { id: string; date: string, time: string, doctorSpecialization: string, status: boolean }) => (
            <div key={appoint.id} >
              <Card className={`${appoint.status ? styles.appoint_item : ''}`}
                title={`Запись к врачу: ${appoint.doctorSpecialization}`}
                bordered={true}
                style={{ width: 300 }}
                
              >
                <p >Дата: {appoint.date}</p>
                <p>Время: {appoint.time}</p>
                {appoint.status ? <div>Время забронировано</div> :
                <button onClick={() => reservedAppoint(appoint.id)}>Записаться на прием</button>
                }
              </Card>
            </div>
          ))
        ) : (
          appointmentsState.map((appoint: { id: string; date: string, time: string, doctorSpecialization: string, status: boolean }) => (
            <div key={appoint.id} >
              <Card className={`${appoint.status ? styles.appoint_item : ''}`}
                title={`Запись к врачу: ${appoint.doctorSpecialization}`}
                bordered={true}
                style={{ width: 300 }}
              >
                <p>Дата: {appoint.date}</p>
                <p>Время: {appoint.time}</p>
                {appoint.status ? <div>Время забронировано</div> :
                <button onClick={() => reservedAppoint(appoint.id)}>Записаться на прием</button>
                } 
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Appointments;
