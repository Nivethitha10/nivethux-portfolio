import React, { useState } from 'react';
import { Download, Moon, Sun } from 'lucide-react';
import { Logo } from './Logo';
import resumeUrl from '../../Resume/Nivethitha_Resume_5yrsExp.pdf';
import { routes } from '../routes';
import './Navbar.css';

type NavbarProps = { pathname: string; theme: 'light' | 'dark'; onToggleTheme: () => void };

export const Navbar: React.FC<NavbarProps> = ({ pathname, theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isHomePage = pathname === routes.home;
  const isAboutPage = pathname === routes.about;
  const isWorkPage = pathname === routes.work;
  const isContactPage = pathname === routes.contact || pathname === routes.contactThankYou;
  const contactHref = isHomePage ? '#contact' : routes.contact;
  const themeLabel = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

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
              <a href={routes.home} className={`nav-link ${isHomePage ? 'active' : ''}`}>Home</a>
            </li>
            <li>
              <a href={routes.about} className={`nav-link ${isAboutPage ? 'active' : ''}`}>About Me</a>
            </li>
            <li>
              <a href={routes.work} className={`nav-link ${isWorkPage ? 'active' : ''}`}>Work</a>
            </li>
            <li>
              <a href={contactHref} className={`nav-link ${isContactPage ? 'active' : ''}`}>Contact</a>
            </li>
          </ul>
        </nav>

        {/* CTA Button Desktop */}
        <div className="navbar-actions">
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={themeLabel} title={themeLabel} aria-pressed={theme === 'dark'}>
            {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
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
            <a href={routes.home} className="mobile-nav-link" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li>
            <a href={routes.about} className="mobile-nav-link" onClick={() => setIsOpen(false)}>About Me</a>
          </li>
          <li>
            <a href={routes.work} className="mobile-nav-link" onClick={() => setIsOpen(false)}>Work</a>
          </li>
          <li>
            <a href={contactHref} className="mobile-nav-link" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
        <div className="mobile-actions">
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={themeLabel} title={themeLabel} aria-pressed={theme === 'dark'}>
            {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
          </button>
          <a href={resumeUrl} download="Nivethitha_Resume_5yrsExp.pdf" className="btn-resume" onClick={() => setIsOpen(false)}>
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
};
