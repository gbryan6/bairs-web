import React from "react";

import ad_image from "../images/camiseta-formandos.jpg";
import ad_perfil from "../images/perfilP.jpg";
import "../styles/components/myads.css";

function MyAds() {
  return (
    <div>
      <h2 className="myads__filter">#Meus anúncios</h2>
      <div className="myads__container">
        <div className="myads__ad">
          <div className="myads__image">
            <img src={ad_image} alt="anuncio"></img>
          </div>
          <div className="myads__informations">
            <div className="userphoto">
              <img src={ad_perfil} alt="myads_perfil"></img>
            </div>
            <div className="myads__informations--left"> 
              <p>Uniforme formandos - Direito</p>
              <span>Há 2 semanas</span>
              <h3>R$ 23,99</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAds;
