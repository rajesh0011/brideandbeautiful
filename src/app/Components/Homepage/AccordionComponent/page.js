"use client";
import React, { useRef, useState, useEffect } from 'react';
import "./accordion.css";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
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
    
    <div className="accordion-item">
      <div className="accordion-title" onClick={onClick}>
        <h5>{title}</h5>
        <span>{isOpen ? '︿' : '﹀'}</span>
      </div>
      <div
        className="accordion-content"
        ref={contentRef}
        style={{ maxHeight: `${height}px` }}
      >
        <p>{content}</p>
      </div>
    </div>


  );
};

export default AccordionItem;
