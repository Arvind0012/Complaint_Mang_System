import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import AllUser from './components/Pages/JS/Admin/AllUser';
import EditUser from './components/Pages/JS/EditUser';
import RegisterUser from './components/Pages/JS/RegisterUser';
import LoginUser from './components/Pages/JS/LoginUser';
import AdminPassword from './components/Pages/JS/AdminPassword';
import WelcomeComplaint from './components/Pages/JS/WelcomeComplaint';
import ComplaintRegister from './components/Pages/JS/ComplaintRegister';
import AllComplaint from './components/Pages/JS/Admin/AllComplaint'
import Index from './components/Pages/JS/Index';
import ComplaintStatusCheck from './components/Pages/JS/ComplaintStatusCheck';
import { v4 as uuidv4 } from 'uuid';


function App() {

  // const uniqueToken = uuidv4();
  //   console.log(uniqueToken);
  
  return (
    <>
    
      <BrowserRouter>
        <Routes>  
          <Route exact path='/' element={< Index />} />  
          <Route exact path='/registerUser' element={< RegisterUser />} />          
          <Route exact path='/loginUser' element={< LoginUser />} />
          <Route exact path='/complaintStatus' element={< ComplaintStatusCheck />} />
          <Route exact path='/allUser' element={< AllUser />} />   
          <Route exact path='/password' element={< AdminPassword />} />   
          <Route exact path='/complaint' element={< WelcomeComplaint />} />   
          <Route exact path='/registerComplaint' element={< ComplaintRegister  />} />   
          <Route exact path='/allComplaint' element={< AllComplaint />} />   
          <Route exact path='/editUser/:id' element={<EditUser />} />
      </Routes>
      </BrowserRouter>

      

    </>
  );
}

export default App;
