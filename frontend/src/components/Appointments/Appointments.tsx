import { useEffect, useState } from "react";
import { Button } from 'antd';
import { useDispatch } from "react-redux";
import { useMySelector } from "../../hooks/customHook";
import { getAppointmentsAC } from "../../redux/ActionCreators/AppointmentsAC/AppointmentsAC";
import { Card, Pagination } from "antd";
import styles from "./appointments.module.css";
import { Select } from "antd";
import { AppointmentType } from "../../userTypes/appointmentType";
import { addToUserAppointmentAC } from "../../redux/ActionCreators/AppointmentsAC/addToUserAppointmentAC";
import { updateStatusAppoinmentAC } from "../../redux/ActionCreators/AppointmentsAC/updateStatusAppointmentAC";
import { FilterDoctorsAC } from "../../redux/ActionCreators/DoctorsAC/FilterDoctorsAC";

const Appointments = () => {

  const appointmentsState = useMySelector((state) => state.appointments);
  const isLogin = useMySelector((state) => state.user?.name);

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(15);
  const [pageNumber, setPageNumber] = useState(1);
  // const [findSpecial, setFindSpecial] = useState<AppointmentType[]>([]);

  const totalPage = appointmentsState.length / pageSize;

  const currentPageData = appointmentsState.slice(
    (pageNumber - 1) * pageSize,
    (pageNumber - 1) * pageSize + pageSize
  );

  // const currentPageData1 = findSpecial.slice(
  //   (pageNumber - 1) * pageSize,
  //   (pageNumber - 1) * pageSize + pageSize
  // );
  useEffect(() => {

  }, [appointmentsState])

  console.log("STATE=", appointmentsState);

  const { Option } = Select;

  // функции, относящиеся к select
  function onChange(value: string) {
    setSearch(value);
  }

  const handleKey = (event: { key: string }) => {
    if (event.key === "Enter") {
      dispatch(FilterDoctorsAC(search))
    }
  };

  const onFilter = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    dispatch(FilterDoctorsAC(search))
  }

  useEffect(() => {
    dispatch(getAppointmentsAC());
  }, [dispatch]);

  const reservedAppoint = (id: AppointmentType["id"]) => {
    console.log('12312312312');
    dispatch(addToUserAppointmentAC(id));
    console.log('333333333');
    dispatch(updateStatusAppoinmentAC(id));
  };

  return (

    <div className={styles.wrap}>
      {isLogin ?
        <div>
          <h1>Для вашего удобства выберите нужного специалиста</h1>
          <form className={styles.form} onKeyDown={handleKey} onSubmit={onFilter}>
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
          </form>

          <div className={styles.cardwrapper}>
            {currentPageData.length
              ? currentPageData.map(
                (appoint: {
                  id: string;
                  date: string;
                  time: string;
                  doctorSpecialization: string;
                  status: boolean;
                }) => (
                  <div
                    key={appoint.id}
                  >
                    <Card className={`${appoint.status ? styles.appoint_item : styles.appoint_item_false}`}
                      title={`Запись к врачу: ${appoint.doctorSpecialization}`}
                      bordered={true}
                      style={{ width: 300 }}
                    >
                      <p>Дата: {appoint.date}</p>
                      <p>Время: {appoint.time}</p>
                      {appoint.status ? (
                        <div>Время забронировано</div>
                      ) : (
                        <button onClick={() => reservedAppoint(appoint.id)}>
                          Записаться на прием
                        </button>
                      )}
                    </Card>
                  </div>
                )
              )
              : null
            }
            <Pagination
              defaultCurrent={1}
              total={totalPage}
              onChange={(page, pageSize = 10) => {
                setPageNumber(page);
                setPageSize(pageSize + 5);
              }}
            />
          </div>
        </div>
        : (
          <div>
            <h1 className={styles.wrap_h1}>
              Чтобы записаться нужно войти в аккаунт!
            </h1>
            <div className={styles.err403_main}>
              <img
                src={"/img/err403.png"}
                className={styles.err403}
                alt="err403"
              />
            </div>
          </div>
        )}
    </div>
  );
};

export default Appointments;
