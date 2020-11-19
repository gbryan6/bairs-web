import React from "react";
import Header from "../components/header";
import Info from "../components/adinfo.js";
import {useParams} from "react-router-dom"; 
import "../styles/pages/advert.css";
// import { Container } from './styles';

function Advert() {

  const ad = useParams();

  console.log(ad);

  return (
      <div className="Ad__main">      
    <div className="Ad__second">
      <nav>
        <Header />
      </nav>
        <Info ad={ad.id}/>
      </div>
    </div>
  );
}

export default Advert;
