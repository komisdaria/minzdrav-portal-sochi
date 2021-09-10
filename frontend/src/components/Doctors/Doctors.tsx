import React, { useEffect } from "react";
import { useMySelector } from "../../hooks/customHook";
import { useDispatch } from "react-redux";
import { getDoctorAC } from "../../redux/ActionCreators/UserAC/getDoctor";
import Spinner from "../Spinner/Spinner";

const Doctors = () => {
  // const [doctors, setDoctors] = useState(dbDoc);
  const doctorsState = useMySelector((state) => state.doctors);
  const dispatch = useDispatch();
  console.log(doctorsState);

  useEffect(() => {
    console.log("----->");

    dispatch(getDoctorAC());
  }, [dispatch]);

  return (
    <div>
      <h1>наши врачи</h1>
      {doctorsState.length ? (
        doctorsState.map((doctor) => (
          <div key={doctor.id}>
            <h2>{doctor.name}</h2>
            <p>{doctor.specialization}</p>
            <p>Свободное время: <button>{doctor.work}</button></p>
          </div>
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Doctors;
