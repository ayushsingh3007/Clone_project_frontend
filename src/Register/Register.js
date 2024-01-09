import React from 'react'
import '../Register/Register.css'
import {Link} from "react-router-dom"
function Register() {
  return (
    <>
    
    <section className='register-container'>
         <div className='register-all-item'>

            <div className='img-container'>
                <div className='img-item'>
                  <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/illustrated.webp' alt=''/>
                </div>



                <div className='card-item-register'>
                  <div className='logo-img-container'>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/logo.webp' alt=''/>
                  </div>


                  <div className='student-enrolled-item'>
                
                  <img  src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/students.webp' alt=''/>
                  <div><h4 className='rating-text'>10K+</h4>
                  <p>Students Enrolled</p>
                
                    </div>
                  </div>


                  <div className='student-enrolled-item'>
                  <img  src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/college.webp' alt=''/>
                  <div><h4 className='rating-text'>100k</h4>
                  <p>Reach in Colleges</p>
                
                    </div>
                  </div>
                  
                  
                  
                <div className='student-enrolled-item'>
                <img  src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/learning.webp' alt=''/>
                  <div><h4 className='rating-text'>10K+</h4>
                  <p>Hours of Learning</p>
                
                    </div>
                </div>
                  
                  
                <div className='student-enrolled-item'>
                <img  src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/social.webp' alt=''/>
                  <div><h4 className='rating-text'>150k</h4>
                  <p>Social Community</p>
                
                    </div>
                </div>
                  
                  
                  
                  
                </div>
            
            
            
            
            
            </div>








            <div className='register-form-container'>
              <div className='loginsinup'>
                <h2 ><Link to="/register" style={{textDecoration:"none",color:"grey"}}>SIGNUP</Link > <Link to="/login" style={{textDecoration:"none",color:"grey"}}>LOGIN</Link></h2>
              <hr/>
              <h3 style={{textAlign:"center",fontWeight:"bold",color:"grey"}}>Create a new Account</h3>
              </div>
           <div className='name-item'>
             <label htmlFor='name'><h3>Name</h3></label>
             <input type='text' name='name'/>
           </div>


           <div className='email-item'>
           <label htmlFor='email'><h3>Email</h3></label>
             <input type='text' name='email'/>
           </div>
           <div className='phone-item'>
           <label htmlFor='phone'><h3>Phone no.</h3></label>
             <input type='number' name='phone'/>
           </div>
           <div className='password-item'>
           <label htmlFor='password'><h3>Passwprd</h3></label>
             <input type='password' name='password'/>
           </div>


           <div className='bottom-div'>
            <div className='collegepassyear'>
            <div className='college'>
              <label><h3>College</h3></label>
              <input type='text' name='college' />
            </div>
            <div className='passingyear'>
            <label><h3>Passing year</h3></label>
            <input type="number" min="1900" max="2099" step="1"  />
            </div>
           </div>

            </div>
            <div>
            <p>    <input type="checkbox" name="agreeTerms" id='checkbox'/> I agree to the terms and conditions</p>
             <button className='sinup-submit'>SIGNUP</button>
            </div>
            </div>
            













         </div>
    </section>
    
    </>
  )
}

export default Register