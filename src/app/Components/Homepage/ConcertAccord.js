import React, { useState } from 'react'
import ConcertAccordion from './AccordionComponent/ConcertAccordion'

const ConcertAccord = () => {

    
          const [openIndex, setOpenIndex] = useState(0);
      const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

     const concertList = [
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

    <div id="faq" className='creationFaq'>
                {concertList?.length > 0 && concertList.map((item, index) => (
                  <ConcertAccordion
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
      
    </>
  )
}

export default ConcertAccord
