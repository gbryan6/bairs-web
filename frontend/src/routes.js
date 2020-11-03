import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/home.js';
import Register from './pages/register.js';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        
        <Route path="/register" component={Register}/>

      </Switch>
    </BrowserRouter>
  );
}

