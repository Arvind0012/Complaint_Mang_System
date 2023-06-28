import React from 'react'
import Navbar from './Navbar'
import { useState, useLocalState } from 'react';
import { Link, json, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

import '../CSS/LoginUser.css'

function LoginUser() {

  let navigate = useNavigate()


  const [loginUser, setloginUser] = useState({
    email : "",
    password : "",
  });

  const {email, password} = loginUser;

  const onInputChange  = (e) =>{
    setloginUser({...loginUser, [e.target.name]: e.target.value})
  }

  const onSubmitButton = async (e) =>{  

    e.preventDefault();
    if(loginUser.email.trim() == '' && loginUser.password.trim() == ''){
      alert("Please enter email and Password!!")
    }

    // console.log(loginUser);
    
    if(loginUser != null){
      await axios.post("http://localhost:8080/loginUser", loginUser).then(data => {
        localStorage.setItem("user", JSON.stringify(data.data))
        navigate('/complaint')
      }).catch(error =>{
        console.log(error);
      });

    }

    
    
  };
  
  
  

  const myStyle ={
    passShowToggle :{
      position:"absolute",
      cursor:"pointer",
      right:"31rem",
      top:"21.5rem", 
      padding: "0px",
    },
    input :{
      fontSize: "0.94rem"
    },
    
  }
  const [showPass, setShowPass] = useState(false)
  const onHandleShow = () =>{
    setShowPass(!showPass)
  }

  

  return (
    <>
      <Navbar />
      <div className="loginCont">
        <div className="container">
          <form onSubmit={(e) => onSubmitButton(e)}>
            <h2>Login User</h2>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input value={email} onChange={(e) =>onInputChange(e)} type="email" id="email" name="email" style={myStyle.input} required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input value={password} onChange={(e) => onInputChange(e)} type={showPass ? "text": "password"} id="password" name="password" style={myStyle.input}   required />
              <label className="Pass" style={myStyle.passShowToggle} onClick={() => onHandleShow()}>{showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}</label>
            </div>
            
            <div className="input-group-btn">
              <button type='submit' className='loginBtn'>LOGIN</button>
              <Link id="cancel-btn" to="/">Cancel</Link>
            </div>
          </form>
        </div>
        <div className="imag">
          <img src="loginBg.jpg " alt="" />
        </div>
      </div>

        
    </>
  )
}

export default LoginUser