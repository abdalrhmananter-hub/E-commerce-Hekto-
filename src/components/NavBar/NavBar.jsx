import React, { useContext } from 'react'
import style from './NavBar.module.css'
import { Link } from 'react-router-dom'


export default function NavBar() {

    return (
        <>
            <div className="container-fluid ">
                <div className="container py-3">
                    <div className="row d-flex justify-content-between px-5">
                        <div className="col-2 d-flex align-item-center"> <p className={`fw-bold mb-0 align-slef-center ${style.fontsHekto} `}>Hekto</p></div>


                        <div className="col-10">
                            <nav className="navbar navbar-expand-lg ">
                                <div className="container-fluid">
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                             <li className="nav-item dropdown">
                                                <Link className={`nav-link  ${style.hov}`}  to="home">
                                                    Home
                                                </Link>
                                            </li>
                                            <li className={`nav-item`}>
                                                <a className={`nav-link  ${style.hov}`} aria-current="page" href="#">Pages</a>
                                            </li>
                                            <li className="nav-item">
                                                <Link className={`nav-link  ${style.hov}`}  to="Allproducts">Products</Link>
                                            </li>
                                            <li className="nav-item">
                                                <a className={`nav-link  ${style.hov}`}  href="#">Blog</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={`nav-link  ${style.hov}`}  href="#">Shop</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={`nav-link  ${style.hov}`}  href="#">Contanct</a>
                                            </li>

                                            
                                        </ul>
                                        <form className="d-flex" role="search">
                                            <input className="form-control rounded-0" type="search"  aria-label="Search" />
                                            <button className={`btn text-light rounded-0 ${style.bg_color} `} type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </div>



                    </div>

                </div>
            </div>

        </>

    )
}