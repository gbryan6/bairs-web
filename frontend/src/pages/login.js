import React from 'react';
import '../styles/pages/login.css'
import Vector from '../images/svgLogin.svg';
// import { Container } from './styles';

function Login() {
    return (
        <div id="login__content">
            <div className="login__content--left">
                <div className="content__user">
                    <div className="login__message">
                        <h1>Servindo a você para encontrar  a sua necessidade.</h1>
                        <p>Bem vindo, por favor logue em sua conta</p>
                    </div>
                    <div className="content__login">
                        <form className="user__login">

                            <div className="user">
                                <label htmlFor="">
                                    Usuario
                                </label>
                                <input type="text" name="" id="" />
                            </div>

                            <div className="password">
                                <label htmlFor="">
                                    Senha</label>
                                <input type="password" name="" id="" />
                            </div>

                            <input type="radio" name="" id="" /> Lembre de mim
                            <a href="">esqueceu a senha</a>

                            <button>Entrar</button>
                            <button>Registrar</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="login__content--right">
                <img src={Vector} alt="Conexão entre usuarios" />
            </div>
        </div>
    )
}

export default Login;