import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Typography } from 'antd';


const Registration = () => {

  const { Title } = Typography;

  return (
    <div className='auth'>
      <Title type="success" level={3}>Регистрация</Title>

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
        label="Номер полиса ОМС"
        name="username"
        rules={[{ required: true, message: "Введите номер полиса ОМС" }]}
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
      <Form.Item
        label="Повторите пароль"
        name="password"
        rules={[{ required: true, message: "Повторите пароль" }]}
        >
        <Input.Password />
      </Form.Item>



      <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <Button type="primary" htmlType="submit" >
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
        </div>
  );
};

export default Registration;
