"use client";
import React, { useRef, useState, useEffect } from 'react';
import accorstyle from "./accordion.module.css";

const ConcertAccordion = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef(null); 
  const [height, setHeight] = useState(0); 

  const [openIndex, setOpenIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight); 
    } else {
      setHeight(0); 
    }
  }, [isOpen]);

  return (
    
    <div className={accorstyle.accordionItem}>
      <div className={accorstyle.accordionTitle} onClick={onClick}>
        <h5 className={accorstyle.accordionH5}>{title}</h5>
        <span className={accorstyle.accordionSpan}>{isOpen ? '︿' : '﹀'}</span>
      </div>
      <div
        className={accorstyle.accordionContent}
        ref={contentRef}
        style={{ maxHeight: `${height}px` }}
      >
        <p className={accorstyle.accordionP}>{content}</p>
      </div>
    </div>


  );
};

export default ConcertAccordion;
