import React from 'react';
import Capelo from '../images/capelo.svg';

import '../styles/pages/page404.css';

// import { Container } from './styles';

function Page404() {
  return (
      <div className="page404__content">
          <div>
              <img src={Capelo} alt="Capelo BAIRS"/>
          </div>
          <h1>
              PAGE 404 - NOT FOUND MANE
          </h1>
      </div>
  )
}

export default Page404;