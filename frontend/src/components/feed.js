import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ad_perfil from "../images/perfilP.jpg";
import "../styles/components/feed.css";
import api from "../services/api";

function Feed() {
  const userId = localStorage.getItem("userId");

  const [ads, setAds] = useState([]);
  const [images, setImages] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function loaddata() {
      await api
        .get("/products", {
          headers: {
            Authorization: userId,
          },
        })
        .then((response) => {
          setAds(response.data);
        });
    }
    loaddata();
  }, [userId]);

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
    <div>
      <h1 className="feed__filter">#Direito</h1>
      <div className="feed__container">
        {ads.map((ad) => (
          <div key={ad.id} className="feed__ad">
            {images.map((image) =>
              image.product_id === ad.id ? (
                <Link to={`/ad/${ad.id}`} key={image.id}>
                  <div className="ad__image">
                    <img
                      src={`http://localhost:3333/files/images/${image.path}`}
                      alt="anuncio"
                    />
                  </div>
                </Link>
                
              ) : (
                ""
              )
              
            )}
            <div className="ad__informations">
              {user.map((user) =>
                ad.user_id === user.id ? (
                  <div key={user.id} className="userphoto">
                    <img
                      src={
                        user.profile_path !== "undefined"
                          ? `http://localhost:3333/files/profile/picture/${user.profile_path}`
                          : ad_perfil
                      }
                      alt="foto_perfil"
                    ></img>
                  </div>
                ) : (
                  ""
                )
              )}
              <div className="ad__informations--left">
                <p>{ad.title}</p>
                <span>Há 2 semanas</span>
                <h3>{`R$ ${ad.price}`}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
