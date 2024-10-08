import Card from "../components/Card";
import EventsCards from "../components/EventsCards";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UpcomingCard from "../components/UpcomingCard";
import { UpcomingEvent } from "../UpcomingEvent";
import DonationCard from "../components/DonationCard";

const Events = () => {
  var settingss = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="w-full mb-[100px]   bg-gray-200 ">
        <div className="w-full h-20  flex items-center justify-center">
          <h1 className="text-red-500 font-sans font-bold text-5xl">Events</h1>
        </div>
        <div className="slider-container">
          <Slider {...settingss}>
            <img src="assets/nban.jpg" alt="" />
            <img src="assets/nban2.jpg" alt="" />
            <img src="assets/nban3.jpg" alt="" />
          </Slider>
        </div>
        <h1 className="text-center text-5xl mt-5 mb-5">
          Upcoming{" "}
          <span className="text-red-500 text-center text-5xl mt-5">Events</span>
        </h1>
        <div className="slider-container ">
          <Slider {...settings}>
            {UpcomingEvent.map((item) => (
              <UpcomingCard
                title={item.title}
                description={item.description}
                date={item.date}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Events;
