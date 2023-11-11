// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import "../styles/loginregister.scss"; // Make sure to create and import corresponding CSS

// // LoginRegister Function
// const LoginRegister = () => {
//   /*---------- States, Middleware, Functions ----------*/

//   const [passwordShown, setPasswordShown] = useState(false);
//   const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

//   const passwordPattern =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//   const phonePattern = /^\+?(\d{10,15})$/; // Adjust the regex as needed for your requirements

//   const [pwShowHide, setPwShowHide] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const getInputClass = (error) => {
//     return `input_box ${error ? "input_error" : "input_success"}`;
//   };
//   const onSubmit = async (data) => {
//     try {
//       const response = await fetch("/login", {
//         // Your API endpoint
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }

//       const result = await response.json();

//       // Assuming the response contains a token or user data
//       // Handle storing the token in localStorage or handling session data
//       localStorage.setItem("token", result.token);

//       // Update the app state or context to indicate the user is logged in
//       // ...

//       console.log("Login successful", result);
//     } catch (error) {
//       console.error("Failed to login", error);
//     }
//   };

//   /*--------- FOR REGISTER FORM ---------*/
//   const [passwordRequirements, setPasswordRequirements] = useState({
//     minLength: false,
//     uppercase: false,
//     lowercase: false,
//     number: false,
//     specialChar: false,
//   });

//   const RegisterOnSubmit = (data) => {
//     console.log(data);
//   };

//   // Call this function on each password input change
//   const checkPasswordRequirements = (password) => {
//     setPasswordRequirements({
//       minLength: password.length >= 8,
//       uppercase: /[A-Z]/.test(password),
//       lowercase: /[a-z]/.test(password),
//       number: /\d/.test(password),
//       specialChar: /[!@$%&*-.]/.test(password),
//     });
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordShown(!passwordShown);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setConfirmPasswordShown(!confirmPasswordShown);
//   };

//    // Social login handlers (to be implemented with actual logic)
//    const handleSocialLogin = (service) => {
//       console.log(`Log in with ${service}`);
//       // Social login SDKs or my backend goes below this line
//   };

// //   // Twilio SMS Auth Login (This is a placeholder. Be sure to add actual logic to implement)
// //   const handlePhoneVerification = (smsAuth) => {
// //       console.log(`Handle Twilio ${smsAuth}`);
// //       // Integrate my Twilio API here
// //   }

//   return (
//     /*-------------------------------*/
//     /*---------- LOGIN FORM ---------*/
//     /*-------------------------------*/

//     <div className="form_container">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className={getInputClass(errors.email)}>
//           <h2>Login</h2>

//           <div className="input_box">
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder={
//                 errors.email ? errors.email.message : "Enter your email"
//               }
//               autoComplete="email"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^\S+@\S+\.\S+$/,
//                   message: "Please enter valid email",
//                 },
//               })}
//               style={{
//                 borderColor: errors.email ? "red" : "green",
//                 color: errors.email ? "red" : "black",
//               }}
//             />
//             <i className="uil uil-envelope-alt email"></i>
//           </div>
//           <div className="input_box">
//             <input
//               type={pwShowHide ? "text" : "password"}
//               id="password"
//               name="password"
//               placeholder={
//                 errors.password
//                   ? errors.password.message
//                   : "Enter your password"
//               }
//               autoComplete="current-password"
//               {...register("password", { required: true })}
//             />
//             <i
//               className={`uil ${
//                 pwShowHide ? "uil-eye" : "uil-eye-slash"
//               } pw_hide`}
//               onClick={togglePasswordVisibility}
//             ></i>
//           </div>

//           <div className="option_field">
//             <span className="checkbox">
//               <input type="checkbox" id="check" />
//               <label htmlFor="check">Remember me</label>
//             </span>
//             <p>
//               Forgot password?
//               <Link to="#" className="forgot_pw">
//                 Click here
//               </Link>
//             </p>
//           </div>

//           <button className="button" type="submit" onClick={onSubmit}>
//             Login Now
//           </button>

//           <div className="login_signup">
//             Don't have an account?{" "}
//             <Link to="/signup" id="signup">
//               Signup
//             </Link>
//           </div>
//         </div>
//       </form>

//       {/*-------------------------------*/
//       /*---------- SIGNUP FORM ---------*/
//       /*-------------------------------*/}

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <h2>Signup</h2>
//         {/* First Name */}
//         <div className="input_box">
//           <input
//             type="text"
//             placeholder="First Name"
//             {...register("firstName", { required: "First name is required" })}
//           />
//           {errors.firstName && <p>{errors.firstName.message}</p>}
//         </div>
//         {/* Last Name */}
//         <div className="input_box">
//           <input
//             type="text"
//             placeholder="Last Name"
//             {...register("lastName", { required: "Last name is required" })}
//           />
//           {errors.lastName && <p>{errors.lastName.message}</p>}
//         </div>
//         {/* Email */}
//         <div className="input_box">
//           <input
//             type="email"
//             placeholder="Email"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^\S+@\S+\.\S+$/,
//                 message: "Please enter a valid email",
//               },
//             })}
//           />
//           {errors.email && <p>{errors.email.message}</p>}
//         </div>
//         {/* Phone Number */}
//         <div className="input_box">
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             {...register("phone", {
//               required: "Phone number is required",
//               pattern: {
//                 value: phonePattern,
//                 message:
//                   "Please enter a valid phone number, VoIP numbers are not allowed",
//               },
//             })}
//           />
//           {<p>This is only used for SMS Verification</p>}
//           <div className="option_field">
//             <span className="checkbox">
//               <input type="checkbox" id="check" required />
//               <label htmlFor="check">
//                 I concent to receive SMS Messages from Stack Masters Academy.
//                 (extra data rates may apply)
//               </label>
//             </span>
//           </div>
//           {errors.phone && <p>{errors.phone.message}</p>}
//         </div>
//         {/* Create Password */}
//         <div className="input_box">
//           <input
//             type={passwordShown ? "text" : "password"}
//             placeholder="Create Password"
//             {...register("password", {
//               required: "Password is required",
//               pattern: {
//                 value: passwordPattern,
//                 message:
//                   "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
//               },
//             })}
//           />
//           {errors.password && <p>{errors.password.message}</p>}
//         </div>
//         {/* Confirm Password */}
//         <div className="input_box">
//           <input
//             type={confirmPasswordShown ? "text" : "password"}
//             placeholder="Confirm Password"
//             {...register("confirmPassword", {
//               required: "Please confirm your password",
//               validate: (value) =>
//                 value === watch("password") || "The passwords do not match",
//             })}
//           />
//           {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
//         </div>
//         <button className="button">Signup Now</button>
//         <div className="password_requirements">
//           {/* Mapping through password requirements state to display the list of requirements */}
//           {Object.entries(passwordRequirements).map(([key, value]) => (
//             <div key={key} className={value ? "valid" : "invalid"}>
//               {value ? "✔️" : "❌"} {key}
//             </div>
//           ))}
//         </div>
//         {/* Social Signup */}
//         <div className="social_signup">
//           <button className="social_button google" onClick={handleSocialLogin}>
//             Continue with Google
//           </button>
//           <button className="social_button github" onClick={handleSocialLogin}>
//             Continue with GitHub
//           </button>
//           <button
//             className="social_button facebook"
//             onClick={handleSocialLogin}
//           >
//             Continue with Facebook
//           </button>
//         </div>
//         <div className="login_signup">
//           Already have an account?{" "}
//           <Link to="/LoginRegister" id="login">
//             Login
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginRegister;
