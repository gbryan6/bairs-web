import React,{useState, useEffect} from "react";
// eslint-disable-next-line
import { useHistory } from "react-router-dom";
import "../styles/pages/home.css";
import api from "../services/api";

import Header from "../components/header";
import Feed from "../components/feed";
import Banner from "../components/banner";



function Home() {
  const history = useHistory();

  

  return (
    <div className="all__content">
      <div className="home__content">
        <Header />
        <section className="home__section">
          <div className="home__feed">
            <Banner />
            <Feed/>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Home;
