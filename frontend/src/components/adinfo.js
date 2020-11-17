import React from "react";
import "../styles/components/adinfo.css";
import Pefil from "../images/perfilP.jpg";

// import { Container } from './styles';

function AdInfo() {
  return (
    <div className="ad__infos">
      <div className="info__image">
        <img src="" alt="" />
      </div>
      <div className="ad__moreInfo">
        <div className="wrapper__title">
          <h1 className="ad__title">ASDAS</h1>
          <p className="ad__category">1</p>
        </div>
        <h2 className="ad__price">20,99</h2>
        <div className="ad__description">
          <p>
            scoisicoasdasd soadosadasodkasodak o dsadasdas dasdasdas dsadsadas
            dsdasad ads das
          </p>
        </div>
        <button id="button">Fazer Negocio</button>
        <div className="ad__user">
          <div className="user__image">
            <img src={Pefil} alt="" />
          </div>
          <div className="wrapper__userInfo">
            <h3 className="user__name">Rafael Martins de souza</h3>
            <span className="user__instituition">sadsa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdInfo;
