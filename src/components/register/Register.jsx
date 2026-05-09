import React, { useState } from 'react';
import './Register.css';
import Topper from '../Topper/Topper';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [serverMessage, setServerMessage] = useState('');
    const [serverError, setServerError] = useState('');
    

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = async (data) => {
        try {
            
            setServerMessage('');
            setServerError('');

            
            const response = await axios.post('https://e-commerce-hekto-back-end.vercel.app/users/register', data);

           
            setServerMessage('Account was created successfully, Click on login icon in the top of the page to login');

        } catch (error) {
          
            setServerError(error.response?.data?.message || 'Server connection error');
        }
    };

    return (
        <>
            <Topper title={"Register"} breadcrumb={"Register"} />
            <div className="container d-flex justify-content-center my-5">
                <div className="w-50 bg-white shadow text-center p-5">

                    <h2>Create a new account</h2>
                    <p className='ltcolor'>Please fill the below fields:</p>

                    {serverMessage && <p style={{ color: 'green', fontWeight: 'bold' }}>{serverMessage}</p>}
                    {serverError && <p style={{ color: 'red', fontWeight: 'bold' }}>{serverError}</p>}


                    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="floatingName" 
                                placeholder="Your Name" 
                                {...register("name", { required: "Name is required" })} 
                            />
                            <label htmlFor="floatingName">Name</label>

                            {errors.name && <span style={{ color: 'red', fontSize: '12px', textAlign: 'left' }}>{errors.name.message}</span>}
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                                type="email" 
                                className="form-control" 
                                id="floatingEmail" 
                                placeholder="name@example.com" 
                                {...register("email", { 
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid Email Format" }
                                })} 
                            />
                            <label htmlFor="floatingEmail">Email address</label>
            
                            {errors.email && <span style={{ color: 'red', fontSize: '12px', textAlign: 'left' }}>{errors.email.message}</span>}
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                                type="password" 
                                className="form-control" 
                                style={{ width: '100%', padding: '8px', marginTop: '5px' }} 
                                id="floatingPassword" 
                                placeholder="Password" 
                                {...register("password", { 
                                    required: "Password is required",
                                    minLength: { value: 3, message: "The minimum length should be 3 letters" }
                                })} 
                            />
                            <label className='ltcolor' htmlFor="floatingPassword">Password</label>
    
                            {errors.password && <span style={{ color: 'red', fontSize: '12px', textAlign: 'left' }}>{errors.password.message}</span>}
                        </div>

                        <button type="submit" className="btn btn_color mt-3">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
