import React from "react";
import { Link } from "react-router-dom";
import Capelo from "../images/capelo.svg";
import "../styles/pages/congratulations.css";

function congratulations() {
  return (
    <div className="congratulations__content">
      <div className="congratulations">
        <h1>Parabéns !</h1>
        <div className="congratulations__img">
          <img src={Capelo} alt="Capelo" />
        </div>
        <p>Agora você faz parte do BAIRS</p>
        <div className="inicio">
          <Link to="/login">Fazer o login</Link>
        </div>
      </div>
    </div>
  );
}
export default congratulations;
