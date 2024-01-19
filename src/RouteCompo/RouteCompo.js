import React from 'react'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'

import Dashboard from "../Dashboard/Dashboard"
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
import Navbar from '../Navbar/Navbar'
import Html from '../Project/Html'
import Css from '../Project/Css'
import JavaCompo from '../Project/JavaCompo'
import ReactCompo from '../Project/ReactCompo'
import NodeCompo from '../Project/NodeCompo'

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
        <Route path='/master-competitive-program' element={<Masterprogram/>}/>
        <Route  path='/elevation-academy' element={<ElevationAcad/>}/>
        <Route path='/fullstack' element={<Fullstack/>}/>
          <Route path='/html' element={<Html/>}/>
          <Route path='/css' element={<Css/>}/>
          <Route path='/react' element={<ReactCompo/>}/>
          <Route path='/java' element={<JavaCompo/>}/>
           <Route path='/node' element={<NodeCompo/>}/>

         <Route path='/success' element={<Success/>}/>
         <Route path='/projects' element={<AllProject/>}/>
         <Route path='/dashboard'element={<Dashboard/>}/>

      </Routes>
    
    
    </BrowserRouter>
    
    
    </>
  )
}

export default RouteCompo