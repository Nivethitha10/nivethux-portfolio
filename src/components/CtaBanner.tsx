import React from 'react';
import { ArrowRight } from 'lucide-react';
import './CtaBanner.css';

export const CtaBanner: React.FC = () => {
  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="cta-box">
          <h2 className="cta-title">
            Found a problem worth untangling?
          </h2>
          <span className="cta-subtitle">
            Let's see where it leads.
          </span>
          <a href="mailto:hello@nivethux.com" className="btn-cta-main">
            <span>Let's Talk</span>
          <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
