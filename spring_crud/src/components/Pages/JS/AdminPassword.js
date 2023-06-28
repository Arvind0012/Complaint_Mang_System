import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../CSS/registerUser.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Navbar from './Navbar';
function AdminPassword() {

  const [isError, setIsError] = useState('');
  const [admin, setAdmin] = useState({adminPass:""});

  

  const {adminPass} = admin
  const onInputChange = (e) =>{
    setAdmin({...admin, [e.target.name]: e.target.value})
  }

  const onPassSubmit = (e) =>{

    var password = document.getElementById("password").value;
    console.log(password)
    var adminPassword = "Admin@123";

    if (password !== adminPassword) {
      setIsError("Password does not match !!")
      window.location.reload()
      return false;
    }
    else{
      window.location.href='/allUser'
    }    
  }


  const myStyle = {
      margin:'2rem',
      h3:{
          margin:'5rem auto',
          fontSize:'1.6rem'
      },
      label:{
          margin:'1.2rem',
          marginLeft:'24rem'
      },
      input:{
        width: '35rem',
        fontSize: "0.94rem"
      },
      showToggle: {
        position:"absolute",
        cursor:"pointer",
        right:"30.5rem",
        top:"19.4rem", 
        padding: "0px"
      }
  };

  const [showPass, setShowPass] = useState(false)
  const onShowPass =() =>{
    setShowPass(!showPass)
  }

  return (
    <>
      <Navbar />
        <form >
        <div style={{position:"absolute", top:20, alignSelf:"center", margin:"9rem 17rem"}}>
            {isError}
          </div>
            <h3 style={myStyle.h3}>Enter Password for Admin Panel !!</h3>
            <div className="input-group">
              <label htmlFor="password" style={myStyle.label}>Password</label>
              <input type={showPass ? "text": "password"} placeholder='Enter Admin Password' id="password" name="adminPass" style={myStyle.input} value={adminPass} onChange={(e) =>onInputChange(e)}  required />
              <label className="Pass" style={myStyle.showToggle} onClick={() => onShowPass()}>{showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}</label>
            </div>
            
            <div className="input-group-btn">
              <Link type="submit" id="register-btn" onClick={() => onPassSubmit()}>LOGIN</Link>
              <Link id="cancel-btn" to="/">Cancel</Link>
            </div>
        </form>
    </>
  )
}

export default AdminPassword