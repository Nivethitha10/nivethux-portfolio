import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './SelectedWork.css';

interface Project {
  id: string;
  image: string;
  tags: string;
  number: string;
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 'financial',
    image: '/assets/project-banking.png',
    tags: 'FINTECH · ENTERPRISE · COMPLEX DATA',
    number: '01',
    title: 'Enterprise Banking Platform',
    description: 'Designing role-based financial workflows for complex monitoring and transaction operations. Turning dense data into clear, decision-ready experiences.',
    link: '/project-1'
  },
  {
    id: 'inventory',
    image: '/assets/project-warehouse.png',
    tags: 'MANUFACTURING · WAREHOUSE OPS · ZEBRA HANDHELD',
    number: '02',
    title: 'Warehouse Operations & Material Movement',
    description: 'State-driven scanning workflows for line workers — moving, tracking, and dispatching material with zero room for error.',
    link: '/project-2'
  },
  {
    id: 'strip-test',
    image: '/assets/project-strip-test.png',
    tags: 'AGTECH · FIELD DATA · MOBILE',
    number: '03',
    title: 'Strip Test',
    description: 'Helping farmers and agronomists score field quality in minutes — guided sampling built for the field, not the office.',
    link: '/project-3'
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
          <a href="/work" className="btn-explore-all">
            <span>See more</span>
            <ArrowUpRight size={16} />
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
              </div>
              <div className="project-card-content">
                <div className="project-meta">
                  <span className="project-tags">{project.tags}</span>
                  <span className="project-number">{project.number}</span>
                </div>
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
