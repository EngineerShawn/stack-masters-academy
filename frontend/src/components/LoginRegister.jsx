import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/loginregister.scss'; // Make sure to create and import corresponding CSS

const LoginRegister = ({ onClose, isFormOpen }) => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  return (
    <div className={`form_container ${isFormOpen ? 'show' : ''}`}>
      <i className="uil uil-times form_close" /*onClick={(onClose) => setIsLoginFormVisible(false)}*/></i>
      {isLoginFormVisible ? (
        <div className="form login_form">
          {/* Login Form */}
          <form action="#">
            <h2>Login</h2>
            <div className="input_box">
              <input type="email" placeholder="Enter your email" required />
              <i className="uil uil-envelope-alt email"></i>
            </div>
            <div className="input_box">
              <input type="password" placeholder="Enter your password" required />
              <i className="uil uil-lock password"></i>
              <i className="uil uil-eye-slash pw_hide"></i>
            </div>
            <div className="option_field">
              <span className="checkbox">
                <input type="checkbox" id="check" />
                <label htmlFor="check">Remember me</label>
              </span>
              <Link to="#" className="forgot_pw">Forgot password?</Link>
            </div>
            <button className="button">Login Now</button>
            <div className="login_signup">Don't have an account? <Link to="#" id="signup">Signup</Link></div>
          </form>
        </div>
      ) : (
        <div className="form signup_form">
          {/* Signup Form */}
          <form action="#">
            <h2>Signup</h2>
            <div className="input_box">
              <input type="email" placeholder="Enter your email" required />
              <i className="uil uil-envelope-alt email"></i>
            </div>
            <div className="input_box">
              <input type="password" placeholder="Create password" required />
              <i className="uil uil-lock password"></i>
              <i className="uil uil-eye-slash pw_hide"></i>
            </div>
            <div className="input_box">
              <input type="password" placeholder="Confirm password" required />
              <i className="uil uil-lock password"></i>
              <i className="uil uil-eye-slash pw_hide"></i>
            </div>
            <button className="button">Signup Now</button>
            <div className="login_signup">Already have an account? <Link to="#" id="login">Login</Link></div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginRegister;
