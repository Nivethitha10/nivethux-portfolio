import React from 'react';
import { Logo } from './Logo';
import behanceIcon from '../../Icons/Behance.png';
import dribbbleIcon from '../../Icons/Dribbble.png';
import instagramIcon from '../../Icons/Instagram.png';
import linkedinIcon from '../../Icons/Linkedin.png';
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
              Product Designer
            </h3>
          </div>

          {/* Navigation Column */}
          <div className="footer-col">
            <div className="footer-col-header">Menu</div>
            <ul className="footer-links-list">
              <li>
                <a href="/" className="footer-link">Home</a>
              </li>
              <li>
                <a href="/work" className="footer-link">Work</a>
              </li>
              <li>
                <a href="/about" className="footer-link">About Me</a>
              </li>
              <li>
                <a href="/contact" className="footer-link">Contact</a>
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
        <div className="footer-bottom-bar">
          <span>© 2026 Nivethitha R B</span>
        </div>
      </div>
    </footer>
  );
};
