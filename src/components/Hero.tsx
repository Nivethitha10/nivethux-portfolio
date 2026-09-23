import React from 'react';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-ambient-glow"></div>
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
              I'm Nivethitha, a Product Designer focused on enterprise systems, intelligent workflows, and Human-AI experiences.
            </p>
            <a href="#work" className="hero-cta">
              <span>View Selected Work</span>
              <span className="hero-cta-arrow">
                <ArrowDown size={16} />
              </span>
            </a>
          </div>

          {/* Right Column: 3D Character Avatar — transparent PNG, no background box */}
          <div className="hero-visual">
            <div className="hero-avatar-wrapper">
              {/* Spider web PNG — transparent PNG hangs from top-right */}
              <div className="spider-hanging" aria-hidden="true">
                <img
                  src="/assets/hero-spider.png"
                  alt=""
                  draggable={false}
                />
              </div>

              {/* Main avatar: transparent PNG renders against page background */}
              <img
                src="/assets/hero-avatar.png"
                alt="3D illustrated character of Nivethitha — striped top, smiling"
                className="hero-avatar-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
