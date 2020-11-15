import React from 'react';
import Perfil from "../images/perfilP.jpg";
import '../styles/components/headerDashboard.css';
import {Link} from 'react-router-dom'

// import { Container } from './styles';

function HeaderDashboard() {
    return (
        <div className="headerdash__all">
            <div className="dash__user">
                <div className="dash__img">
                    <img src={Perfil} alt="Foto de perfi" />
                </div>
                    <div className="dash__info">
                    <h1>Gustavo Miguel</h1>
                    <p>Centro Universitário Newton Paiva</p>
                    <Link to="/"type="submit" id="button"
                    style={{
                        width: "187px",
                        height: "37px",
                        fontWeight: "500",
                        fontSize: "15px",
                    }}>
                    Alterar informações
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderDashboard;