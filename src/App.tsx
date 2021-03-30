import React from 'react';
import './App.css';
import TestUseArray from './pages/test/test-use-array';
import AppContext from './utils/hooks/index';
import Login from './pages/login/index';

function App() {
  return (
    <AppContext>
      <div className="App">
        <TestUseArray />
        <Login />
      </div>
    </AppContext>
  );
}

export default App;
