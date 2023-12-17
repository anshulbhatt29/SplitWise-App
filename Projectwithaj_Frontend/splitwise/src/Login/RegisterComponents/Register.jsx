import React, { useState } from 'react';
import SplitMoney from '../../splittingMoney/SplitMoney';



const Register = ({handleRegister}) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    return (
      <div>
        <h2>Register Page</h2>
        <form>
          <label>
            Enter the Username:
            <input
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <br/>
          <label>
            Enter the Password:
            <input
              type="text"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <br/>
          <label>
            ReEnter the Password:
            <input
              type="text"
              value={repassword}
              required
              onChange={(e) => setRepassword(e.target.value)}
            />
          </label>
          <br/>
          <br/>
          <button type="button" onClick={()=>handleRegister(username,password,repassword)}>
            Register
          </button>
        </form>
      </div>
    );
  
  }
  
  const RegisterPage = () => {
    
      const [onClickRegister, setOnClickRegister] = useState(false);
  
    const handleRegister = async (username,password,repassword) => {
      if(password === repassword && password !=='')
      {
          try {
              const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'userName':username, password }),
              });
        
              if (!response.ok) {
                throw new Error('Error during registration');
              }
        
              const data = await response.json();
              console.log('User registered successfully:', data);
            } catch (error) {
              console.error('Error during registration:', error);
            }
          setOnClickRegister(true);
      }
      else{
          alert("Wrong Credentials");
      }
     
    };
  
    return (
      <div>
          {
              onClickRegister?<SplitMoney></SplitMoney>:<Register handleRegister={handleRegister}/>
          }
      </div>
  
    );
  };

export default RegisterPage;
