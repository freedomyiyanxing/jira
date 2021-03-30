import React from 'react';
import { FormType } from '../../types';
import * as auth from '../auth-fun/index';

const AuthContext = React.createContext<{
  user: FormType | null;
  login: (form: FormType) => Promise<void>;
  register: (form: FormType) => Promise<void>;
  logout: () => Promise<void>;
} | null>(null);

AuthContext.displayName = 'AuthContext';

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<FormType | null>(null);

  const login = (form: FormType) => auth.login(form).then(setUser);
  const register = (form: FormType) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  React.useEffect(() => {
    const as = auth.localStoreGetItem<FormType>();
    if (as) {
      login(as).then();
    }
  }, []);

  return <AuthContext.Provider children={children} value={{ user, login, register, logout }} />;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth 必须包裹在 AuthProvider 中使用');
  }
  return context;
};
