import React, { useState } from 'react';
import './App.css';
import LoginPage from './Login/RegisterComponents/Login';
import RegisterPage from './Login/RegisterComponents/Register';

function App() {
  const [loginClicked, setLoginClicked] = useState(false);
  const [RegisterClicked, setRegisterClicked] = useState(false);

  const LoginRegisterButtons = () => {
    return (
      <div>
        <button onClick={onLogin}>Login</button>
        <button onClick={onRegister}>Register</button>
      </div>
    );
  };

  const onLogin = () => {
    setLoginClicked(true);
  
   };
  
   const onRegister = () => {
    setRegisterClicked(true);
   }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Splitwise App</h1>
        {!loginClicked ? ( !RegisterClicked ?
        <LoginRegisterButtons />:<RegisterPage/>):<LoginPage/>}
      </header>
    </div>
  );
}

export default App;

