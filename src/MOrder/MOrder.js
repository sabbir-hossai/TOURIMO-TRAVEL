import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MyOrder.css';

const MOrder = (props) => {
    const { _id, tourTitle, price, description, img } = props.orderPackage;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className='PackageImg' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title> {tourTitle}</Card.Title>

                        <Card.Text>Price: {price} </Card.Text>
                        <Card.Text> {description.slice(0, 325)} </Card.Text>
                        <Link ><button className="btn btn-primary">Order cancel</button></Link>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default MOrder;