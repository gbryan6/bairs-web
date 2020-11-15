import React from 'react';
import Header from '../components/header';
import Info from '../components/adinfo.js';
import '../styles/pages/ad.css';
// import { Container } from './styles';

function Ad() {
  return (
    <div className="ad__content">
        <nav>
        <Header />
        </nav>
        <div className="wrapper__info">
            <Info />    
        </div>

    </div>
  )
}

export default Ad;