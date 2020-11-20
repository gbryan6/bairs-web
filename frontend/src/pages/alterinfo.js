import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/pages/register.css";
import RegisterHead from "../components/registerHead.js";
import api from "../services/api";

function AlterInfo() {
  const periods = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const [instituition, setInstituition] = useState([]);
  const [instituitions, setInstituitions] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const [user, setUser] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [genre, setGenre] = useState("");
  const [period, setPeriod] = useState("");
  const [phone, setPhone] = useState("");
  const [study_shift, setStudyShift] = useState("");
  const [instituition_id, setInstituition_id] = useState("");
  const [classroom_id, setClassroom_id] = useState("");

  const Logged = localStorage.getItem("userId");
  const history = useHistory();

  // roba uma função aq rapidin
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
      await api
        .get("/classrooms", {
          headers: {
            Authorization: instituition_id,
          },
        })
        .then((response) => {
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

  useEffect(() => {
    async function loadUser() {
      await api.get(`/user/${Logged}`).then((response) => {
        setUser(response.data);
      });
    }
    loadUser();
  }, [Logged]);

  async function handleUpdate(e) {
    e.preventDefault();

    const id = user[0].id;

    const data = {
      study_shift,
      phone,
      period,
      genre,
      mail,
      password,
      username,
      instituition_id,
      classroom_id,
    };

    if (
      period === "" ||
      genre === "" ||
      study_shift === "" ||
      instituition_id === "" ||
      classroom_id === ""
    ) {
      alert("Você precisa preencher todos os campos!");
      return;
    }

    await api.put(`user/update/${id}`, data);
    history.push(`/dashboard/${id}`);
  }

  return (
    <div className="register__all">
      <RegisterHead title="Alterar Cadastro" />
      <div className="form">
        <div className="form__content">
          <form className="form__area" onSubmit={handleUpdate}>
            <div className="form__student">
              {user.map((user) => (
                <>
                  <label key={user.id} htmlFor="nickname">
                    Usuário
                  </label>
                  <input
                    type="text"
                    name="nickname"
                    id="nickname"
                    placeholder={user.username}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />

                  <label htmlFor="mail">E-mail</label>
                  <input
                    type="text"
                    name="mail"
                    id="mail"
                    placeholder={user.mail}
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    required
                  />

                  <label htmlFor="description">WhatsApp</label>
                  <input
                    type="text"
                    maxLength="11"
                    id="tel"
                    placeholder={user.phone}
                    defaultValue={user.phone}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </>
              ))}
              <label htmlFor="University">Nome da Universidade</label>
              <select
                id="select"
                value={instituition_id}
                onChange={(e) => setInstituition_id(e.target.value)}
                required
              >
                <option value="-1" selected>
                  Selecione a Universidade
                </option>
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
                  </>
                )
              )}
              <div className="form__flex">
                <label htmlFor="genre">
                  Gênero
                  <select
                    id="select"
                    name="genre"
                    className="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    required
                  >
                    <option selected value="-1" selected>
                      Selecione
                    </option>
                    <option value="masculino">Masculino</option>
                    <option value="masculino">Feminino</option>
                    <option value="outro">Outro</option>
                  </select>
                </label>

                <label htmlFor="classroom">
                  Curso
                  <select
                    id="select"
                    value={classroom_id}
                    onChange={(e) => setClassroom_id(e.target.value)}
                    required
                  >
                    <option value="-1" selected>
                      Selecione
                    </option>
                    {classrooms.map((classroom) => (
                      <option value={classroom.id}>{classroom.name}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="form__flex">
                <label htmlFor="study_shift">
                  Turno
                  <select
                    id="select"
                    value={study_shift}
                    onChange={(e) => setStudyShift(e.target.value)}
                    required
                  >
                    <option value="-1" selected>
                      Selecione
                    </option>
                    <option value="manha">Manhã</option>
                    <option value="tarde">Tarde</option>
                    <option value="noite">Noite</option>
                  </select>
                </label>

                <label htmlFor="period">
                  Período
                  <select
                    type="text"
                    id="select"
                    name="period"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    required
                  >
                    <option value="-1" selected>
                      Selecione o período
                    </option>
                    {periods.map((period) => (
                      <option
                        value={`${period}º periodo`}
                      >{`${period}º periodo`}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label htmlFor="password">Confirme sua senha</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" id="button">
              Alterar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AlterInfo;
