import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from './logo.png'
const NavBar = () => {
    return (
        <div className="">
            <div>
                <h1 className='webname'>Education Hub</h1>
            </div>
             
             <div className="">
                        <ul className="">
                                <Link to="/home" className="items">
                                    <li>Home</li>
                                </Link>
                                <Link to="/services" className="items">
                                    <li>Services</li>
                                </Link>
                                <Link to="/about" className="items">
                                    <li>About</li>
                                </Link>
                                <Link to="contact" className="items">
                                    <li>Contact us</li>
                                </Link>
                        </ul>
            </div>  
        </div>
    );
};

export default NavBar;<h2>Navigation</h2>