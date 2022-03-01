import React from 'react';
import Navbar from '../../Homes/Navbar/Navbar';
import food from '../../../images/food.jpg';
import food1 from '../../../images/food1.jpg';
import hotel from '../../../images/hotel.jpg';
import rest from '../../../images/rest.jpg';
import sabbir from '../../../images/sabbir.jpg';
import towhidul from '../../../images/towhidol.jpg';

import './About.css';
// import Map from '../Map/Map';
import Footer from '../../Homes/Footer/Footer';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* top section  */}
            <div className='container m-1'>
                <div className="row  ">
                    <div className=" col-lg-5 col-md-5 col-sm-12">
                        <h1  > About Us.</h1>
                        <p>We are independent and responsible. We are constantly at your service and we are constantly learning how to serve you better so that you will be happy. So if you are happy with our service, give us a review and if in any case, give us a review, so that we can correct our mistakes.</p>
                    </div>
                    <div className=" col-lg-7 col-md-7 col-sm-12">
                        <img className='food' src={food} alt="" />
                        <img className='aboutImg' src={hotel} alt="" />
                        <img className='aboutImg' src={rest} alt="" />
                        <img className='food' src={food1} alt="" />
                    </div>
                </div>
            </div>
            {/* Founder section  */}
            <div className='container m-1'>
                <div>
                    <h1>Founder</h1>
                    <p>We are a unique fantastic team and we are always <br /> ready to provide you world-class service</p>
                </div>
                <div className='mt-5'>
                    <div className="row row-cols-1 row-cols-md-6 row-cols-lg-4 g-4">
                        <div className="col">
                            <div className="">
                                <img src={sabbir} className="card-img-top Co-founderImg" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Sabbir Hossain</h5>
                                    <p className="card-text">Co-founder and Chief Executive</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className=" ">
                                <img src="https://i.ibb.co/8PbfdNL/f.jpg" className="card-img-top Co-founderImg" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Maruful Tamal</h5>
                                    <p className="card-text">Co-founder and Chief Executive</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className=" ">
                                <img src="..." className="card-img-top Co-founderImg" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Mahbubur Rahman Emon</h5>
                                    <p className="card-text">Managing Director</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className=" ">
                                <img src={towhidul} className="card-img-top Co-founderImg" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Towhidul Islam</h5>
                                    <p className="card-text">Co-founder, Chairman</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* map  */}
            <div className=''>
                {/* <Map></Map> */}
            </div>
            <div className=''>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default About;