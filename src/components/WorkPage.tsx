import React from 'react';
import './WorkPage.css';

interface WorkProject {
  number: string;
  title: string;
  category: string;
  description: string;
  focus: string;
  image: string;
  imageAlt: string;
  href?: string;
  caption?: string;
}

const projects: WorkProject[] = [
  {
    number: '01',
    title: 'Enterprise Banking Platform',
    category: 'FINTECH · ENTERPRISE · COMPLEX DATA',
    description: 'Designing role-based operational experiences for enterprise banking, Sharia compliance, and multi-channel workflows.',
    focus: 'Information architecture · Bilingual RTL · High-density data',
    image: '/assets/work-banking.jpg',
    imageAlt: 'Enterprise banking dashboard shown on a laptop',
    href: '/project-1',
    caption: 'Recreated visual · Representative data',
  },
  {
    number: '02',
    title: 'Warehouse Operations & Material Movement',
    category: 'Manufacturing · Warehouse ops · Zebra handheld',
    description: 'State-driven scanning workflows for line workers and warehouse teams — moving, tracking, and dispatching material with zero room for error.',
    focus: 'Scan-first interaction design · Error recovery · Hardware-constrained UI',
    image: '/assets/project-warehouse.png',
    imageAlt: 'Warehouse worker scanning a package between storage racks',
    href: '/project-2',
  },
  {
    number: '03',
    title: 'Strip Test',
    category: 'AgTech · Field data capture · Mobile',
    description: 'Helping farmers and agronomists score field quality in minutes — guided sampling, offline-first, built for the field, not the office.',
    focus: 'Offline-first · Multilingual · Guided data capture',
    image: '/assets/project-strip-test.png',
    imageAlt: 'Agricultural field testing dashboard shown on a mobile phone',
    href: '/project-3',
  },
  {
    number: '04',
    title: 'Golf App',
    category: 'Hospitality · AI concierge · Mobile',
    description: 'An AI concierge that plans the whole day — tee time, group, lunch, and activities — in one conversation.',
    focus: 'Conversational flows · Group coordination · Booking & payments',
    image: '/assets/work-golf.jpg',
    imageAlt: 'Golf equipment and a golf app displayed on a phone',
    href: '/project-4',
  },
];

export const WorkPage: React.FC = () => (
  <main className="work-page">
    <section className="work-introduction" aria-labelledby="work-page-title">
      <span className="work-eyebrow">WORK</span>
      <h1 id="work-page-title">Following the thread.</h1>
      <p className="work-intro-copy">
        A few complex problems I've had the chance to untangle — across banking, manufacturing, hospitality, and agriculture.
      </p>
      <p className="work-nda-note">
        Some projects are under NDA. Visuals are recreated with representative data and labelled as such.
      </p>
    </section>

    <section className="work-index" aria-label="Selected case studies">
      {projects.map((project) => {
        const content = (
          <>
            <span className="work-case-arrow" aria-hidden="true">
              <img src="/assets/arrow-right-teal.svg" alt="" />
            </span>
            <span>View case study</span>
          </>
        );

        return (
          <article className="work-entry" key={project.number}>
            <div className="work-project-information">
              <div className="work-project-heading">
                <h2>{project.number} — {project.title}</h2>
                <p className={project.number === '01' ? 'work-project-category uppercase' : 'work-project-category'}>
                  {project.category}
                </p>
              </div>
              <p className="work-project-description">{project.description}</p>
              <p className="work-project-focus">{project.focus}</p>
              <div className="work-case-action">
                {project.href ? (
                  <a className="work-case-link" href={project.href}>{content}</a>
                ) : (
                  <span className="work-case-link" aria-disabled="true">{content}</span>
                )}
              </div>
            </div>

            <div className="work-project-visual">
              <div className={`work-preview work-preview-${project.number}`}>
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
              </div>
              {project.caption && <p className="work-preview-caption">{project.caption}</p>}
            </div>
          </article>
        );
      })}
    </section>
  </main>
);
