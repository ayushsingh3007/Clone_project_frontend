import React from 'react'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

import Login from '../Login/Login'
 import Register from '../Register/Register'
import Home from '../Home/Home'
import VideoTutorial from '../StudyMaterial/VideoTutorial';
import MockTest from '../StudyMaterial/MockTest';
import Masterprogram from '../CourseProgram/Masterprogram';
import ElevationAcad from '../Elevation/ElevationAcad';
import Fullstack from '../CourseProgram/FullStack';

import Success from '../Pages/Success';
import AllProject from '../Project/AllProject';

function RouteCompo() {
  return (
    <>
    
    <BrowserRouter>
      <Navbar/>
        
     <Routes>
      <Route  path='/' element={<Home/>} />

        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/videotutorial' element={<VideoTutorial/>}/>
        <Route path='/mock-test' element={<MockTest/>}/>
        <Route path='/master-competitive-program' element={<Masterprogram/>}></Route>
        <Route  path='/elevation-academy' element={<ElevationAcad/>}/>
        <Route path='/fullstack' element={<Fullstack/>}/>
    
         <Route path='/success' element={<Success/>}/>
         <Route path='/projects' element={<AllProject/>}/>
      </Routes>
    
    
    </BrowserRouter>
    
    
    </>
  )
}

export default RouteCompo