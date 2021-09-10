import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  return (
    <div>
      <img className="notfound" src={"./img/404.jpg"} alt="logo wow" />
      <Result
        title="404"
        subTitle="Страница не найдена."
        extra={
          <Button type="primary" onClick={() => history.push("/")}>
            На главную
          </Button>
        }
      />
      ,
    </div>
  );
};

export default NotFound;
