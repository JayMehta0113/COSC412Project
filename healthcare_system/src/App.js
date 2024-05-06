import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import NotifsPage from './notifsPage';
import LoginPage from './loginPage';
import SignUP from './SignUP';
import AppointmentsPage from './AppointmentsPage'


function App() {
  return (
    <Router>
      <switch>
      <div className="navbar">
        <ul>
        <li><a href="#">Home</a></li>
          <li><Link to= "/AppointmentsPage" className='appointment-page'>Appointments</Link></li>
          <li><Link to="/notifsPage" className="notifs-page">Notifications</Link></li>
          <li><a href="#">Messages</a></li>
          <li><a href="/accountPage">Account</a></li>
        </ul>
      </div>
      <div className="content">
        <h1>Schedule your health care appointments today!</h1>
        <p>With JK appointments, managing your healthcare appointments has never been easier. Sign up to get started:</p>
        
        <Link to="/SignUpPage" className="signUp-page">Sign up</Link>
        <Link to="/loginPage" className="login-page">Login</Link>
        </div>

        <Routes>
          <Route path="/notifsPage" element={<NotifsPage/>}/>
          <Route path="/loginPage" element={<LoginPage/>}/>
          <Route path="/SignUpPage" element={<SignUP/>}/>
          <Route path="/AppointmentsPage" element={<AppointmentsPage/>}/>
        </Routes>

      

      </switch>
    </Router>
  );
}

export default App;