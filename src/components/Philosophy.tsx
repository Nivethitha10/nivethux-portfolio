import React from 'react';
import './Philosophy.css';

interface Principle {
  id: string;
  icon: React.ReactNode;
  title: string;
  text: string;
  tags: string[];
}

const principles: Principle[] = [
  {
    id: 'workflows',
    icon: <img src="/assets/icon-settings.svg" alt="" />,
    title: 'Enterprise workflows',
    text: 'Operational tools and data-heavy systems that help people know what matters and what to do next.',
    tags: ['Role-based systems', 'Operational tools', 'Information architecture']
  },
  {
    id: 'systems',
    icon: <img src="/assets/icon-settings.svg" alt="" />,
    title: 'Systems thinking',
    text: 'The structure behind the screens: how states, permissions, and validation fit together, and how patterns scale into design systems.',
    tags: ['States', 'Permissions', 'Validation', 'Design systems']
  },
  {
    id: 'ai',
    icon: <img src="/assets/icon-settings.svg" alt="" />,
    title: 'Human-AI interaction',
    text: 'Intelligent features people can trust, question, and control.',
    tags: ['Trust', 'Transparency', 'Human-in-the-loop']
  }
];

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="philosophy-section">
      <div className="container">
        <div className="philosophy-header">
          <span className="eyebrow">WHAT I DESIGN</span>
          <h2 className="philosophy-title">I design for complexity.</h2>
          <p className="philosophy-subtitle">
            Products where many roles, rules, and states meet, and the interface has to make sense of them.
          </p>
        </div>

        <div className="philosophy-grid">
          {principles.map((principle) => (
            <div key={principle.id} className="philosophy-card">
              <div className="philosophy-icon-badge">
                {principle.icon}
              </div>
              <div className="philosophy-copy">
                <h3 className="philosophy-card-title">{principle.title}</h3>
                <p className="philosophy-card-text">{principle.text}</p>
                <div className="philosophy-tags">
                  {principle.tags.map((tag) => (
                    <span key={tag} className="philosophy-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
