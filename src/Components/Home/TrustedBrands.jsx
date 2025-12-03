import React from "react";
import brand1 from "../../assets/partners-1_1.avif";
import brand2 from "../../assets/partners-2_1.avif";
import brand3 from "../../assets/partners-3_1.avif";
import brand4 from "../../assets/partners-4_1.avif";
import brand5 from "../../assets/partners-5_1.avif";
import brand6 from "../../assets/partners-6_1.avif";
import brand7 from "../../assets/partners-7_1.avif";
import brand8 from "../../assets/partners-8_1.avif";
import brand9 from "../../assets/partners-9_1.avif";
import brand10 from "../../assets/partners-10_1.avif";
import brand11 from "../../assets/partners-11_1.avif";
import brand12 from "../../assets/partners-12_1.avif";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

const TrustedBrands = () => {
  return (
    <section>
      <h3 className="text-center text-2xl lg:text-4xl font-semibold pb-8 text-accent md:mb-8">
        Our Trusted Brands
      </h3>

      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src={brand1} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={brand2} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={brand3} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={brand4} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={brand5} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand6} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={brand7} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={brand8} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={brand9} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={brand10} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={brand11} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={brand12} alt="brand logo" />
        </SwiperSlide>
      </Swiper>

      {/* <div className="grid grid-cols-4 sm:grid-cols-6 gap-y-10 gap-x-5">
              <img src={brand1} alt="brand logo" />
              <img src={brand2} alt="brand logo" />
              <img src={brand3} alt="brand logo" />
              <img src={brand4} alt="brand logo" />
              <img src={brand5} alt="brand logo" />
              <img src={brand6} alt="brand logo" />
              <img src={brand7} alt="brand logo" />
              <img src={brand8} alt="brand logo" />
              <img src={brand9} alt="brand logo" />
              <img src={brand10} alt="brand logo" />
              <img src={brand11} alt="brand logo" />
              <img src={brand12} alt="brand logo" />
            </div> */}
    </section>
  );
};

export default TrustedBrands;
