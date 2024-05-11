import React, { useEffect, useRef, useState } from 'react';
import './Resume.css';

import thumbtack from '../assets/thumbtack.png';

function Resume() {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true); // Open sidebar when component mounts
    return () => setIsOpen(false); // Close sidebar when component unmounts
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

  const handleLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToResumeTitle = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="container">
      <div className={isOpen ? "resume-sidebar open" : "resume-sidebar"}>
        <h2 ref={headerRef} className="about-header" onClick={scrollToResumeTitle}>Resume...<span className="blink">|</span></h2>
        <ul className="resume-links">
          <li onClick={() => handleLinkClick('education')}>Education</li>
          <li onClick={() => handleLinkClick('skills-interests')}>Skills & Interests</li>
          <li onClick={() => handleLinkClick('business-fintech')}>Business/Fintech Experience</li>
          <li onClick={() => handleLinkClick('emergency-crisis')}>Emergency/Crisis Management Experience</li>
          <li onClick={() => handleLinkClick('leadership-engagement')}>Leadership and Community Engagement Experience</li>
        </ul>
      </div>
      <div className="resume-content">
        <div className="resume-title">
          <img src={thumbtack} alt="Thumbtack" className="thumbtack-img" />
          <h1>Carlos Betancur</h1>
          <p>56 Tidewater Drive, Warwick, RI 02889 | Phone: (401) 660-7599 | E-Mail: carlos_betancur@brown.edu</p>
          <p><a href="https://github.com/car-losb">Github</a> | <a href="https://www.linkedin.com/in/carlosmbetancur/">LinkedIn</a></p>
          <p><span className="index-card">hello</span></p>
        </div>

        <div id="education" className="resume-section">
          <h2>EDUCATION</h2>
          <p><strong>Brown University</strong>, B.Sc. Computer Science - Economics, GPA: 3.70/4.00</p>
          <p>Providence, RI | Expected Graduation: May 2024</p>
          <p>Relevant Courses: <span className="courses">Mathematical Micro/Macroeconomics, Mathematical Econometrics, Data Science, Financial Organization, Algorithms and Data Structures, Object Oriented Programming, Computer Systems, Statistical Inference, Behavioral Economics, UI/UX</span></p>

          <p><strong>Paris 8 University Vincennes-Saint-Denis</strong>, Brown in Paris, GPA: 18,20</p>
          <p>Paris, France | SEP 2022 - DEC 2022</p>

          <p><strong>Toll Gate High School</strong>, High School Diploma, GPA: 4.00/4.00</p>
          <p>Warwick, RI | SEP 2016 - JUN 2020</p>
        </div>

        <div id="skills-interests" className="resume-section">
          <h2>SKILLS & INTERESTS</h2>
          <p><strong>Technical Skills:</strong> Microsoft Office Suite, Excel, PowerPoint, Google Apps, Java, Javascript, C/C#/C++, Python, SQL, LaTex, Stata, Salesforce Database, Sharepoint, Slack, Miro, Figma, AWS Tools, HTML/CSS</p>
          <p><strong>Language:</strong> English (Native), Spanish (Native), French (Advanced), Portuguese (Novice)</p>
          <p><strong>Affiliations:</strong> Hispanic Scholarship Fund Scholar, Amazon Future Engineer, Princeton in Asia Fellow, Brown in Paris Scholar</p>
        </div>

        <div id="business-fintech" className="resume-section">
        <h2>BUSINESS/FINTECH EXPERIENCE</h2>
        <div className="experience">
          <h3>Socially Responsible Investment Fund, Analyst</h3>
          <p>Providence, RI | JAN 2023 - present</p>
          <ul>
            <li>Performed detailed analysis of stock market trends and identified business growth opportunities for the SRIF portfolio; contributed findings to weekly presentations at agile team meetings helping increase portfolio returns by >5% in less than one year</li>
            <li>Calculated Socially Responsible Indices (SRI) for >50 firms; created reports and PowerPoint presentations of quantitative findings</li>
          </ul>
        </div>
        <div className="experience">
          <h3>Amazon Compute Technologies, Software Development Engineering Intern</h3>
          <p>New York, NY | JUN 2023– SEP 2023</p>
          <ul>
            <li>Designed and implemented a tenant-configurable “request-throttling” feature according to the latency needs of 400+ tenants, using Java Dependency Constructors, Google Guice Frameworks, and internal APIs to reduce service brownouts by 80%</li>
            <li>Adopted an agile mindset through collaboration with the Product team; Attended all agile meetings to break down features, epics, and stories with a focus on releasing incremental business value</li>
          </ul>
        </div>
        <div className="experience">
          <h3>Amazon Prime Video, Business Intelligence Engineering Intern</h3>
          <p>Seattle, WA | JUN 2022– AUG 2022</p>
          <ul>
            <li>Designed the functional and business requirements for Prime Video Partners’ revenue reporting system and dashboard that draws data from internal Dynamo DB databases; ensured 100% reporting accuracy across multiple currencies</li>
            <li>Launched into production revenue reporting revisions in Java using DynamoDB, internal APIs, and AWS Cloud Computing for 200M+ annual users on the Prime Video site</li>
            <li>Prime Video Marketplace Hackathon 2022: People’s Choice Award - Designed an innovative Amazon Prime Video UI/UX feature in HTML and CSS; presented it to a Prime Video Marketplace Judge Panel</li>
          </ul>
        </div>
        </div>

        <div id="emergency-crisis" className="resume-section">
        <h2>EMERGENCY/CRISIS MANAGEMENT EXPERIENCE</h2>
        <div className="experience">
          <h3>Brown University, Economics Research Assistant</h3>
          <p>Providence, RI | FEB 2023 – MAY 2023</p>
          <ul>
            <li>Under Professor Bryce Steinberg, managed Asana tasks researching correlations between seasonal floods and wage levels in Ghana</li>
            <li>Implemented Stata programs and SQL queries to adequately clean and restructure over 1M data points</li>
            <li>Contributed to research findings by arranging 10K+ tables of field data in Excel, then storing structured data sets in DropBox</li>
          </ul>
        </div>
        <div className="experience">
          <h3>Rhode Island Department of Health, COVID-19 (K-12) Case Investigation Supervisor</h3>
          <p>Providence, RI | SEP 2020 – MAY 2021</p>
          <ul>
            <li>Managed communications with state health professionals, educators, and legislators to allocate resources and provide adequate quarantine/isolation guidance for >5k infected patients, mitigating the spread of the virus</li>
            <li>Spearheaded crisis response initiatives in K-12 and Spanish-speaking communities, providing translation and outreach assistance</li>
            <li>Led cross-team communication via Microsoft Office and managed patient data in a Salesforce database for 1M+ Rhode Islanders</li>
            <li>Supervisor Promotion - put in charge of managing and evaluating the performance of 20 information line agents</li>
          </ul>
        </div>
        <div className="experience">
          <h3>Skills for Rhode Island’s Future Med Tech Consulting Intern</h3>
          <p>Providence, RI | JUN 2020 – AUG 2020</p>
          <ul>
            <li>Developed a COVID-19 hospital emergency visitation policy for Lifespan, RI’s largest health service provider, through email and video communication with health professionals, providing visitation support to 500K+ annual visitors</li>
            <li>Managed $5K of research funds and implemented a social media marketing strategy to promote the visitation policy to >10K media users; pitched a prototype and deck of the visitation protocol strategy to a board of 10 Lifespan representatives</li>
          </ul>
        </div>
        </div>


        <div id="leadership-engagement" className="resume-section">
          <h2>LEADERSHIP AND COMMUNITY ENGAGEMENT EXPERIENCE</h2>
          <div className="experience">
            <h3>Full Stack at Brown, Project Manager</h3>
            <p>Providence, RI | AUG 2023 - present</p>
            <ul>
              <li>Led 5 engineers in developing front-end components for an on-campus club website aiming to increase recruiting bandwidth and client partnerships, using React, CSS, and Javascript</li>
              <li>Performed detailed evaluations of 100% of merge requests and ensure efficient project progress through strategic work distribution</li>
              <li>Relayed communications between developers and clients, abstracting client data points to define clear product objectives</li>
            </ul>
          </div>
          <div className="experience">
            <h3>Ivy Film Festival, Outreach Coordinator</h3>
            <p>Providence, RI | JAN 2023 - present</p>
            <ul>
              <li>Managed communication with over 200 film schools and their respective students, directors, or alumni; successfully increasing festival attendance by 50%</li>
              <li>Reached out to benefactors to organize the first annual iPhone Mini Competition for high school filmmakers, offering $300+ in awards</li>
            </ul>
          </div>
          <div className="experience">
            <h3>Sprout and S.T.E.M., Tutor/Researcher</h3>
            <p>Providence, RI | JAN 2023 - present</p>
            <ul>
              <li>Led weekly tutoring sessions at the MET High School; prepared remedial math assignments on Google Workspace for 20 students</li>
              <li>Developed an educational tool to assess students’ math identity according to research findings from 10K+ pages of scholarly text</li>
              <li>Wrote and published supplementary legal documentation for research experiments and patent applications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;