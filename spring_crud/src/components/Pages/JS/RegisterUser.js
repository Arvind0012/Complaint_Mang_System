import axios from 'axios';
import {React, useRef, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/registerUser.css'
import Navbar from './Navbar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import emailjs from 'emailjs-com';


const RegisterUser = () => {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    username : "",
    email : "",
    password : "",
    confirmPassword:""
  });

  const [isError, setIsError] = useState('');


  const {username, email, password, confirmPassword} = user;
  const onInputChange  = (e) =>{
    setUser({...user, [e.target.name]: e.target.value})
  }

  const onSubmitButton = async (e) =>{  
    e.preventDefault();
    try{
      if(password === confirmPassword && password !== '' && confirmPassword !== ''){  
          await axios.post("http://localhost:8080/registerUser", user).then((data)=> {
            if (data.status!=200) {
              alert("Registration failed")
            }
            sendRegisterEmail()
            localStorage.setItem("user", JSON.stringify(data.data))
            navigate("/complaint")
          })
          
      }
      else{
        setIsError("Confirm Password doesn't match !!")
      }
    }
    catch (error) {
      if (error.response.status === 500) {
        setIsError('Email already exists');
      } else {
        setIsError('An error occurred');
      }
    }
    
  };


  const [passShow, setShowPass] = useState(false)
  const [confirmPassShow, setConfirmPassShow] = useState(false)
  
  const myStyle = {
    passToggle :{
      position:"absolute",
      cursor:"pointer",
      right:"31rem",
      top:"24rem", 
      padding: "0px",
    },
    cPasswordToggle :{
      position:"absolute",
      cursor:"pointer",
      right:"31rem",
      top:"28.5rem", 
      padding: "0px"
    },
    input :{
      fontSize:"0.94rem"
    }
  }

  const PasswordShow = () =>{
    setShowPass(!passShow)
  }

  const confirmPasswordShow = () =>{
    setConfirmPassShow(!confirmPassShow)
  }

  // to send email
  const form = useRef();
  const sendRegisterEmail = (e) => {
    emailjs
      .sendForm(
        "service_eh1091h",
        "template_vo1vyo5",
        form.current,
        "wZpIhTlQj4LaaBUas"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  


  return (
    <>  
      <Navbar />
      <div className="registerDiv">
        <div className="container">
          <div style={{position:"absolute", top:20, alignSelf:"center", margin:"1.5rem 17rem"}}>
            {isError}
          </div>
          <form ref={form} onSubmit={(e) => onSubmitButton(e)}>
            <h2>Register User</h2>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" style={myStyle.input}  value={username} onChange={(e) => onInputChange(e)} required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" style={myStyle.input} value={email} onChange={(e) => onInputChange(e)} required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type={passShow ? "text": "password"} id="password" name="password" style={myStyle.input}  value={password} onChange={(e) => onInputChange(e)} required />
              <label className="cPass" style={myStyle.passToggle} onClick={() => PasswordShow()}>{passShow ? <VisibilityOffIcon />: <VisibilityIcon />}</label>
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type={confirmPassShow ? "text": "password"} id="confirmPassword" name="confirmPassword" style={myStyle.input}  value={confirmPassword } onChange={(e) =>onInputChange(e)} required />
              <label className="cPass" style={myStyle.cPasswordToggle} onClick={() => confirmPasswordShow()}>{confirmPassShow ? <VisibilityOffIcon />: <VisibilityIcon />}</label>
            </div>
            <div className="input-group-loginBtn">
              <small>Have an account </small>
              <Link id='login' to='/loginUser'>login</Link>
            </div>
            
            <div className="input-group-btn">
              <button type="submit" id="register-btn" >REGISTER</button>
              <Link id="cancel-btn" to="/">Cancel</Link>
            </div>
          </form>
        </div>
        <div className="img">
          <img src="bg.jpeg" alt="" />
          <img src="bg.jpeg" alt="" />
        </div>
      </div>
      
        
    </>
  );
};

export default RegisterUser;
