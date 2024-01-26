import React, { useState } from 'react'
import "../CourseProgram/Masterprogram.css"
import "../CourseProgram/Masterprogram1.css"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDataContext } from '../Elevation/Datacontext';
function Masterprogram() {
  
  const { cardSliderData } = useDataContext();
  // const [selectedBatch, setSelectedBatch] = useState(null);





  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };













  const [selectedBatch, setSelectedBatch] = useState(null);

  const handleBatchChange = (event) => {
    setSelectedBatch(event.target.value);
  };
  const getPriceForBatch = (batch) => {
    // Add your logic to determine the price for each batch
    // For example, you can use a switch statement or an object mapping
    switch (batch) {
      case '1may':
        return '$10.99';
      case '15may':
        return '$15.99';
      default:
        return 'N/A';
    }
  };
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
              
              <div className='card-container-master-mentor'>
                <div className='card-master-mentor-1'>
                   <div className='master-card-mentor-image '>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Mamta.webp" alt="" />
                   </div>
                   <div className='master-card-mentor-details'>
                    <h2>Mamta</h2>
                    <p>Co-Founder,Prepbytes</p>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Mentor-Company1.webp" alt="" />
                   </div>
                   
                


                </div>


                <div className='card-master-mentor-2'>
                <div className='master-card-mentor-image '>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Mamta.webp" alt="" />
                   </div>
                   <div className='master-card-mentor-details'>
                    <h2>Mamta</h2>
                    <p>Co-Founder,Prepbytes</p>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Mentor-Company1.webp" alt="" />
                   </div>
                </div>


                <div className='card-master-mentor-3'>
                <div className='master-card-mentor-image '>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Mamta.webp" alt="" />
                   </div>
                   <div className='master-card-mentor-details'>
                    <h2>Mamta</h2>
                    <p>Co-Founder,Prepbytes</p>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Mentor-Company1.webp" alt="" />
                   </div>
                </div>
                
              </div>
              <h2  className='master-competitive-program-text'>Master Competitive Programming With Us</h2>
          </section>


          <section className='master-program-des-container'>
                  <div className='master-program-des-left'>
                    <div>
                      <h3>Personalised Program</h3>
                      <p>Master your skills from where you are, with India's only personalised program</p>
                    </div>
                    <div>
                      <h3>Quick Doubt Support</h3>
                      <p>Get your doubts cleared by coding experts and have a smooth learning</p>

                    </div>
                    <div>
                    <h3>250+ Coding Questions</h3>
                      <p>Best way to master a language is by coding in the language</p>
                    </div>
                    <div>
                    <h3>50+ Hours of Videos</h3>
                      <p>Recorded video lectures by experts to help you understand the concepts easily</p>
                    </div>
                  </div>
                  <div className='master-program-des-img'>
                  <div className='img-border-left'>
                  <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp" alt=""  className='border-icon-left-master' />
                  <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp" alt="" className='border-icon-left-master'/>
                  <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp" alt="" className='border-icon-left-master' />
                  <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp" alt="" className='border-icon-left-master'/>
                     </div>

                     <div className='img-border-right'>
                     <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp" alt=""  className='border-icon-right-master' />
                  <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp" alt="" className='border-icon-right-master'/>
                  <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp" alt="" className='border-icon-right-master' />
                  <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp" alt="" className='border-icon-right-master'/>
                    
                     </div>



                    {/* <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Vector.svg" alt="" /> */}
                  </div>








                  <div className='master-program-des-right'>
                  <div>
                      <h3>Personalised Program</h3>
                      <p>Master your skills from where you are, with India's only personalised program</p>
                    </div>
                    <div>
                      <h3>Quick Doubt Support</h3>
                      <p>Get your doubts cleared by coding experts and have a smooth learning</p>

                    </div>
                    <div>
                    <h3>250+ Coding Questions</h3>
                      <p>Best way to master a language is by coding in the language</p>
                    </div>
                    <div>
                    <h3>50+ Hours of Videos</h3>
                      <p>Recorded video lectures by experts to help you understand the concepts easily</p>
                    </div>
                  </div>
          </section>

          <section className='coding-contest-container'>
                   <h1 style={{textAlign:'center',color:'#322e2e'}}>Crack Reputed Coding Contests</h1>
                   <div>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/MCP-company-new.webp" alt="" />
                   </div>
                   <h1 style={{textAlign:'center',color:'#322e2e'}}>Curriculum</h1>

          </section>






           {/* <section className='master-slider-container'>

           <Carousel responsive={responsive}>
  <div className='master-slider-container-item'>Item 1</div>
  <div className='master-slider-container-item'>Item 2</div>
  <div className='master-slider-container-item'>Item 3</div>
  <div className='master-slider-container-item'>Item 4</div>
  <div className='master-slider-container-item'>Item 1</div>
  <div className='master-slider-container-item'>Item 2</div>
  <div className='master-slider-container-item'>Item 3</div>
  <div className='master-slider-container-item'>Item 4</div>
                            </Carousel>

           </section> */}










            
