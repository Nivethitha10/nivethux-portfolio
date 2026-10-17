import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SpotlightAvatar } from './SpotlightAvatar';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-layout">
          {/* Left Column */}
          <div className="hero-content">
            <span className="eyebrow hero-eyebrow">
              PRODUCT DESIGNER · ENTERPRISE SYSTEMS · HUMAN-AI
            </span>
            <h1 className="hero-title">
              Untangling complex systems, one interaction at a time.
            </h1>
            <p className="hero-description">
              I'm Nivethitha, a <strong>Product Designer</strong> focused on enterprise UX, intelligent workflows, and Human-AI experiences.
            </p>
            <a href="#work" className="hero-cta">
              <span>View Selected Work</span>
              <span className="hero-cta-arrow">
                <ArrowRight size={18} />
              </span>
            </a>
          </div>

          {/* Right Column: interactive spotlight avatar */}
          <div className="hero-visual">
            <div className="hero-avatar-wrapper">
              <SpotlightAvatar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
