import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useMySelector } from "../../hooks/customHook";
import { getAppointmentsAC } from "../../redux/ActionCreators/AppointmentsAC/AppointmentsAC";
import { Card } from "antd";
import styles from "./appointments.module.css";
import { Select } from "antd";

const Appointments = () => {
  const appointmentsState = useMySelector((state) => state.appointments);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [findSpecial, setFindSpecial] = useState([])

  console.log(appointmentsState);
  


  const { Option } = Select;

  // функции, относящиеся к select
  function onChange(value: string) {
    console.log(`selected ${value}`);
    setSearch(value);
  }

  // function onSearch(val: string) {
  //   console.log("search:", val);
  // }

  const handleKey = (event: { key: string; }) => {
    if (event.key === "Enter") {
      const filteredSpecial: any = appointmentsState.filter((el) => el.doctorSpecialization === search)
      console.log('filteredSpecial', filteredSpecial);
      setFindSpecial(filteredSpecial);
      
    }
  };
  useEffect(() => {
    dispatch(getAppointmentsAC());
  }, [dispatch]);

  const reservedAppoint = () => {
    
  }

  return (
    <div>
      <h1>Записи к врачу</h1> 
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
          filterOption={(input, option: any) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
          findSpecial.map((appoint: {id: string; date: string, time: string, doctorSpecialization: string}) => (
            <div key={appoint.id}>
              <Card
                title={`Запись к врачу: ${appoint.doctorSpecialization}`}
                bordered={true}
                style={{ width: 300 }}
              >
                <p>Дата: {appoint.date}</p>
                <p>Время: {appoint.time}</p>
                <button onClick={reservedAppoint}>Записаться на прием</button>
                {/* <p>Статус приема: {appoint.status ? "Прием завершен" : "прием предстоит"}</p>
                <p className={styles.comments}>{appoint.comments.length >=1 ? `Назначения врача: ${appoint.comments}` : null}</p> */}
                {/* <p>{appoint.patientsOms}</p> */}
              </Card>
            </div>
          ))
        ) : (
          appointmentsState.map((appoint: {id: string; date: string, time: string, doctorSpecialization: string}) => (
            <div key={appoint.id}>
              <Card
                title={`Запись к врачу: ${appoint.doctorSpecialization}`}
                bordered={true}
                style={{ width: 300 }}
              >
                <p>Дата: {appoint.date}</p>
                <p>Время: {appoint.time}</p>
                <button onClick={reservedAppoint}>Записаться на прием</button>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Appointments;
