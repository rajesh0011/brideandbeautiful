"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import offstyle from "./offers.module.css";
import Link from "next/link";
import { PlayCircleIcon } from "lucide-react";
import ConcertAccord from "./ConcertAccord";


const BeSpokeSlider = () => {

  const items = [
    {
      id: 1,
      image: "/img/b-outfit-1.png",
      title: "Watch the Journey",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      link:"#",
    },
    
  ];

  return (
    <section className="section-padding offer-slider-sec bg-lred position-relative overflow-hidden">
      <Image src="/img/flower-1.png" height={300} width={300} alt="images for" className={offstyle.left_flower5} />
      <Image src="/img/flower-1.png" height={300} width={300} alt="images for" className={offstyle.right_flower5} />
      <div className="container">
        <div className="global-heading-sec text-center">
          <h2 className="global-heading italic">Create a Bespoke Bridal Outfit</h2>
          <p className="italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        
        </div>
        <div className={`${offstyle.mainhotelbox} bespoke-slider`} >
          <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              500: { slidesPerView: 1 },
              767: { slidesPerView: 1 },
              991: { slidesPerView: 1 },
              1200: { slidesPerView: 1 },
            }}
          >
            {items.map((outfit) => (
              <SwiperSlide key={outfit.id}>
                <div className="row justify-content-center mt-5">
                  <div className="col-md-5 align-self-center">
                      <div className={offstyle.BeSpokeLeft}>
                        <h3 className={offstyle.BeSpokeLeftHeading}>{outfit.title}</h3>
                        <p className={offstyle.BeSpokeLeftDes}>{outfit.description}</p>
                      </div>
                  </div>
                  <div className="col-md-7">
                    <div className={offstyle.BeSpokeRight}>
                        <Image
                            src={outfit.image}
                            alt={outfit.title}
                            height={600}
                            width={900}
                            className={`${offstyle.BeSpokeImg} w-100 `}
                          />
                          <PlayCircleIcon className={offstyle.BeSpokePlayIcon}></PlayCircleIcon>
                    </div>
                  </div>
                </div>
                
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="Concert_Creation mt-5">
          <div className="row">
            <div className="col-md-5">
              <div className="creationImg">
                <Image src="/img/concept-c-1.png" height={500} width={500} className="w-100" alt="concert image" />
              </div>
            </div> 
            <div className="col-md-7 align-self-center">
              <div className="creationAccordion">
                <h3 className="beSpokeVerHead">Ideation & Concert Creation</h3>
                <ConcertAccord></ConcertAccord>
                <div className="WhatsAppSec">
                  <Image src="/img/whatsapp.png" height={40} width={40} alt="whatsapp icon" />
                  <div className="whatsText">
                    <p>Have questions or ideas?</p>
                    <p>Our designer are just a message away.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeSpokeSlider;
