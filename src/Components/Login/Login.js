import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../store/FirebaseContext';
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const {firebase} =useContext(FirebaseContext)
  const history=useHistory()
  const handleLogin = (e) => {
    console.log("insoide the handel");
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((error)=>{
      console.log(error);
      alert(error.message)
    })

  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=""></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link style={{ textDecoration: "none", color: 'black', cursor: 'pointer' }} to={'/signUp'}>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
