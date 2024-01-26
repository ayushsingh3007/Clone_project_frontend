// DataProvider component
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [studentsData, setStudentsData] = useState([
    {
      name: 'Suvosam Ghosh',
      description: 'It absolutely awesome guys. Go for it without a second thought and you wont regret it! ',
      image: 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/chelsea_Juspay-1.webp',
    },
    {
      name: 'Chlesea',
      description: 'Prepbytes really helped me start my prep from basic. The teachers are really helpful and were always available to clear my doubts. Thats the reason I was able to crack the interview and land an internship.',
      image: 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/SusovanGhosh.webp',
    },
    {
      name: 'Suvosam Ghosh',
      description: 'It absolutely awesome guys. Go for it without a second thought and you wont regret it! ',
      image: 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/chelsea_Juspay-1.webp',
    },
    {
      name: 'Chlesea',
      description: 'Prepbytes really helped me start my prep from basic. The teachers are really helpful and were always available to clear my doubts. Thats the reason I was able to crack the interview and land an internship.',
      image: 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/SusovanGhosh.webp',
    },
    {
      name: 'Suvosam Ghosh',
      description: 'It absolutely awesome guys. Go for it without a second thought and you wont regret it! ',
      image: 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/chelsea_Juspay-1.webp',
    },
    {
      name: 'Chlesea',
      description: 'Prepbytes really helped me start my prep from basic. The teachers are really helpful and were always available to clear my doubts. Thats the reason I was able to crack the interview and land an internship.',
      image: 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/SusovanGhosh.webp',
    },
  ]);

  const [cardSliderData, setCardSliderData] = useState([
    
    { id: 1,icon1:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote1.webp",
    icon2:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote2.webp",description: 'My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.',name:'Shivam Gupta', imageUrl: 'https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg' },
    { id: 2,icon1:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote1.webp",
    icon2:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote2.webp",description: 'My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.',name:'Shivam Gupta', imageUrl: 'https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg' },
    { id: 3,icon1:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote1.webp",
    icon2:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote2.webp",description: 'My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.',name:'Shivam Gupta', imageUrl: 'https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg' },
    { id: 4,icon1:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote1.webp",
    icon2:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote2.webp",description: 'My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.',name:'Shivam Gupta', imageUrl: 'https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg' },
    { id: 5,icon1:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote1.webp",
    icon2:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote2.webp",description: 'My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.',name:'Shivam Gupta', imageUrl: 'https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg' },
    { id: 6,icon1:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote1.webp",
    icon2:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote2.webp",description: 'My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.',name:'Shivam Gupta', imageUrl: 'https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg' },
    { id: 7,icon1:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote1.webp",
    icon2:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote2.webp",description: 'My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.',name:'Shivam Gupta', imageUrl: 'https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg' },
    { id: 8,icon1:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote1.webp",
    icon2:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote2.webp",description: 'My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.',name:'Shivam Gupta', imageUrl: 'https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg' },
    { id: 9,icon1:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote1.webp",
    icon2:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Quote2.webp",description: 'My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.',name:'Shivam Gupta', imageUrl: 'https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg' },
    
  ]);

  return (
    <DataContext.Provider value={{ studentsData, setStudentsData, cardSliderData, setCardSliderData }}>
      {children}
    </DataContext.Provider>
  );
};
