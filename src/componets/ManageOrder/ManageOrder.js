import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MOrder from '../../MOrder/MOrder';

const ManageOrder = () => {
    const [allOrder, setAllOrder] = useState();

    useEffect(() => {
        fetch('https://scary-treat-11337.herokuapp.com/confirms')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [])
    return (
        <div>
            <h1> ManageOrder Orders</h1>

            <div className='container'>
                <h2 className="text-primary mt-5 mb-5">Most Popular Packages</h2>
                <Row xs={1} md={2} className="g-4">
                    {
                        allOrder?.map(orderPackage => <MOrder orderPackage={orderPackage}></MOrder>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default ManageOrder;