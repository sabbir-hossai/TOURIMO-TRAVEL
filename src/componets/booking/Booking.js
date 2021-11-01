import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css'

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
            <div>
                <h1 className="text-primary">Tourist info</h1>
                <h4> Name: {users.displayName}      Email: {users.email}</h4>
            </div>
            <div className="mt-5 mb-5">
                <h1 className="text-primary">packages info</h1>

            </div>
            <div className="container ">
                <div className="package-container">
                    <div>
                        <img src={packages?.img} alt="" />
                    </div>
                    <div className='add-confirm'>
                        {/* <h4>{packages.displayName}</h4>
                        <p>{packages.description}</p>
                        <p>Cost: {packages.price}/-</p> */}

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type='text'{...register("name")} value={packages.tourTitle || ""} />
                            <textarea type='text'{...register("description")} defaultValue={packages.description} />
                            <input type='text' {...register("img")} value={packages.img || ""} />
                            <input type='text' {...register("package_states")} value={packages.package_states || ""} />
                            <input type="number" {...register("price")} value={packages.price || ""} />

                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Booking;

