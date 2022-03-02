import React from 'react';
import friends from '../../../images/friends.jpeg';
// import hotel from '../../../images/hotel.jpg';
import rest from '../../../images/rest.jpg';
import nature from '../../../images/nature.jpeg';
import tour from '../../../images/ifel tour.jpeg';
import './About.css';

const About = () => {
    return (
        <div>
            <div className='about-section'>
                <div className="row  ">
                    <div className=" mt-5 about col-lg-5 col-md-5 col-sm-12">
                        <h1  > About Us.</h1>
                        <p>We are independent and responsible. We are constantly at your service and we are constantly learning how to serve you better so that you will be happy. So if you are happy with our service, give us a review and if in any case, give us a review, so that we can correct our mistakes.</p>
                    </div>
                    <div className=" col-lg-7 col-md-7 col-sm-12">
                        <img className='food  ' src={nature} alt="" />
                        <img className='aboutImg' src={friends} alt="" />
                        <img className='aboutImg' src={rest} alt="" />
                        <img className='food ' src={tour} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;