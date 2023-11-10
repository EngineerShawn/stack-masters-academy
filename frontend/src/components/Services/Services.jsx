//Services.js

import React from 'react';
import './Services.scss';

const Services = () => {
    return (
        <section className="services">
        <div className="services_container">
            <h2 className="section_title">Services</h2>
            <p className="section_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam, voluptatum. Quasi, voluptatem. 
            Quisquam, voluptatum. Quasi, voluptatem.
            </p>
            <div className="services_grid">
            <div className="services_card">
                <i className="uil uil-brush-alt services_icon"></i>
                <h3 className="services_title">Web Design</h3>
                <p className="services_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam, voluptatum. Quasi, voluptatem. 
                Quisquam, voluptatum. Quasi, voluptatem.
                </p>
            </div>
            <div className="services_card">
                <i className="uil uil-vector-square services_icon"></i>
                <h3 className="services_title">Web Design</h3>
                <p className="services_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam, voluptatum. Quasi, voluptatem. 
                Quisquam, voluptatum. Quasi, voluptatem.
                </p>
            </div>
            <div className="services_card">
                <i className="uil uil-pen services_icon"></i>
                <h3 className="services_title">Web Design</h3>
                <p className="services_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam, voluptatum. Quasi, voluptatem. 
                Quisquam, voluptatum. Quasi, voluptatem.
                </p>
            </div>
            </div>
        </div>
        </section>
    );
    };

export default Services;