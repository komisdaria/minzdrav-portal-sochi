import React, { useEffect, useState } from "react";
import css from "./account.module.css";
import { useMySelector } from "../../hooks/customHook";
import { useDispatch } from "react-redux";
import { getAppoinmentAccountAC } from "../../redux/ActionCreators/UserAC/getAppointAccount";
import { Card } from "antd";
import { Select, Button } from "antd";
import { AppointmentType } from "../../userTypes/appointmentType";
import { returnAppointToBaseAC } from "../../redux/ActionCreators/AppointmentsAC/returnAppointToBaseAC";
import { removeAppoinfromUserAC } from "../../redux/ActionCreators/UserAC/removeAppoinfromUserAC";

export default function Account() {
  const userState = useMySelector((state) => state.user);
  const appointAccount = useMySelector((state) => state.userAppoints);
  const { Option } = Select;
  const [search, setSearch] = useState("");
  const [state, setState] = useState<AppointmentType[]>([]);

  let currentAppoints;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppoinmentAccountAC());
    setState(appointAccount);
  }, []);

  function onChange(value: string) {
    setSearch(value);
  }

  const handleKey = (event: { key: string }) => {
    if (event.key === "Enter") {
      currentAppoints = appointAccount.filter(
        (appoint) => appoint.doctorSpecialization === search
      );
      setState(currentAppoints);
    }
  };

  const onFilter = (event: { preventDefault: () => void }) => {
    currentAppoints = appointAccount.filter(
      (appoint) => appoint.doctorSpecialization === search
    );
    setState(currentAppoints);
  };

  const deleteFilter = () => {
    setState(appointAccount);
  };

  const removeAppoint = (id: AppointmentType["id"]) => {
    console.log("xxxxxxx", id);
    dispatch(returnAppointToBaseAC(id));
    dispatch(removeAppoinfromUserAC(id));
  };

  return (
    <>
      <div className={css.account_container}>
        <div className={css.account_container_item}>
          <div className={css.left_column}>
            <div className={css.left_item}>
              {userState ? (
                <div className={css.char_user}>
                  <img
                    src={"/img/user_photo.png"}
                    alt="UserPhoto"
                    className={css.user_photo}
                  />
                  <hr />
                  <div> Имя: {userState.name}</div>
                  <div> Фамилия: {userState.lastName}</div>
                  <div> Дата Рождения: {userState.dateBorn}</div>
                  <div> Номер ОМС: {userState.oms}</div>
                </div>
              ) : (
                "Юзер не найден"
              )}
            </div>
          </div>
          <div className={css.container_right_items}>
            <div className={css.right_item}>
              {/* ZDES' */}
              {/* <form className={css.form} onKeyDown={handleKey} >
                <Select
                  showSearch
                  style={{ width: 350 }}
                  placeholder="Специальность врача"
                  optionFilterProp="children"
                  onChange={onChange}
                  // onSearch={onSearch}
                  filterOption={(input, option: any) => {
                    if (typeof option.value === "string") {
                      return (
                        option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      );
                    }
                    return false;
                  }}
                >
                  <Option value="Терапевт">Терапевт</Option>
                  <Option value="Ортопед">Ортопед</Option>
                  <Option value="Психотерапевт">Психотерапевт</Option>
                  <Option value="Хирург">Хирург</Option>
                  <Option value="Офтальмолог">Офтальмолог</Option>
                  <Option value="Акушер - гинеколог">Акушер - гинеколог</Option>
                </Select>
                <Button onClick={onFilter}>Найти</Button>
                <Button onClick={deleteFilter}>Сброс</Button>
              </form> */}
              {/* ZDES' */}
              {userState
                ? appointAccount.map(
                    (appoint: {
                      id: string;
                      _id: string;
                      date: string;
                      time: string;
                      doctorSpecialization: string;
                    }) => (
                      <div key={appoint.id} className={css.appoint_item}>
                        <Card
                          title={`Запись к врачу: ${appoint.doctorSpecialization}`}
                          bordered={true}
                          style={{ width: 300 }}
                        >
                          <p>Дата: {appoint.date}</p>
                          <p>Время: {appoint.time}</p>
                          <Button onClick={() => removeAppoint(appoint._id)}>
                            Не смогу посетить
                          </Button>
                        </Card>
                      </div>
                    )
                  )
                : "Пользователь не найден"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
