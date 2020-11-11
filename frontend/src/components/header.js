import React from "react";
import { MdSearch } from "react-icons/md";
import { FiBell } from "react-icons/fi";
import "../styles/components/header.css";
import Logo from "../images/bairsLogoP.svg";
import Pefil from "../images/perfilP.jpg";
import { Link } from "react-router-dom";

function Header() {
  let Logged = localStorage.getItem("userID");
  return (
    <div>
      <nav className="top-bar__content">
        <img src={Logo} alt="Logotipo Bairs" className="top-bar__logo" />
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
              <img src={Pefil} alt="" />
              <a href="#">Nome</a>
            </div>
            <div className="icon-button">
              <FiBell className="notification" />
            </div>
          </>
        ) : (
          ""
        )}

        <Link to={Logged ? "/newad" : "/register"} className="top-bar__button">
          Quero anunciar
        </Link>
      </nav>
    </div>
  );
}

export default Header;
