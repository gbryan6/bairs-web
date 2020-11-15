import React from 'react';
import { useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';
import capelo from '../images/capelo.svg';
import '../styles/components/registerHead.css';
import {Link} from 'react-router-dom';


function HeaderReg(props) {
 
  const history = useHistory();

  return (
    <div className="header__register">
      <div className="header__icons">
        <div className="header__arrow">
          <Link onClick={history.goBack} className="header__link">
          <FiArrowLeft className="arrow" size={30} />
          </Link>
        </div>
        <div className="header__logo">
          <img src={capelo} alt="logo" />
        </div>
      </div>
      <div className="header__title">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default HeaderReg;