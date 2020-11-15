import React, { useState, useMemo } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "../styles/pages/register.css";
import RegisterHead from "../components/registerHead.js";
import api from '../services/api';

function Register() {
  const [image, setImage] = useState(null);
  const [date, setDate] = useState("");
  const [full_name, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [genre, setGenre] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");

  const preview = useMemo(() => {
    return image ? URL.createObjectURL(image) : null;
  }, [image]);

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const profile_path = image.name;

    const dataRegister = {
      profile_path,
      date,
      full_name,
      username,
      password,
      mail,
      genre,
      cpf,
      phone
    }




  }
  return (
    <div className="register__all">
      <RegisterHead title="Crie sua conta"  />
      <div className="form">
        <div className="form__content">
          <form className="form__area" onSubmit={handleRegister}>
            <div className="form__student">
              <label htmlFor="name">Nome completo</label>
              <input type="text" name="name" id="name" value={full_name} onChange={e => setFullName(e.target.value)} required />

              <div className="wrapper__form">
                <label htmlFor="nickname">
                  Usuario
                  <input type="text" id="nickname" value={username} onChange={e => setUsername(e.target.value)} required />
                </label>

                <label htmlFor="password">
                  Senha
                  <input
                    type="password"
                    id="password"
                    required
                    value={password} onChange={e => setPassword(e.target.value)}
                  />
                </label>
              </div>

              <label htmlFor="email">E-mail válido</label>
              <input type="text" id="email" value={mail} onChange={e => setMail(e.target.value)} required />

              <label htmlFor="email">Telefone</label>
              <input type="number" name="email" id="email" value={phone} onChange={e => setPhone(e.target.value)} required />


              <div className="form__flex">
                <label htmlFor="genre">
                  Gênero
                  <select id="genre" name="genre" className="genre" value={genre} onChange={e => setGenre(e.target.value)}>
                    <option value="0">
                      selecione
                    </option>
                    <option value="feminino">
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

              <label htmlFor="cpf">CPF</label>
              <input type="number" id="cpf" name="cpf" value={cpf} onChange={e => setCpf(e.target.value)} required />

            </div>



            <div className="form__student">
              <label htmlFor="name">Nome completo</label>
              <input type="text" name="name" id="name" value={full_name} onChange={e => setFullName(e.target.value)} required />

              <div className="wrapper__form">
                <label htmlFor="nickname">
                  Usuario
                  <input type="text" id="nickname" value={username} onChange={e => setUsername(e.target.value)} required />
                </label>

                <label htmlFor="password">
                  Senha
                  <input
                    type="password"
                    id="password"
                    required
                    value={password} onChange={e => setPassword(e.target.value)}
                  />
                </label>
              </div>

              <label htmlFor="email">E-mail válido</label>
              <input type="text" id="email" value={mail} onChange={e => setMail(e.target.value)} required />

              <label htmlFor="email">Telefone</label>
              <input type="number" name="email" id="email" value={phone} onChange={e => setPhone(e.target.value)} required />


              <div className="form__flex">
                <label htmlFor="genre">
                  Gênero
                  <select id="genre" name="genre" className="genre" value={genre} onChange={e => setGenre(e.target.value)}>
                    <option value="0">
                      selecione
                    </option>
                    <option value="feminino">
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

              <label htmlFor="cpf">CPF</label>
              <input type="number" id="cpf" name="cpf" value={cpf} onChange={e => setCpf(e.target.value)} required />

              
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
                className={image ? "has-thumbnail" : ""}
              >
                <input
                  type="file"
                  onChange={(event) => setImage(event.target.files[0])}
                  id="photo"
                />
                <FaUserCircle className="icon" />
              </label>
              <p>Inserir foto</p>
              <button type="submit" id="button">
                Registrar 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
