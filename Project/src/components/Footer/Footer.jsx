import React, { useContext } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../userContext/userContext'


export default function Footer() {
    const {user,setUser} = useContext(UserContext);
    const onlcick  = ()=>{

        setUser(null);
        localStorage.clear();
    }
    return (
        <>
            <div className="container-fluid fbackground ">
                <div className="container">
                    <div className="row d-felx justify-content-between px-5 py-5">
                        <div className="col-3 d-flex flex-column mb-3">
                            <p className='fw-bold mb-0 align-slef-center ffontsHekto '>Hetko</p>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control rounded-0 fText_size" placeholder="Enter Email address" aria-label="Recipient’s username" aria-describedby="button-addon2" />
                                <Link to="register"><button className=" fbtn_color btn btn-outline-secondary border-0 rounded-0 text-light fText_size" type="button" id="button-addon2">Sign up</button></Link>
                            </div>
                            <Link className='ffont_color fText_size fhov mb-3' to="#">Contact info</Link>
                            <a className='ffont_color fText_size fhov' href="#">17 Princess Road, London, Greater London NW1 8JR, UK</a>
                            {user?( <Link to='login'><button className=" fbtn_color btn btn-outline-secondary border-0 rounded-0 text-light fText_size" type="button" id="button-addon2" onClick={onlcick}>Log out</button></Link>) :
                            (<span></span>)}
                           
                        </div>
                        <div className="col-3 d-flex flex-column mb-3">
                            <p className='fsubHeaders' >Catagories</p>
                            <a className='ffont_color fText_size fhov mb-3' href="#">Laptops & Computers</a>
                            <a className='ffont_color fText_size fhov mb-3' href="#">Cameras & Photography</a>
                            <a className='ffont_color fText_size fhov mb-3' href="#">Smart Phones & Tablets</a>
                            <a className='ffont_color fText_size fhov mb-3' href="#">Video Games & Consoles</a>
                            <a className='ffont_color fText_size fhov mb-3' href="#">Waterproof Headphones</a>
                        </div>
                        <div className="col-3 d-flex flex-column mb-3">
                            <p className='fsubHeaders' >Customer Care</p>
                            <a className='ffont_color fText_size fhov mb-3' href="#">My Account</a>
                            <a className='ffont_color fText_size fhov mb-3' href="#">Discount</a>
                            <a className='ffont_color fText_size fhov mb-3' href="#">Returns</a>
                            <a className='ffont_color fText_size fhov mb-3' href="#">Orders History</a>
                            <a className='ffont_color fText_size fhov mb-3' href="#">Order Tracking</a>
                        </div>
                        <div className="col-3 d-flex flex-column mb-3">
                            <p className='fsubHeaders' >Pages</p>
                            <a className='ffont_color fText_size fhov mb-3' href="#">Blog</a>
                            <a className='ffont_color fText_size fhov mb-3' href="#">Browse the Shop</a>
                            <a className='ffont_color fText_size fhov mb-3' href="#">Category</a>
                            <a className='ffont_color fText_size fhov mb-3' href="#">Pre-Built Pages</a>
                            <a className='ffont_color fText_size fhov mb-3' href="#">Visual Composer Elements</a>
                            <a className='ffont_color fText_size fhov mb-3' href="#">Pre-Built Pages</a>
                        </div>
                    </div>


                </div>

            </div>
            <div className="container-fluid bottomFooter-color">
                <div className="container">
                    <div className="row d-flex justify-content-between px-3 py-3 ">
                        <div className="col-auto">
                            <p className='bottomFooter-fontcolor-size mb-0'>©Webecy - All Rights Reserved</p>
                        </div>
                        
                        <div className='d-flex justify-content-between col-auto'>
                            <i className="fa-brands fa-facebook footerIconeColors mx-2"></i>
                            <i className="fa-brands fa-square-instagram footerIconeColors mx-2"></i>
                            <i className="fa-brands fa-twitter footerIconeColors mx-2"></i>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}