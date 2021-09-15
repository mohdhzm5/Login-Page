import React, { useState } from 'react';
import './App.css';

function App() {
  const [token, setToken] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  if(!token) {
    return (
      
      <div className="login-wrapper">
      <h1>Please Log In</h1>
 
        <label>
          <p>Username</p>
          <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit" onClick={()=>setToken(true)} >Submit</button>
        </div>
    
    </div>

    )
  }

  return (
    <div className="wrapper">
     <h1> HomePage </h1>
     <p>Username is - {username}</p>
     <p>Password is - {password}</p>
    </div>
  );
}

export default App;