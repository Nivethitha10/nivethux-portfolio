import React from 'react';
import './ErrorPage.css';

export const ErrorPage: React.FC = () => (
  <main className="not-found-page">
    <section className="not-found-content" aria-labelledby="not-found-title">
      <p className="not-found-eyebrow">Page not found</p>
      <svg className="lost-thread-art" viewBox="0 0 280 100" fill="none" role="img" aria-label="A wandering teal thread">
        <path d="M0 57C38 57 25 7 61 7c31 0 52 24 57 47 6 26-7 34-20 33-17-1-25-20-19-39 7-22 29-22 48-14 17 7 29 22 47 23 25 2 27-38 55-38" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
      <h1 id="not-found-title">404 — This thread got lost.</h1>
      <p className="not-found-description">The page you're looking for doesn't exist, or the link's out of date.</p>
      <div className="not-found-actions">
        <a className="not-found-primary" href="/">Back to home <span aria-hidden="true">→</span></a>
        <a className="not-found-secondary" href="/work">View work <span aria-hidden="true">→</span></a>
      </div>
    </section>
  </main>
);
