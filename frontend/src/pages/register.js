import React, { useState, useMemo, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "../styles/pages/register.css";
import RegisterHead from "../components/registerHead.js";
import api from "../services/api";

function Register() {
  const periods = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const [instituitions, setInstituitions] = useState([]);
  const [instituition, setInstituition] = useState([]);
  const [classrooms, setClassrooms] = useState([]);

  //register data
  const [profile_path, setProfilePath] = useState(null);
  const [birth, setBirth] = useState("");
  const [full_name, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [genre, setGenre] = useState("");
  const [period, setPeriod] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [study_shift, setStudyShift] = useState("");
  const [instituition_id, setInstituition_id] = useState("");
  const [classroom_id, setClassroom_id] = useState("");

  async function handleRegister(e){
      e.preventDefault();
      const data = new FormData();

      data.append("full_name", full_name);
      data.append("username", username);
      data.append("birth", birth);
      data.append("phone", phone);
      data.append("mail", mail);
      data.append("genre", genre);
      data.append("cpf", cpf);
      data.append("period", period);
      data.append("study_shift", study_shift);
      data.append("password", password);
      data.append("profile_path", profile_path);
      data.append("instituition_id", instituition_id);
      data.append("classroom_id", classroom_id);

    try {
      await api.post('/user/register', data)
      history.push('/congratulations');
    } catch (error) {
      alert(error);
    }
     
      
      
    
  }

  useEffect(() => {
    async function loadInstituitions() {
      await api.get("/instituitions").then((response) => {
        setInstituitions(response.data);
      });
    }
    loadInstituitions();
  }, []);

  useEffect(() => {
    async function loadClassrooms() {
      await api.get("/classrooms", {
        headers: {
          Authorization: instituition_id
        }
      }).then((response) => {
        setClassrooms(response.data);
      });
    }
    loadClassrooms();
  }, [instituition_id]);


  useEffect(() => {
    async function loadInstituition() {
      await api.get(`/instituitions/${instituition_id}`).then((response) => {
        setInstituition(response.data);
      });
    }

    loadInstituition();
  }, [instituition_id]);

  const preview = useMemo(() => {
    return profile_path ? URL.createObjectURL(profile_path) : null;
  }, [profile_path]);

  const history = useHistory();

  return (
    <div className="register__all">
      <RegisterHead title="Crie sua conta" />
      <div className="form">
        <div className="form__content">
          <form className="form__area" onSubmit={handleRegister}>
            <div className="form__student">
              <label htmlFor="name">Nome completo</label>
              <input
                type="text"
                name="name"
                id="name"
                value={full_name}
                autofocus="true"
                onChange={(e) => setFullName(e.target.value)}
                required
              />

              <div className="wrapper__form">
                <label htmlFor="nickname">
                  Usuário
                  <input
                    type="text"
                    id="nickname"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </label>

                <label htmlFor="password">
                  Senha
                  <input
                    type="password"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>

              <label htmlFor="email">E-mail válido</label>
              <input
                type="text"
                id="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                required
              />

              <label htmlFor="tel">WhatsApp</label>
              <input
                type="text"
                maxLength="11"
                name="tel"
                id="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <div className="form__flex">
                <label htmlFor="genre">
                  Gênero
                  <select
                    id="select"
                    name="genre"
                    className="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  >
                    <option value="0">Selecione</option>
                    <option value="feminino">Feminino</option>
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
                    value={birth}
                    onChange={(e) => setBirth(e.target.value)}
                    required
                  />
                </label>
              </div>

              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                maxLength="11"
                id="cpf"
                name="cpf"
                value={cpf}
                autoComplete="off"
                placeholder="Insira apenas números"
                onChange={(e) => setCpf(e.target.value)}
                required
              />
            </div>

            <div className="form__student">
              <label htmlFor="University">Nome da Universidade</label>
              <select
                value={instituition_id}
                onChange={(e) => setInstituition_id(e.target.value)}
              >
                <option value="-1">Selecione a Universidade</option>
                {instituitions.map((instituition) => (
                  <option key={instituition.id} value={instituition.id}>
                    {instituition.name} - ({instituition.campus})
                  </option>
                ))}
              </select>
              {instituition.map((instituition) =>
                instituition_id === "" || instituition_id === "-1" ? null : (
                  <>
                    <label key={instituition.id} htmlFor="address">
                      Endereço
                    </label>
                    <input
                      type="text"
                      id="address"
                      disabled
                      value={`${instituition.address}, ${instituition.number} - ${instituition.neighborhood}`}
                    />

                    <label htmlFor="city">Cidade</label>
                    <input
                      type="text"
                      id="city"
                      disabled
                      value={instituition.city}
                    />

                    <div className="wrapper__form">
                      <label htmlFor="cep">
                        CEP
                        <input
                          type="text"
                          id="cep"
                          disabled
                          value={instituition.CEP}
                        />
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
                    <label htmlFor="classroom">Curso</label>
                    <select
                      id="select"
                      value={classroom_id}
                      onChange={(e) => setClassroom_id(e.target.value)}
                    >
                    <option value="0">Selecione</option>
                    {classrooms.map((classroom) => (
                        <option value={classroom.id}>{classroom.name}</option>
                    ))}
                    </select>
                  </>
                )
              )}



              <div className="form__flex">
                <label htmlFor="study_shift">
                  Turno
                  <select
                    id="select"
                    value={study_shift}
                    onChange={(e) => setStudyShift(e.target.value)}
                  >
                    <option value="0">Selecione</option>
                    <option value="manha">Manhã</option>
                    <option value="tarde">Tarde</option>
                    <option value="noite">Noite</option>
                  </select>
                </label>

                <label htmlFor="period">
                  Período
                  <select type="text" id="select" name="period" value={period} onChange={e => setPeriod(e.target.value)}>
                    <option value="-1">Selecione o período</option>
                    {periods.map((period) => (
                      <option value={`${period}º periodo`}>{`${period}º período`}</option>
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
                className={profile_path ? "has-thumbnail" : ""}
              >
                <input
                  type="file"
                  onChange={(event) => setProfilePath(event.target.files[0])}
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
