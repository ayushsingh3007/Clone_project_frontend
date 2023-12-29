import React from 'react'
import "../Home/Home.css"
function Home() {
  return (
    <>
        <div className='home-container'>
                  <div className='home-page-left'>
               <div>
                <h2 className='home-page-top-heading-1'>Start your journey of success</h2>
                <h2>Personalised Coding Programs</h2>
                <h2>to make coding easier for you</h2>
                <p className='home-page-top-para'>Want to know how PrepBytes can help you?</p>
                <button>Know More</button>
                            </div>
                  </div>
                  
                  <div className='home-page-right'>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Masterhead(web).svg' alt='not-found'/>
                  </div>
                  
              </div>

              <div className='top-links-img'>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Google-launchpad.webp' alt='not-found'/>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/future-skills-homepage.webp' alt='not-found'/>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/she-leads.webp' alt='not-found'/>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aws-ed-start.webp' alt='not-found'/>
</div>

      
      <div className='bottom-boy-container'>
             <div className='bottom-boy-container-left'>
              <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/stairs_of_approach(web).svg' alt='not-found'/>
             </div>
             
             
        <div className='bottom-boy-container-right'>
          <div className='bottom-boy-container-right-text'>
           <h1 >How PrepBytes Mentorship driven Personalised Learning works?</h1>
          
          </div>



        </div>
      
      
      </div>




    </>
  )
}

export default Home