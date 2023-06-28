import React, { useEffect, useState } from 'react'
import '../../CSS/allUser.css'
import axios from 'axios';
import {Link} from 'react-router-dom'
import AdminNavbar from './AdminNavbar';

function AllUser() {

  const [users, setUsers] = useState([]);

  // let {id} = useParams();


  useEffect(() =>{
    loadUsers();
  },[])
 
  const loadUsers = async () =>{
    const result = await axios.get("http://localhost:8080/allUser");
    setUsers(result.data);
  }


  const deleteUser = async(id) =>{
    await axios.delete(`http://localhost:8080/deleteUser/${id}`)
    loadUsers();
  }


  return (
    <>
      <AdminNavbar />
        <table>
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Email</th>
              {/* <th>Password</th> */}
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              users.map(user =>(
               
                <tr>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  {/* <td>{user.password}</td> */}
                  <td>
                    <Link class="edit-button" to={`/editUser/${user.id}`}>EDIT</Link>
                    <button class="delete-button" onClick={() =>deleteUser(user.id)}>DELETE</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
          
        </table>

    </>
  )
}

export default AllUser