import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Guide.css';

const Guide = (props) => {
    console.log(props)
    const { name, img } = props.guide;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className='guideImg' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Guide;