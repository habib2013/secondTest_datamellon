import React from 'react';
import {Link} from 'react-router-dom';
function HomePage(){
return (
   <div>
      <p>This is the home Page</p>
      <Link to='/lineChart'>Line Chart</Link>
      <Link to='/barChart'>Bar Chart</Link>
   </div>
);
}
export default HomePage;