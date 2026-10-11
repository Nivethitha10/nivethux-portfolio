import React from 'react';
import { ArrowRight } from 'lucide-react';
import { routes } from '../routes';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <span className="eyebrow">MEET THE DESIGNER</span>
          <h2 className="about-title">Hi, I'm Nive.</h2>
        </div>

        <div className="about-layout">
          <div className="about-photo-wrapper">
            <img 
              src="/assets/figma-about.png"
              alt="Nivethitha — Product Designer" 
              className="about-photo"
              loading="lazy"
            />
          </div>

          <div className="about-card">
            <p className="about-bio-text">
              I find the threads between users, technology, and business needs. My work centers on taking highly ambiguous, data-dense workflows and turning them into straightforward, reliable experiences. I believe good UX is not just about making interfaces beautiful, but making deep technical systems genuinely accessible and clear.
            </p>
            <a href={routes.about} className="about-link">
              <span>Learn More About My Story</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
