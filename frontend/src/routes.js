import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home.js';
import Register from './pages/register.js';
import Login from './pages/login.js';
import RegisterAd from './pages/registerad.js';
import Ad from './pages/ad.js';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/register" exact component={Register} />

        <Route path="/login" component={Login} />

        <Route path="/newad" component={RegisterAd} />

        <Route path="/ad/temp" component={Ad} />

      </Switch>
    </BrowserRouter>
  );
}

