import React from "react";
import { useMySelector } from "../../hooks/customHook";
import { useParams } from "react-router-dom";
import css from "./docInfo.module.css";
import Spinner from "../Spinner/Spinner";
import { Button } from 'antd';
import { Typography, Rate } from 'antd';
import { RaitingUpdatedAC } from "../../redux/ActionCreators/RaitingUpdateAC";
import { useDispatch } from "react-redux";



export function DocInfo() {
  const { Title } = Typography;

  const dispatch = useDispatch();

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

  const handleRait = (rait: number) => {
    dispatch(RaitingUpdatedAC(doctorId, rait))
  }
  
  return (
    <div>
   
      {doctor ? (
        <div key={doctor.id}>
          <div className={css.wrapper}>
            <div className={css.border}>
              <img src={`/img/${doctor.img}`} alt="doc" className={css.img} />
              <div className={css.info}>
                <div className={css.content}><Title level={4}>{doctor.name}</Title></div>
                <div className={css.content}><div><Title level={5}>Специализация</Title></div> <div className={css.afterheader}>{doctor.specialization}</div> </div>
                <div className={css.content}><div><Title level={5}>Стаж</Title></div> <div className={css.afterheader}>{doctor.experience}</div> </div>  
                <br />  
                <div className={css.content}><div><Title level={5}>Образование</Title></div> <div className={css.afterheader}>{doctor.education}</div> </div>
                <br />
                <div className={css.content}><div><Title level={5}>Функционал работ</Title></div> <div className={css.afterheader}>{doctor.function}</div> </div>
                <br />
                <div><Rate allowHalf 
                // defaultValue={doctor.raiting}
                 /> {doctor.raiting}</div>
                

                <div className='rate'>
         <div  onClick={() => handleRait(1)}><h2>💛</h2></div>
         <div  onClick={() => handleRait(2)}><h2>💛</h2></div>
         <div  onClick={() => handleRait(3)}><h2>💛</h2></div>
         <div  onClick={() => handleRait(4)}><h2>💛</h2></div>
         <div  onClick={() => handleRait(5)}><h2>💛</h2></div>

       </div>
                  <br />
                <div>
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
                   <Button
                  className={css.btn}>{doctor.work[5]}</Button>
                   <Button
                  className={css.btn}>{doctor.work[6]}</Button>
                   <Button
                  className={css.btn}>{doctor.work[7]}</Button>
                  {
                    doctor.work[8] ? (
                      <Button
                      className={css.btn}>{doctor.work[8]}</Button>
                    ) : null
                  }

                  {/* {doctor.work.map((el: string)=>(
                    <button>{el}</button>
                  ))} */}
          </div>
          <Button className={css.btnprimery} type="primary">
            Записаться
          </Button>
        </div>
                </div>
              </div>
            </div>
      ) : (
        <div className={css.spin}>
          <Spinner />
        </div>
      )}
    </div>
  );
}
