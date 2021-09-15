import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Typography, Result } from "antd";
import { useDispatch } from "react-redux";
import { LoginUserAC } from "../../redux/ActionCreators/UserAC/loginUserAC";
import { useHistory } from "react-router";
import { useMySelector } from "../../hooks/customHook";
import css from "./login.module.css";

const Login = () => {
  const { Title } = Typography;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const UserState = useMySelector((state) => state.user);
  const errorMessage = useMySelector((state) => state.loginErrorMessage);

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    dispatch(LoginUserAC(email, password));
  };

  useEffect(() => {
    if (UserState) {
      history.push("/");
    }
  }, [UserState, history]);

  return (
    <div className={css.wrap}>
      <div className="auth">
        <Title type="success" level={3}>
          Вход в личный кабинет
        </Title>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onSubmitCapture={onSubmit}
        >
          <Form.Item
            label="Почта"
            name="email"
            rules={[{ required: true, message: "Введите электронную почту" }]}
          >
            <Input onChange={emailHandler} value={email} />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, message: "Введите пароль" }]}
          >
            <Input.Password onChange={passwordHandler} value={password} />
            {errorMessage && <div>{errorMessage}</div>}
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
