import React from 'react';
import { MailCheck } from 'lucide-react';
import resumeUrl from '../../Resume/Nivethitha_Resume_5yrsExp.pdf';
import { routes } from '../routes';
import './ContactSentPage.css';

export const ContactSentPage: React.FC = () => (
  <main className="contact-sent-page">
    <section className="contact-sent-intro" aria-labelledby="contact-sent-heading">
      <span className="contact-sent-eyebrow">Contact</span>
      <div className="contact-sent-invitation">
        <h1 id="contact-sent-heading">Found a problem worth untangling?</h1>
        <p>Let’s see where it leads.</p>
      </div>
      <p className="contact-sent-copy">
        Whether you need to clean up a messy enterprise workflow, design for a system nobody fully trusts yet, or make something complex feel obvious — I’d like to hear about it.
      </p>
    </section>

    <section className="contact-sent-details" aria-label="Message confirmation and direct contact">
      <div className="message-confirmation">
        <div className="message-confirmation-icon"><MailCheck size={24} strokeWidth={1.8} aria-hidden="true" /></div>
        <span className="message-sent-status"><i aria-hidden="true" />Message sent</span>
        <h2>Message sent — I’ll get back to you soon</h2>
        <a className="message-sent-action" href={routes.work}>View work →</a>
      </div>

      <aside className="contact-sent-direct">
        <div className="contact-sent-rule" />
        <h2>Direct contact</h2>
        <div className="contact-sent-email">
          <span>Email:</span>
          <a href="mailto:nivethitha10rb@gmail.com">nivethitha10rb@gmail.com</a>
        </div>
        <a href="https://www.linkedin.com/in/nivethitha-rb/" target="_blank" rel="noopener noreferrer">LinkedIn →</a>
        <a href={resumeUrl} download="Nivethitha_Resume_5yrsExp.pdf">Resume ↓</a>
      </aside>
    </section>
  </main>
);
