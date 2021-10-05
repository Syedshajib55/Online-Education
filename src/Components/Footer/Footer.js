import React from 'react';
import { FaFacebook, FaPhone, FaAddressCard, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <h5>
                <FaFacebook></FaFacebook>
                 <FaInstagram></FaInstagram>
                 <FaTwitter></FaTwitter>
                 <FaYoutube></FaYoutube>
                 </h5>
                <p>All Rights Reserved &copy; by SyedShajib</p>
            </div>
            <div>
                <li>
                    <a className='text-decoration' href="https://www.javatpoint.com/" target="_blank">Support</a>
                </li>
                <li>
                  <a className='text-decoration' href="https://www.javatpoint.com/" target="_blank">Help</a> 
                </li>
                <li>
                    <a className='text-decoration' href="https://www.javatpoint.com/" target="_blank">Community</a> 
                </li>
                <li>
                    <a className='text-decoration' href="https://www.javatpoint.com/" target="_blank">Advisors</a> 
                </li>
                <li>
                 <a  className='text-decoration' href="https://www.javatpoint.com/" target="_blank">Status</a> 
                </li>   
            </div>
            <div>
                <li>
                 <a  className='text-decoration' href="https://www.javatpoint.com/" target="_blank">Terms and Policies</a> 
                </li>
                <li>
                 <a  className='text-decoration' href="https://www.javatpoint.com/" target="_blank">Terms of Use</a> 
                </li>
                <li>
                 <a  className='text-decoration' href="https://www.javatpoint.com/" target="_blank">About Us</a> 
                </li>
                <li>
                 <a  className='text-decoration' href="https://www.javatpoint.com/" target="_blank">Code of Conduct</a> 
                </li>
                <li>
                 <a  className='text-decoration' href="https://www.javatpoint.com/" target="_blank">Privacy</a> 
                </li>
            </div>
            <div>
                <h4> <FaPhone/> Phone : 01854347634</h4>
                <h4> <FaAddressCard/> Kotbari, Cumilla</h4>
            </div>
        
        </div>
    );
};

export default Footer;