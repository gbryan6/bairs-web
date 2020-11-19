import React, { useEffect, useState } from "react";
import "../styles/components/adinfo.css";
import api from "../services/api";
import Perfil from "../images/perfilP.jpg";

// import { Container } from './styles';

function AdInfo(props) {
  const [ad, setAds] = useState([]);
  const [images, setImages] = useState([]);
  const [user, setUser] = useState([]);
  const [instiuition, setInstituition] = useState([]);

  const userId = localStorage.getItem("userId");
  const adId = props.ad;

  useEffect(() => {
    async function loaddata() {
      await api.get(`/product/${adId}`).then((response) => {
        setAds(response.data);
      });
    }
    loaddata();
  }, [adId]);

  useEffect(() => {
    async function loadInstituition() {
        api.get("/instituitions").then((response) => {
          setInstituition(response.data);
      });
    }
    loadInstituition();
  }, []);

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

  useEffect(() => {
    async function loaddata() {
      await api
        .get(`/users`, {
          headers: {
            Authorization: userId,
          },
        })
        .then((response) => {
          setUser(response.data);
        });
    }
    loaddata();
  }, [userId]);

  return (
    <div className="ad__infos">
      {ad.map((ad) => (
        <div key={ad.id} className="ad__content--all">
          {images.map((image) =>
            image.product_id === ad.id ? (
              <div key={image.id} className="info__image">
                <img
                  src={`http://localhost:3333/files/images/${image.path}`}
                  alt="Foto do anuncio"
                />
              </div>
            ) : (
              ""
            )
          )}
          <div className="ad__moreInfo">
            <div className="wrapper__title">
              <h1 className="ad__title">{ad.title}</h1>
              <p className="ad__category">{ad.type}</p>
            </div>
            <h2 className="ad__price">{`R$ ${ad.price}`}</h2>
            <div className="ad__description">
              <p>{ad.description}</p>
            </div>
            <button id="button">Fazer Negocio</button>
            {user.map((user) =>
              ad.user_id === user.id ? (
                <div key={user.id} className="ad__user">
                  <div className="user__image">
                    <img
                      src={
                        user.profile_path !== "undefined"
                          ? `http://localhost:3333/files/profile/picture/${user.profile_path}`
                          : Perfil
                      }
                      alt=""
                    />
                  </div>
                  <div className="wrapper__userInfo">
                    <h3 className="user__name">{user.full_name}</h3>
                    {
                    instiuition.map(instiuition => 
                    instiuition.id === user.instituition_id ?
                    <span key={instiuition.id} className="user__instituition">{`${instiuition.name} - ${user.period} `}</span>: ""
                    )}
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdInfo;
