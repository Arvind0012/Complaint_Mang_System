import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Navbar from './Navbar';

function WelcomeComplaint() {

    let navigate = useNavigate()

    const [user, setUser] = useState({})
    useEffect(()=> {
        if (localStorage.getItem("user")==null) {
            //TODO redirect to login page
            navigate('/loginUser');
        }
        
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])

    const cStyle = {
        container:{
            
        },
        h2:{
            color:'red',
            fontSize:'2rem',
            marginTop:'8rem',
            fontFamily:'sans-seif'
        },
        h3:{
            color:'green',
            marginLeft:'29rem',
            marginBottom:'4rem',
            fontSize:'1.4rem',
            fontFamily:'sans-seif'
        },
        Link:{
            backgroundColor: '#4c98af',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginLeft: '28rem'
        }
    };

  return (
    <>
    <Navbar />

        <div className="Container">
            <h2 style={cStyle.h2}>Welcome to Complaint Management System</h2>
            <h3 style={cStyle.h3}>Hello {user.username} !!</h3>
            <Link to='/registerComplaint' style={cStyle.Link}>Register a Complaint</Link>
        </div>
        
    </>
  )
}

export default WelcomeComplaint