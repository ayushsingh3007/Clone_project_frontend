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
        axios.get("http://localhost:4000/auth", { headers: { "authorization": `Bearer ${token}` } }) 
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