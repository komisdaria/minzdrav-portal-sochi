import React from "react";
import { useMySelector } from "../../hooks/customHook";
import { useParams } from "react-router-dom";
import css from "./docInfo.module.css";
import Spinner from "../Spinner/Spinner";
import { Button } from 'antd';
import { Typography, Rate } from 'antd';
import { Card } from 'antd';



export function DocInfo() {
  const { Title } = Typography;

  interface ParamTypes {
    doctorId: string;
  }
  const { doctorId } = useParams<ParamTypes>();
  const FinddoctorsState = useMySelector((state) => state.doctors);
  // const [doctor, setDoctor] = useState({});

  // useEffect(() => {
  //   const carDoc = FinddoctorsState.filter((el) => el.id === doctorId);
  //   let test = carDoc[0];
  //   setDoctor(test);
  // }, [FinddoctorsState, doctorId]);

  const carDoc = FinddoctorsState.filter((el) => el.id === doctorId);
  let doctor = carDoc[0];
  // console.log(doctor.work.map((el: { work: string }) => el));

  // let a = doctor.work.map((el: string | []) => el);
  // console.log(a);
  // console.log(typeof doctor.work);

  // const gridStyle = {
  //   width: '25%',
  //   textAlign: 'center',
  // };
  
  
  return (
    <div>
   
      {doctor ? (
        <div key={doctor.id}>
          <div className={css.wrapper}>
            <div className={css.border}>
              <img src={`/img/${doctor.img}`} alt="doc" className={css.img} />
              <div className={css.info}>
                <div><Title level={4}>{doctor.name}</Title></div>
                <div className={css.content}><div><Title level={5}>Специализация</Title></div> <div className={css.afterheader}>{doctor.specialization}</div> </div>
                <div className={css.content}><div><Title level={5}>Стаж</Title></div> <div className={css.afterheader}>в разработке</div> </div>
                <div className={css.content}><div><Title level={5}>Опыт работы</Title></div> <div className={css.afterheader}>в разработке</div> </div>
               
                <div><Rate allowHalf defaultValue={doctor.raiting} /> {doctor.raiting}</div>
                
                <div>
                  <br />
                  Доступное время для записи
                  <br />
                  <Button 
                  className={css.btn}>{doctor.work[0]}</Button>
                  <Button 
                  className={css.btn} >{doctor.work[1]}</Button>
                  <Button
                  className={css.btn}>{doctor.work[2]}</Button>
                  <Button
                  className={css.btn}>{doctor.work[3]}</Button>
                  <Button
                  className={css.btn}>{doctor.work[4]}</Button>
                  {
                    doctor.work[5] ? (
                      <Button
                      className={css.btn}>{doctor.work[5]}</Button>
                    ) : null
                  }

                  {/* {doctor.work.map((el: string)=>(
                    <button>{el}</button>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
          <Button className={css.btnprimery} type="primary">
            Записаться
          </Button>
        </div>
      ) : (
        <div className={css.spin}>
          <Spinner />
        </div>
      )}
    </div>
  );
}
