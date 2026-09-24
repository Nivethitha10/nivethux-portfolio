import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { Logo } from './Logo';
import resumeUrl from '../../Resume/Nivethitha_Resume_5yrsExp.pdf';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAboutPage = window.location.pathname === '/about';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Logo />

        {/* Desktop Nav */}
        <nav aria-label="Main Navigation">
          <ul className="navbar-links">
            <li>
              <a href="/" className={`nav-link ${!isAboutPage ? 'active' : ''}`}>Home</a>
            </li>
            <li>
              <a href="/about" className={`nav-link ${isAboutPage ? 'active' : ''}`}>About Me</a>
            </li>
            <li>
              <a href="#work" className="nav-link">Work</a>
            </li>
            <li>
              <a href="#philosophy" className="nav-link">Thinking</a>
            </li>
            <li>
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>

        {/* CTA Button Desktop */}
        <div className="navbar-actions">
          <a href={resumeUrl} download="Nivethitha_Resume_5yrsExp.pdf" className="btn-resume">
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className={`hamburger-btn ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <a href="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li>
            <a href="/about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>About Me</a>
          </li>
          <li>
            <a href="#work" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Work</a>
          </li>
          <li>
            <a href="#philosophy" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Thinking</a>
          </li>
          <li>
            <a href="#contact" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
        <div className="mobile-actions">
          <a href={resumeUrl} download="Nivethitha_Resume_5yrsExp.pdf" className="btn-resume" onClick={() => setIsOpen(false)}>
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
};
