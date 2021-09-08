import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Typography } from 'antd';
import {useDispatch} from 'react-redux'
import { useHistory} from "react-router-dom";
import { useState } from "react";
import { UserType } from "../../userTypes/userType";


const Registration = () => {

  const { Title } = Typography;
  // const history = useHistory();
  // const dispatch = useDispatch();

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
        rules={[{ required: true, message: "Введите номер полиса ОМС", min:13 }]}
        >
        <Input 
        onChange={omsHandler}
        type='number'
        value={oms}
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
