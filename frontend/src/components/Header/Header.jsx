// Header.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/StackMasters-Logo.png";
import "./Header.scss";
import "../LoginForm/LoginForm.scss";
// import LoginForm from './LoginForm';

const Header = ({ onLoginClick }) => {
  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} alt="Stack Masters Logo" className="nav_logo" />
        <ul className="nav_items">
          <li className="nav_item">
            <Link to="/" className="nav_link">
              Home
            </Link>
            <Link to="/courses" className="nav_link">
              Courses
            </Link>
            <Link to="/services" className="nav_link">
              Services
            </Link>
            <Link to="/contact" className="nav_link">
              Contact
            </Link>
          </li>
        </ul>
        <button className="button" onClick={onLoginClick}>
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
