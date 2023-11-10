import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './SignupForm.scss'; // Make sure to import corresponding CSS

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const phonePattern = /^\+?(\d{10,15})$/; // Adjust the regex as needed for your requirements

const SignupForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

    // State to manage password requirement checks
    const [passwordRequirements, setPasswordRequirements] = useState({
        minLength: false,
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false,
    });

    const onSubmit = data => {
        console.log(data);
    };

    // Call this function on each password input change
    const checkPasswordRequirements = (password) => {
        setPasswordRequirements({
            minLength: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase:/[a-z]/.test(password),
            number:/\d/.test(password),
            specialChar: /[!@$%&*-.]/.test(password),
        });
    };

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordShown(!confirmPasswordShown);
    };

    // Social login handlers (to be implemented with actual logic)
    const handleSocialLogin = (service) => {
        console.log(`Log in with ${service}`);
        // Social login SDKs or my backend goes below this line
    };

    // Twilio SMS Auth Login (This is a placeholder. Be sure to add actual logic to implement)
    const handlePhoneVerification = (smsAuth) => {
        console.log(`Handle Twilio ${smsAuth}`);
        // Integrate my Twilio API here
    }

    return (
        <div className="form signup_form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Signup</h2>
                {/* First Name */}
                <div className="input_box">
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        {...register("firstName", { required: "First name is required" })}
                    />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
                {/* Last Name */}
                <div className="input_box">
                    <input 
                        type="text" 
                        placeholder="Last Name" 
                        {...register("lastName", { required: "Last name is required" })}
                    />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
                {/* Email */}
                <div className="input_box">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Invalid email format"
                            }
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                {/* Phone Number */}
                <div className="input_box">
                    <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: phonePattern,
                                message: "Invalid phone number"
                            }
                        })}
                    />
                    {<p>This is only used for SMS Verification</p>}
                    <div className="option_field">
                        <span className="checkbox">
                            <input type="checkbox" id="check" required />
                            <label htmlFor="check">I concent to allowing Stack Masters Academy to send me text messages for verification</label>
                        </span>
                    </div>
                    {errors.phone && <p>{errors.phone.message}</p>}
                </div>
                {/* Create Password */}
                <div className="input_box">
                    <input 
                        type={passwordShown ? "text" : "password"} 
                        placeholder="Create Password" 
                        {...register("password", {
                            required: "Password is required",
                            pattern: {
                                value: passwordPattern,
                                message: "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
                            }
                        })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                {/* Confirm Password */}
                <div className="input_box">
                    <input 
                        type={confirmPasswordShown ? "text" : "password"} 
                        placeholder="Confirm Password" 
                        {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: value =>
                                value === watch("password") || "The passwords do not match"
                        })}
                    />
                    {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                </div>
                <button className="button">Signup Now</button>
                <div className="password_requirements">
                    {/* Mapping through password requirements state to display the list of requirements */}
                    {Object.entries(passwordRequirements).map(([key, value]) => (
                        <div key={key} className={value ? 'valid' : 'invalid'}>
                            {value ? '✔️' : '❌'} {key}
                            </div>
                    ))}
                </div>
                {/* Social Signup */}
                <div className="social_signup">
                    <button className="social_button google" onClick={handleSocialLogin}>Continue with Google</button>
                    <button className="social_button github" onClick={handleSocialLogin}>Continue with GitHub</button>
                    <button className="social_button facebook" onClick={handleSocialLogin}>Continue with Facebook</button>
                </div>
                <div className="login_signup">
                    Already have an account? <a href="/login" id="login">Login</a>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
