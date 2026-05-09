import React from 'react'
import Header from '../header/Header'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import UserContextProvider from '../userContext/userContext'


export default function MasterLayout() {

    return (
        <>
            <Header />
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}