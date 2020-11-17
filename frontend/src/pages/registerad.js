import React, { useState } from "react";
import RegisterHead from "../components/registerHead.js";
import { AiOutlineCamera } from "react-icons/ai";

// import { Container } from './styles';
import "../styles/pages/registerad.css";

function RegisterAd() {
  const [thumbnail, setThumbnail] = useState([]);

  const data = thumbnail
    ? thumbnail.map((thumb) => URL.createObjectURL(thumb))
    : null;
  console.log(data);

  return (
    <div className="newad__content">
      <RegisterHead title="O que gostaria de anunciar ?" />

      <div className="newad__registerarea">
        <div className="form__content--ad">
          <form action="">
            <div className="inputs__area">
              <div className="wrapper__ad">
                <label htmlFor="name">Qual produto ou serviço ?</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="wrapper__ad">
                <label htmlFor="name">Descrição</label>
                <textarea type="textarea" name="name" id="name" required />
              </div>
              <div className="wrapper__ad">
                <label htmlFor="name">Preço</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="wrapper__ad">
                <label htmlFor="name">Categoria</label>
                <select name="" id="">
                  <option value="0">Selecione</option>
                  <option value="Acadêmicos">Acadêmicos</option>
                  <option value="Cosméticos">Cosméticos</option>
                  <option value="Informática">Informática</option>
                  <option value="Comida e Bebidas">Comida e Bebidas</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <label htmlFor="name">Tipo</label>
              <div className="wrapper__adcheck">
                <input type="checkbox" name="name" id="produto" required />
                Produto
                <input type="checkbox" name="name" id="servico" required />
                Serviço
              </div>
              <button type="submit" id="button">
                Anunciar
              </button>
            </div>
            <div className="photos__ad">
              <label
                className={
                  thumbnail[0] ? "thumbs main has-thumb" : "thumbs main"
                }
                style={{
                  backgroundImage: `url(${
                    thumbnail[0] ? URL.createObjectURL(thumbnail[0]) : ""
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
                    setThumbnail((thumbnail) => [
                      ...thumbnail,
                      event.target.files[0],
                    ])
                  }
                />
                <AiOutlineCamera />
              </label>
              <div className="small">
                <label
                  className={
                    thumbnail[1] ? "thumbs sec has-thumb" : "thumbs sec"
                  }
                  style={{
                    backgroundImage: `url(${
                      thumbnail[1] ? URL.createObjectURL(thumbnail[1]) : ""
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
                      setThumbnail((thumbnail) => [
                        ...thumbnail,
                        event.target.files[0],
                      ])
                    }
                  />
                  <AiOutlineCamera />
                </label>
                <label
                  className={
                    thumbnail[2] ? "thumbs sec has-thumb" : "thumbs sec"
                  }
                  style={{
                    backgroundImage: `url(${
                      thumbnail[2] ? URL.createObjectURL(thumbnail[2]) : ""
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
                      setThumbnail((thumbnail) => [
                        ...thumbnail,
                        event.target.files[0],
                      ])
                    }
                  />
                  <AiOutlineCamera />
                </label>
                <label
                  className={
                    thumbnail[3] ? "thumbs sec has-thumb" : "thumbs sec"
                  }
                  style={{
                    backgroundImage: `url(${
                      thumbnail[3] ? URL.createObjectURL(thumbnail[3]) : ""
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
                      setThumbnail((thumbnail) => [
                        ...thumbnail,
                        event.target.files[0],
                      ])
                    }
                  />
                  <AiOutlineCamera />
                </label>
                <label
                  className={
                    thumbnail[4] ? "thumbs sec has-thumb" : "thumbs sec"
                  }
                  style={{
                    backgroundImage: `url(${
                      thumbnail[4] ? URL.createObjectURL(thumbnail[4]) : ""
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
                      setThumbnail((thumbnail) => [
                        ...thumbnail,
                        event.target.files[0],
                      ])
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
