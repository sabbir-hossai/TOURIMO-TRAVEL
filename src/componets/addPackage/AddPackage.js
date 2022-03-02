import axios from 'axios';
import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import './AddPackage.css';

const AddPackage = memo(() => {
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
    return (
        <div>
            <div className='add-confirm mt-5'>
                {/* <h4>{packages.displayName}</h4>
                        <p>{packages.description}</p>
                        <p>Cost: {packages.price}/-</p> */}

                <form className='hookForm' onSubmit={handleSubmit(onSubmit)}>
                    <input type='text'{...register("name")} placeholder="Tour title" />
                    <textarea type='text'{...register("description")} placeholder="description" />
                    <input type='text' {...register("img")} placeholder="Tour title" />
                    <input type='text' {...register("package_states")} placeholder="Package states" />
                    <input type="number" {...register("price")} placeholder="Package Price" />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
});

export default AddPackage;