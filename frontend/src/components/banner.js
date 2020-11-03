import React from 'react';

import '../styles/components/banner.css';
import banner from '../images/banner_1.jpg';

function Banner() {
  return(
    <div className="banner__photo">
        <img src={banner} alt="banner"/>
    </div>
    )  
}

export default Banner;