<section className='select-batch-container-mpc'>
<div className="batch-selector-container-mpc">     <label className='select-batch-label-mpc'>Select Batch</label>
      <div className="radio-group-mpc">
       <div className='input-item-1'> <input
          type="radio"
          id="batch1"
          name="batch"
          value="1may"
          checked={selectedBatch === '1may'}
          onChange={handleBatchChange}
        />
        <label htmlFor="batch1">1 May</label>
           </div>
  <div  className='input-item-2'>         
        <input
          type="radio"
          id="batch15"
          name="batch"
          value="15may"
          checked={selectedBatch === '15may'}
          onChange={handleBatchChange}
          
        />
        <label htmlFor="batch15">15 May</label>
        </div>
      </div>
      <div className='priceandenroll-items-mpc'>
      <p>Price: {getPriceForBatch(selectedBatch)}</p>
      <span><button style={{background:' #00a6eb',borderRadius:'10px'}}>Enroll Now</button>
      </span>
      </div>
    </div>
   
</section>



<section className='master-slider-container'>
        <Carousel responsive={responsive}>
          {cardSliderData.map((card) => (
            <div key={card.id} className='master-slider-container-item'>
            {/* <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote1.webp" alt="Name Decoration Image" loading="lazy"> */}

              <div key={card.id} className='master-slider-container-item-name'>
              <img src={card.icon1} alt="" />{card.name}</div>
              <div>
                
                <p className='master-slider-container-item-des'>{card.description}</p>

                <img src={card.imageUrl} alt='' className='master-slider-container-item-img'/>
                <img src={card.icon2} alt=''/>

              </div>
            </div>
          ))}
        </Carousel>
      </section>












        <section className='endofcourse'>
                <p>By The End Of This Course, You Will Be Able To</p>
                <div className='endofcourse-item'>
                  <div className='endofcourse-item-img'>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Vecto2.webp" alt="" />
                  </div>
                  <div className='endofcourse-item-cards'>
                         <div className='endofcourse-item-cards-item-1'>
                          
                          <p>
                           <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/1.webp" alt="" /> 4 star above or code chef</p>
                         </div>
                         <div className='endofcourse-item-cards-item-2'>
                         <p>
                           <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/2.webp" alt="" /> Crack contests like Facebook Hacker Cup, Google Kickstart, ACM ICPC</p>
                         </div>
                         <div className='endofcourse-item-cards-item-3'>
                         <p>
                           <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/3.webp" alt="" /> Candidate master and above in CodeForces</p>
                         </div>
                         <div className='endofcourse-item-cards-item-4'>
                         <p>
                           <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/4.webp" alt="" /> Specialist and above in SPOJ.com</p>
                         </div>



                  </div>
                </div>
        </section>

    </>
  )
}

export default Masterprogram