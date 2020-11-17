import React, { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import "../styles/components/header.css";
import Logo from "../images/bairsLogoP.svg";
import Perfil from "../images/perfilP.jpg";
import { Link } from "react-router-dom";
import api from "../services/api"

function Header() {
  const Logged = localStorage.getItem("userId")
  const [user, setUser] = useState([])


  useEffect(() => {
    async function loaddata(){
      await api.get(`/user/${Logged}`).then(response => {
        setUser(response.data)
      })
    }
    loaddata()
  }, [Logged])


  return (
    user.map(user => (
    <div key={user.id}>
      {user.situation ==="Unauthorized" ? 
      <div style={{background: "#FF0000", height: "30px", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <p style={{
          background: "#FF0000",
          border: "2px solid #FFFF",
          color: "#FFF",
          fontSize: "14px"
          }}>
          Enviar matricula aqui
          <input type="file"
          style={{
            width: "100%",
            display:"none",
          }}
          />
          </p>
        
      </div> : ""}
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
            <div key={user.id} className="top-bar__login">
              <div style={{
                backgroundImage: `url(${`http://localhost:3333/files/profile/picture/${user.profile_path}`})`,
                
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  
              }} className="top-bar__image"/>
            
              <Link to="/dashboard/temp" id="top-bar__name">{user.username}</Link>
            </div>
            <div className="icon-button">
              <AiOutlinePoweroff className="notification" />
            </div>
          </>
           
        ) : (
          ""
        )}
          {user.situation ==="Unauthorized" ? 
          <button disabled className="top-bar__button_disabled">
            Quero anunciar
            </button> :
          <Link  to={Logged ? "/newad" : "/login"} className="top-bar__button">
            Quero anunciar
            </Link> }
      </nav>
    </div>
    ))
  );
}

export default Header;
