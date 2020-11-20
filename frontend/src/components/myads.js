import React, { useEffect, useState } from "react";

import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import ad_image from "../images/camiseta-formandos.jpg";
import "../styles/components/myads.css";
import api from "../services/api";
function MyAds() {
  const userId = parseInt(localStorage.getItem("userId"));

  const [ads, setAds] = useState([]);
  const [images, setImages] = useState([]);
  const [products, setProducts] = useState([]);

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

  async function handleDelete(ad) {
    let response = window.confirm("Tem certeza que quer EXCLUIR O ANUNCIO?");
    if (response == true) {
      await api.delete(`/product/delete/${ad}`, {
        headers: {
          Authorization: userId,
        },
      });
      alert("Anuncio deletado com sucesso");
    }
  }

  return (
    <div>
      <h2 className="myads__filter">#Meus anúncios</h2>
      {ads.map((ad) =>
        ad.user_id === userId ? (
          <div key={ad.id} className="myads__container">
            <div className="myads__wrapper--image">
              {images.map((image) =>
                image.product_id === ad.id ? (
                  <div key={image.id} className="myads__photo">
                    <img
                      src={`http://localhost:3333/files/images/${image.path}`}
                      alt="Foto do anuncio"
                    />
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
            <div className="myads__name">
              <h3 className="myads__name--title">{ad.title}</h3>
              <p>{ad.description}</p>
            </div>
            <div className="myads__price">
              <h3>{`R$ ${ad.price}`}</h3>
            </div>
            <div className="myads__actions">
              <div className="myads__actions--edit">
                <button className="myads__button--edit">
                  <label className="myads__lbl--edit">Editar</label>
                  <FiEdit />
                </button>
              </div>
              <div className="myads__actions--delete">
                <button
                  className="myads__button--delete"
                  onClick={() => handleDelete(ad.id)}
                >
                  <label className="myads__lbl--delete">Excluir</label>
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default MyAds;
