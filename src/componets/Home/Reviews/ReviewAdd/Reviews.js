import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './Reviews.css';
import useFirebase from '../../../../hooks/useFirebase';

const Reviews = () => {
    const { users } = useFirebase();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://scary-treat-11337.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review successfully added');
                    reset();
                }
            })
    };
    return (
        <div className='add-confirm'>
            <form className="loginContainer" onSubmit={handleSubmit(onSubmit)}>
                <input type='text'{...register("name")} defaultValue={users?.displayName} />
                <input type='text'{...register("laptopTitle")} defaultValue={users?.email} />
                <textarea type='text'{...register("description")} placeholder='Type your review' />
                <textarea type='text'{...register("star")} placeholder='Type your review' />
                <input className='btn-primary' type="submit" />
            </form>
        </div>
    );
};

export default Reviews;