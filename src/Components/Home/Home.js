import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Home.css'
import image from './gettyimages-669775712-170667a.jpg'
const Home = () => {
    const[courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
        <div>

        <div className="about-container">
            <div className="d-flex mt-5 justify-content-center">
            </div>
            <section className="hero-banner py-5 mt-5">
                <div className="container">
                    <div className="row row align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-lg-1">
                            <img src={image} className="img-fluid" alt="Web Development" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mt-3 hometitle">Learn With Exclusive Coder <br /> Education Hub </h1>
                            <p className="lead  my-5">Overview. Education hus is a platform that allows instructors to build online courses on their preferred topics. Using ours course development tools, they can upload videos, PowerPoint presentations, PDFs, audio, ZIP files and live classes to create courses.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
           

        </div>
         <h1 className='mt-5 trending'>Trending Courses</h1>
        <div class="home row row-cols-1 row-cols-md-2 g-4">
        {
                courses.map(course => <Course 
                key={course.id}
                courses={course}
                ></Course>)
        }
        </div>
    </div>
    );
};

export default Home;