import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import "../Login/Login.css"
function Login() {
  
  const navigate=useNavigate()
    const [logindata,logindataset]=useState({         
        email:"",        
        password:"",       
        
      })
      const storedata=(e)=>{
    
        logindataset({ ...logindata, [e.target.name]: e.target.value });
        console.log(logindata)
      };
      const datasubmit=(e)=>{
        e.preventDefault()
        axios
          .post('http://localhost:4000/login',logindata)
          
          .then((res) => {
            
            
            
            if (res.data.msg === "login successfully") {
                localStorage.setItem("token", res.data.token);
                console.log(res.data.token)
                console.log(res.data.userdetail.name)
                console.log(res.data.userdetail.email)
                localStorage.setItem("selfname",res.data.userdetail.name)
                localStorage.setItem("selfdetails",res.data.userdetail.email)
                // localStorage.setItem("loginhandle",false)
              
                alert(res.data.msg)
                navigate('/')
               
              
          }
          else{
            alert(res.data.msg);
          }
          })
          .catch((error) => {
            console.log(error);
           
          });
    
          logindataset({        
            email: "",
            password: "",
          });
    
      };
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
          <h2 ><Link to="/register" >SIGNUP</Link > <Link to="/login" >LOGIN</Link></h2><hr/>
            <h3 style={{textAlign:"center",color:"grey"}}>Sign in to your account</h3>
            <div className='inner-form'>
              <form autoComplete='off'>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' name='email' className='input-field' value={logindata.email} onChange={storedata}/>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password'value={logindata.password} onChange={storedata} className='input-field' />
              </form>
            <div className='button-container-login'>
              <h4>Forgot your password?</h4>
              <button className='btn-login-form'  onClick={datasubmit}>Sign In </button>
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