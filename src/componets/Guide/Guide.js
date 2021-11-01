import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Guide = (props) => {
    console.log(props)
    const { name, img } = props.guide;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title> {name}</Card.Title>

                        {/* <Card.Text>Price: {price} </Card.Text>
                        <Card.Text> {description.slice(0, 325)} </Card.Text>
                        <Link to={`/booking/${_id}`}><button className="btn btn-primary">Book here</button></Link> */}

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Guide;