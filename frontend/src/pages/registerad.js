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
                <label htmlFor="name">Nome completo</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="wrapper__ad">
                <label htmlFor="name">Nome completo</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="wrapper__ad">
                <label htmlFor="name">Nome completo</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="wrapper__ad">
                <label htmlFor="name">Nome completo</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="wrapper__ad">
                <label htmlFor="name">Nome completo</label>
                <input type="text" name="name" id="name" required />
              </div>
            </div>
            <div className="photos__ad">
              <label htmlFor="" id="main">
                <input type="file" name="" id="main" />
              </label>
              <div className="small">
                <label htmlFor="" id="sec">
                  <input type="file" name="" id="sec" />
                </label>
                <label htmlFor="" id="sec">
                  <input type="file" name="" id="sec" />
                </label>
                <label htmlFor="" id="sec">
                  <input type="file" name="" id="sec" />
                </label>
                <label htmlFor="" id="sec">
                  <input type="file" name="" id="sec" />
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
