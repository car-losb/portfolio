import React, { useEffect, useRef, useState } from 'react';
import './Works.css';

import capeVerde from '../assets/cape_verde_webpage.png';
import eCommerce from '../assets/e_commerce_webpage.png';
import timeManagement from '../assets/time_management_app.png';
import thumbtack from '../assets/thumbtack.png';

import lofi from '../assets/lofi-desktop.png';
import sketches from '../assets/short-sketches.png';
import style from '../assets/style-guide.png';

import figma_lofi from '../assets/figma-lofi.png';
import data from '../assets/data.png';
import restrictions from '../assets/nada.png';
import objectives from '../assets/objectives.png';

import wireframe from '../assets/wireframe.png';

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
          <h3>Design Process</h3>
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
          <h3>Figma and Prototype Solution</h3>
          <p>My design adopted a color scheme inspired by the Cape Verdean flag, offering visual appeal and contrast. Many of these details are outlined in my <a href="https://www.figma.com/design/1mqlHE57qRwcseX4OVFHLp/Untitled?node-id=3-174&t=UUZYwATBzENVr5C4-0"><span className="link">figma style guide</span></a>:</p>
          <div className="project-subImages-container">
            <a href="https://www.figma.com/design/1mqlHE57qRwcseX4OVFHLp/Untitled?node-id=3-174&t=UUZYwATBzENVr5C4-0">
                <img src={style} className="project-subImage"></img>
            </a>
          </div>
          <p>As shown at the top of this page, the <a href="https://car-losb.github.io/responsive_redesign_repo/"><span className="link">redesigned webpage</span></a> features intuitive navigation, visually appealing layouts, and interactive elements showcasing Cape Verdean artifacts and history using HTML/CSS. The impact of these design choices includes increased user engagement, improved access to museum resources, and enhanced cultural representation online.</p>
        </div>
        <div className="project-section">
          <h3>Learnings</h3>
          <p>Working on this project as a UX Researcher and Engineer highlighted the importance of user-centered design principles, including responsiveness and accessbilility, as well as the value of iterative design processes in addressing complex usability challenges. The impact of this design underscores the significant role of digital platforms in preserving and promoting heritage.</p>
        </div>
      </div>
    </div>
  );
  
  const ECommerceContent = () => (
    <div className="cape-verde-content">
      <div className="project-header">
        <img src={thumbtack} alt="Thumbtack" className="work-thumbtack-img" />
        <h2>Sustainable E-Commerce Shopping Cart</h2>

        <a href="https://development-project-ten.vercel.app/">
          <img src={eCommerce} className="project-image" alt="Sustainable E-Commerce Shopping Cart" />
        </a>
        <div className="project-details">
          <div className="project-section context">
            <h3>Context/Problem</h3>
            <p>Traditional e-commerce adopt various UI features to optimize conversion rates and enhance user experiences. This project contributes to the integration of user-focused e-commerce features to enhance sustainable shopping experience.</p>
          </div>
          <div className="project-section role"> {/* Assigned class 'role' */}
            <h3>Role</h3>
            <p>UI/UX Researcher, Designer, Engineer</p>
          </div>
          <div className="project-section timeline"> {/* Assigned class 'timeline' */}
            <h3>Timeline</h3>
            <p>3 Weeks</p>
          </div>
          </div>
        </div>
        <div className="project-body">
        <div className="project-section">
          <h3>Research</h3>
          <p>
            I was inspired by recent movements for sustainable online retail, such as <a href="https://www.trashie.io/new-home"><span className="link">Trashie</span></a>, and chose to focus my research on online clothing retail platforms.
          </p>

          <p>
          I performed a competitive analysis comparing differing list and aggregator features from the following top fast-fashion retailers: 
          <a href="https://us.shein.com/?url_from=usgooglebrandshein_sheinshein_srsa_20210930&cid=370313608&setid=25652838688&adid=549022341969&pf=GOOGLE&gad_source=1&gclid=CjwKCAjw_LOwBhBFEiwAmSEQARegFpqaRknuQC8uptcpHKhGd2X-8MbiSGO8AUlzTrr6KYr47gcyERoCo0wQAvD_BwE">
          <span className="link"> Shein</span></a>, <a href="https://www.temu.com/"><span className="link">Temu</span></a>, and <a href="https://www.wish.com/feed/reach-cids-000000000000000000000000-from_ad-19808826207?filter=reach-cids-000000000000000000000000-from_ad-19808826207&utm_source=ggl&utm_medium=pmax&utm_campaign=19808826207&from_ad=19808826207&gad_source=1&gclid=CjwKCAjw_LOwBhBFEiwAmSEQAYW56onIhzfJ1L_1AZWpdqLHLJMyF5WMuAyoWKWXD7F3i4KDzTR2WhoC7vUQAvD_BwE&hide_login_modal=true">
          <span className="link">Wish</span></a>.
          </p>

          <div class="table_section">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Shein</th>
                    <th>Temu</th>
                    <th>Wish</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Categorical Sorting (Article of Clothing)</strong></td>
                    <td>X</td>
                    <td></td>
                    <td>X</td>
                </tr>
                <tr>
                    <td><strong>Cart Pop-Up</strong></td>
                    <td>X</td>
                    <td>X</td>
                    <td></td>
                </tr>
                <tr>
                    <td><strong>Cart Quick-Add</strong></td>
                    <td>X</td>
                    <td>X</td>
                    <td></td>
                </tr>
                <tr>
                    <td><strong>Price Filtering</strong></td>
                    <td>X</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><strong>1-Click-Buy </strong></td>
                    <td>X</td>
                    <td></td>
                    <td></td>
                </tr>

            </tbody>
        </table>
        </div>

        </div>
        <div className="project-section">
          <h3>Design Process</h3>
          <p>
            I chose to implement a second-hand clothing shopping experience for users called "Eco-Fashion". Below are the major features I chose to incorporate, many of which were inspired by my competitive research analysis:
          </p>

          <ul>
            <li><strong>Clothing Article Filtering</strong> - Users can filter list results by clothing type</li>
            <li><strong>Maximum Price Filtering</strong> - Items can be filtered according to a maximum price slider</li>
            <li><strong>Price Sorting</strong> - Items list can be sorted by price from cheapest to most expensive</li>
            <li><strong>Cart Pop-Up</strong> - A user's shopping cart is displayed adjacent to the clothing items as they shop</li>
            <li><strong>Cart Quick-Add Button</strong> - Users can add an item to their card with the press of a button without having to switch windows/screens</li>
            <li><strong>Remove Item/Clear Cart Button</strong> - Users can remove a single type of item from a cart or clear their cart completely as they shop</li>
          </ul>

          <p>
          Before starting development I decided to create a <a href="https://www.figma.com/design/pVeVTdgRlPiCEHQc4Hphx7/Development-Lofi-Mockup?node-id=0-1&t=C7UZ7siQsUt50Jcn-0"><span className="link">low fidelity wireframe</span></a> on figma to get a better sense of the structure I wanted for my webpage. 
          </p>

            <div className="project-subImages-container">
              <a href="https://www.figma.com/design/pVeVTdgRlPiCEHQc4Hphx7/Development-Lofi-Mockup?node-id=0-1&t=C7UZ7siQsUt50Jcn-0">
                <img src={figma_lofi} className="project-subImage"></img>
              </a>
            </div>

            <p>In the theme of sustainability, I opted for greens and natural oranges for the color scheme, making sure to create enough contrast to ensure accessibility.</p>
        </div>
        <div className="project-section">
          <h3>Figma and Prototype Solution</h3>
          <p>In the theme of sustainability, I opted for greens and natural oranges for the color scheme, making sure to create enough contrast to ensure accessibility.</p>
          <p>As shown at the top of this page, the <a href="https://development-project-ten.vercel.app/"><span className="link">final prototype</span></a> features an intuitive navigation hierarchy, visually contrasting interface elements, and several user-focused shopping tool features created using ReactJS.</p>
        </div>
        <div className="project-section">
          <h3>Learnings</h3>
          <p>Throughout the development of the Sustainable Shopping Cart project, I gained valuable insights into several aspects of e-commerce design and development, as well as sustainability in online retail:</p>
          <ul>
            <li><strong>User-Centered Design:</strong> Understanding the importance of user-centered design principles was crucial in creating an intuitive and engaging shopping experience for users.</li>
            <li><strong>Sustainability:</strong> Exploring sustainable design principles and incorporating marketing and UI/UX strategies targeted to eco-friendly consumers.</li>
            <li><strong>Iterative Development:</strong> Adopting an iterative development approach allowed for continuous improvement and refinement of the prototype.</li>
          </ul>
          <p>As a Designer and Engineer, this project not only enhanced my technical skills but also broadened my understanding of the intersection between technology, design, and sustainability in the context of e-commerce.</p>
        </div>
      </div>
    </div>
  );
  
  const TimeManagementContent = () => (
    <div className="cape-verde-content">
      <div className="project-header">
        <img src={thumbtack} alt="Thumbtack" className="work-thumbtack-img" />
        <h2>TimeWise: An Ethical Time Management App</h2>

        <a href="https://www.figma.com/design/7rAhHYF2uw5JId1kZxRsdv/Untitled?node-id=0-1&t=0HeCyjVjzvf7W8Tw-0">
          <img src={timeManagement} className="project-image" alt="Time Management App" />
        </a>
        <div className="project-details">
          <div className="project-section context">
            <h3>Context/Problem</h3>
            <p>TimeWise is a time management application designed to help users effectively manage their tasks and optimize their productivity. The project involved the development of various features aimed at empowering users to take control of their time and achieve their goals.</p>
          </div>
          <div className="project-section role"> {/* Assigned class 'role' */}
            <h3>Role</h3>
            <p>Ethicist, Auditor, Designer</p>
          </div>
          <div className="project-section timeline"> {/* Assigned class 'timeline' */}
            <h3>Timeline</h3>
            <p>2 Weeks</p>
          </div>
          </div>
        </div>
        <div className="project-body">
        <div className="project-section">
          <h3>Research</h3>
          <p>I performed a market analysis to identify some of the leading time management softwares/apps:
          <a href="https://hourstack.com/">
          <span className="link"> Hour Stack</span></a>, <a href="https://toggl.com/"><span className="link">Toggl Track</span></a>, and <a href="https://timelyapp.com/home-v3">
          <span className="link">Timely</span></a>.
          </p>
          <p>
            From the competitive research, I identified key philosophical principles to emphasize when creating a time management app that respects the wishes of user and enables them to manage their time as they intend:
          </p>
          <ul>
            <li><strong>User Autonomy:</strong> Understanding the importance of user-centered design principles was crucial in creating an intuitive and engaging shopping experience for users.</li>
            <li><strong>Data Privacy:</strong> Exploring sustainable design principles and incorporating marketing and UI/UX strategies targeted to eco-friendly consumers.</li>
            <li><strong>Transparency:</strong> Adopting an iterative development approach allowed for continuous improvement and refinement of the prototype.</li>
          </ul>

        </div>
        <div className="project-section">
          <h3>Design Process</h3>
          <p>I wanted to address three main user pain points: <strong>privacy concerns, app-related distractions, and being able to quantify progress</strong>. My product's following features are aimed to remedy these issues:</p>
          <ul>
            <li><strong>Data Analytics:</strong> This feature collects a users' behaviors and time spent on certain apps or tasks to better measure their time management effectiveness.</li>
            <li><strong>Objectives:</strong> Users can define objectives for themselves that allows them to shape their time management journey, the app collects data that allows AI suggested objectives based on previous user behavior.</li>
            <li><strong>App Restrictions:</strong> To provide users with greater autonomy, they are able to restrict access to specific apps on their phone according to time limits they define.</li>
          </ul>
            <div className="project-subImages-container time">
              <a href="https://www.figma.com/design/7rAhHYF2uw5JId1kZxRsdv/Untitled?node-id=0-1&t=0HeCyjVjzvf7W8Tw-0">
                <img src={data} className="time-img"></img>
                <img src={objectives} className="time-img"></img>
                <img src={restrictions} className="time-img"></img>
              </a>
            </div>

            <p>Once I defined minimum requirements for the product, I created a workflow of the app, emphasizing user behavior and intuition. In an effort to enhance user autonomy, I adopted a color scheme of soft greens
              and used passive language in order to avoid aggressive nudging. 
            </p>

        </div>
        <div className="project-section">
          <h3>Figma and Prototype Solution</h3>
          <p>The <a href="https://www.figma.com/design/7rAhHYF2uw5JId1kZxRsdv/Untitled?node-id=0-1&t=0HeCyjVjzvf7W8Tw-0"><span className="link">wireframe</span></a> below outlines the different screens on the app, including the aforementioned features.
            Users are provided with the tools to set time management goals for themselves, measure their achievements, and limit the granularity and access to their data.</p>
          <div className="project-subImages-container">
                <a href="https://www.figma.com/design/7rAhHYF2uw5JId1kZxRsdv/Untitled?node-id=0-1&t=0HeCyjVjzvf7W8Tw-0">
                  <img src={wireframe} className="project-subImage"></img>
                </a>
              </div>
          <p>The design adopts language and disclosures in order ot provide users with transparency regarding the use of their data and the purpose of certain app features. Additionally, it is important to note the <strong>privacy considerations</strong> made throughout the product's design. Users are given several settings features from which they can dictate the use of certain features and dictate the collection of their data.</p>
        </div>
        <div className="project-section">
          <h3>Learnings</h3>
          <p>As the leading Ethicist and Designer for this project, I explored the intersection of ethical frameworking and product development while learning the importance of <strong>user privacy, autonomy, and transparency</strong>. This app provided insight into the user considerations and ethical responsibilities of tech developers when it comes to shaping user behavior. </p>
        </div>
      </div>
    </div>
  );

  const handleClick = (work) => {
    setActiveWork(work); // Toggle activeWork
  
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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