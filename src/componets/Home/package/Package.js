import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './package.css';

const Package = (props) => {
    const { _id, tourTitle, price, description, img } = props.tourPackage;
    return (
        <div>
            <Col>
                <div>
                    <Card.Img className="PackageImg" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title> {tourTitle}</Card.Title>

                        <Card.Title>Price: {price} </Card.Title>
                        <Card.Text className='PackageText'> {description.slice(0, 225)} </Card.Text>
                        <Link to={`/booking/${_id}`}><button className="btn btn-primary">Book here</button></Link>

                    </Card.Body>
                </div>

            </Col>
        </div>
    );
};

export default Package;