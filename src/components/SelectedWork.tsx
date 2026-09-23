import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import './SelectedWork.css';

interface Project {
  id: string;
  image: string;
  tags: string;
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 'financial',
    image: '/assets/project-financial.jpg',
    tags: 'FINTECH · ENTERPRISE · COMPLEX DATA',
    title: 'Enterprise Financial Management',
    description: 'Redesigning the financial reporting and transaction ledger workflows for multinational operations. Simplifying complex tax regulations into structured UI actions.',
    link: '#work'
  },
  {
    id: 'inventory',
    image: '/assets/project-inventory.jpg',
    tags: 'LOGISTICS · WORKFLOW AUTO · IOT SYSTEMS',
    title: 'Enterprise Inventory & Material Movement',
    description: 'Unifying hardware tracking scanners, warehouse routing protocols, and real-time inventory levels into a centralized responsive dispatch dashboard.',
    link: '#work'
  },
  {
    id: 'cogniwave',
    image: '/assets/project-cogniwave.jpg',
    tags: 'HUMAN-AI · DEV TOOLS · VISUAL PROGRAMMING',
    title: 'Cogweaver',
    description: 'A node-based interface builder allowing software engineers to train, monitor, and configure AI agent behaviors visually inside native codebases.',
    link: '#work'
  }
];

export const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="selected-work-section">
      <div className="container">
        <div className="selected-work-header">
          <div className="selected-work-header-left">
            <span className="eyebrow">SELECTED WORK</span>
            <h2 className="selected-work-title">Following the thread.</h2>
          </div>
          <a href="#work" className="btn-explore-all">
            <span>See more</span>
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <a key={project.id} href={project.link} className="project-card">
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-thumbnail"
                  loading="lazy"
                />
                <div className="project-action-badge" aria-hidden="true">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="project-card-content">
                <div className="project-tags">{project.tags}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
