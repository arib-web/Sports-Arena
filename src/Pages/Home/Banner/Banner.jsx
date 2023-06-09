import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/basketball.jpg";
import img2 from "../../../assets/cricket.jpg";
import img3 from "../../../assets/football.jpg";
import img4 from "../../../assets/tennis.jpg";
import img5 from "../../../assets/virgil-cayasa-qhfR7ClZABA-unsplash.jpg";

const Banner = () => {
  return (
    <div className="h-1/3">
      <Carousel>
        <div className="h-full" >
          <img className="h-full" src={img1} />
        </div>
        <div className="h-full" >
          <img className="h-full" src={img2} />
        </div>
        <div className="h-full" >
          <img className="h-full" src={img3} />
        </div>
        <div className="h-full" >
          <img className="h-full" src={img4} />
        </div>
        <div className="h-full" >
          <img className="h-full" src={img5} />
        </div>
      </Carousel>
      </div>
  );
};

export default Banner;
