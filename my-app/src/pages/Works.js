import React, { useEffect, useRef, useState } from 'react';
import './Works.css';

import capeVerde from '../assets/cape_verde_webpage.png';
import eCommerce from '../assets/e_commerce_webpage.png';
import timeManagement from '../assets/time_management_app.png';
import thumbtack from '../assets/thumbtack.png';

function Works({ activeWork, setActiveWork }) { 
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open sidebar when the component mounts
    setIsOpen(true);
    // Close sidebar when the component unmounts
    return () => setIsOpen(false);
  }, []);

  useEffect(() => {
    const text = headerRef.current;
    if (text) {
      const letters = text.textContent.split('');
      text.textContent = '';

      letters.forEach((letter, idx) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${idx * 100}ms`;
        text.appendChild(span);
      });
    }
  }, []);

  const CapeVerdeContent = () => (
    <div>
      <h2>Cape Verdean Museum Redesign</h2>
      <p>This project involved redesigning the website for the Cape Verdean Museum, focusing on improving user experience and visual appeal.</p>
    </div>
  );
  
  const ECommerceContent = () => (
    <div>
      <h2>Sustainable Shopping Cart</h2>
      <p>We developed an e-commerce shopping cart solution with a focus on sustainability, integrating eco-friendly practices into the shopping experience.</p>
    </div>
  );
  
  const TimeManagementContent = () => (
    <div>
      <h2>Time Management App</h2>
      <p>The time management app helps users organize their tasks efficiently, prioritize work, and track their productivity over time.</p>
    </div>
  );

  const handleClick = (work) => {
    setActiveWork(work === activeWork ? null : work); // Toggle activeWork
  };

  return (
    <div className="container">
      <div className={isOpen ? "works-sidebar open" : "works-sidebar"}>
        <h2 ref={headerRef} className="works-header" onClick={() => setActiveWork(null)}>Works...<span className="blink">|</span></h2>
        <ul className="work-links">
          <li><a onClick={() => handleClick('capeVerde')}>Cape Verdean Museum Redesign</a></li>
          <li><a onClick={() => handleClick('eCommerce')}>Sustainable E-Commerce Shopping Cart</a></li>
          <li><a onClick={() => handleClick('timeManagement')}>Time Management App</a></li>
        </ul>
      </div>
      <div className="works-content">
        {!activeWork && (
          <>
            <WorkCard thumbtack={thumbtack} image={capeVerde} title="Cape Verdean Museum Redesign" onClick={() => handleClick('capeVerde')} />
            <WorkCard thumbtack={thumbtack} image={eCommerce} title="Sustainable Shopping Cart" onClick={() => handleClick('eCommerce')} />
            <WorkCard thumbtack={thumbtack} image={timeManagement} title="Time Management App" onClick={() => handleClick('timeManagement')} />
          </>
        )}
        {activeWork === 'capeVerde' && <CapeVerdeContent />}
        {activeWork === 'eCommerce' && <ECommerceContent />}
        {activeWork === 'timeManagement' && <TimeManagementContent />}
      </div>
    </div>
  );
}

const WorkCard = ({ thumbtack, image, title, onClick }) => {
  return (
    <div className="work-card" onClick={onClick}>
      <div className="thumbtack">
        <img src={thumbtack} alt="Thumbtack" className="thumbtack-img" />
      </div>
      <img src={image} alt={title} className="work-image" />
      <h3>{title}</h3>
    </div>
  );
};

export default Works;