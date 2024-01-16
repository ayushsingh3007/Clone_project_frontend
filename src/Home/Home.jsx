import React from 'react'
import "../Home/Home.css"
import "../Home/Home1.css"
import Footer from '../Footer/Footer'




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
               


           <div className='right-boy-container-card'>    
            <div className='cards-item-1'>
           <p> Get learning videos & weekly plan based on your coding skills</p>
            </div>
            <img className='card-1-arrow' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjEiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOSAxLjAxNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik02NjgsNDc3MS4xNTRzMTM5LjE4OS0yNywxMzIuNjQ0LDc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY3Ljk5OSAtNDc2Ny45MTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogICAgPHBhdGggaWQ9Ikljb25faW9uaWMtaW9zLWFycm93LWJhY2siIGRhdGEtbmFtZT0iSWNvbiBpb25pYy1pb3MtYXJyb3ctYmFjayIgZD0iTTIuOTUsOC41NTgsOS40MjgsMi4wODVBMS4yMjMsMS4yMjMsMCwwLDAsNy43LjM1N0wuMzU2LDcuNjkxQTEuMjIxLDEuMjIxLDAsMCwwLC4zMjEsOS4zNzhMNy42OSwxNi43NjNhMS4yMjMsMS4yMjMsMCwwLDAsMS43MzMtMS43MjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuODggODQuOTM4KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==' alt='not-found'/>
            <div className='cards-item-2'>
               <p>Practice coding questions that adapts based on your progress</p>
            </div>
            <img className='card-2-arrow' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjIiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjE1NykiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik04MDAuODY2LDQ3NzEuMTU0cy0xMzkuMTg5LTI3LTEzMi42NDQsNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuODY2IC00NzcyLjA2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgICA8cGF0aCBpZD0iSWNvbl9pb25pYy1pb3MtYXJyb3ctYmFjayIgZGF0YS1uYW1lPSJJY29uIGlvbmljLWlvcy1hcnJvdy1iYWNrIiBkPSJNMi45NSw4LjU2Mmw2LjQ3OCw2LjQ3MkExLjIyMywxLjIyMywwLDAsMSw3LjcsMTYuNzYyTC4zNTYsOS40MjhBMS4yMjEsMS4yMjEsMCwwLDEsLjMyMSw3Ljc0MUw3LjY5LjM1N0ExLjIyMywxLjIyMywwLDAsMSw5LjQyMywyLjA4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODAuNzk2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==' alt='not-found'/>
            <div className='cards-item-3'>
              <p>Getting Stuck While Coding? Get all your doubts resolved.</p>
            </div>
            <img className='card-3-arrow' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjEiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOSAxLjAxNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik02NjgsNDc3MS4xNTRzMTM5LjE4OS0yNywxMzIuNjQ0LDc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY3Ljk5OSAtNDc2Ny45MTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogICAgPHBhdGggaWQ9Ikljb25faW9uaWMtaW9zLWFycm93LWJhY2siIGRhdGEtbmFtZT0iSWNvbiBpb25pYy1pb3MtYXJyb3ctYmFjayIgZD0iTTIuOTUsOC41NTgsOS40MjgsMi4wODVBMS4yMjMsMS4yMjMsMCwwLDAsNy43LjM1N0wuMzU2LDcuNjkxQTEuMjIxLDEuMjIxLDAsMCwwLC4zMjEsOS4zNzhMNy42OSwxNi43NjNhMS4yMjMsMS4yMjMsMCwwLDAsMS43MzMtMS43MjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuODggODQuOTM4KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==' alt='not-found'/>

                      <div className='cards-item-4'>
               <p>Practice coding questions that adapts based on your progress</p>
            </div>   
            <img className='card-2-arrow' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjIiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjE1NykiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik04MDAuODY2LDQ3NzEuMTU0cy0xMzkuMTg5LTI3LTEzMi42NDQsNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuODY2IC00NzcyLjA2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgICA8cGF0aCBpZD0iSWNvbl9pb25pYy1pb3MtYXJyb3ctYmFjayIgZGF0YS1uYW1lPSJJY29uIGlvbmljLWlvcy1hcnJvdy1iYWNrIiBkPSJNMi45NSw4LjU2Mmw2LjQ3OCw2LjQ3MkExLjIyMywxLjIyMywwLDAsMSw3LjcsMTYuNzYyTC4zNTYsOS40MjhBMS4yMjEsMS4yMjEsMCwwLDEsLjMyMSw3Ljc0MUw3LjY5LjM1N0ExLjIyMywxLjIyMywwLDAsMSw5LjQyMywyLjA4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODAuNzk2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==' alt='not-found'/>
             
             <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/achieve_your_coding_dream.svg' alt=''/>
                              </div>
                                     </div>

                                   
