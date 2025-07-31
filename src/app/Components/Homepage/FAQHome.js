"use client"
import React, { useState } from 'react'
import AccordionItem from './AccordionComponent/page';

const FAQHome = () => {

      const [openIndex, setOpenIndex] = useState(0);
  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


    const faqsList = [
    {
      title: "What is Lorem Ipsum?",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "What is Lorem Ipsum?",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "What is Lorem Ipsum?",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "What is Lorem Ipsum?",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "What is Lorem Ipsum?",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    
  ];


  return (
    <>

    <section className="section-padding offer-slider-sec">
      <div className="container">
        <div className="global-heading-sec text-center">
          <h2 className="global-heading italic">FAQs</h2>
    <div className="row">
            <div className="col-md-12">
              <div id="faq">
                {faqsList?.length > 0 && faqsList.map((item, index) => (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    content={
                      <span dangerouslySetInnerHTML={{ __html: item.description }} />
                    }
                    isOpen={openIndex === index}
                    onClick={() => handleAccordionClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          </div>
            </div>
          </section>
    </>
  )
}

export default FAQHome
