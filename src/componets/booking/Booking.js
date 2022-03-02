import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css'
import { Card } from 'react-bootstrap';

const Booking = () => {
    const { users } = useAuth();
    const { packageID } = useParams();
    console.log(packageID)

    const [packages, setPackages] = useState({});

    useEffect(() => {
        fetch(`https://scary-treat-11337.herokuapp.com/packages/${packageID}`)
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://scary-treat-11337.herokuapp.com/confirms', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })

    };


    console.log(packages)
    return (
        <div className="booking-container">

            <div className="container ">
                <div className="booking-section">
                    <div className=' package-container card-shadow'>
                        <h1 className="mt-3 mb-5 text-primary">packages <span className='text-warning '>info</span> </h1>
                        <div className='packInfo container'>
                            <div>
                                <img src={packages?.img} alt="" />
                            </div>
                            <div>
                                <div className='  '>
                                    <Card.Body>
                                        <Card.Title> {packages.tourTitle}</Card.Title>

                                        <Card.Title>Price: {packages.price} </Card.Title>
                                        <Card.Text className='PackageText'> {packages.description} </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='add-confirm'>
                        {/* <h4>{packages.displayName}</h4>
                        <p>{packages.description}</p>
                        <p>Cost: {packages.price}/-</p> */}
                        <h1>Booking now</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type='text'{...register("user")} value={users.displayName || ""} />
                            <input type='text'{...register("email")} value={users.email || ""} />
                            <input type='text'{...register("name")} value={packages.tourTitle || ""} />
                            <textarea type='text'{...register("description")} defaultValue={packages.description} />
                            <input type='text' {...register("img")} value={packages.img || ""} />
                            <input type='text' {...register("package_states")} value={packages.package_states || ""} />
                            <input type="text" {...register("price")} value={packages.price || ""} />

                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Booking;

