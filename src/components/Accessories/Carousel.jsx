import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./styles.css";

import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";


const slides = [image1,image2, image3, image4];

export const Carousel2 = () => {
  return (
    <section className="page carousel-2-page">
      <Swiper
        grabCursor
        centeredSlides
        slidesPerView="auto"
        effect="coverflow"
        loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
      >
        <div className="swiper-wrapper">
          {slides.map((slide) => (
            <SwiperSlide
              key={slide}
              style={{
                backgroundImage: `url(${slide})`,
              }}
            />
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
};
