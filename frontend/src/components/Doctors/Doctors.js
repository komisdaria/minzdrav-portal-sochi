import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const dbDoc = [
  {
    name: "Калинов Александр Васильевич",
    specialization: "Терапевт",
    work: [9 - 18],
    raiting: 4.6,
    reviews: ["быстро принимает", "настоящий профи медицины"],
    id: "1",
  },
  {
    name: "Денисова Марина Дмитриевна",
    specialization: "Терапевт",
    work: [10 - 16],
    raiting: 4.8,
    reviews: ["отличный врач"],
    id: "2",
  },
  {
    name: "Калинов Александр Васильевич",
    specialization: "Ортопед",
    work: [12 - 14],
    raiting: 4.1,
    reviews: ["принимает долго"],
    id: "3",
  },
  {
    name: "Миронова Снеженна Денисовна",
    specialization: "Хирург",
    work: [16 - 20],
    raiting: 3.2,
    reviews: ["справку в санаторий не дает"],
    id: "4",
  },
];

const Doctors = () => {
  const [doctors, setDoctors] = useState(dbDoc);

  return (
    <>
      <h2>Наши врачи - наша гордость!</h2>
      <ul>
        {doctors.map((el) => (
          <div>
            <li key={el.id}><h3>{el.name}</h3></li>
            <li><h4>{el.specialization}</h4></li>
           <li>График работы: {el.work}</li>
           <li>Рейтинг: {el.raiting}</li>
           <li>Отзывы: {el.reviews}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Doctors;
