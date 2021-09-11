import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMySelector } from "../../hooks/customHook";
import { getAppointmentsAC } from "../../redux/ActionCreators/AppointmentsAC/AppointmentsAC";
import { Card } from "antd";
import styles from "./appointments.module.css";

const Appointments = () => {
  const appointmentsState = useMySelector((state) => state.appointments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppointmentsAC());
  }, [dispatch]);

  return (
    <div>
      <h1>Записи к врачу</h1>
      <div className={styles.cardwrapper}>
        {appointmentsState.length ? (
          appointmentsState.map((appoint) => (
            <div key={appoint.id}>
              <Card
                title={`Запись к врачу: ${appoint.doctorSpecialization}`}
                bordered={true}
                style={{ width: 300 }}
              >
                <p>Дата: {appoint.date}</p>
                <p>Время: {appoint.time}</p>
                <p>Статус приема: {appoint.status ? "Прием завершен" : "прием предстоит"}</p>
                <p className={styles.comments}>{appoint.comments.length >=1 ? `Назначения врача: ${appoint.comments}` : null}</p>
                {/* <p>{appoint.patientsOms}</p> */}
              </Card>
            </div>
          ))
        ) : (
          <h1>Нет актуальных и прошедших записей</h1>
        )}
      </div>
    </div>
  );
};

export default Appointments;
