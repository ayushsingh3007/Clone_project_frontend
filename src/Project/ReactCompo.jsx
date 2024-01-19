import React from 'react'

function ReactCompo() {
  return (
    <> <div className='project_conatiner'>
    <div className='project_conatiner-left'>
     <h2 style={{fontFamily:"cursive",color:"grey"}}>Html Blog App </h2>
    <div className='project_conatiner-left-item-1'>
   <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/HTML_HTML.svg' alt=''/>
   <h5>HTML Blog Page</h5>
   <p>Start your web development by making a simple blog page using HTML.</p>
  </div>
  <p>Host Link: https://ayushsingh3007.github.io/project_1/</p>
  <p>Repo Url:https://github.com/ayushsingh3007/project_1</p>
    </div>
    <div className='project_conatiner-right'>
     <h2 style={{textAlign:"center",color:"red"}}>Description About My Project</h2>
     <p style={{textAlign:"center",color:"grey", width:"70%",lineHeight:"30px"}}>This Project based upon the html basically In this project for giving some style i am using style attribute. In this project i am using different different tag of html like form tag, table tag, hr tag, br tag, pre tag, paragraph tag, heading tag.</p>
    
  
    
    </div>
</div>
</>
  )
}

export default ReactCompo