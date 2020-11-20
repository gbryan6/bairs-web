import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home.js";
import Register from "./pages/register.js";
import Login from "./pages/login.js";
import RegisterAd from "./pages/registerad.js";
import Advert from "./pages/advert.js";
import Dashboard from "./pages/dashboard.js";
import Page404 from "./pages/page404.js";
import Congratulations from "./pages/congratulations.js";
import AlterInfo from "./pages/alterinfo";
import EditAd from "./pages/alterad";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/register" component={Register} />

        <Route path="/login" component={Login} />

        <Route path="/newad" component={RegisterAd} />

        <Route path="/advert/:id" component={Advert} />

        <Route path="/dashboard/:id" component={Dashboard} />

        <Route path="/congratulations" component={Congratulations} />

        <Route path="/alterinfo" component={AlterInfo} />

        <Route path="/edit/:id" component={EditAd} />

        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}
