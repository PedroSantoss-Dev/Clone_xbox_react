import React, { useState } from "react";
import { Slide } from "react-slideshow-image";

const Jogar = () => {
  

  const properties = {
    duration: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    indicators: true,
  };

  return (
    <div>
      <div>
        <Slide {...properties}>
          
        </Slide>
      </div>
    </div>
  );
};

export default Jogar;