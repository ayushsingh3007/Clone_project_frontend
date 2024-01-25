import React, { useEffect, useState } from 'react';
import '../Dashboard/Dashboard.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "../StudyMaterial/MockTest.css"

const Dashboard = () => {
  
  const [boughtcourses, setBoughtCourses] = useState([]);
  const [firstHandle, setFirstHandle] = useState(false);
  const [localName, setLocalName] = useState(localStorage.getItem('selfname'));

  useEffect(() => {
    const buyData = async () => {
      try {
        const response = await axios.get('http://localhost:4200/bought');
        setBoughtCourses(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    buyData();
  }, []);

  const sidebarStyle = {
    width: firstHandle ? '6%' : '18%',
    transition: 'width 2s',
  };

  const hideTextsStyle = {
    display: firstHandle ? 'none' : 'block',
  };

  const handleIconClick = () => {
    setFirstHandle(!firstHandle);
  };

  const handleLogout = () => {
    localStorage.clear('token')
    setBoughtCourses([])
    localStorage.removeItem('selfname');
   
    setLocalName(null);
    
  };

  return (
    <>
    
      <div className="dashboard-navbar-container2">
        <div className="header-container2">
          <div className="dashboard-navbar-subitem1">
            <div className="icon-handle-padding">
              {firstHandle ? (
                <div style={sidebarStyle}> <FaBars onClick={handleIconClick} /> </div>
              ) : (
                <div style={sidebarStyle}> <FontAwesomeIcon onClick={handleIconClick} icon={faTimes} /> </div>
              )}
            </div>
            <div className="header-logo2">
              <NavLink to="/"><img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg" alt="not loaded" className="logo-size2" /></NavLink>
            </div>
          </div>
        </div>
        <div className="dropdown1">
          <div className="dropbtn1">
            <div className="navbar-naming-styles">
              <div className="text-round-style2">{localName?.[0]?.toUpperCase()}</div>
              <div className="naming-style"><span>Hi </span>{localName} </div>
            </div>
          </div>
          <div className="dropdown-content1">
            <button className="navbar-logout-btn1"><NavLink to="/dashboard"> Courses</NavLink></button>
            <hr />
            <button onClick={handleLogout} className="navbar-logout-btn1"><NavLink to="/">Logout</NavLink ></button>
          </div>
        </div>
        <div className="dashboard-side-bar">
          <div className="dashboard-side-bar-item1" style={sidebarStyle}>
            <div><svg className="MuiSvgIcon-root" color='grey' focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0L5 13.18zm6.04-9.66l-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19a2.04 2.04 0 00-1.92 0z"></path></svg><NavLink to="/dashboard" className="text-dec-none" style={hideTextsStyle}>Courses</NavLink></div>
            <div><svg className="MuiSvgIcon-root" color='grey'focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"></path></svg><NavLink to="/Selfinfo" className="text-dec-none" style={hideTextsStyle}>ProfileInfo</NavLink></div>
            <div><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 9 9 9s-1.5-.67-1.5-1.5S8.17 7 9 7zm6 10.25c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-6.75c-.83 0-1.5.67-1.5 1.5S14.17 16 15 16s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></svg><NavLink to="/dashboard" className="text-dec-none" style={hideTextsStyle}>Accountinfo</NavLink></div>
            <div><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg><NavLink to="/dashboard" className="text-dec-none" style={hideTextsStyle}>Settings</NavLink></div>
          </div>
          <div className='container-dashboard'>
            <div className='courses-length-dashboard'>
              <h4>Course({boughtcourses.length})</h4>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
      

     </>
  );
};

export default Dashboard;