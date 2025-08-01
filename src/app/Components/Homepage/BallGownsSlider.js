"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import offstyle from "./offers.module.css";
import Link from "next/link";


const BallGownsSlider = () => {
  const items = [
    {
      id: 1,
      image: "/img/ball-gown-1.png",
      title: "Quick View",
      description: "Lorem Ipsum is simply dummy text of the printing",
    },
     {
      id: 2,
      image: "/img/ball-gown-1.png",
      title: "Quick View",
      description: "Lorem Ipsum is simply dummy text of the printing",
    },
     {
      id: 3,
      image: "/img/ball-gown-1.png",
      title: "Quick View",
      description: "Lorem Ipsum is simply dummy text of the printing",
    },
     {
      id: 4,
      image: "/img/ball-gown-1.png",
      title: "Quick View",
      description: "Lorem Ipsum is simply dummy text of the printing",
    },
    
  ];

  return (
    <section className="section-padding offer-slider-sec position-relative overflow-hidden">
      <Image src="/img/flower.png" height={300} width={300} alt="images for" className={offstyle.left_flower1} />
      <div className="container">
        <div className="global-heading-sec text-center">
          <h2 className="global-heading italic">Collections</h2>
          <p className="italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        
        <h5 className="global-heading1 italic">Ball Gowns</h5>
        <Link href="#" className="view-all-btn">View All</Link>
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
            {items.map((gown) => (
              <SwiperSlide key={gown.id}>
                <div className={offstyle.offerbox}>
                  <Image
                    src={gown.image}
                    alt={gown.title}
                    height={300}
                    width={500}
                    className={`${offstyle.offerboximg} w-100 `}
                  />
                  <div className={offstyle.offerboxcontent}>
                    <h3 className={offstyle.offerboxcontentheading}>{gown.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BallGownsSlider;
