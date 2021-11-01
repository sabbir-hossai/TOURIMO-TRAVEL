import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const { _id, tourTitle, price, description, img } = props.tourPackage;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title> {tourTitle}</Card.Title>

                        <Card.Text>Price: {price} </Card.Text>
                        <Card.Text> {description.slice(0, 325)} </Card.Text>
                        <Link to={`/booking/${_id}`}><button className="btn btn-primary">Book here</button></Link>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Package;