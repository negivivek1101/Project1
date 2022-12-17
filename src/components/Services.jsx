import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assests/1.jpg";
import img2 from "../assests/6.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="item1" />
          <p>Full stack</p>
        </div>

        <div>
          <img src={img2} alt="item2" />
          <p> Software Development </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
