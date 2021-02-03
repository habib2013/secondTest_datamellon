import React from 'react';
import {Link} from 'react-router-dom';
function HomePage(){
return (
   <div>
      <p>This is the home Page</p>
      <Link to='/lineChart'>Line Chart</Link>
   </div>
);
}
export default HomePage;