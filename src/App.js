import React, { lazy, Suspense } from 'react';
import './App.css';
// Use React.lazy to lazily load RouteCompo
const RouteCompo = lazy(() => import('./RouteCompo/RouteCompo.js'));

// Import Footer as usual

function App() {
  return (
    <div>
      {/* Use Suspense to specify a fallback component while RouteCompo is being loaded */}
      <Suspense fallback={
      <div className='lazy-loading'>
      <img src='https://media-exp1.licdn.com/dms/image/C510BAQEs5YqpzhRfFw/company-logo_200_200/0?e=2159024400&v=beta&t=Vl9MyOdDuKoF0aDLooL45Zhzo-JCpWa0QbcqI461bpk' alt=''/>
      </div>}>
        <RouteCompo />
      
      </Suspense>
      

    </div>
  );
}

export default App;
