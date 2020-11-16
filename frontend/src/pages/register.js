import React, { useState, useMemo, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "../styles/pages/register.css";
import RegisterHead from "../components/registerHead.js";
import api from '../services/api';

function Register() {
  const [instituitions, setInstituitions] = useState([])
  const [instituition, setInstituition] = useState([])
  const [classroons, setClassroons] = useState([])

  //register data
  const [image, setImage] = useState(null);
  const [date, setDate] = useState("");
  const [full_name, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [genre, setGenre] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [study_shift, setStudyShift] = useState("");
  const [instituition_id, setInstituition_id] = useState("");


  useEffect(() => {
    async function loadInstituitions() {
      await api.get("/instituitions").then(response => {
        setInstituitions(response.data)
      })
    }
    loadInstituitions()

  }, []);

  useEffect(() => {
    async function loadInstituition() {
      await api.get(`/instituitions/${instituition_id}`).then(response => {
        setInstituition(response.data)
      })
    }

    loadInstituition()
  }, [instituition_id]);

  const preview = useMemo(() => {
    return image ? URL.createObjectURL(image) : null;
  }, [image]);

  const history = useHistory();

  return (
    <div className="register__all">
      <RegisterHead title="Crie sua conta" />
      <div className="form">
        <div className="form__content">
          <form className="form__area"  >
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
              <label htmlFor="University">Nome da Universidade</label>
              <select value={instituition_id} onChange={(e) => setInstituition_id(e.target.value)}>
                <option value="-1">Selecione a Universidade</option>
                {instituitions.map((instituition) => (
                  <option key={instituition.id} value={instituition.id}>
                    {instituition.name} - ({instituition.campus})
                  </option>
                ))}
              </select>
              {instituition.map(instituition => (instituition_id === "" || instituition_id === "-1" ? null :
                <>
                  <label key={instituition.id} htmlFor="address">Endereço</label>
                  <input type="text" id="address" disabled value={`${instituition.address}, ${instituition.number} - ${instituition.neighborhood}`} />

                  <label htmlFor="city">Cidade</label>
                  <input type="text" id="city" disabled value={instituition.city} />

                  <div className="wrapper__form">
                    <label htmlFor="cep">
                      CEP
                  <input type="text" id="cep" disabled value={instituition.CEP} />
                    </label>

                    <label htmlFor="uf">
                      UF
                  <input

                        type="text"
                        id="UF"
                        disabled
                        value={instituition.uf}
                      />
                    </label>
                  </div>
                </>))}


              <label htmlFor="email">Curso</label>
              <input type="number" name="email" id="email" value={phone} onChange={e => setPhone(e.target.value)} required />


              <div className="form__flex">
                <label htmlFor="study_shift">
                  turno
                  <select id="genre" value={study_shift} onChange={e => setStudyShift(e.target.value)}>
                    <option value="0">
                      selecione
                    </option>
                    <option value="manha">
                      Manhã
                    </option>
                    <option value="tarde">Tarde</option>
                    <option value="noite">Noite</option>
                  </select>
                </label>

                <label htmlFor="birth">
                  Periodo
                  <input
                    type="text"
                    id="period"
                    name="period"
                    required
                  />
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
