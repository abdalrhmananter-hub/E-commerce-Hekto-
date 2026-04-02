import React, { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom'
import Topper from '../Topper/Topper'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import footerPic from '../../assets/image 1174.png'
import { useContext } from 'react';
import { UserContext } from '../userContext/userContext';



export default function Login() {

    const { setUser } = useContext(UserContext);    
    const navigate = useNavigate();
    const [serverError, setServerError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors}
    } = useForm();

    const onSubmit = async (data) => {
        try {
            setServerError("");


            const response = await axios.post('http://localhost:5000/users/login', data);


            localStorage.setItem('userToken', response.data.userData.token);
            console.log(response);
            localStorage.setItem('user', JSON.stringify(response.data.userData.user));
            setUser(response.data.userData.user);

            //console.log(response.data.userData.user)
            navigate('/profile');

        } catch (error) {

            setServerError(error.response?.data?.Message || "Server connection error");
        }
    };
    return (
        <>
            <Topper title={"Login"} breadcrumb={"Login"} />

            <div className="container d-flex justify-content-center my-5">
                <div className="div w-50 bg-white shadow text-center">
                    <div className="div mt-3">
                        <h2 className='my-1'>Login</h2>
                        <p className='mt-2 ltcolor'>Please login using account detail bellow.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="div px-5 ">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control my-5" id="floatingInput" placeholder="name@example.com"
                                    {...register("email", { required: "Required Email", pattern: { value: /^\S+@\S+$/i, message: "Invalid Email Format" } })} />
                                <label for="floatingInput">Email address</label>
                                {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email.message}</p>}
                            </div>
                            <div className="form-floating my-5">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                    {...register("password", { required: "Password is required ", minLength: { value: 3, message: "The mininmum length should be 3 letters" } })} />
                                <label for="floatingPassword">Password</label>
                                {serverError && <p style={{ color: 'orange', fontWeight: 'bold' }}>{serverError}</p>}
                            </div>
                            <div className="div mt-3">
                                <p className='ltcolor text-start'>Forgot your password?</p>
                            </div>
                            <div>
                                <button type="submit" class="btn btn_color rounded-0 w-100 mb-4 ">Log in</button>
                            </div>
                            <div className='mb-4'>
                                <Link className='ltcolor ' to="../register">Don’t have an Account?Create account</Link>
                            </div>

                        </div>
                    </form>
                </div>
               
            </div>

        </>
    )
}