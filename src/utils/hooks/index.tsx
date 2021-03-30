import React from 'react';
import { AuthProvider } from './auth-context';

const AppContext: React.FC = ({ children }) => <AuthProvider>{children}</AuthProvider>;

export default AppContext;
