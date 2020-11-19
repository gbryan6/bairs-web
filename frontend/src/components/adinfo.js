import React, { useEffect, useState } from "react";
import "../styles/components/adinfo.css";
import api from "../services/api";
import Pefil from "../images/perfilP.jpg";

// import { Container } from './styles';

function AdInfo(props) {
  const [ad, setAds] = useState([]);
  const [images, setImages] = useState([]);

  const userId = localStorage.getItem("userId");
  const adId = props.ad

  useEffect(() => {
    async function loaddata() {
      await api.get(`/product/${adId}`).then((response) => {
        setAds(response.data);
      });
    }
    loaddata();
  }, [adId]);

  useEffect(() => {
    async function loaddata() {
      await api
        .get("/images", {
          headers: {
            Authorization: userId,
          },
        })
        .then((response) => {
          setImages(response.data);
        });
    }
    loaddata();
  }, [userId]);

  return (
    <div className="ad__infos">
      { ad.map(ad => (
      <div key={ad.id}>
      {images.map(image => 
       image.product_id === ad.id ?
      <div key={image.id} className="info__image">
        <img src={`http://localhost:3333/files/images/${image.path}`} alt="Foto do anuncio" />
      </div>:
      ""
      )
      }
      <div className="ad__moreInfo">
        <div className="wrapper__title">
          <h1 className="ad__title">{ad.title}</h1>
          <p className="ad__category">{ad.type}</p>
        </div>
        <h2 className="ad__price">{`R$ ${ad.price}`}</h2>
        <div className="ad__description">
          <p>
            {ad.description}
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
      ))}
    </div>
  );
}

export default AdInfo;
