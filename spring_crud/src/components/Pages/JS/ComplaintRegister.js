import { useState, useRef, useEffect } from 'react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import axios from 'axios';
import emailjs from 'emailjs-com';
import { v4 as uuidv4 } from 'uuid';


function ComplaintRegister() {
  const comStyle  = {
      input:{
          fontSize:'1.02rem'
      },
      textarea:{
          width:'33rem',
          height:'10rem',
          marginLeft:'6.2rem',
          fontSize:'1.02rem'  
      },
      container:{
          marginTop:'4rem'
      },
      submitComplaint:{
          backgroundColor: '#4c98af',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '1.5rem',
          fontSize: '15px'
      },
      p:{
          marginLeft:'30rem',
          color:'green',
          fontSize:'1.2rem',
      },
      attachment :{
        padding : "6px",
        resize:"none",
        marginTop:"4px"
      }
  };

  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const [complaint, setComplaint] = useState({
    username : "",
    email : "",
    contactNumber : "",
    description :"",
    token : ""
  });

  // const [token, setToken] = useState([]);

  const {username, email, contactNumber, description} = complaint;

  const onComplaintInputChange = (e) =>{
    setComplaint({...complaint, [e.target.name]: e.target.value})

  }


  const onComplaintSubmitButton = async(e) => {
    
    e.preventDefault();
    await axios.post("http://localhost:8080/registerComplaint", complaint).then((res)=> {
      setComplaint(res.data)
    })
    setSuccess(true);
    const body = {
      email : complaint.email,
      description : complaint.description,
      token : complaint.token,
      username : complaint.username
    }
    // console.log(generateToken());
    sendEmail(body);
  }


  // to send email

  const form = useRef();

  const sendEmail = (body) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_eh1091h",
        "template_wuem63b",
        body,
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
            <p>{success && <p style={comStyle.p}>Thank you! Complaint Registered Successfully! Please use this {complaint.token} for your complaint Status</p>}</p>

        
        <div className="container" style={comStyle.container}>
          <form ref={form} onSubmit={(e) => onComplaintSubmitButton(e)}>
            <h2>Register a Complaint</h2>
            <div className="input-group">
              <label htmlFor="uname">Name</label>
              <input type="text" id="uname" name="username" style={comStyle.input} value={username} onChange={(e) => onComplaintInputChange(e)} required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" style={comStyle.input} value={email} onChange={(e) => onComplaintInputChange(e)} required />
            </div>
            <div className="input-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input type="tel" id="contactNumber" name="contactNumber" size='20' minLength='10' maxLength='14' style={comStyle.input } value={contactNumber} onChange={(e) => onComplaintInputChange(e)} required />
            </div>
            <div className="input-group">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" style={comStyle.textarea} value={description} onChange={(e) => onComplaintInputChange(e)} required></textarea>
            </div>
            
            <div className="input-group-btn">
              <button type="submit" id="submitComplaint-btn" style={comStyle.submitComplaint} >SUBMIT COMPLAINT</button>
              <Link id="cancel-btn" to="/">Cancel</Link>
            </div>
          </form>
        </div>


    </>
  )
}

export default ComplaintRegister