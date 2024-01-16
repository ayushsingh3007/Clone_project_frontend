import React, { useEffect, useState } from 'react'
import "../Navbar/Navbar.css"
import {  AiOutlineDown,AiOutlineMenu } from 'react-icons/ai';

import {BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import Login from '../Login/Login'
 import Register from '../Register/Register'
import Home from '../Home/Home'
import VideoTutorial from '../StudyMaterial/VideoTutorial';
import MockTest from '../StudyMaterial/MockTest';
import Masterprogram from '../CourseProgram/Masterprogram';
import ElevationAcad from '../Elevation/ElevationAcad';
import Fullstack from '../CourseProgram/FullStack';
import Dashboard from '../Dashboard/Dashboard';
import Success from '../Pages/Success';
import AllProject from '../Project/AllProject';

import axios from 'axios';


export default function Navbar() {
  // const navigate=useNavigate()
   let token=localStorage.getItem('token')
   let username=localStorage.getItem('selfname')
   const [menuOpen, setMenuOpen] = useState(false);
   const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  useEffect(() => {
    if (token) {
      console.log(token);
        axios.get("https://prepbytesclonebackend.onrender.com/auth", { headers: { "authorization": `Bearer ${token}` } }) 
            .then((res) => {
                console.log(res.data.msg);
                if (res.data.msg ==="User Authorized") {
                      // setloginout(true);
                      //setprofilename(localStorage.getItem("selfname"))
                      //navigate("/")                  

              }                
              
            
            })
            .catch(err => console.log(err))
    }
    
}, [token])

// const selfdashboard=()=>{
//   navigate("/Selfinfo")
// }
const logoutbtn=()=>{
  localStorage.clear('token')
  // setloginout(false)
  
  
  // navigate('/Login')
}

  return (
    <>
    
    <BrowserRouter>



      

<div className='nav-container'>
        <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg' alt='not-found' className='logo-img'/></div>
       {token?`Hi, ${username} `: <div className='button-container'>
        <button className='login-btn' ><Link to="/login" style={{textDecoration:'none',color:' #ff219f'}}>Login</Link></button>
        <button className='signup-btn'><Link to="/register" style={{textDecoration:'none',color:'white'}}>Sing up</Link></button>
        </div>}
      <ul className='navlink-container'>
             <li  className='study-material-drop'>Study Material<AiOutlineDown className='drop-icons'/> 
             <ul className='drop-lists'>
              <li><Link to="/videotutorial">Video Tutorial</Link></li>
              <li><Link to='/mock-test'>Mock Test</Link></li>
             </ul>
             </li>
             <li className='course-program-drop'>Courses and program<AiOutlineDown className='drop-icons'/> 
             <ul className='drop-lists-course'>
              <li><Link to='/master-competitive-program'>Master Competitive Programing</Link></li>
              <li><Link to='/fullstack'>Full Stack Program</Link></li>
             </ul>
             </li>
             <li><Link to='/elevation-academy'>Elevation Academy</Link></li>
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
      <div className='menuicon' onClick={handleMenuToggle}><AiOutlineMenu /></div>
        </div>

        {menuOpen && (
          <div className='mobile-menu'>
            <ul>
              <li><Link to='/dashboard'  onClick={handleLinkClick}>Dashboard</Link></li>
              <li><Link to='/elevation-academy'  onClick={handleLinkClick}>Elevation Academy</Link></li>
              <li><Link to='/videotutorial'  onClick={handleLinkClick}>Video Tutorial</Link></li>
              <li><Link to='/mock-test'  onClick={handleLinkClick}>Mock Test</Link></li>
              <li><Link to='/fullstack'  onClick={handleLinkClick}>Full Stack Program</Link></li>
              <li><Link to='/master-competitive-program'  onClick={handleLinkClick}>Master Competitive Programming</Link></li>
              <li><Link to='/login'  onClick={handleLinkClick}>Login</Link></li>
              <li><Link to='/register'  onClick={handleLinkClick}>Sign up</Link></li>
              <li><Link   onClick={logoutbtn}>logout</Link></li>

            </ul>
          </div>
        )}
      
      <Routes>
      <Route  path='/' element={<Home/>} />

        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/videotutorial' element={<VideoTutorial/>}/>
        <Route path='/mock-test' element={<MockTest/>}/>
        <Route path='/master-competitive-program' element={<Masterprogram/>}></Route>
        <Route  path='/elevation-academy' element={<ElevationAcad/>}/>
        <Route path='/fullstack' element={<Fullstack/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/success' element={<Success/>}/>
         <Route path='/projects' element={<AllProject/>}/>
      </Routes>
      
      </BrowserRouter>  

    
    </>
  )
}