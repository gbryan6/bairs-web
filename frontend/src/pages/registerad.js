import React from "react";
import RegisterHead from "../components/registerHead.js";
import { AiOutlineCamera } from "react-icons/ai";
// import { Container } from './styles';
import "../styles/pages/registerad.css";

function RegisterAd() {
  return (
    <div className="newad__content">
      <RegisterHead title="O que gostaria de anunciar ?" />

      <div className="newad__registerarea">
        <div className="form__content--ad">
          <form action="">
            <div className="inputs__area">
              <div className="wrapper__ad">
                <label htmlFor="name">Qual produto ?</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="wrapper__ad">
                <label htmlFor="name">Descrição</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="wrapper__ad">
                <label htmlFor="name">Preço</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="wrapper__ad">
                <label htmlFor="name">Categoria</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="wrapper__ad">
                <label htmlFor="name">Tipo</label>
                <input type="text" name="name" id="name" required />
              </div>
              <button  type="submit" id="button">
                Anunciar
              </button>
            </div>
            <div className="photos__ad">
              <label className="thumbs main">
                <input type="file" />
                <AiOutlineCamera />
              </label>
              <div className="small">
                <label className="thumbs sec">
                  <input type="file" />
                  <AiOutlineCamera />
                </label>
                <label className="thumbs sec">
                  <input type="file" />
                  <AiOutlineCamera />
                </label>
                <label className="thumbs sec">
                  <input type="file" />
                  <AiOutlineCamera />
                </label>
                <label className="thumbs sec">
                  <input type="file" />
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
