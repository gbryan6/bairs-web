import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import api from "../services/api.js";
import ad_perfil from "../images/perfilP.jpg";

function Search() {
  const [ads, setAds] = useState([]);
  const [images, setImages] = useState([]);
  const [user, setUser] = useState([]);

  const userId = localStorage.getItem("userId");
  const search = localStorage.getItem("search");

  useEffect(() => {
    const params = {};
    if (search) {
      params.title_like = search;
    }
    async function loadSearch() {
      await api
        .get(
          `/product?title=${search}`
        )
        .then((response) => {
          setAds(response.data);
        });
    }
    loadSearch();
  }, [search]);

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

  console.log(ads);

  return (
    <div>
        <div>
          <h1 className="feed__filter">{`#Buscando por ${search}`}</h1>
          <div className="feed__container">
            {ads.map((ad) =>
                <div key={ad.id} className="feed__ad">
                  <div className="feed__wrapper--image">
                    {images.map((image) =>
                      image.product_id === ad.id ? (
                        <Link to={`/advert/${ad.id}`} key={image.id}>
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
                  </div>
                  <div className="ad__informations">
                    {
                       user.map((user) =>
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
                      )
                    }
                    <div className="ad__informations--left search">
                      <p>{ad.title}</p>
                      <h3>{`R$ ${ad.price}`}</h3>
                    </div>
                </div>
              </div>
              ) 
            }
          </div>
        </div>
    </div>
  );
}

export default Search;
