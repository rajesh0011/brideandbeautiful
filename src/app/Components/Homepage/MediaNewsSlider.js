"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import offstyle from "./offers.module.css";


const MediaNewsSlider = () => {
  const items = [
    {
      id: 1,
      image: "/img/mediaa.png",
     
    },
     {
      id: 2,
      image: "/img/mediaa.png",
     
    },
     {
      id: 3,
      image: "/img/mediaa.png",
      
    },
     {
      id: 4,
      image: "/img/mediaa.png",
     
    },
    
  ];

  return (
    <section className="section-padding offer-slider-sec">
      <div className="container">
        <div className="global-heading-sec text-center">
          <h2 className="global-heading italic">Media & News</h2>
         
        </div>
        <div className={offstyle.mainhotelbox}>
          <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              500: { slidesPerView: 1 },
              767: { slidesPerView: 2 },
              991: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {items.map((index) => (
              <SwiperSlide key={index.id}>
                <div className={offstyle.offerbox}>
                  <Image
                    src={index.image}
                    alt="media image"
                    height={300}
                    width={500}
                    className={`${offstyle.offerboximg1} w-100 `}
                  />
                 
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MediaNewsSlider;
