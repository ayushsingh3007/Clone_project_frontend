import React from 'react'
import '../StudyMaterial/VideoTutorial.css'
function VideoTutorial() {
  return (
    <>
    <section className='top-banner-video-tutorial'>
      <div className='top-banner-video-tutorial-text'>
        <h2>Prepbytes Video Library</h2>
        <p>Increase your knowledge with PrepBytes free videos. PrepBytes video library is a repository of more than 250 videos containing videos on Competitive Programming , Language Fundamentals - C, C++, Java, Data Structures and Algorithms, Aptitude, Operating System, Interview Questions and much more all at one place.</p>
      </div>
      
      
      <div  className='top-banner-video-tutorial-img'>
        <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/video_lib_illustration.png" alt="" />
      </div>
    </section>

    <section className='categories-heading'>
     <h3>CATEGORIES</h3>
    </section>
    
     <section className='videos-card-container'>
      <div className='video-tutorial-cards'></div>
      <div className='video-tutorial-cards'></div>
      <div className='video-tutorial-cards'></div>
      <div className='video-tutorial-cards'></div>
      <div className='video-tutorial-cards'></div>
      <div className='video-tutorial-cards'></div>
       
     </section>






    </>
  )
}

export default VideoTutorial;