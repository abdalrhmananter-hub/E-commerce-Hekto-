
import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../userContext/userContext'
import { useContext } from 'react';



export default function Header() {
    const { user } = useContext(UserContext);
    
    return (
        <>
            <div className={`container-fluid ${style.bg_color}`}>
                <div className='container'>
                    <div className="row d-flex justify-content-between px-5">
                        <div className="col-5 d-flex justify-content-between ">
                            <div className='d-flex'>
                                <i className={`fa-regular fa-envelope align-self-center me-1 ${style.fsize}`}></i>
                                <p className={`align-self-center mt-2 ${style.fsize}`}>mhhasanul@gmail.com</p>

                            </div>
                            <div className="d-flex me-4">
                                <i className={`fa-solid fa-phone align-self-center me-1 ${style.fsize}`}></i>
                                <p className={`align-self-center mt-2 ${style.fsize}`}>(12345)67890</p>
                            </div>
                        </div>
                        <div className="col-5  d-flex text-end justify-content-end align-items-center ">
                            <div className="dropdown">
                                <button className={`${style.fsize} ${style.bg_color} ${style.btn_secondary} btn btn-secondary dropdown-toggle border-0 align-self-center `} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    English
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">Action</button></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className={`${style.fsize} ${style.bg_color} ${style.btn_secondary} btn btn-secondary dropdown-toggle border-0 align-self-center`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    USD
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">Action</button></li>
                                </ul>
                            </div>

                            <div className='d-flex text-end justify-content-end align-items-center'>
                                {user ? (
                                    <span className={`mb-0 text-white me-1 ${style.fsize}`}>
                                        Welcome, {user.name}
                                    </span>
                                ) : (
                                    <Link className={`mb-0 me-1 ${style.fsize}`} to="login">login</Link>
                                )}
                                <i className={`fa-solid fa-user ${style.fsize}`}></i>
                            </div>
                            <div className='d-flex text-end justify-content-end align-items-center ms-1 '>
                                <p className={`mb-0 ${style.fsize}`}>wishlist</p>
                                <i className={`fa-regular fa-heart ${style.fsize} `}></i>
                                <i className={`fa-solid fa-cart-shopping  ms-3 ${style.fsize}`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}