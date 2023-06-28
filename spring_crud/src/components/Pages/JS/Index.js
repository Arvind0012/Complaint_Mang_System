import React from 'react'
import '../CSS/Index.css'
import Navbar from './Navbar'
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Index() {

  const IndStyle = {
    link:{
      color:'white',
      backgroundColor:'#2389f5',
      padding:'0.9rem 1.3rem',
      borderRadius:'10px',
      marginLeft:'1.3rem'

    },
    l2:{
      
    }
    
  }

  return (
    <>
      <Navbar />
      
      <div className="Index-cont">
        <div className="row">
          <div className="col">
            <div className="text1">Hello, I'm</div>
            <div className="text2">The Smart Grievance Portal</div>
            <div className="text3">and I'm here to register your Grievance !!</div>
            <p>"Welcome to our complaint management website, where your concerns are heard and resolutions are found"</p>
            <div className="btn-field">
              <Link to='/registerUser' style={IndStyle.link}>Register Yourself <NavigateNextIcon style={{margin:'-5px'}} /> </Link>
              <Link to='/complaintStatus' style={IndStyle.link} >Check Complaint Status <NavigateNextIcon style={{margin:'-5px'}} /></Link>
              {/* <a href='/registerUser'><button className='registerBtn'>Register Yourself  <SendIcon/></button></a>  */}
              {/* <a href='/registerUser'><Link to='/registerUser'>Redfghj</Link></a>  */}

              {/* <a href='/complaintStatus'><button className='registerBtn'>Check Complaint Status</button></a>  */}
            </div>
          </div>
          <div className="col">
            <img src="bg.jpeg" alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Index