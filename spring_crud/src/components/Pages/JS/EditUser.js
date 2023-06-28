import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../CSS/registerUser.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const EditUser = () => {

  let navigate = useNavigate();

  const {id} = useParams();

  const [user, setUser] = useState({
    username : "",
    email : "",
    password : "",

  });

  const {username, email, password} = user;

  const onInputChange  = (e) =>{
    setUser({...user, [e.target.name]: e.target.value})
  }

  useEffect(()=>{
    loadUser();
  },[])

  const onSubmitButton = async (e) =>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/editUser/${id}`, user);
    navigate("/allUser")
  };

  const loadUser = async ()=>{
    const result  = await axios.get(`http://localhost:8080/getUser/${id}`)
    setUser(result.data)
  }


  //for showing password
  const [showPass, setShowPass] = useState(false)
  const onHandleShow = () =>{
    setShowPass(!showPass)
  }
  const myStyle = {
    passShowToggle :{
      position:"absolute",
      cursor:"pointer",
      right:"31rem",
      top:"20.9rem", 
      padding: "0px",
    }
  }


  return (
    <>  
        <div className="container">
          <form onSubmit={(e) => onSubmitButton(e)}>
            <h2>Edit user</h2>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" value={username} onChange={(e) => onInputChange(e)} required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => onInputChange(e)} required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type={showPass ? "text": "password"} id="password" name="password" value={password} onChange={(e) => onInputChange(e)} required />
              <label className="Pass" style={myStyle.passShowToggle} onClick={() => onHandleShow()}>{showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}</label>
            </div>
            <div className="input-group">
              <button type="submit" id="edit-btn">Edit</button>
            </div>
          </form>
        </div>
    </>
  );
};

export default EditUser;
