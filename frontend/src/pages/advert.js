import React from "react";
import Header from "../components/header";
import Info from "../components/adinfo.js";
import {useParams} from "react-router-dom"; 
import "../styles/pages/ad.css";
// import { Container } from './styles';

function Advert() {

  const ad = useParams();

  console.log(ad);

  return (
    
    <div className="ad__content">
      <nav>
        <Header />
      </nav>
      <div className="wrapper__info">
        <Info ad={ad.id}/>
      </div>
    </div>
  );
}

export default Advert;
