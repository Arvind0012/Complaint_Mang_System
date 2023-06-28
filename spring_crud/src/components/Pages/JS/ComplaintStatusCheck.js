import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function ComplaintStatusCheck() {

  const [token, setToken] = useState("");

  let navigate = useNavigate();

  const [complaintStatus, setComplaintStatus] = useState('');

  const OnCancel = () =>{
    navigate('/')
  }


  const myStyle = {
      row:{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
      },
      statusBtn:{
          width:"8rem",
          margin:'1rem auto',
          height:'2rem',
          fontSize:'14px',
          background: 'linear-gradient(90deg, #0162c8, #55e7fc)',
          borderRadius: '10px',
          color: 'white',
          border: '2px solid #cddcec'
      }
      
  }


  const loadComplaintStatus = ()=>{
    axios.get("http://localhost:8080/complaintStatus/"+token).then((res)=> {
      setComplaintStatus(res.data)
      console.log(res.data)
    })
  }

  
  return (
      <>
      <Navbar />
        <div className='container'>
            <div className="row" style={myStyle.row}>
                <h1 style={{margin:'14px auto'}}>Complaint Status</h1>
                <label htmlFor="">Enter the given token</label>
                <input type="text" value={token} onChange={e => setToken(e.target.value)} />
                <button style={myStyle.statusBtn} onClick={loadComplaintStatus}>Check Status</button>
                <button style={myStyle.statusBtn} onClick={oncancel}>Cancel</button>
                <p>{complaintStatus == '' ? "" : "Status: "+ complaintStatus.status}</p>
            </div>
        </div>
          
      </>
    
  );
}

export default ComplaintStatusCheck