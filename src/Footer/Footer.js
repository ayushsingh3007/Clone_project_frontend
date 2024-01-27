import React from 'react'
import "../Footer/Footer.css"
import { FaYoutube,FaInstagram,FaTwitter,FaFacebook,FaPhone } from 'react-icons/fa'
function Footer() {
  return (
    <>
     <div className='footer-container'>
     <div className='footer-item footer-item-1'>
        <div><h2>FOLLOW US</h2></div>
        <div className='social-media-icons'> <FaFacebook  className='media-icons'/><FaInstagram className='media-icons'/><FaTwitter className='media-icons'/><FaYoutube className='media-icons'/></div>
</div>


        <div className='footer-item footer-item-2'>
                <h4  style={{textAlign:'left'}}>Latest Article</h4>
                     <div>
                      <p>Wifi protected acess (WPA) </p>
                      <p>service Set Indentifier
                      </p>
                      <p>Types of Routing </p>
                      <p>Difference between Bytes stuffing and Bit stuffing</p>
                      <p>Multiple access Protocol</p>
                      <p></p>
                      
                     </div>
   
</div>
            <div className='footer-item footer-item-3'>
                       <h4>Quick Links</h4>
                       <div>
                        <p>Interview Notes</p>
                        <p></p>
                        <p>Mock test</p>
                        <p>Placements</p>
                        <p>Program</p>
                        <p>Coding Courses</p>
                        <p>About us</p>
                        

                       </div>
                       </div>
<div className='footer-item footer-item-4'>
      <h4>Contact Us</h4>
    <div><FaPhone className='phone-footer'/>+91983961124</div>
    <div>support@prepbytes.com</div>
</div>




        <div className='footer-item footer-item-5'>
        <h4  >Latest Article</h4>
                     <div>
                      <p>Wifi protected acess (WPA) </p>
                      <p>service Set Indentifier
                      </p>
                      <p>Types of Routing </p>
                      <p>Difference between Bytes stuffing and Bit stuffing</p>
                      <p>Multiple access Protocol</p>
                      <p></p>
                      
                     </div>
                   </div>
<div  className='footer-item-hr'>
  <hr />
  <div>@Copyright2023</div>
  <div><p>Privacy</p><p>Refund Policy</p><p>Terms of Use</p></div>
</div>


        
    
     </div>
     
    </>
  )
}

export default Footer