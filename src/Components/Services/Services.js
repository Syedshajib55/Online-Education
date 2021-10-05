import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const[courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('./fakedatas.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
        <h1 className='mt-5 featured'>Featured Courses</h1>
        <div class="home row row-cols-1 row-cols-md-2 g-4">
        {
                courses.map(course => <Service key={course.id}
                    courses={course}></Service> )
        }
        </div>
        </div>
        
    );
};

export default Services;