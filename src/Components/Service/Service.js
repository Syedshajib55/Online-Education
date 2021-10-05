import React from 'react';

const Service = (props) => {
    const {name, details, price, picture} = props.courses;
    return (
        <div class="col">
        <div class="card">
                <img src={picture} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{details}</p>
                <h5>Price : {price}</h5>
                <button className='btn btn-danger'>Enroll Now</button>
            </div>
        </div>
    </div> 
    );
};

export default Service;