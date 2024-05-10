import React, { useEffect, useRef, useState } from 'react';
import './Works.css';

import capeVerde from '../assets/cape_verde_webpage.png';
import eCommerce from '../assets/e_commerce_webpage.png';
import timeManagement from '../assets/time_management_app.png';
import thumbtack from '../assets/thumbtack.png';

import lofi from '../assets/lofi-desktop.png';
import sketches from '../assets/short-sketches.png';
import style from '../assets/style-guide.png';

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
    <div className="cape-verde-content">
      <div className="project-header">
        <img src={thumbtack} alt="Thumbtack" className="work-thumbtack-img" />
        <h2>Cape Verdean Museum Webpage Redesign</h2>

        <a href="https://car-losb.github.io/responsive_redesign_repo/">
          <img src={capeVerde} className="project-image" alt="Cape Verdean Museum" />
        </a>
        <div className="project-details">
          <div className="project-section context">
            <h3>Context/Problem</h3>
            <p>The Cape Verdean Museum is a cultural institution dedicated to preserving and celebrating the history, art, and heritage of Cape Verdean people. This design is aimed at remedying the <a href="https://capeverdeanmuseum.org/"><span className="link">existing webpage's</span></a> design inconsistencies, to increase visitor traffic and enhance user experiences.</p>
          </div>
          <div className="project-section role"> {/* Assigned class 'role' */}
            <h3>Role</h3>
            <p>UX Researcher, Designer, Engineer</p>
          </div>
          <div className="project-section timeline"> {/* Assigned class 'timeline' */}
            <h3>Timeline</h3>
            <p>4 Weeks</p>
          </div>
          </div>
        </div>
        <div className="project-body">
        <div className="project-section">
          <h3>Research</h3>
          <p>
            In examining the Cape Verdean Museum's home webpage, I noticed several usability problems that are likely harming digital visitors' experiences. These issues largely fell into three categories: <strong>lack of hierarchy, poor visual contrast, and unintuitive design.</strong>
          </p>

          <p>
            An analysis on <a href="https://wave.webaim.org/"><span className="link">WAVE</span></a> and <a href="https://validator.w3.org/"><span className="link">HTML Validator</span></a> confirmed my concerns to be true, as the errors returned coincided with the accessibility criteria I mentioned.
          </p>

        </div>
        <div className="project-section">
          <h3>Process</h3>
          <p>I began by identifying key usability problems to inspire my brainstorming sketches. The page had a very long navigation bar with many different pages to choose from, none of which were organized in any particular order. 
            Gray font on dark gray banners make it difficult to distinguish text, particularly for readers with visual impairments. Finally, various sections were laid out with no direction and with little labeling.</p>
            <div className="project-subImages-container">
              <a href="https://drive.google.com/file/d/1JmxZlRM1sCaEki9zi2KV7UWsXqhYf4Q8/view">
                <img src={sketches} className="project-subImage"></img>
              </a>
            </div>

            <p>In these designs, I attempted to reorganize the navigation links and create a more cohesive flow throughout the webpage. 
              I identified key areas in the webpage that I felt were important to highlight in my low fidelity mockup: <strong>navigation bars, mission statements, events schedule, hours/location, and outreach resources (social media, newsletter, etc).</strong></p>
              <div className="project-subImages-container">
                <a href="https://drive.google.com/file/d/1RV4T_Pv68LZGConkzrkt6y2u8s9BP85a/view">
                  <img src={lofi} className="project-subImage"></img>
                </a>
              </div>
        </div>
        <div className="project-section">
          <h3>Solution</h3>
          <p>My design adopted a color scheme inspired by the Cape Verdean flag, offering visual appeal and contrast. Many of these details are outlined in my <a href="https://www.figma.com/design/1mqlHE57qRwcseX4OVFHLp/Untitled?node-id=3-174&t=UUZYwATBzENVr5C4-0"><span className="link">style guide</span></a>:</p>
          <div className="project-subImages-container">
            <a href="https://www.figma.com/design/1mqlHE57qRwcseX4OVFHLp/Untitled?node-id=3-174&t=UUZYwATBzENVr5C4-0">
                <img src={style} className="project-subImage"></img>
            </a>
          </div>
          <p>As shown at the top of this page, the <a href="https://car-losb.github.io/responsive_redesign_repo/"><span className="link">redesigned webpage</span></a> features intuitive navigation, visually appealing layouts, and interactive elements showcasing Cape Verdean artifacts and history. The impact of these design choices includes increased user engagement, improved access to museum resources, and enhanced cultural representation online.</p>
        </div>
        <div className="project-section">
          <h3>Learnings</h3>
          <p>This project highlighted the importance of user-centered design principles, including responsiveness and accessbilility, as well as the value of iterative design processes in addressing complex usability challenges. The impact of this design underscores the significant role of digital platforms in preserving and promoting heritage.</p>
        </div>
      </div>
    </div>
  );
  
  const ECommerceContent = () => (
    <div>
      <h2>Sustainable Shopping Cart</h2>
      <div className="project-section">
        <h3>Context/Problem</h3>
        <p>Traditional e-commerce platforms often neglect environmental sustainability, contributing to ecological harm through excessive packaging and carbon emissions. There was a need for a sustainable shopping cart solution that integrates eco-friendly practices into the shopping experience.</p>
      </div>
      <div className="project-section">
        <h3>Research</h3>
        <p>Conducted market research to understand consumer preferences for sustainable products and environmentally conscious shopping behaviors. Target audience comprises environmentally conscious consumers seeking eco-friendly alternatives in their purchasing decisions.</p>
      </div>
      <div className="project-section">
        <h3>Process</h3>
        <p>Explored various design approaches, considering factors such as product lifecycle, packaging materials, and supply chain transparency. Tradeoffs included balancing sustainability goals with cost-effectiveness and scalability. Prioritized user education and transparent communication of sustainability features.</p>
      </div>
      <div className="project-section">
        <h3>Solution</h3>
        <p>Developed an e-commerce platform with features like product eco-labels, carbon footprint tracking, and sustainable packaging options. The solution empowers users to make informed, environmentally conscious purchasing decisions, contributing to a greener future.</p>
      </div>
      <div className="project-section">
        <h3>Learnings</h3>
        <p>Gained insights into sustainable design principles and the role of technology in promoting environmental stewardship. Lessons learned include the importance of collaboration across supply chains and the potential for technology to drive positive social and environmental change.</p>
      </div>
      <div className="project-section">
        <h3>Role</h3>
        <p>Played a key role in the design and development of the sustainable shopping cart platform, collaborating with sustainability experts, developers, and retailers to implement innovative eco-friendly features.</p>
      </div>
    </div>
  );
  
  const TimeManagementContent = () => (
    <div>
      <h2>Time Management App</h2>
      <div className="project-section">
        <h3>Context/Problem</h3>
        <p>Modern lifestyles are increasingly hectic, leading to challenges in time management and productivity. There was a need for a time management app to help users organize tasks, prioritize work, and improve productivity.</p>
      </div>
      <div className="project-section">
        <h3>Research</h3>
        <p>Conducted user surveys and interviews to understand common time management challenges and user preferences for productivity tools. Identified the target audience as professionals, students, and individuals seeking effective time management solutions.</p>
      </div>
      <div className="project-section">
        <h3>Process</h3>
        <p>Iterated through design prototypes, incorporating feedback from beta testers and usability studies. Tradeoffs included balancing feature complexity with ease of use and ensuring compatibility across different devices and operating systems. Prioritized intuitive interfaces and customizable features.</p>
      </div>
      <div className="project-section">
        <h3>Solution</h3>
        <p>Developed a time management app with features such as task prioritization, progress tracking, and personalized productivity insights. The solution empowers users to optimize their time, achieve their goals, and maintain a healthy work-life balance.</p>
      </div>
      <div className="project-section">
        <h3>Learnings</h3>
        <p>Learned valuable lessons about user behavior and preferences in time management tools, as well as the importance of data privacy and security in app development. Insights gained include the significance of habit formation and behavioral psychology in designing effective productivity solutions.</p>
      </div>
      <div className="project-section">
        <h3>Role</h3>
        <p>Led the design and development of the time management app as part of a cross-functional team, collaborating with software engineers, UX researchers, and behavioral scientists to create a user-centric solution.</p>
      </div>
    </div>
  );

  const handleClick = (work) => {
    setActiveWork(work); // Toggle activeWork
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
          <WorkCard
            thumbtack={thumbtack}
            image={capeVerde}
            title="Cape Verdean Museum Redesign"
            skills="Figma, HTML/CSS, Design"
            date="Spring 2024"
            onClick={() => handleClick('capeVerde')}
          />
          <WorkCard
            thumbtack={thumbtack}
            image={eCommerce}
            title="Sustainable Shopping Cart"
            skills="ReactJS, Node.js, Market Research"
            date="Spring 2024"
            onClick={() => handleClick('eCommerce')}
          />
          <WorkCard
            thumbtack={thumbtack}
            image={timeManagement}
            title="Time Management App"
            skills="Figma, Ethical Frameworks, AI"
            date="Spring 2024"
            onClick={() => handleClick('timeManagement')}
          />
        </>
        )}
        {activeWork === 'capeVerde' && <CapeVerdeContent />}
        {activeWork === 'eCommerce' && <ECommerceContent />}
        {activeWork === 'timeManagement' && <TimeManagementContent />}
      </div>
    </div>
  );
}

const WorkCard = ({ thumbtack, image, title, skills, date, onClick }) => {
  return (
    <div className="work-card" onClick={onClick}>
      <div className="thumbtack">
        <img src={thumbtack} alt="Thumbtack" className="thumbtack-img" />
      </div>
      <img src={image} alt={title} className="work-image" />
      <h3>{title}</h3>
      <div className="work-details">
        <p className="skills">{skills}</p>
        <p className="date">{date}</p>
      </div>
    </div>
  );
};

export default Works;