</div>
      
<div className='course-card-container'>
  
  <p style={{textAlign:'center',color:'grey',fontSize:'bolder'}}> I WANT TO</p>
  <div className='course-item'>
    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/prepare_for_campus.webp' alt='' width='80%'/>
    <p>PREPARE FOR CAMPUS PLACEMENTS</p>
  </div>
  <div className='course-item'>
    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/master_competetive_pgm.webp' alt='' width='80%' />
    <p style={{color:'pink'}}>MASTER COMPETITIVE PROGRAM</p>
  </div>
  <div className='course-item'>
    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/learn_full_stack.webp' alt='' width='80%'/>
    <p style={{color:'green'}}>BUILD DEVELOPMENT PROJECT</p>
  </div>

  
  </div>   
    
                  
     <div className='language-container'>
      <div className='language-item-1'>
        <h2>Are you an Experienced Professional willing to Switch?</h2>
        <div>
          <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/industry_vetted_curriculum.svg' alt=''/>
          INDUSTRY VETTED CURRICULUM STRUCTURED FOR YOU</div>
        <div>
          <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/real_life_projects.svg' alt=''/>
          REAL LIFE PROJECTS BUILT ON DEMAND TECH STACK</div>
        <div>
          <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/exclusive_placement.svg" alt="" />
          EXCLUSIVE PLACEMENT SUPPORT TEAM WITH JOB GURANTEE</div>
        <p>PrepBytes Elevation Academy - 4 months Full Stack Program with Job Guarantee</p>
         <button>Know More</button>
      </div>



      <div className='language-item-2'>
        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/for_2020(1st+Image).svg' alt=''/>
        </div>


      <div className='language-item-3'>
        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/tools_for_2020.svg" alt="" />
        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/for_2020_image_2.svg" alt="" />
      </div>
     </div>


     <div className='know-detail-container'>

      <div className='know-detail-item-1'>
        <div className='image'>
          <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor.png" alt="" />
          
        </div>
        <div className='name-img'>
          <h3>Mamta Kumari</h3>
          <p>Co-Founder PrepBytes</p>
          <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png" alt="" />
        </div>
        
      </div>


      <div className='know-detail-item-2'>
        <h3 style={{color:'#f78077'}}>Attend Free sessions with industry experts and get valuable guidance</h3>
        <h4 style={{color:'grey'}}>How to master competitive coding?</h4>
        <button>know More</button>
        <hr/>
        <h5 style={{color:'grey'}}>How to crack coding interviews?</h5>
        <button>Know More</button>
        
      </div>


      <div className='know-detail-item-3'>
        <div>
          <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/100k_coding.svg" alt="" />
          <h2>1000+</h2>
          <p>Coding Community</p>
        </div>
        <div>
          <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/1000%2B_hours_pf.svg" alt="" />
          <h2>10000k</h2>
          <p>Hours of Live session</p>
        </div>
        <div>
          <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/10000_hours_learning.svg" alt="" />
          <h2>100K+</h2>
          <p>Hours of learning</p>
        </div>
        <div>
          <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/doubts_solved.svg" alt="" />
          <h2>700k+</h2>
          <p>Doubts Solved</p>
        </div>
      </div>
</div>



<div className='mentor-img-container'>
  <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Bespoke+Mentors.webp" alt="" />
