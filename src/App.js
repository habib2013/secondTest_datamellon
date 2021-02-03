import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import LineCharts from './components/LineCharts';

import NotFound from './components/NotFound';

function App() {

  return (
    <BrowserRouter>
<Switch>
   <Route path="/" exact component={HomePage}/>
   <Route path="/lineChart" exact component={LineCharts}/>
   <Route component={NotFound} />
   </Switch>
</BrowserRouter>
  );
}

export default App;
