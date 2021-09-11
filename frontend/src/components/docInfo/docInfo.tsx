import React from "react";
import { useMySelector } from "../../hooks/customHook";
import { useParams } from "react-router-dom";

export function DocInfo() {
  interface ParamTypes {
    doctorId: string;
  }
  const { doctorId } = useParams<ParamTypes>();
  const FinddoctorsState = useMySelector((state) => state.doctors);
  const doctor = FinddoctorsState.filter((el) => el.id === doctorId);

  return (
    <div>
      <div>Тут будет врач</div>
      {doctor[0] ? (
        <div key={doctor[0].id}>
          <div>
            <img src={`/img/${doctor[0].img}`} alt="doc" />
          </div>
          <div>{doctor[0].name}</div>
          <div>{doctor[0].specialization}</div>
          <div>{doctor[0].work}</div>
        </div>
      ) : null}
    </div>
  );
}