</div>


  


   <div className='selected-candidate-image'>
    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/you_could_be_the(web_1366).png" alt="" />
   </div>
     

     <div className='mentors-chart-container'>
      <h1>PrepBytes Mentors</h1>
      <p>PrepBytes students get mentored by industry experts who have achieved in their careers and are passionate about helping students achieve their dream.</p>
        
        <div className='chart-items-mentor'>
          <div className='mentor-chart-item item-1'>
            <div className='mentor-img-item'>
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_ma'am(Mentor).png" alt="" />
            </div>
            <h3 className='name-mentor'>Mamta </h3>
            <p className='post-mentor'>Co-Founder, PrepBytes</p><hr />
            <div className='detail-mentor'>Mamta has a great passion for coding and motivates students to pursue coding. Her mission is to use her knowledge and expertise to help students get placed in their dream company.</div>
            <img  className='working-company-img' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png" alt="" />
          
          </div>
          
          
          
          
          <div className='mentor-chart-item item-2'>
          <div className='mentor-img-item'>
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_ma'am(Mentor).png" alt="" />
            </div>
            <h3 className='name-mentor'>Mamta </h3>
            <p className='post-mentor'>Co-Founder, PrepBytes</p><hr />
            <div className='detail-mentor'>Mamta has a great passion for coding and motivates students to pursue coding. Her mission is to use her knowledge and expertise to help students get placed in their dream company.</div>
            <img  className='working-company-img' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png" alt="" />
          
          </div>


          <div className='mentor-chart-item item-3'>
          <div className='mentor-img-item'>
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_ma'am(Mentor).png" alt="" />
            </div>
            <h3 className='name-mentor'>Mamta </h3>
            <p className='post-mentor'>Co-Founder, PrepBytes</p><hr />
            <div className='detail-mentor'>Mamta has a great passion for coding and motivates students to pursue coding. Her mission is to use her knowledge and expertise to help students get placed in their dream company.</div>
            <img  className='working-company-img' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png" alt="" />
          
          </div>


          <div className='mentor-chart-item item-4'>
          <div className='mentor-img-item'>
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_ma'am(Mentor).png" alt="" />
            </div>
            <h3 className='name-mentor'>Mamta </h3>
            <p className='post-mentor'>Co-Founder, PrepBytes</p><hr />
            <div className='detail-mentor'>Mamta has a great passion for coding and motivates students to pursue coding. Her mission is to use her knowledge and expertise to help students get placed in their dream company.</div>
            <img  className='working-company-img' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png" alt="" />
          
          </div>
          <div className='mentor-chart-item item-5'>
          <div className='mentor-img-item'>
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_ma'am(Mentor).png" alt="" />
            </div>
            <h3 className='name-mentor'>Mamta </h3>
            <p className='post-mentor'>Co-Founder, PrepBytes</p><hr />
            <div className='detail-mentor'>Mamta has a great passion for coding and motivates students to pursue coding. Her mission is to use her knowledge and expertise to help students get placed in their dream company.</div>
            <img  className='working-company-img' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png" alt="" />
          
          </div>
          <div className='mentor-chart-item item-6'>
          <div className='mentor-img-item'>
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_ma'am(Mentor).png" alt="" />
            </div>
            <h3 className='name-mentor'>Mamta </h3>
            <p className='post-mentor'>Co-Founder, PrepBytes</p><hr />
            <div className='detail-mentor'>Mamta has a great passion for coding and motivates students to pursue coding. Her mission is to use her knowledge and expertise to help students get placed in their dream company.</div>
            <img  className='working-company-img' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png" alt="" />
          
          </div>
        </div>
    
     </div>


     <div className='question-container'>
      <p>Can you solve these questions?</p>
      <div className='question-item-div'>
        <p>Which of the following loops will execute the body of loop even when condition controlling the loop is initially false?</p>
        
        <div className='options-container'>
  <div>
    <input type="radio" name="answer" value='do-while' /> do while
  </div>
  <div>
    <input type="radio" name="answer" value='while' /> while
  </div>
  <div>
    <input type="radio" name="answer" value='for' /> for
  </div>
  <div>
    <input type="radio" name="answer" value='none' /> none of the mentioned
  </div>
</div>
        <button className='submit-ans-btn'>Submit Answer</button>
      </div>
    
     </div>
      

      <section className='banner-bottom-home'>
        
        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/campus-business-manager/banner/CBM-WEB.webp" alt="" />
      </section>

        <section className='mentor-college-text'>
          <h1>PrepBytes for Mentors & Colleges</h1>
          <p>"Join PrepBytes in the journey to reach more colleges and mentor more students"</p>
        </section>

      <section className='be-a-part-card-container'>
             <div className='be-a-part-card'>
              <div className='be-a-part-img'>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/be_a_part_of_mentors.png" alt="" />
              </div>
              <div className='be-a-part-heading'>
                <h2>Be a part of growing Mentor Community of PrepBytes</h2>
              </div>
              <div className='be-a-part-des'>
                <p>We look forward to industry experts who have a passion for teaching, mentoring & making students future-ready</p>
              </div>
              <button className='be-a-part-btn'>Know More</button>
             </div>





             <div className='be-a-part-card'>
             <div className='be-a-part-img'>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/be_a_part_of_mentors.png" alt="" />
              </div>
              <div className='be-a-part-heading'>
                <h2>Be a part of growing Mentor Community of PrepBytes</h2>
              </div>
              <div className='be-a-part-des'>
                <p>We look forward to industry experts who have a passion for teaching, mentoring & making students future-ready</p>
              </div>
              <button className='be-a-part-btn'>Know More</button>
             </div>

      </section>



    </>
  )
}

export default Home