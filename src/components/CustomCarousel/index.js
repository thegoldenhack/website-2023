import React, { Component } from "react";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import image1 from "../../assets/photos2019/1.jpg";
import image2 from "../../assets/photos2019/2.jpg";
import image3 from "../../assets/photos2019/3.jpg";
import image4 from "../../assets/photos2019/4.jpg";
import image5 from "../../assets/photos2019/5.jpg";
import image6 from "../../assets/photos2019/6.jpg";
import image7 from "../../assets/photos2019/7.jpg";
import image8 from "../../assets/photos2019/8.jpg";
import image9 from "../../assets/photos2019/9.jpg";
import image10 from "../../assets/photos2019/10.JPG";

export default class CustomCarousel extends Component {
  render() {
    return (
      <Carousel
        centered
        infinite
        arrows
        slidesPerPage={2}
        breakpoints={{
          640: {
            slidesPerPage: 1,
            arrows: true,
          },
          900: {
            slidesPerPage: 2,
            arrows: true,
          },
        }}
      >

        {/* Should the alt text say something meaningful? Probably. 
        Is the only reason I added it to shut up the liner? Definitely. */}
        <img src={image1} alt="1"/>
        <img src={image2} alt="2"/>
        <img src={image3} alt="3"/>
        <img src={image4} alt="4"/>
        <img src={image5} alt="5"/>
        <img src={image6} alt="6"/>
        <img src={image7} alt="7"/>
        <img src={image8} alt="8"/>
        <img src={image9} alt="9"/>
        <img src={image10} alt="10"/>
      </Carousel>
    );
  }
}
