import React, { useEffect, useRef} from 'react';
import './Socials.css'

import github from '../assets/github-icon.png';
import linkedIn from '../assets/linkedin-icon.webp';
import youtube from '../assets/youtube.png';
import email from '../assets/icon_email.png';
import paperclip from '../assets/paperclip.png'

function Socials() {
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
    <div className="socials-container">
      <div className="social-index-card">
        <h2 ref={headerRef} className="about-header">Let's&nbsp;connect...<span className="blink">|</span></h2>
          <img src={paperclip} alt="Paperclip" className="paperclip"></img>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <div className="social-icons">
            <a href="https://github.com/car-losb" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={github} alt="Instagram Icon" className="social-icon"></img>
            </a>

            <a href="https://www.linkedin.com/in/carlosmbetancur/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={linkedIn} alt="LinkedIn Icon" className="social-icon"></img>
            </a>

            <a href="https://www.youtube.com/channel/UCmpJhhRNxqjp48719obPCmw" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={youtube} alt="YouTube Icon" className="social-icon"></img>
            </a>

            <a href="mailto:carlos_betancur@brown.edu" className="social-icon">
              <img src={email} alt="Email Icon" className="social-icon"></img>
            </a>

          </div>
        </div>
    </div>
  );
}

export default Socials;
// import React, { useEffect, useRef} from 'react';
// import './Socials.css'

// import instagram from '../assets/instagram.png';
// import linkedIn from '../assets/linkedin-icon.webp';
// import youtube from '../assets/youtube.png';
// import email from '../assets/icon_email.png';

// function Socials() {
//   const headerRef = useRef(null);

//   useEffect(() => {
//     const text = headerRef.current;
//     if (text) {
//       const letters = text.textContent.split('');
//       text.textContent = '';

//       letters.forEach((letter, idx) => {
//         const span = document.createElement('span');
//         span.textContent = letter;
//         span.style.animationDelay = `${idx * 100}ms`;
//         text.appendChild(span);
//       });
//     }
//   }, []);

//   return (
//     <div className="socials-container">
//       <div className="social-index-card">
//         <h2 ref={headerRef} className="socials-header">Let's&nbsp;connect...<span className="blink">|</span></h2>
//         <div className="social-icons">
//           <img src={instagram} alt="Instagram Icon" className="social-icon"></img>
//           <img src={linkedIn} alt="LinkedIn Icon" className="social-icon"></img>
//           <img src={youtube} alt="YouTube Icon" className="social-icon"></img>
//           <img src={email} alt="Email Icon" className="social-icon"></img>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Socials;