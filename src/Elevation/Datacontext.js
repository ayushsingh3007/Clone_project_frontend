

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

  return (
    <DataContext.Provider value={{ studentsData, setStudentsData }}>
      {children}
    </DataContext.Provider>
  );
};
