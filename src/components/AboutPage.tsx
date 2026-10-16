import React from 'react';
import aboutImage from '../../Images/about_image.jpg';
import './AboutPage.css';

const values = [
  ['Clarity', 'Making complex information easier to understand and act on.'],
  ['Systems', 'Looking beyond individual screens to understand workflows, states, roles, and relationships.'],
  ['Human behaviour', 'Designing around how people actually think, work, make mistakes, and adapt.'],
  ['Trust', 'Making system behaviour understandable, especially when AI is involved.'],
  ['Craft', 'Caring about the details that make an interaction feel effortless.'],
];

const roles = [
  {
    date: 'July 2023 - Present',
    company: 'ITC Infotech · Bangalore',
    title: 'UX Designer - Human-AI Interaction & UX Strategy',
    description: 'Designing state-driven material movement systems for large-scale manufacturing, including role-based workflows and handheld scanning experiences under hardware constraints.',
  },
  {
    date: 'August 2021 - June 2023',
    company: 'Flyers Soft · Chennai',
    title: 'UX Designer',
    description: 'Designed dashboard-based and workflow-heavy enterprise applications, including role-based financial monitoring experiences and complex information architectures.',
  },
];

export const AboutPage: React.FC = () => {
  return (
    <main className="about-page">
      <section className="about-page-hero">
        <div className="about-page-hero-inner">
          <div className="about-page-photo">
            <img src={aboutImage} alt="Nivethitha standing beside a plant" />
          </div>
          <div className="about-page-intro">
            <p className="about-page-kicker">Hi, I'm Nivethitha.</p>
            <h1>Designing clarity in complexity.</h1>
            <p className="about-page-lead">As a Product Designer, I've always been interested in the space between people and systems - the moments where a user's intention meets a complicated workflow, a confusing interface, or a system that doesn't behave as expected.</p>
            <p className="about-page-supporting">Over the past 5.2 years, I've worked across enterprise products, from financial and operational systems to AI-powered research experiences and hardware-constrained workflows.</p>
          </div>
        </div>
      </section>

      <section className="about-page-values">
        <div className="about-page-section-inner">
          <h2>What I care about</h2>
          <div className="about-value-grid">
            {values.map(([title, description]) => (
              <article className="about-value-card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page-journey">
        <div className="about-page-section-inner">
          <div className="about-page-section-heading">
            <h2>The journey</h2>
            <p>5.2 years of designing products and systems</p>
          </div>
          <div className="about-role-list">
            {roles.map((role) => (
              <article className="about-role" key={role.company}>
                <div className="about-role-meta">
                  <p>{role.date}</p>
                  <span>{role.company}</span>
                </div>
                <div className="about-role-copy">
                  <h3>{role.title}</h3>
                  <p>{role.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page-education">
        <div className="about-page-section-inner about-page-education-inner">
          <div className="about-page-education-column">
            <h2>Education &amp; Learning</h2>
            <div className="about-education-list">
              <div><h3>B.E. Computer Science Engineering</h3><p>Peri Institute of Technology · 2021</p></div>
              <div><h3>Google UX Design · Coursera · 2024</h3><p>AI for Everyone · DeepLearning.AI · 2024</p></div>
            </div>
          </div>
          <div className="about-page-education-column">
            <h2>Beyond the interface</h2>
            <div className="about-beyond-copy">
              <p>I like noticing how things work.</p>
              <p>When I'm not designing, I find myself looking at the world through a similar lens.</p>
              <p>Architecture teaches me about structure and movement.</p>
              <p>Cinema teaches me about storytelling and emotion.</p>
              <p>Music teaches me about rhythm and timing.</p>
              <p>Photography teaches me to notice details.</p>
              <p>And sometimes I just get happily distracted by a beautifully designed space.</p>
              <p>Systems are everywhere. I just happen to notice them.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-page-cta">
        <h2>Found a problem worth untangling?</h2>
        <p>Let's see where it leads.</p>
        <a href="mailto:hello@nivethux.com">Get in Touch</a>
      </section>
    </main>
  );
};
