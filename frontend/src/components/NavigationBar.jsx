import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss'; // Make sure to create and import corresponding CSS
import Logo from '../assets/images/StackMasters-Logo.png';
import '../styles/loginregister.scss';


const NavigationBar = ({ isFormOpen }) => {
  return (

    <header className="header">
      <nav className="nav">
        <img src={Logo} alt="Stack Masters Logo" className="nav_logo" />
        <ul className="nav_items">
          <li className="nav_item">
            <Link to="/" className="nav_link">Home</Link>
            <Link to="/courses" className="nav_link">Courses</Link>
            <Link to="/services" className="nav_link">Services</Link>
            <Link to="/contact" className="nav_link">Contact</Link>
          </li>
        </ul>
        <button className="button" id="form-open" onClick={isFormOpen}>Login</button>
      </nav>
    </header>
  );
};

export default NavigationBar;
