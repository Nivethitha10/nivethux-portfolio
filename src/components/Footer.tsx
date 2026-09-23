import React from 'react';
import { Logo } from './Logo';
import behanceIcon from '../../icons/Behance.png';
import dribbbleIcon from '../../icons/Dribbble.png';
import instagramIcon from '../../icons/Instagram.png';
import linkedinIcon from '../../icons/Linkedin.png';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Logo size="normal" />
            <h3 className="footer-role">
              Brand & UI/UX Designer<br />based in Bangalore
            </h3>
            <p className="footer-bio">
              Hi, I'm Nivethitha - a UI/UX and brand designer passionate about creating seamless digital experiences that connect and convert.
            </p>
            <span className="footer-copyright">
              © 2025 Copyright
            </span>
          </div>

          {/* Navigation Column */}
          <div className="footer-col">
            <div className="footer-col-header">MENU</div>
            <ul className="footer-links-list">
              <li>
                <a href="#home" className="footer-link">HOME</a>
              </li>
              <li>
                <a href="#work" className="footer-link footer-link-active">WORK</a>
              </li>
              <li>
                <a href="#about" className="footer-link">ABOUT</a>
              </li>
              <li>
                <a href="#contact" className="footer-link">CONTACT</a>
              </li>
              <li>
                <a href="#philosophy" className="footer-link">THINKING</a>
              </li>
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="footer-col">
            <div className="footer-col-header">SOCIAL</div>
            <ul className="footer-links-list">
              <li>
                <a href="https://www.linkedin.com/in/nivethitha-rb/" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <img src={linkedinIcon} alt="" className="footer-social-icon" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/nivethux/" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <img src={instagramIcon} alt="" className="footer-social-icon" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/NivethUX" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <img src={behanceIcon} alt="" className="footer-social-icon" />
                  <span>Behance</span>
                </a>
              </li>
              <li>
                <a href="https://dribbble.com/NivethUX" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <img src={dribbbleIcon} alt="" className="footer-social-icon" />
                  <span>Dribbble</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Large Watermark */}
        <div className="footer-watermark-wrapper" aria-hidden="true">
          <span className="footer-watermark-text">NivethUX</span>
        </div>
      </div>
    </footer>
  );
};
