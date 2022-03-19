import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
  <>
    <nav>
      <div className='navbar-section'>
        <div to="/" className='logo'>
          <h1>Sightfull</h1>
        </div>
        <div className='bars-dropdown'>
          <HiMenuAlt3 className='bars' />
          <div class="dropdown-content">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Login</a>
            <a href="#">Sign Up</a>
          </div>
        </div>
        
        <NavLink to="/home" activeStyle className='navlink active'>
          Home
        </NavLink>
        <NavLink to="/aboutus" activeStyle className='navlink'>
          About Us
        </NavLink>
        <NavLink to="/login" activeStyle className='navlink'>
          Login
        </NavLink>
        <button to="/login/register" className='login'>Sign up</button>
      </div>
    </nav>
  </>
  );
};

export default Navbar;
