import React, { useState } from 'react';

import './App.css';

import About from './pages/About.js';
import Works from './pages/Works.js';
import Resume from './pages/Resume.js';
import Socials from './pages/Socials.js';

function App() {

  const [activeTab, setActiveTab] = useState(null);
  const [activeWork, setActiveWork] = useState(null);

  const handleTabClick = (tabId) => {
    if (tabId === 'works') {
      // Reset activeWork to null when "Works" tab is clicked
      setActiveWork(null);
    }
    setActiveTab(tabId);
  };

  const renderPage = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'works':
        return <Works activeWork={activeWork} setActiveWork={setActiveWork} />;
      case 'resume':
        return <Resume />;
      case 'socials':
        return <Socials />;
      default:
        setActiveTab('about');
        return <About />;
    }
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
      <div className="sticker">Carlos Betancur's Portfolio</div>
      <div className="manila-tab"></div>
        <ul>
          <li><a href="#about" className={activeTab === 'about' ? 'active' : ''} onClick={() => handleTabClick('about')}>About</a></li>
          <li><a href="#works" className={activeTab === 'works' ? 'active' : ''} onClick={() => handleTabClick('works')}>Works</a></li>
          <li><a href="#resume" className={activeTab === 'resume' ? 'active' : ''} onClick={() => handleTabClick('resume')}>Resume</a></li>
          <li><a href="#socials" className={activeTab === 'socials' ? 'active' : ''} onClick={() => handleTabClick('socials')}>Socials</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
