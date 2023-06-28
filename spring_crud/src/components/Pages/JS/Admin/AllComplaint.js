import React, { useEffect, useState } from 'react'
import '../../CSS/allUser.css'
import axios from 'axios';
import AdminNavbar from './AdminNavbar';

export default function AllComplaint() {

  const [complaint, setComplaint] = useState([]);

  useEffect(() =>{
    loadComplaints();
  },[])
 
  const loadComplaints = async () =>{
    const result = await axios.get("http://localhost:8080/allComplaint");
    setComplaint(result.data);
  }

  function setStatus(id, status) {
    axios.put("http://localhost:8080/updateComplaintStatus", {
      id : id,
      status : status
    }).then((res)=> {
      console.log(res);
    })
  }

  return (
    <>
      <AdminNavbar />
        <table style={{width:"100%"}}>
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Description</th>
              <th>Token</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {
              complaint.map(userComplaint =>(
               
                <tr>
                  <td>{userComplaint.id}</td>
                  <td>{userComplaint.username}</td>
                  <td>{userComplaint.email}</td>
                  <td>{userComplaint.contactNumber}</td>
                  <td>{userComplaint.description}</td>
                  <td>{userComplaint.token}</td>
                  <td>
                  <button onClick={()=> {
                    setStatus(userComplaint.id, "START")
                  }}>START</button>
                  <button onClick={()=> {
                    setStatus(userComplaint.id, "IN PROCESS")
                  }}>IN PROCESS</button>
                  <button onClick={()=> {
                    setStatus(userComplaint.id, "COMPLETED")
                  }}>COMPLETED</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
          
        </table>

    </>
  )
}