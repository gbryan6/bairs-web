import React from "react";
import Header from "../components/header";
import Info from "../components/adinfo.js";
import {useParams} from "react-router-dom"; 
import "../styles/pages/ad.css";
// import { Container } from './styles';

function Ad() {

  const ad = useParams();

  return (
    <div>
      <div className="Ad__main">      
      <nav>
        <Header />
      </nav>
        <Info ad={ad.id}/>
      </div>
    </div>
  );
}

export default Ad;
