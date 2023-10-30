import React, { useState } from 'react';
import './main.css'

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
      <div className='login-box'>
        <h1>Logowanie</h1>
         <form className='login-form' onSubmit={handleSubmit}>
            <label>
              Username:
              <input className='login' type="text" value={username} onChange={handleUsernameChange} />
            </label>
            <br />
            <label>
              Password:
              <input className='password' type="password" value={password} onChange={handlePasswordChange} />
            </label>
              <br />
           <button type="submit">Zaloguj</button>
           <label>
            Nie masz konta?
           </label>
           <label> <a href='/'>Zarejestruj się</a> </label>
        </form>
        
      </div>
      
  );

  
}

export default LoginScreen;
