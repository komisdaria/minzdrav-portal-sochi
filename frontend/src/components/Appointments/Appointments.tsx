import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMySelector } from "../../hooks/customHook"
import { getAppointmentsAC } from "../../redux/ActionCreators/AppointmentsAC/AppointmentsAC";

const Appointments = () => {
  const appointmentsState = useMySelector((state) => state.appointments);
  const dispatch = useDispatch();
  console.log('appointmentsState', appointmentsState);

  useEffect(() => {
    dispatch(getAppointmentsAC());
  }, [dispatch]);

  return (
    <div>
      <h1>Записи к врачу</h1>
      {
        appointmentsState.length ? (
          appointmentsState.map((appoint) => (
            <ul key={appoint.id}>
                <li>{appoint.doctorSpecialization}</li>
                <li>{appoint.date}</li>
                <li>{appoint.time}</li>
                <li>{appoint.status ? 'прием завершен' : 'прием предстоит'}</li>
                <li>{appoint.comments}</li>
                <li>{appoint.patientsOms}</li>
            </ul>
          ))
        ) : <h1>Нет актуальных записей</h1>
      }
    </div>
  )
};

export default Appointments;