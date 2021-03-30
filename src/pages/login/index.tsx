import React, { FormEvent } from 'react';
import { useAuth } from '../../utils/hooks/auth-context';

const Login: React.FC = () => {
  const { user, login, logout } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userName = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const userPassword = (e.currentTarget.elements[1] as HTMLInputElement).value;
    login({ userName, userPassword }).then();
  };

  return (
    <>
      {user ? <div>用户名称：{user?.userName}</div> : null}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">用户名:</label>
          <input type="text" id="userName" />
        </div>
        <div>
          <label htmlFor="userPassword">密码:</label>
          <input type="password" id="userPassword" />
        </div>
        <button type="submit">登录</button>
      </form>
      <div>
        <button onClick={logout}>退出登录</button>
      </div>
    </>
  );
};

export default Login;
