import './App.css';
import {  BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ProfitDashboard from './pages/ProfitDashboard';
import LossDashboard from './pages/LossDashboard';
import LoginPage from './pages/LoginPage';

import { useNavigate } from 'react-router-dom';


import jwt from 'jwt-decode';




function App() {
  return (
    <>
      <Router>
       
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<ProfitDashboard />} />
          <Route path="/reports" element={<LossDashboard />} />
      </Routes>
      </Router>
    </>
  );
}


const PrivateRoute = ({component: Component, ...rest}) => {
  
  const token = localStorage.getItem('token');
  const result = jwt(token);
  console.log(result);
  
  const navigate = useNavigate();

  return (

      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route {...rest} render={props => (
          result != null && result.user.isAdmin ?
              <Component {...props} />
          : navigate('/login')
      )} />
  );
};


export default App;




