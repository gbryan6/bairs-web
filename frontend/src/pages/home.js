import React  from "react";
import {useLocation } from 'react-router-dom'
// eslint-disable-next-line
import "../styles/pages/home.css";
import api from "../services/api.js"

import Header from "../components/header";
import Feed from "../components/feed";
import Banner from "../components/banner";
import Search from "../components/search";

function Home() {
  const search = useLocation().search.substring(8);

  return (
    <div className="all__content">
      <div className="home__content">
        <Header />
        <section className="home__section">
          <div className="home__feed">
            <Banner />
            {search==="" ?
            <Feed /> :
            <Search />
            }
          </div>
        </section>
      </div>
    </div>
  );
}
export default Home;
