import React, { useEffect, useState } from 'react'
import "../Navbar/Navbar.css"
import {  AiOutlineDown,AiOutlineMenu } from 'react-icons/ai';

import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';


export default function Navbar() {
  const navigate=useNavigate()
   let token=localStorage.getItem('token')
   let username=localStorage.getItem('selfname')
   const [menuOpen, setMenuOpen] = useState(false);
   const [userIcon,setuserIcon]=useState(false)
   const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const handleusericon=()=>{
    setuserIcon(!userIcon)
  }

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  useEffect(() => {
    if (token) {
      console.log(token);
        axios.get("https://clone-backend-evgl.onrender.com/auth", { headers: { "authorization": `Bearer ${token}` } }) 
            .then((res) => {
                console.log(res.data.msg);
                if (res.data.msg ==="User Authorized") {
                      // setloginout(true);
                      //setprofilename(localStorage.getItem("selfname"))
                      navigate("/")                  

              }                
              
            
            })
            .catch(err => console.log(err))
    }
    
}, [token,navigate])

// const selfdashboard=()=>{
//   navigate("/Selfinfo")
// }
const logoutbtn=()=>{
  localStorage.clear('token')
  // setloginout(false)
  navigate('/login')
  
  
}

  return (
    <>

    
    
    {userIcon && (<div className='usericonclick'>
            <span className='usericondashborad'>
              <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4yMjMiIGhlaWdodD0iMjIuODg4IiB2aWV3Qm94PSIwIDAgMTkuMjIzIDIyLjg4OCI+CiAgPGcgaWQ9InJlYWRpbmctYm9vayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwLjk5NCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMSIgZGF0YS1uYW1lPSJQYXRoIDEiIGQ9Ik02MC4yMTcsMTQuNzUyYTIuMjM5LDIuMjM5LDAsMCwwLTEuNzg4LTIuMTlWMTAuMTQ4YS42NzEuNjcxLDAsMCwwLS45MDYtLjYyOGwtMS4yOC40OGE3LjgxOCw3LjgxOCwwLDAsMC0yLjk4MS0xLjkzNiw0LjQ3LDQuNDcsMCwxLDAtNS4zMTIsMEE3LjgxOCw3LjgxOCwwLDAsMCw0NC45NjgsMTBsLTEuMjgtLjQ4YS42NzEuNjcxLDAsMCwwLS45MDYuNjI4djIuNDE0YTIuMjM1LDIuMjM1LDAsMCwwLDAsNC4zOHYyLjU5M2EuNjcxLjY3MSwwLDAsMCwuNDM1LjYyOGw3LjE1MywyLjY4MmEuNjc4LjY3OCwwLDAsMCwuNDcxLDBsNy4xNTMtMi42ODJhLjY3MS42NzEsMCwwLDAsLjQzNS0uNjI4VjE2Ljk0MkEyLjIzOSwyLjIzOSwwLDAsMCw2MC4yMTcsMTQuNzUyWk00Ny40NzYsNC40N0EzLjEyOSwzLjEyOSwwLDEsMSw1MC42MDUsNy42LDMuMTMzLDMuMTMzLDAsMCwxLDQ3LjQ3Niw0LjQ3Wm0zLjEyOSw0LjQ3YTYuNDcyLDYuNDcyLDAsMCwxLDQuMjQyLDEuNTgybC00LjI0MiwxLjU5MS00LjI0Mi0xLjU5MUE2LjQ3Miw2LjQ3MiwwLDAsMSw1MC42MDUsOC45NDFabS04LjI3LDUuODExYS45LjksMCwwLDEsLjg5NC0uODk0aC40NDd2MS43ODhoLS40NDdBLjkuOSwwLDAsMSw0Mi4zMzUsMTQuNzUyWm0xLjc4OCwyLjIxM2ExLjEyLDEuMTIsMCwwLDAsLjg5NC0xLjFWMTMuNjM1YTEuMTIsMS4xMiwwLDAsMC0uODk0LTEuMVYxMS4xMTVsNS44MTEsMi4xNzlWMjEuMjVsLTUuODExLTIuMTc5Wm03LjE1Myw0LjI4NVYxMy4yOTVsNS44MTEtMi4xNzlWMTIuNTRhMS4xMiwxLjEyLDAsMCwwLS44OTQsMS4xVjE1Ljg3YTEuMTIsMS4xMiwwLDAsMCwuODk0LDEuMXYyLjEwNlptNi43MDYtNS42aC0uNDQ3VjEzLjg1OGguNDQ3YS44OTQuODk0LDAsMCwxLDAsMS43ODhaIiBmaWxsPSIjMDM2Ii8+CiAgPC9nPgo8L3N2Zz4K' alt=''/>  My Dashboard</span><hr/>
          <span className='usericonlogout' onClick={logoutbtn}>Logout</span></div>)}
      

<div className='nav-container'>
        <div>
          
         <Link to="/"><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg' alt='not-found' className='logo-img'/></Link></div>
       {token?  <p onClick={handleusericon} className='usernamewithicon'><span>{username[0].toUpperCase()}</span>Hi {username.toUpperCase()} </p> : <div className='button-container'>
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
               <li><Link to="/html">HTML</Link></li>
               <li><Link to='/css'>CSS</Link></li>
               <li><Link to='/react'>REACT</Link></li>
               <li><Link to='java'>JAVASCRIPT</Link></li>
               <li><Link to='/node'>NODE</Link></li>
               <li><Link to='/db'>DB</Link></li>
  
             </ul>
             
             
             </li>
      </ul>
      <div className='menuicon' onClick={handleMenuToggle}><AiOutlineMenu /></div>
        </div>

        {menuOpen && (
          <div className='mobile-menu'>
            <ul>
             {token? <li><Link to='/dashboard'  onClick={handleLinkClick}>Dashboard</Link></li>:""}
              <li><Link to='/elevation-academy'  onClick={handleLinkClick}>Elevation Academy</Link></li>
              <li><Link to='/videotutorial'  onClick={handleLinkClick}>Video Tutorial</Link></li>
              <li><Link to='/mock-test'  onClick={handleLinkClick}>Mock Test</Link></li>
              <li><Link to='/fullstack'  onClick={handleLinkClick}>Full Stack Program</Link></li>
              <li><Link to='/master-competitive-program'  onClick={handleLinkClick}>Master Competitive Programming</Link></li>
              {token?<li><Link to='/projects' >Project</Link></li>:""}

            {token? "" :<li><Link to='/login'  onClick={handleLinkClick}>Login</Link></li>}
             {token?"": <li><Link to='/register'  onClick={handleLinkClick}>Sign up</Link></li>}
              {token?<li><Link   onClick={logoutbtn}>logout</Link></li>:""}

            </ul>
          </div>
        )}
      
      
    
    </>
  )
}