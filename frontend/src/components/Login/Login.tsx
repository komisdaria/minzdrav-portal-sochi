import React, {useState} from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Typography } from "antd";
import { useDispatch } from "react-redux";
import { LoginUserAC } from "../../redux/ActionCreators/UserAC/loginUserAC";
import { useHistory } from "react-router";

const Login = () => {
  const { Title } = Typography;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const history = useHistory()

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    
    
    dispatch(LoginUserAC(email,password))
    history.push('/')
  }


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
        onSubmitCapture={onSubmit}
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
          label="Пароль"
          name="password"
          rules={[{ required: true, message: "Введите пароль" }]}
        >
          <Input.Password 
          onChange={passwordHandler}
          value={password}
          />
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
