import React from 'react'
import "../CourseProgram/Masterprogram.css"
function Masterprogram() {
  return (
    <>
             <section className='master-competitive-program-container-top'>
                <div className='master-competitive-program-container-top-left'>
                 <h1>MASTER COMPETITIVE PROGRAMMING</h1>
                 <h3>Master Competitive Programming Fom Zero And Become A Top-Rated Coder Under The Guidance Of Top Competitive Programmers</h3>   
                <button>Enroll now</button>
                
                </div>

                 <div className='master-competitive-program-container-top-right'>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-header-image.webp' alt=''/>
                </div>
             </section>


           <section className='master-competitive-cards'>
            <div className='master-competitive-card-1'>
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-one.webp" alt="" />
            <p>9 months intensive bootcamp</p>
            
            </div>
            <div className='master-competitive-card-2'>
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-one.webp" alt="" />
            <p>Quick doubt resolution</p>
            </div>
            <div className='master-competitive-card-3'>
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-one.webp" alt="" />
            <p>Live coding sessions with top-rated coders</p>
            </div>
            <div className='master-competitive-card-4'>
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-one.webp" alt="" />
            <p>Get certificate on course completion</p>
            </div>
           </section>



          <section className='master-mentors-container'>
               <h2 style={{textAlign:"center"}}>Get Guidance From Industry Leading  </h2>
               <h3 style={{textAlign:'center'}}>Other Mentors You Will Be Interacting With</h3>

               <div className='master-mentor-card'>
                <div>
                  
                </div>




                <div></div>
                <div></div>
               </div>
          </section>






    </>
  )
}

export default Masterprogram