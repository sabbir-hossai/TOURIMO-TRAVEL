import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';

import Guide from '../../Guide/Guide';
import About from '../About/About';
import Package from '../package/Package';
import ReviewsShow from '../Reviews/ReviewsShow/ReviewsShow';
import './Home.css';

const Home = () => {
    const [tourPackages, setTourPackages] = useState();
    const [guides, setGuides] = useState();
    console.log(guides)


    useEffect(() => {
        fetch('https://scary-treat-11337.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setTourPackages(data))
    }, [])

    // tourist guide
    useEffect(() => {
        fetch('https://scary-treat-11337.herokuapp.com/guides')
            .then(res => res.json())
            .then(data => setGuides(data))
    }, [])
    return (
        <div className="carousel">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 height"
                        src="https://i.ibb.co/ZW7rm6x/beach-1824855-960-720.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Travel With Us</h3>
                        <p>For The Best Deal</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-20px"
                        src="https://i.ibb.co/Gt0rQPd/architecture-2149059-960-720.webp"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-20 px"
                        src="https://i.ibb.co/hXRg1yV/oilseed-rape-2135026-960-720.webp"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* about  */}
            <div className='m-5'>
                <About></About>
            </div>

            {/* tourPackage  */}
            <div className='mt-5 mb-5 pb-5'>
                <div className='packageBody'>
                    <div className='container'>
                        <h2 className="text-primary mt-5 mb-5">Discover the touch of  <span className='text-warning '>nature</span> </h2>
                        <Row xs={1} md={3} className="g-4">
                            {
                                tourPackages?.map(tourPackage => <Package
                                    id={tourPackage._id}
                                    tourPackage={tourPackage}></Package>)
                            }
                        </Row>
                    </div>
                </div>
            </div>



            {/* tourist guide */}
            <div className='mt-5 mb-5'>
                <div className='packageBody '>
                    <div className='container'>
                        <h2 className="text-primary mt-5 mb-5">Most Popular <span className='text-warning '>Guides</span></h2>
                        <Row xs={1} md={3} className="g-4">
                            {
                                guides?.map(guide => <Guide guide={guide}></Guide>)
                            }
                        </Row>
                    </div>
                </div>
            </div>


            {/* Tips Before Travel */}
            {/* <div className='container'>
                <h2 className="text-primary mt-5 mb-5">Tips Before Travel</h2>
                <h5>Security & Health</h5>
                <p>
                    1. Check-in with your doctor and insurance carrier. Double check and make sure that you have all of the proper vaccinations and that you have renewed all essential prescriptions. Also, ask you medical insurance provider if your policy applies overseas for emergencies. If it doesn’t, and you want to add extra coverage, consider supplemental insurance.
                </p>
                <p>
                    2. Bring copies of your passport. If your passport gets stolen or lost you want to be sure that you can still get back into the country, or be able to prove your citizenship.
                </p>
                <p>
                    3. Leave a copy of your passport. For extra backup, leave a copy of your passport at home or with someone you trust. Consider making an electronic copy you can store in your email account as well.
                </p>
                <p>
                    4. Register with your embassy. If there’s a problem in the country, this will make it easier for your government to contact you and get you to safety.
                </p>

                <h5>Money</h5>
                <p> 5. Look up the monetary conversion before you go. Finding out that one Danish Krone is equal to just 19 cents … bad surprise. Make sure you do your math before you travel to get a sense of where the conversion rate is at.</p>

                <p>6. Make sure your credit card will work in the country you're visiting. European banks have switched almost completely to the more secure chip-and-PIN technology, and fewer businesses abroad are accepting the outdated magnetic-strip cards.</p>
                <p>
                    7. Go to a bank or ATM in the country you’re visiting. The conversion centers in the airport or around the city tend to be huge rip-offs. You won’t get charged as many fees at the ATM or the bank, and the conversion will be exact.
                </p>
                <p>8. Always have local cash. Not every place takes credit cards. Especially important places like trains or buses.</p>
                <p>
                    9. Call your bank or credit card provider. Sometimes banks think that fraud may be occurring if transactions are suddenly happening in Bali when you’re from Jersey, and they will turn off your card as a security measure.
                </p>
                <p>
                    10. Check the country’s entrance/exit fees. Some countries require travelers to pay in order to enter or leave the country. These fees are not included in the price of your airline ticket, and can range from $25 to $200.
                </p>
            </div> */}


            {/* reviews section  */}
            <div>
                <ReviewsShow></ReviewsShow>
            </div>
        </div>
    );
};

export default Home;