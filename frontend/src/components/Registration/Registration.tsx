import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Typography } from 'antd';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateUserAC } from "../../redux/ActionCreators/UserAC/createUserAC";
import { useHistory } from "react-router";



const Registration = () => {

  const { Title } = Typography;

  const dispatch = useDispatch();
  const history = useHistory()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [oms, setOms] = useState(0);//!!!!
  const [password, setPassword] = useState('');
  const [repPassword, setRepPassword] = useState('');


  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const omsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

    setOms(Number(event.target.value))
  }

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }


  const repPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepPassword(event.target.value)
  }

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault()

    dispatch(CreateUserAC(name, email, oms, password, repPassword))
    history.push('/')
  }

  return (
    <div className='auth'>
      <Title type="success" level={3}>Регистрация</Title>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onSubmitCapture={onSubmit}
      >
        <Form.Item
          label="Имя"
          name="name"
          rules={[{ required: true, message: "Введите ФИО" }]}
        >
          <Input
            onChange={nameHandler}
            value={name}
          />
        </Form.Item>

        <Form.Item
          label="Почта"
          name="email"
          rules={[{ required: true, message: "Введите электронную почту" }]}
        >
          <Input
            onChange={emailHandler}
            value={email}
          />
        </Form.Item>

        <Form.Item
          label="Номер полиса ОМС"
          name="oms"
          rules={[{ required: true, message: "Введите номер полиса ОМС", min: 15 , max: 16}]}
        >
          <Input
            onChange={omsHandler}
            type='number'
            value={oms}
            maxLength = {16}
          />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: "Введите пароль" }]}
        >
          <Input.Password
            onChange={passwordHandler}
            value={password}
          />
        </Form.Item>
        <Form.Item
          label="Повторите пароль"
          name="passwordrepit"
          rules={[{ required: true, message: "Повторите пароль" }]}
        >
          <Input.Password
            onChange={repPasswordHandler}
            value={repPassword}
          />
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
