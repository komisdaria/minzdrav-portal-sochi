import React, { useEffect } from "react";
import css from "./account.module.css";
import { CalendarForUser } from "../Calendar/Calendar";
import { useMySelector } from "../../hooks/customHook";
import { useDispatch } from "react-redux";
import { getAppoinmentAccountAC } from "../../redux/ActionCreators/UserAC/getAppointAccount";
import { Card } from "antd";

export default function Account() {
  const userState = useMySelector((state) => state.user);
  const appointAccount = useMySelector((state) => state.userAppoints);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppoinmentAccountAC());
  }, [dispatch]);

  return (
    <>
      <div className={css.account_container}>
        <div className={css.account_container_item}>
          <div className={css.left_column}>
            <div className={css.left_item}>
              Информация о пользователе:
              {userState ? (
                <div>
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
              {userState
                ? appointAccount.map(
                    (appoint: {
                      id: string;
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
                          {/* <p>Статус приема: {appoint.status ? "Прием завершен" : "прием предстоит"}</p>
                <p className={styles.comments}>{appoint.comments.length >=1 ? `Назначения врача: ${appoint.comments}` : null}</p> */}
                        </Card>
                      </div>
                    )
                  )
                : "Пользователь не найден"}
            </div>
            <div className={css.right_item}>Архив приемов и вся инфа о них</div>
          </div>
          <CalendarForUser />
        </div>
      </div>
    </>
  );
}
