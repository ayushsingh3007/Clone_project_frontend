import React from 'react'
import "../Navbar/Navbar.css"
import {  AiOutlineDown } from 'react-icons/ai';

import {BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'
 import Register from '../Register/Register'
import Home from '../Home/Home'
import VideoTutorial from '../StudyMaterial/VideoTutorial';
import MockTest from '../StudyMaterial/MockTest';
import Masterprogram from '../CourseProgram/Masterprogram';
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
      <ul className='navlink-container'>
             <li  className='study-material-drop'>Study Material<AiOutlineDown className='drop-icons'/> 
             <ul className='drop-lists'>
              <li>Video Tutorial</li>
              <li>Mock Test</li>
             </ul>
             </li>
             <li className='course-program-drop'>Courses and program<AiOutlineDown className='drop-icons'/> 
             <ul className='drop-lists-course'>
              <li>Master Competitive Programing</li>
              <li>Full Stack Program</li>
             </ul>
             </li>
             <li>Elevation Academy</li>
             <li className='project-drop'>Project<AiOutlineDown className='drop-icons'/> 
             <ul className='drop-lists-project'>
               <li>HTML</li>
               <li>CSS</li>
               <li>REACT</li>
               <li>JAVASCRIPT</li>
               <li>NODE</li>
               <li>DB</li>
  
             </ul>
             
             
             </li>
      </ul>
    </div>
   
    
      
      <Routes>
      <Route  path='/' element={<Home/>} />

        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/videotutorial' element={<VideoTutorial/>}/>
        <Route path='/mock-test' element={<MockTest/>}/>
        <Route path='/master-competitive-program' element={<Masterprogram/>}></Route>
    
      </Routes>
      
      </BrowserRouter>  

    
    </>
  )
}
