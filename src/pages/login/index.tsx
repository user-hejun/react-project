import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigator = useNavigate()
  const login = () => {
    navigator('/');
  }
  return (
    <div>
      <Button type={'primary'} onClick={login}>登录</Button>
    </div>
  );
}

export default Login;
