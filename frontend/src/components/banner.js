import React from "react";

import "../styles/components/banner.css";

import BannerImage from "../images/Capa_BAIRS.png";

function Banner() {
  return (
    <div className="banner__photo">
      <img src={BannerImage} alt="Banner Bairs" />
    </div>
  );
}

export default Banner;
