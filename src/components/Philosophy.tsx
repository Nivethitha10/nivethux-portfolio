import React from 'react';
import { Code2, Network, Workflow } from 'lucide-react';
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
    icon: <Workflow size={20} aria-hidden="true" />,
    title: 'Enterprise product design',
    text: 'Complex workflows, operational tools and data-heavy applications designed around real-world needs.',
    tags: ['Role-based systems', 'Operational workflows', 'Information architecture']
  },
  {
    id: 'systems',
    icon: <Network size={20} aria-hidden="true" />,
    title: 'Systems thinking',
    text: 'Designing the logic behind the interface — how states, permissions, validation and patterns work together.',
    tags: ['Interaction logic', 'Design systems', 'State management']
  },
  {
    id: 'ai',
    icon: <Code2 size={20} aria-hidden="true" />,
    title: 'AI-assisted design & development',
    text: 'Turning design ideas into functional experiences through AI-assisted prototyping and implementation.',
    tags: ['AI-assisted prototyping', 'Figma-to-code', 'Frontend implementation']
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
            Connecting people, systems and technology through thoughtful design.
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
