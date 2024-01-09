import React,{useState,useEffect} from 'react'
import '../StudyMaterial/MockTest.css'
import axios from "axios"
function MockTest() {
  const [booksdata,setbooksdata]=useState([])
    
    
      

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post('http://localhost:4000/storecourse');
            setbooksdata(response.data);
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData(); 
      }, []);
    

console.log(booksdata);

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
        <div className='past-mock-text'><h3>Past mock test</h3></div>
        <div className='hrline-right'></div>
      </div></section>

         
      <section className='past-mock-test-cards-container'>
      {booksdata.filter((item1)=>item1.catdivd==="past mock tests").map((item)=>{
         return (
          <>
              <div key={item.id} className='cards-mock-test'>
                <img src={booksdata.img} alt="" />
                <p>{booksdata.course_name}</p>
              </div>

          </>
         )
        })}
      </section>



    </>
  )
}

export default MockTest