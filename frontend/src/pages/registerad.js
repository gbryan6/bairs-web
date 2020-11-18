import React, { useState, useEffect } from "react";
import RegisterHead from "../components/registerHead.js";
import { AiOutlineCamera } from "react-icons/ai";
import api from "../services/api";

// import { Container } from './styles';
import "../styles/pages/registerad.css";

function RegisterAd() {
  const [categorys, setCategorys] = useState([]);

  const userId = localStorage.getItem("userId");
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category_id, setCategoryId] = useState("");


  useEffect(() => {
    async function loadCategorys() {
      await api
        .get("/categorys", {
          headers: {
            Authorization: userId,
          },
        })
        .then((response) => {
          setCategorys(response.data);
        });
    }
    loadCategorys();
  }, []);


  function handleRegister(e) {
    e.preventDefault();

    const data = new FormData();
    
    data.append("title", title);
    data.append("description", description);
    data.append("price", price);
    data.append("category_id", category_id);

  }
  
  console.log(category_id);
  return (
    <div className="newad__content">
      <RegisterHead title="O que gostaria de anunciar ?" />

      <div className="newad__registerarea">
        <div className="form__content--ad">
          <form onSubmit={handleRegister}>
            <div className="inputs__area">
              <div className="wrapper__ad">
                <label htmlFor="name">Nome do produto ou serviço ?</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="wrapper__ad">
                <label htmlFor="name">Descrição</label>
                <textarea
                  type="textarea"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="wrapper__ad">
                <label htmlFor="name">Preço</label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="wrapper__ad">
                <label htmlFor="name">Categoria</label>
                <select value={category_id} onChange={e => setCategoryId(e.target.value)}>
                  <option value="0">Selecione</option>
                  {categorys.map((category) => (
                    <option value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              <label htmlFor="">Tipo de anuncio</label>
              <select name="" id="select">
                <option value="">selecione</option>
                <option value="Produto">Produto</option>
                <option value="Serviço">Serviço</option>
              </select>
              <button type="submit" id="button">
                Anunciar
              </button>
            </div>
            <div className="photos__ad">
              <label
                className={images[0] ? "thumbs main has-thumb" : "thumbs main"}
                style={{
                  backgroundImage: `url(${
                    images[0] ? URL.createObjectURL(images[0]) : ""
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  overflow: "hidden",
                }}
              >
                <input
                  type="file"
                  onChange={(event) =>
                    setImages((images) => [...images, event.target.files[0]])
                  }
                />
                <AiOutlineCamera />
              </label>
              <div className="small">
                <label
                  className={images[1] ? "thumbs sec has-thumb" : "thumbs sec"}
                  style={{
                    backgroundImage: `url(${
                      images[1] ? URL.createObjectURL(images[1]) : ""
                    })`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  id="photo2"
                >
                  <input
                    type="file"
                    multiple
                    onChange={(event) =>
                      setImages((images) => [...images, event.target.files[0]])
                    }
                  />
                  <AiOutlineCamera />
                </label>
                <label
                  className={images[2] ? "thumbs sec has-thumb" : "thumbs sec"}
                  style={{
                    backgroundImage: `url(${
                      images[2] ? URL.createObjectURL(images[2]) : ""
                    })`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  id="photo3"
                >
                  <input
                    type="file"
                    onChange={(event) =>
                      setImages((images) => [...images, event.target.files[0]])
                    }
                  />
                  <AiOutlineCamera />
                </label>
                <label
                  className={images[3] ? "thumbs sec has-thumb" : "thumbs sec"}
                  style={{
                    backgroundImage: `url(${
                      images[3] ? URL.createObjectURL(images[3]) : ""
                    })`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  id="photo4"
                >
                  <input
                    type="file"
                    onChange={(event) =>
                      setImages((images) => [...images, event.target.files[0]])
                    }
                  />
                  <AiOutlineCamera />
                </label>
                <label
                  className={images[4] ? "thumbs sec has-thumb" : "thumbs sec"}
                  style={{
                    backgroundImage: `url(${
                      images[4] ? URL.createObjectURL(images[4]) : ""
                    })`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  id="photo5"
                >
                  <input
                    type="file"
                    onChange={(event) =>
                      setImages((images) => [...images, event.target.files[0]])
                    }
                  />
                  <AiOutlineCamera />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterAd;
