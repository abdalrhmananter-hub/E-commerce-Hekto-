//import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import NavBar from './components/NavBar/NavBar'
import MasterLayout from './components/Masterlayout/MasterLayout'
import NotFound from './components/NotFound/NotFound'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Product from './components/Product/Product'
import AllProducts from './components/AllProducts/AllProducts'
import Profile from './components/Profile/Profile'
import UserContextProvider from './components/userContext/userContext'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MasterLayout/>,
      errorElement:<NotFound/>,
      children:[
        {index:true,element:<Home/>},
        {path:'home',element:<Home/>},
        {path:'login',element:<Login/>},
        {path:'register',element:<Register/>},
        {path:'product',element:<Product/>},
        {path:'product/:id',element:<Product/>},
        {path:'Allproducts',element:<AllProducts/>},
        {path:'profile',element:<Profile/>}
       

      ]
    }
  ])
  return (
    <>
    <UserContextProvider>
    <RouterProvider router={router}></RouterProvider>
    </UserContextProvider>
      
    </>
  )
}

export default App
