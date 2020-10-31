import React from 'react';
import { MdSearch } from 'react-icons/md';
import { FiBell } from 'react-icons/fi';
import '../styles/components/header.css';
import Logo from '../images/bairsLogoP.svg';
import Pefil from '../images/perfilP.jpg'

function Header() {
    return (
        <div>
            <nav className="top-bar__content">
                <img src={Logo} alt="Logotipo Bairs" className="top-bar__logo" />
                <div className="top-bar__search">
                    <input type="text" name="search" id="search" placeholder='Pesquise algo ...' className="top-bar___text" />
                    <div className="icon-button search__icon">
                        <MdSearch className="icon"/>
                    </div>
                </div>
            
               <div className="top-bar__login">
                    <img src={Pefil} alt=""/>
                    <a href="#">Entrar</a>
                </div>
                <div className="icon-button">
                    <FiBell className="notification"/>
                </div>

                <button className="top-bar__button">
                    Quero anunciar
                </button>
                
            </nav>
        </div>
    )
}

export default Header;