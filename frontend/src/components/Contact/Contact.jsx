// Contact.js

import React from 'react';
import { useForm } from 'react-hook-form';
import  './Contact.scss';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data);
    };

    const getInputClass = (error) => {
        return `input_box ${error ? 'input_error' : 'input_success'}`;
    };
    
    return (
        <div className='contact_container'>
                <div className="contact_form">
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={getInputClass(errors.name)}>
                            <input 
                              type="text"
                              placeholder={errors.name ? errors.name.message : 'Name'}
                              {...register("name", { required: "Name is required" })}
                              style={{ borderColor: errors.name ? 'red' : 'green', color: errors.name ? 'red' : 'black' }}
                            />
                            <i className="uil uil-user"></i>
                        </div>
                        <div className={getInputClass(errors.email)}>
                            <input 
                              type="email"
                              placeholder={errors.email ? errors.email.message : 'Enter your email'}
                              {...register("email", {
                                  required: "Email is required",
                                  pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: "Invalid email format"
                                  }
                              })}
                              style={{ borderColor: errors.email ? 'red' : 'green', color: errors.email ? 'red' : 'black' }}
                            />
                            <i className="uil uil-envelope-alt email"></i>
                        </div>
                        <div className={getInputClass(errors.course)}>
                            <select
                                name="course"
                                {...register("course", { required: "Course is required" })}
                                style={{ borderColor: errors.course ? 'red' : 'green', color: errors.course ? 'red' : 'black' }}
                            >
                                <option value="">Select a course</option> {/* Default option */}
                                <option value="Course1">Course 1</option>
                                <option value="Course2">Course 2</option>
                                <option value="Course3">Course 3</option>
                                {/* Add more <option> elements for additional courses */}
                            </select>
                            <i className="uil uil-book-open"></i>
                                {errors.course && <p style={{ color: 'red' }}>{errors.course.message}</p>}
                        </div>
                        <div className={getInputClass(errors.message)}>
                            <textarea 
                              placeholder={errors.message ? errors.message.message : 'Message'}
                              {...register("message", { required: "Message is required" })}
                              style={{ borderColor: errors.message ? 'red' : 'green', color: errors.message ? 'red' : 'black' }}
                            ></textarea>
                            <i className="uil uil-comment-alt-lines"></i>
                        </div>
                        <button className="button">Submit</button>
                    </form>
                </div>
            </div>
    );
};
export default Contact;
