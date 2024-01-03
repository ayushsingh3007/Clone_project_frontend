import React from 'react'
import "../Login/Login.css"
function Login() {
  return (
    <>
    <section>

    <div className='login-container'>
          <div className='login-left-container'>

            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/illustrated.webp' alt='not-found' className='top-box-logo'/>

            <div className='left-div'>
            {/* <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/logo.webp' alt='not-found' style={{width:"10%"}}/> */}
            <div>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/students.webp' alt='not' className='login-icon'/>
                <span>100k <p>Students Enrolled</p></span>
                </div>
                <div>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/college.webp' alt='not' className='login-icon'/>
                <span>100k <p>Reach in Colleges</p></span>
                </div>
                <div>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/learning.webp' alt='not' className='login-icon'/>
                <span>10k <p>Hours of Learning</p></span>
                </div>
                <div>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/social.webp' alt='not' className='login-icon'/>
                <span>150k <p>Social Community</p></span>
                </div>
                
            </div>
          </div>








          <div className='login-right-container'>



          <div className='login-form'>
            <h2>SIGNUP LOGIN</h2><hr />
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