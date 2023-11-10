// LoginForm.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

const LoginForm = ({ onClose, isFormOpen }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  // Destructure the 'register' function from the useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handler Functions
  const togglePasswordVisibility = (e) => {
    // Prevent the form from submitting
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const getInputClass = (error) => {
    return `input_box ${error ? "input_error" : "input_success"}`;
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/login", {
        // Your API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();

      // Assuming the response contains a token or user data
      // Handle storing the token in localStorage or handling session data
      localStorage.setItem("token", result.token);

      // Update the app state or context to indicate the user is logged in
      // ...

      console.log("Login successful", result);
    } catch (error) {
      console.error("Failed to login", error);
    }
  };

  return (
    <div className={`form-overlay ${isFormOpen ? 'show' : ''}`}>
      <div className="form_container">
        <i className="uil uil-times form_close" onClick={onClose}></i>
        <div className="form login_form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={getInputClass(errors.email)}>
              <h2>Login</h2>

              <div className="input_box">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={
                    errors.email ? errors.email.message : "Enter your email"
                  }
                  autoComplete="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Please enter valid email",
                    },
                  })}
                  style={{
                    borderColor: errors.email ? "red" : "green",
                    color: errors.email ? "red" : "black",
                  }}
                />
                <i className="uil uil-envelope-alt email"></i>
              </div>
              <div className="input_box">
                <input
                  type={passwordShown ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder={
                    errors.password
                      ? errors.password.message
                      : "Enter your password"
                  }
                  autoComplete="current-password"
                  {...register("password", { required: true })}
                />
                <i
                  className={`uil ${
                    passwordShown ? "uil-eye" : "uil-eye-slash"
                  } pw_hide`}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>

              <div className="option_field">
                <span className="checkbox">
                  <input type="checkbox" id="check" />
                  <label htmlFor="check">Remember me</label>
                </span>
                <p>
                  Forgot password?
                  <Link to="#" className="forgot_pw">
                    Click here
                  </Link>
                </p>
              </div>

              <button className="button" type="submit">
                Login Now
              </button>

              <div className="login_signup">
                Don't have an account?{" "}
                <Link to="/signup" id="signup">
                  Signup
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
