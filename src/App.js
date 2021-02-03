import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import BarCharts from './components/barCharts';
import HomePage from './components/HomePage';
import LineCharts from './components/LineCharts';

import NotFound from './components/NotFound';

function App() {

  return (
    <BrowserRouter>
<Switch>
   <Route path="/" exact component={HomePage}/>
   <Route path="/lineChart" exact component={LineCharts}/>
   <Route path="/barChart" exact component={BarCharts}/>
   <Route component={NotFound} />
   </Switch>
</BrowserRouter>
  );
}

export default App;
