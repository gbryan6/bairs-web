import React from "react";

import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import ad_image from "../images/camiseta-formandos.jpg";
import ad_perfil from "../images/perfilP.jpg";
import "../styles/components/myads.css";

function MyAds() {
  return (
    <div>
      <h2 className="myads__filter">#Meus anúncios</h2>
      <div className="myads__container">
        <div className="myads__photo">
            <h1>FOTO DO ANÚNCIO</h1>
        </div>
        <div className="myads__name">
          <p>Nome do anúncio</p>
        </div>
        <div className="myads__price">
          <h3>R$ 100,00</h3>
        </div>
        <div className="myads__actions">
          <div className="myads__actions--edit">
            Editar<FiEdit/>
          </div>
          <div className="myads__actions--delete">
            Excluir<MdDelete/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAds;
