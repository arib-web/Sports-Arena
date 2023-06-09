import React from "react";
import SwiperCore, { Pagination,Navigation  } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "./Banner.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import basketballImage from "../../../assets/basketball.jpg";
import cricketImage from "../../../assets/cricket.jpg";
import footballImage from "../../../assets/football.jpg";
import tennisImage from "../../../assets/tennis.jpg";
import footballImage2 from "../../../assets/virgil-cayasa-qhfR7ClZABA-unsplash.jpg";

SwiperCore.use([Pagination,Navigation]);

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={true}
    >
      <SwiperSlide
        className="banner-item"
        style={{
          backgroundImage: `url(${basketballImage})`,
        }}
      >
        <div className="slider-text text-white text-center my-60">
          <h2 className=" h-full text-5xl font-bold">
            Welcome To Sports Arena <br/>Sports Academies
          </h2>
          <p className=" h-full text-xl font-semibold my-5">
          Professional sports instruction in a traditional camp environment. 
          </p>

          <button className="btn glass text-white hover:text-black">Learn More</button>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="banner-item"
        style={{
          backgroundImage: `url(${cricketImage})`,
        }}
      >
        <div className="slider-text text-white text-center my-60">
          <h2 className=" h-full text-5xl font-bold">
            Welcome To Sports Arena <br/>Sports Academies
          </h2>
          <p className=" h-full text-xl font-semibold my-5">
          Professional sports instruction in a traditional camp environment. 
          </p>

          <button className="btn glass text-white hover:text-black">Learn More</button>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="banner-item"
        style={{
          backgroundImage: `url(${footballImage})`,
        }}
      >
        <div className="slider-text text-white text-center my-60">
          <h2 className=" h-full text-5xl font-bold">
            Welcome To Sports Arena <br/>Sports Academies
          </h2>
          <p className=" h-full text-xl font-semibold my-5">
          Professional sports instruction in a traditional camp environment. 
          </p>

          <button className="btn glass text-white hover:text-black">Learn More</button>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="banner-item"
        style={{
          backgroundImage: `url(${tennisImage})`,
        }}
      >
        <div className="slider-text text-white text-center my-60">
          <h2 className=" h-full text-5xl font-bold">
            Welcome To Sports Arena <br/>Sports Academies
          </h2>
          <p className=" h-full text-xl font-semibold my-5">
          Professional sports instruction in a traditional camp environment. 
          </p>

          <button className="btn glass text-white hover:text-black">Learn More</button>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="banner-item"
        style={{
          backgroundImage: `url(${footballImage2})`,
        }}
      >
        <div className="slider-text text-white text-center my-60">
          <h2 className=" h-full text-5xl font-bold">
            Welcome To Sports Arena <br/>Sports Academies
          </h2>
          <p className=" h-full text-xl font-semibold my-5">
          Professional sports instruction in a traditional camp environment. 
          </p>

          <button className="btn glass text-white hover:text-black">Learn More</button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;


