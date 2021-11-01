import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";


const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    // console.log(res);
                    alert('added successfully');
                    reset();
                }

            })
    }

    return (
        <div className="container my-5">
            <h1 className="text-center">Add New Package</h1>
            <form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("picture")} placeholder="image" />
                <input {...register("title", { required: true, maxLength: 20 })} placeholder="title" />
                <input type="number" {...register("price")} placeholder="price" />
                <textarea {...register("description")} placeholder="description" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewService;