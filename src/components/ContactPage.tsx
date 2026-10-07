import React, { useState } from 'react';
import resumeUrl from '../../Resume/Nivethitha_Resume_5yrsExp.pdf';
import './ContactPage.css';

const enquiryTypes = ['Full-time role', 'Freelance/contract', 'Just saying hi'];

export const ContactPage: React.FC = () => {
  const [enquiryType, setEnquiryType] = useState('');

  const submitEnquiry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');
    const subject = enquiryType ? `${enquiryType} enquiry from ${name}` : `Enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nEnquiry type: ${enquiryType || 'Not specified'}\n\n${message}`;
    window.location.href = `mailto:nivethitha10rb@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="contact-page">
      <section className="contact-intro" aria-labelledby="contact-title">
        <span className="contact-eyebrow">CONTACT</span>
        <div className="contact-invitation">
          <h1 id="contact-title">Found a problem worth untangling?</h1>
          <p>Let’s see where it leads.</p>
        </div>
        <p className="contact-intro-copy">
          Whether you need to clean up a messy enterprise workflow, design for a system nobody fully trusts yet, or make something complex feel obvious — I’d like to hear about it.
        </p>
      </section>

      <section className="contact-details" aria-label="Contact form and direct contact details">
        <form className="contact-form" onSubmit={submitEnquiry}>
          <div className="contact-name-email">
            <label className="contact-field">
              <span>Name</span>
              <input autoComplete="name" name="name" required />
            </label>
            <label className="contact-field">
              <span>Email</span>
              <input autoComplete="email" name="email" type="email" required />
            </label>
          </div>

          <fieldset className="contact-enquiry-types">
            <legend>What are you looking for?</legend>
            <div className="contact-enquiry-options">
              {enquiryTypes.map((type) => (
                <button
                  aria-pressed={enquiryType === type}
                  className={`contact-enquiry-option${enquiryType === type ? ' selected' : ''}`}
                  key={type}
                  onClick={() => setEnquiryType(type)}
                  type="button"
                >
                  {type}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="contact-field contact-message-field">
            <span>Message</span>
            <textarea name="message" placeholder="Tell me a bit about what you’re working on..." required />
          </label>

          <div className="contact-submit-area">
            <button className="contact-submit" type="submit">Send message <span aria-hidden="true">→</span></button>
            <p>I usually reply within 3 days — faster for roles, slower for “just saying hi.”</p>
          </div>
        </form>

        <aside className="contact-direct">
          <div className="contact-direct-rule" />
          <h2>DIRECT CONTACT</h2>
          <div className="contact-email">
            <span>Email:</span>
            <a href="mailto:nivethitha10rb@gmail.com">nivethitha10rb@gmail.com</a>
          </div>
          <a href="https://www.linkedin.com/in/nivethitha-rb/" target="_blank" rel="noopener noreferrer">LinkedIn →</a>
          <a href={resumeUrl} download="Nivethitha_Resume_5yrsExp.pdf">Resume ↓</a>
        </aside>
      </section>
    </main>
  );
};
