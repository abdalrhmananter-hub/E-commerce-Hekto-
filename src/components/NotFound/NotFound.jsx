import React from 'react'

import pic from '../../assets/Group 197.png'
import pic2 from '../../assets/image 1174.png'
import { Link } from 'react-router-dom'
import Topper from '../Topper/Topper'
import Header from '../header/Header'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

export default function NotFound(){
    return(
        <>
            <Header/>
            <NavBar/>

            <Topper title={"404 Not Found"} breadcrumb={"Not fond"}/>
            <div className="container p-5">
               <Link to="home"><img className='w-100' src={pic} alt="" /></Link>
               <img className='w-100 py-5' src={pic2} alt="" />
               
            </div>
            <Footer/>
        </>
    )
}