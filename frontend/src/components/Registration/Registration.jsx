import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Typography, Space } from "antd";
const { Text, Link } = Typography;

const Registration = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Text type="success" level={2} >Регистрация</Text>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Почта"
          name="username"
          rules={[
            {
              required: true,
              message: "Введите вашу почту!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: "Введите ваш пароль!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Повторите пароль"
          name="password two"
          rules={[
            {
              required: true,
              message: "Введите еще раз пароль!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Номер полиса ОМС"
          name="oms"
          rules={[
            {
              required: true,
              message: "Введите Номер полиса ОМС",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Registration;
