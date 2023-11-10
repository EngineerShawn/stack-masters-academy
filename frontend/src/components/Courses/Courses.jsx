// Courses.js
//
import React from "react";
import "./Courses.scss";

const Courses = () => {
  return (
    <div className="courses">
      <div className="courses_container">
        <h2 className="section_title">Courses</h2>
        <p className="section_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum. Quasi, voluptatem. Quisquam, voluptatum. Quasi,
          voluptatem.
        </p>
        <div className="courses_grid">
          <div className="courses_card">
            <i className="uil uil-brush-alt courses_icon"></i>
            <h3 className="courses_title">Web Design</h3>
            <p className="courses_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Quasi, voluptatem. Quisquam, voluptatum. Quasi,
              voluptatem.
            </p>
          </div>
          <div className="courses_card">
            <i className="uil uil-vector-square courses_icon"></i>
            <h3 className="courses_title">Web Design</h3>
            <p className="courses_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Quasi, voluptatem. Quisquam, voluptatum. Quasi,
              voluptatem.
            </p>
          </div>
          <div className="courses_card">
            <i className="uil uil-pen courses_icon"></i>
            <h3 className="courses_title">Web Design</h3>
            <p className="courses_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Quasi, voluptatem. Quisquam, voluptatum. Quasi,
              voluptatem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
