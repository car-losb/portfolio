import React, { useEffect, useRef } from 'react';

import './About.css'; // Import CSS file
import profilePic from '../assets/profile_pic.jpeg'; // Import profile picture
import thumbtack from '../assets/thumbtack.png';

function About() {

  const headerRef = useRef(null);

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

  return (
    <div className="container">
      <div className="polaroid">
        <div className="thumbtack">
          <img src={thumbtack} alt="Thumbtack" className="thumbtack-img" />
        </div>
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
      <div className="about-text">
      <h2 ref={headerRef} className="about-header">About&nbsp;Me...<span className="blink">|</span></h2>
        <p>My name is <span className="highlight">Carlos Betancur</span>and I am a senior at Brown University studying Computer Science 
          and Economics. Throughout my professional and academic career, I have gained experience working on projects in <span className="underline">public health</span>,&nbsp;<span className="underline">high tech</span>, and <span className="underline">community engagement</span>. As an aspiring<span className="highlight">Product Manager</span>, I am passionate 
          about leveraging technological innovation and business strategy to promote social equity and generate a positive impact. 
        </p>
      </div>
    </div>
  );
}

export default About;