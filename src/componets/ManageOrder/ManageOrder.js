import React, { useEffect, useState } from 'react';
import { Row, Table, } from 'react-bootstrap';
import MOrder from '../../MOrder/MOrder';

const ManageOrder = () => {
    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        fetch('https://scary-treat-11337.herokuapp.com/confirms')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [])

    const handeldelete = id => {
        console.log(id)
        const url = `https://scary-treat-11337.herokuapp.com/confirms/${id}`;

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('are you want to delete')
                    const remaining = allOrder.filter(order => order._id !== id);
                    setAllOrder(remaining)
                }
                console.log(data)
            })
    }
    return (
        <div className='packageBody'>


            <div className='container'>
                <h1>Total orders</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Package Name</th>
                            <th>Tourist Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrder.map(order =>
                                <tr>

                                    <td> {order.name}</td>
                                    <td> {order.user}</td>
                                    <td> {order.price}</td>
                                    <td> <button onClick={() => handeldelete(order._id)} className='btn btn-dark'>X</button> </td>
                                </tr>
                            )
                        }


                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageOrder;