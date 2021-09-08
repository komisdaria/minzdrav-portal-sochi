import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Typography } from "antd";

const Login = () => {
  const { Title } = Typography;

  return (
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
      >
        <Form.Item
          label="Почта"
          name="username"
          rules={[{ required: true, message: "Введите электронную почту" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: "Введите пароль" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
