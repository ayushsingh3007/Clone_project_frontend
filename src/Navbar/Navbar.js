import React from 'react'
import "../Navbar/Navbar.css"

import {BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'
 import Register from '../Register/Register'
import Home from '../Home/Home'
export default function Navbar() {
   
  return (
    <>
    
    <BrowserRouter>
        
    <div className='nav-container'>
        <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg' alt='not-found' className='logo-img'/></div>
        <div className='button-container'>
        <button className='login-btn' ><Link to="/login">Login</Link></button>
        <button className='signup-btn'><Link to="/register">Sing up</Link></button>
        </div>
    </div>
    
    
      
      <Routes>
      <Route  path='/' element={<Home/>} />

        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>

    
      </Routes>
      
      </BrowserRouter>  

    
    </>
  )
}
