import React from 'react';
import './About.css'
import image from './teacher-speaking-students-group-notebooks-260nw-1450657124.webp'
const About = () => {
    
    return (
        <div className="about-container">
            <div className="d-flex mt-5 justify-content-center">
                <h1 className='about'>About Us </h1>

            </div>
            <section className="hero-banner py-5 mt-5">
                <div className="container">
                    <div className="row row align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-lg-1">
                            <img src={image} className="img-fluid" alt="Web Development" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mt-3 titles">Learn With Exclusive Coder <br /> <span className='name'>Education Hub</span> </h1>
                            <p className="lead  my-5">Education Hub is a platform that allows instructors to build online courses on their preferred topics. Using ours course development tools, they can upload videos, PowerPoint presentations, PDFs, audio, ZIP files and live classes to create courses.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;