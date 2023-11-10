// HomePage.js
//
import React from "react";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <section className="home">
      <div className="homepage_container">
        <h2 className="section_title">Home</h2>
            <p className="section_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum. Quasi, voluptatem. Quisquam, voluptatum. Quasi,
          voluptatem.
        </p>
        <div className="home_grid">
          <div className="home_card">
            <i className="uil uil-brush-alt"></i>
            <h3 className="home_title">Web Design</h3>
            <p className="home_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Quasi, voluptatem. Quisquam, voluptatum. Quasi,
              voluptatem.
            </p>
          </div>
          <div className="homepage_card">
            <i className="uil uil-vector-square"></i>
            <h3 className="homepage_title">Web Design</h3>
            <p className="homepage_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Quasi, voluptatem. Quisquam, voluptatum. Quasi,
              voluptatem.
            </p>
          </div>
          <div className="homepage_card">
            <i className="uil uil-pen "></i>
            <h3 className="homepage_title">Web Design</h3>
            <p className="homepage_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Quasi, voluptatem. Quisquam, voluptatum. Quasi,
              voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
