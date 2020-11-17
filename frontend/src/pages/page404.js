import React from "react";
import Capelo from "../images/capelo.svg";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "../styles/pages/page404.css";

// import { Container } from './styles';

function Page404() {
  const history = useHistory();
  return (
    <div className="page404__content">
      <Link onClick={history.goBack} className="page404__back">
        <FiArrowLeft />
      </Link>
      <div className="page404__info">
        <div className="page404__image">
          <img src={Capelo} alt="Capelo BAIRS" />
        </div>
        <h1>ERROR 404 - NOT FOUND</h1>
        <p>página não encontrada</p>
      </div>
    </div>
  );
}

export default Page404;
