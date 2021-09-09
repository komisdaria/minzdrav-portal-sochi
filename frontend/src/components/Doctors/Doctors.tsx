import React, { useEffect } from "react";
import { useMySelector } from "../../hooks/customHook";
import { useDispatch } from "react-redux";
import { getDoctorAC } from "../../redux/ActionCreators/UserAC/getDoctor";
import Spinner from "../Spinner/Spinner";

// const dbDoc = [
//   {
//     name: "Калинов Александр Васильевич",
//     specialization: "Терапевт",
//     work: [9 - 18],
//     raiting: 4.6,
//     reviews: ["быстро принимает", "настоящий профи медицины"],
//     id: "1",
//   },
//   {
//     name: "Денисова Марина Дмитриевна",
//     specialization: "Терапевт",
//     work: [10 - 16],
//     raiting: 4.8,
//     reviews: ["отличный врач"],
//     id: "2",
//   },
//   {
//     name: "Калинов Александр Васильевич",
//     specialization: "Ортопед",
//     work: [12 - 14],
//     raiting: 4.1,
//     reviews: ["принимает долго"],
//     id: "3",
//   },
//   {
//     name: "Миронова Снеженна Денисовна",
//     specialization: "Хирург",
//     work: [16 - 20],
//     raiting: 3.2,
//     reviews: ["справку в санаторий не дает"],
//     id: "4",
//   },
// ];

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
            <p>{doctor.work}</p>
          </div>
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Doctors;
