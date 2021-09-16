import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useMySelector } from "../../hooks/customHook";
import { getAppointmentsAC } from "../../redux/ActionCreators/AppointmentsAC/AppointmentsAC";
import { Card, Pagination } from "antd";
import styles from "./appointments.module.css";
import { Select } from "antd";
import { AppointmentType } from "../../userTypes/appointmentType";
import { addToUserAppointmentAC } from "../../redux/ActionCreators/AppointmentsAC/addToUserAppointmentAC";
import { idText } from "typescript";
import { updateStatusAppoinmentAC } from "../../redux/ActionCreators/AppointmentsAC/updateStatusAppointmentAC";

const Appointments = () => {
  const appointmentsState = useMySelector((state) => state.appointments);
  const isLogin = useMySelector((state) => state.user?.name);

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(15);
  const [pageNumber, setPageNumber] = useState(1);
  const [findSpecial, setFindSpecial] = useState<AppointmentType[]>([]);

  const totalPage = appointmentsState.length / pageSize;
  const currentPageData = appointmentsState.slice(
    (pageNumber - 1) * pageSize,
    (pageNumber - 1) * pageSize + pageSize
  );
  const currentPageData1 = findSpecial.slice(
    (pageNumber - 1) * pageSize,
    (pageNumber - 1) * pageSize + pageSize
  );

  console.log("STATE=", appointmentsState);

  const { Option } = Select;

  // функции, относящиеся к select
  function onChange(value: string) {
    console.log(`selected ${value}`);
    setSearch(value);
  }

  const handleKey = (event: { key: string }) => {
    if (event.key === "Enter") {
      const filteredSpecial = appointmentsState.filter(
        (el) => el.doctorSpecialization === search
      );
      console.log("filteredSpecial", filteredSpecial);
      setFindSpecial(filteredSpecial);
    }
  };
  useEffect(() => {
    dispatch(getAppointmentsAC());
  }, [dispatch]);

  const reservedAppoint = (id: AppointmentType["id"]) => {
    dispatch(addToUserAppointmentAC(id));
    dispatch(updateStatusAppoinmentAC(id));
  };

  return (
    <div className={styles.wrap}>
      {isLogin ? (
        <div>
          <h1>Для вашего удобства выберите нужного специалиста</h1>
          <form onKeyDown={handleKey}>
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
          </form>

          <div className={styles.cardwrapper}>
            {currentPageData1.length
              ? currentPageData1.map(
                  (appoint: {
                    id: string;
                    date: string;
                    time: string;
                    doctorSpecialization: string;
                    status: boolean;
                  }) => (
                    <div key={appoint.id}>
                      <Card
                        className={`${
                          appoint.status ? styles.appoint_item : ""
                        }`}
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
              : currentPageData.map(
                  (appoint: {
                    id: string;
                    date: string;
                    time: string;
                    doctorSpecialization: string;
                    status: boolean;
                  }) => (
                    <div
                      key={appoint.id}
                      className={`${appoint.status ? styles.appoint_item : ""}`}
                    >
                      <Card
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
                )}
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
      ) : (
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
