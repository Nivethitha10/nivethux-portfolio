import React from 'react';
import './Process.css';

interface Step {
  number: string;
  title: string;
  text: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Understand',
    text: "Learn who the people are, what they're trying to get done, and what gets in their way, before suggesting solutions."
  },
  {
    number: '02',
    title: 'Model',
    text: "Map the roles, states, relationships, and constraints behind the interaction, so the system's structure is visible."
  },
  {
    number: '03',
    title: 'Simplify',
    text: 'Remove noise and ambiguity so the right action is obvious and the next step is clear.'
  },
  {
    number: '04',
    title: 'Validate',
    text: 'Test beyond the happy path: edge cases, permissions, hardware limits, and real-world conditions.'
  },
  {
    number: '05',
    title: 'Systematize',
    text: 'Turn project-specific solutions into reusable patterns, components, and documentation that outlast the project.'
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="process-header">
          <span className="eyebrow">HOW I WORK</span>
          <h2 className="process-title">From ambiguity to clarity.</h2>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <div key={step.number} className="process-card">
              <span className="process-step-number">{step.number}</span>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-text">{step.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
