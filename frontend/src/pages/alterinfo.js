import React, { useState, useMemo } from "react";
import { FaUserCircle } from "react-icons/fa";
import "../styles/pages/register.css";
import RegisterHead from "../components/registerHead.js";
// import { Container } from './styles';
function AlterInfo() {
  const periods = ["1","2","3","4","5","6","7","8","9","10","11","12"];
  const [thumbnail, setThumbnail] = useState(null);
  const [date, setDate] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  function handleRegister(e) {
    e.preventDefault();
    console.log(date);
  }
  return (
    <div className="register__all">
      <RegisterHead title="Alterar Informações" />
      <div className="form">
        <div className="form__content">
          <form className="form__area" onSubmit={handleRegister}>
            <div className="form__student">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" required />

              <label htmlFor="nickname">Usuario</label>
              <input type="text" name="nickname" id="nickname" required />

              <label htmlFor="password">Senha</label>
              <input type="password" name="password" id="password" required />

              <label htmlFor="mail">E-mail</label>
              <input type="text" name="mail" id="mail" required />

              <label htmlFor="description">Telefone</label>
              <input type="number" id="tel" />

              <div className="form__flex">
                <label htmlFor="genre">
                  Gênero
                  <select id="select" name="genre" className="genre">
                    <option selected value="feminino">
                      Feminino
                    </option>
                    <option value="masculino">Masculino</option>
                    <option value="outro">Outro</option>
                  </select>
                </label>

                <label htmlFor="birth">
                  Data de nascimento
                  <input
                    type="date"
                    id="birth"
                    name="birth"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </label>
              </div>

              <div className="form__flex">
                <label htmlFor="study_shift">
                  Turno
                  <select id="select">
                    <option value="0">selecione</option>
                    <option value="manha">Manhã</option>
                    <option value="tarde">Tarde</option>
                    <option value="noite">Noite</option>
                  </select>
                </label>

                <label htmlFor="period">
                  Periodo
                  <select type="text" id="select" name="period">
                  <option value="-1">Selecione o periodo</option>
                    {periods.map((period) =>(
                        <option value={`${period}º periodo`}>{`${period}º periodo`}</option>
                    ))
                    }
                  </select>
                </label>
              </div>
            </div>
            <div className="form__photo">
              <label
                id="thumbnail"
                style={{
                  backgroundImage: `url(${preview})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className={thumbnail ? "has-thumbnail" : ""}
              >
                <input
                  type="file"
                  onChange={(event) => setThumbnail(event.target.files[0])}
                  id="photo"
                />
                <FaUserCircle className="icon" />
              </label>
              <p>Alterar foto</p>
              <button type="submit" id="button">
                Alterar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AlterInfo;
