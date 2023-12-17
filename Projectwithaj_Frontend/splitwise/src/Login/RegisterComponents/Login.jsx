import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SplitMoney from '../../splittingMoney/SplitMoney';


const Login = ({handleLogin}) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
          <h2>Login Page</h2>
          <form>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <br />
            <button type="button" onClick={()=>handleLogin(username,password)}>
              Login
            </button>
          </form>
        </div>
      );
}

const LoginPage = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

const handleLogin = async (username,password) => {
    try {
        const response = await fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 'userName':username, password }),
        });
  
        if (!response.ok) {
          alert("Wrong User name or Password");
          throw new Error('Error during Login');
        }
        setLoggedIn(true);
      } catch (error) {
        console.error('Error during Logging:', error);
      }

    }

return (
  <div>
    {isLoggedIn ? (
      <SplitMoney />
    ) : (
      <Login handleLogin={handleLogin} />
    )}
  </div>
);

};

export default LoginPage;
