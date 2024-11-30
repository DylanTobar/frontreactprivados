import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  

  function handleSubmit(e){
    e.preventDefault();
    console.log("holaa")

    if (!username || !password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const userData ={
      username: username,
      password: password,
    };
    axios.post('http://localhost:4000/api/auth/login',userData).then((response) => { 
      console.log(response.data.data.status); 
      
      if (response.data.data.status=== 'OK'){
      navigate("/Proyects")
    }})

    
    
  }


  return (
    <div className='wrapper'>
       <form onSubmit={handleSubmit}>
           <h1>Login</h1>
           <div className='input-box'>
               <input type="text" placeholder='username' onChange={e => setUsername(e.target.value)} required />
           </div>
           <div className='input-box'>
               <input type="password" placeholder='Password'onChange={e => setPassword(e.target.value)} required />
           </div>
           <button type='submit'>Login</button>
       </form>
    </div>
  )
}

export default Login;