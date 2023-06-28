import React from 'react'
import '../../CSS/Navbar.css'
import {Link} from 'react-router-dom'

function AdminNavbar() {
  return (
    <>
      <nav>
        <ul>
          {/* <li><Link to='/adminHome'>Home</Link></li> */}
          <li><Link to='/allUser'>allUser</Link></li>

          <li><Link to='/allComplaint'>allComplaint</Link></li>

          <li><Link to='/'>UserPanel</Link></li>

        </ul>
      </nav>
    </>
  )
}

export default AdminNavbar