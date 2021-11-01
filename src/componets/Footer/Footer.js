import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-item'>
                <div>
                    <h3>About</h3>
                    <ul>
                        <li>About Tourimo</li>
                        <li>Tour Information</li>
                        <li>Tourist feedback</li>
                        <li>Help Center</li>
                    </ul>
                </div>
                <div>
                    <h3>Info</h3>
                    <ul>
                        <li>search</li>
                        <li>Contact us</li>

                    </ul>

                </div>
            </div>
            <div className='bg-dark text-light'><p>Copyright © 2013 All Right Reserved, by developer Sabbir Hossain</p></div>
        </div>
    );
};

export default Footer;