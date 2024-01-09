import React from 'react'
import { Link } from 'react-router-dom'
import "../Login/Login.css"
function Login() {
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






          <div className='login-right-container'>



          <div className='login-form'>
          <h2 ><Link to="/register" style={{textDecoration:"none",color:"grey"}}>SIGNUP</Link > <Link to="/login" style={{textDecoration:"none",color:"grey"}}>LOGIN</Link></h2><hr/>
            <h3 style={{textAlign:"center",color:"grey"}}>Sign in to your account</h3>
            <div className='inner-form'>
              <form autoComplete='off'>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' name='email' className='input-field'/>
                <label htmlFor='email'>Password</label>
                <input type='password' id='pwd' name='pwd' className='input-field' />
              </form>
            <div className='button-container-login'>
              <h4>Forgot your password?</h4>
              <button className='btn-login-form'>Sign In </button>
              <button className='btn-login-form'>Login Via OTP</button>
            </div>
            </div>



          </div>


          </div>

    </div>
    </section>
    </>
  )
}

export default Login