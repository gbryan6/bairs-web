import React, {useState} from "react";
import "../styles/pages/login.css";
import Vector from "../images/svgLogin.svg";
import { Link, useHistory } from "react-router-dom";
import api from '../services/api';
// import { Container } from './styles';

function Login() {

    function setLocal(item, data){

     return localStorage.setItem(item, data);
    }

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        const data = {
            mail,
            password,
        }
        
        try {
          const response = await api.post('session/user', data);
          setLocal("userId", response.data.id);
          history.push('/');
        } catch (error) {
          return alert("usuario ou senha invalidos") ; 
        }
    }

  return (
    <div id="login__content">
      <div className="login__content--left">
        <div className="content__user">
          <div className="login__message">
            <h1>BAIRS</h1>
            <h2>Servindo a você para encontrar a sua necessidade.</h2>
            <p>Bem vindo, por favor faça o login em sua conta.</p>
          </div>
          <div className="content__login">
            <form className="user__login" onSubmit={handleLogin}>
              <div className="wrapper">
                <div className="input__data">
                  <input
                    type="text"
                    name="user"
                    id="user"
                    value={mail}
                    onChange={e => setMail(e.target.value)}
                    required
                  />
                  <label htmlFor="user">Usuário</label>
                </div>
              </div>
              <div className="wrapper">
                <div className="input__data">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="password">Senha  </label>
                </div>
                <div>
                  <p>{}</p>
                </div>
              </div>
              <div className="wrapper__options">
                <label htmlFor="remember" className="login__remember-me">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    value={remember}
                    onChange={e => setRemember(e.target.checked)}
                  />
                  Lembre de mim
                </label>
                <a href="">esqueceu a senha</a>
              </div>
              <div className="wrapper__buttons">
                <div className="wrapper__content--buttons">
                  <button className="login" type="submit">
                    Entrar
                  </button>
                  <Link to="/register" className="register">Registrar</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="login__content--right">
        <img src={Vector} alt="Conexão entre usuarios" />
      </div>
    </div>
  );
}

export default Login;
