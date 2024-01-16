import React,{useState} from 'react'
import '../Register/Register.css'
import axios from 'axios'
import {Link, useNavigate} from "react-router-dom"
function Register() {

    const navigate=useNavigate()

  const [registerdata,registerdataset]=useState({
    name:"",
    
    email:"",
    phone:"",
    password:"",
    college:"",
    passyear:""
    
  })
const registervalue=(e)=>{

    registerdataset({ ...registerdata, [e.target.name]: e.target.value });
    console.log(registerdata)
  };
  const datasubmit=(e)=>{
    e.preventDefault()
    
    axios
      .post('http://localhost:4000/register',registerdata)
      .then((res) => {
        
        // setStore(res.data.msg);
        // alert(res.data.msg);
        console.log(res.data)
        
        if (res.data.msg === "user registerd successfully") {
          localStorage.setItem('token',res.data.token)

          console.log(res.data.token)
          
          alert(res.data.msg)
          navigate('/login')
      }
      else{
        alert(res.data.msg)
      }
      })
      .catch((error) => {
        console.log(error);
        
      });

      registerdataset({
        name: "",            
        email: "",
        phone:"",
        password: "",
        college:"",
        passyear:""
       
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








            <div className='register-form-container'>
              <div className='loginsinup'>
                <h2 ><Link to="/register" style={{textDecoration:"none",color:"grey"}}>SIGNUP</Link > <Link to="/login" style={{textDecoration:"none",color:"grey"}}>LOGIN</Link></h2>
              <hr/>
              <h3 style={{textAlign:"center",fontWeight:"bold",color:"grey"}}>Create a new Account</h3>
              </div>
           <div className='name-item'>
             <label htmlFor='name'><h3>Name</h3></label>
             <input type='text' id='name' name='name' value={registerdata.name} onChange={registervalue}/>
           </div>


           <div className='email-item'>
           <label htmlFor='email'><h3>Email</h3></label>
             <input type='text' id='email' name='email' value={registerdata.email} onChange={registervalue}/>
           </div>
           <div className='phone-item'>
           <label htmlFor='phone'><h3>Phone no.</h3></label>
             <input type='number' id='phone' name='phone' value={registerdata.phone} onChange={registervalue}/>
           </div>
           <div className='password-item'>
           <label htmlFor='password'><h3>Password</h3></label>
             <input type='password'  id='password' name='password' value={registerdata.password} onChange={registervalue}/>
           </div>


           <div className='bottom-div'>
            <div className='collegepassyear'>
            <div className='college'>
              <label htmlFor='college'><h3>College</h3></label>
              <input type='text' id='college' name='college' value={registerdata.college}  onChange={registervalue}/>
            </div>
            <div className='passingyear'>
            <label htmlFor='passyear'><h3>Passing year</h3></label>
            <input  type='Number' id='passyear' name="passyear" value={registerdata.passyear} onChange={registervalue} />
            </div>
           </div>

            </div>
            <div>
            <p>    <input type="checkbox" name="agree" id='checkbox'/> I agree to the terms and conditions</p>
             <button className='sinup-submit' onClick={datasubmit}>SIGNUP</button>
            </div>
            </div>
            













         </div>
    </section>
    
    </>
  )
}

export default Register
