import React from 'react'
import '../StudyMaterial/MockTest.css'
function MockTest() {
  return (
    <>
    <section className='mock-test-top-banner'>
     <h3>Mock Tests</h3>
     <p>Technical and Aptitude Test is a very important process of most of the placement tests. Crack your next placement with series of PrepBytes practice and mock tests. Practice subject-wise and company-wise tests. Take real-time mock tests with other students and test your preparation.</p>
    </section>
    
   <section className='feature-mock-test-container'>
       <h2>Featured Mock Tests</h2>
     
   </section>
   
    <section> <div className='past-mock-test'>
        <div className='hrline-left'></div>
        <div className='past-mock-text'><p>Past mock test</p></div>
        <div className='hrline-right'></div>
      </div></section>



    </>
  )
}

export default MockTest