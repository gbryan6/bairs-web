import React, { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import "../styles/components/header.css";
import Logo from "../images/bairsLogoP.svg";
import Perfil from "../images/perfilP.jpg";
import { Link, useHistory } from "react-router-dom";
import api from "../services/api";

function Header() {
  const Logged = localStorage.getItem("userId");
  const [user, setUser] = useState([]);

  const [registration_path, setRegistrationPath] = useState("");

  useEffect(() => {
    async function loaddata() {
      await api.get(`/user/${Logged}`).then((response) => {
        setUser(response.data);
      });
    }
    loaddata();
  }, [Logged]);

  const history = useHistory();

 async function handleMatriculation(e) {
    e.preventDefault();

    const data = new FormData();

    data.append("registration_path", registration_path);

    console.log(data.values);
   /* await api.post("/registration/send", data, {
      headers:{
        Authorization: Logged
      }
    });*/

    
  }

  function logout() {
    localStorage.removeItem("userId");
  }

  return (
    <>
      {Logged ? (
        user.map((user) => (
          <div key={user.id}>
            {user.situation === "Unauthorized" ? (
              <form onSubmit={handleMatriculation} className="top-bar__un">
                <label>
                  Você ainda não está autorizado a publicar anúncios, por favor
                  clique <strong>aqui</strong> e envie sua matricula.
                  <input
                    type="file"
                    onChange={(e) => setRegistrationPath(e.target.files[0])}
                    className="top-bar__env"
                  />
                </label>
                {
                  <button
                    type="submit"
                    className={
                      registration_path !== ""
                        ? "top-bar__button"
                        : "top-bar__button_disabled"
                    }
                    style={{
                      width: "60px",
                      height: "20px",
                      margin: "0",
                      fontSize: "12px",
                      borderRadius: "2px",
                      marginRight: "10px",
                    }}
                  >
                    Enviar
                  </button>
                }
              </form>
            ) : (
              ""
            )}
            <nav className="top-bar__content">
              <Link to="/" className="wrapper__logo">
                <img
                  src={Logo}
                  alt="Logotipo Bairs"
                  className="top-bar__logo"
                />
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
                    <div className="top-bar__image">
                      <img
                        src={
                          user.profile_path === undefined
                            ? Perfil
                            : `http://localhost:3333/files/profile/picture/${user.profile_path}`
                        }
                      />
                    </div>
                    <Link to={`/dashboard/${Logged}`} id="top-bar__name">
                      {user.username}
                    </Link>
                  </div>
                  <div className="icon-button">
                    <Link to="/login" onClick={logout} className="top-bar__logout">
                      <AiOutlinePoweroff />
                    </Link>
                  </div>
                </>
              ) : (
                ""
              )}
              {user.situation === "Unauthorized" ? (
                <button disabled className="top-bar__button_disabled">
                  Quero anunciar
                </button>
              ) : (
                <Link
                  to={Logged ? "/newad" : "/login"}
                  className="top-bar__button"
                >
                  Quero anunciar
                </Link>
              )}
            </nav>
          </div>
        ))
      ) : (
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
          <Link to={Logged ? "/newad" : "/login"} className="top-bar__button">
            Quero anunciar
          </Link>
        </nav>
      )}
    </>
  );
}

export default Header;
