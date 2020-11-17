import React from "react";
import { MdSearch } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import "../styles/components/header.css";
import Logo from "../images/bairsLogoP.svg";
import Perfil from "../images/perfilP.jpg";
import { Link } from "react-router-dom";

function Header() {
  let Logged = localStorage.getItem("userId");
  return (
    <div>
      <nav className="top-bar__content">
        <Link to="/" className="wrapper__logo">
          <img src={Logo} alt="Logotipo Bairs" className="top-bar__logo" />
        </Link>
        <div className="top-bar__search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Pesquise algo ..."
            className="top-bar___text"
          />
          <div className="icon-button search__icon">
            <MdSearch className="icon" />
          </div>
        </div>
        {Logged ? (
          <>
            <div className="top-bar__login">
              <img src={Perfil} alt="" />
              <Link to="/dashboard/temp">Nome</Link>
            </div>
            <div className="icon-button">
              <AiOutlinePoweroff className="notification" />
            </div>
          </>
        ) : (
          ""
        )}

        <Link to={Logged ? "/newad" : "/login"} className="top-bar__button">
          Quero anunciar
        </Link>
      </nav>
    </div>
  );
}

export default Header;
