import React from 'react';
import faviconArtwork from '../../Icons/Favicon.png';
import './SiteAssetsPage.css';

const faviconSamples = [
  { size: 16, label: 'Browser tab' },
  { size: 32, label: 'Retina tab' },
  { size: 48, label: 'Shortcut icon' },
  { size: 180, label: 'Touch icon' },
];

export const SiteAssetsPage: React.FC = () => (
  <main className="site-assets-page">
    <p className="site-assets-eyebrow">NivethUX · Site assets</p>
    <h1>A familiar mark. At every size.</h1>
    <p className="site-assets-intro">The actual site logo, shown at every icon size — from browser tab to touch icon.</p>

    <section className="favicon-specimens" aria-label="Favicon sizes">
      {faviconSamples.map(({ size, label }) => (
        <article className={`favicon-specimen${size === 180 ? ' favicon-specimen--touch' : ''}`} key={size}>
          <div className="favicon-preview" aria-label={`${size} by ${size} favicon preview`}>
            <img src={faviconArtwork} alt="NivethUX favicon mark" style={{ width: `${size}px`, height: `${size}px` }} />
          </div>
          <h2>{size} × {size}</h2>
          <p>{label}</p>
        </article>
      ))}
    </section>

    <div className="site-assets-divider" />

    <section className="social-asset-spec" aria-label="Social preview specification">
      <div className="social-preview-card"><img src="/og-image.png" alt="NivethUX social preview graphic" /></div>
      <div className="social-asset-description">
        <h2>Social preview · 1200 × 630</h2>
        <p>A standalone image with the portfolio promise, author name and signature thread.</p>
        <p>Open Graph and social card metadata configured.</p>
      </div>
    </section>
  </main>
);
