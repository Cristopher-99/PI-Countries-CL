import './App.css';
import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Detail from './components/Details/Detail'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/home/:id' component={Detail}/>
         

         </Switch>
       </div>
    </BrowserRouter>
  );
}

export default App;
