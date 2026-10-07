import React from 'react';
import heroImage from '../../Images/Project1HeroImage.png';
import './Project1.css';

const transactionSummaryImage = '/assets/banking-view1-figma.png';
const tradingOverviewImage = '/assets/banking-view2-figma.png';
const islamicPortfolioImage = '/assets/banking-view3-figma.png';
const tatSummaryImage = '/assets/banking-view4-figma.png';
const supplierAnalysisImage = '/assets/banking-view5-figma.png';

const outputs = [
  ['01', '5 role-specific hubs', 'Custom-fit operational spaces for branch operations, treasury, Sharia compliance, and procurement managers.'],
  ['02', 'Process builder IA', 'Mapping multi-stage, weighted cycle-time flows into unified visual trackers.'],
  ['03', 'Bilingual architecture', 'Engineered for Arabic (RTL) and English (LTR), with native font optimization.'],
  ['04', 'Enterprise pattern lab', 'Accessible design tokens built for fast-paced, high-density transactional screens.'],
];

const principles = [
  ['Role-first navigation', "Adapts to each user's operational role, surfacing contextual priorities first."],
  ['Progressive disclosure', 'High-level KPIs shown instantly, with dense metadata behind interactive layers.'],
  ['Consistent dashboard patterns', 'Uniform structural grids across portals to reduce cross-departmental load.'],
  ['Action-oriented interfaces', 'Designs prioritize decisions over static figures, using clear alert states.'],
  ['Bilingual by design', 'RTL Arabic and LTR English built natively into the typography system, not retrofitted.'],
];

const hubs = [
  ['Core Platform Shell', 'Unified entry point across all departments'],
  ['Transaction Summary', 'Branch operations & alerts'],
  ['Trading Overview', 'Trade operations & portfolios'],
  ['Islamic Portfolio', 'Sharia-structured finance'],
  ['TAT Summary', 'Operations & SLA monitoring'],
  ['Supplier Analysis', 'Procurement & vendor operations'],
];

const roles = [
  ['Branch Operations Manager', 'Monitors transaction volumes, clearing operations, and system health. Decides transaction prioritization, risk alert escalation, and resource allocation.'],
  ['Senior Corporate RM', 'Manages client portfolios, trade operations, and deal pipelines. Decides deal prioritization, client engagement, and risk assessment.'],
  ['Islamic Finance Manager', 'Oversees Sharia-compliant products (Murabaha, Mudaraba, Ijara), monitors compliance. Decides product mix, compliance monitoring, and facility structuring.'],
  ['Operations & SLA Manager', 'Tracks turnaround times, SLA performance, and processing queues. Decides queue prioritization, process optimization, and exception handling.'],
  ['Procurement Lead', 'Manages supplier relationships, vendor performance, and payment networks. Decides vendor selection, network evaluation, and cost analysis.'],
];

const tags = ['Role-based systems', 'Bilingual RTL', 'High-density data'];

const showcase = [
  {
    view: 'View 1', title: 'Transaction Summary (Branch Operations)',
    description: 'Transaction monitoring, status tracking, and retail banking operations for branch managers.',
    supports: 'Real-time transaction visibility, SLA achievement tracking, critical risk alert escalation, and transaction records broken down by client tier and department.',
    highlights: 'Real-time KPI cards with color-coded status and trend lines; a prioritized risk alerts panel with severity classification and quick-action escalation; a high-density transaction table optimized for readability; live system status widget.',
    image: transactionSummaryImage,
  },
  {
    view: 'View 2', title: 'Trading Overview (Treasury)',
    description: 'Trading pairs, real-time pricing, and derivatives overview for treasury analysts.',
    supports: 'Portfolio value tracking across active deal segments, end-to-end performance timers, product segment SLA compliance, and MT message/documentary credit monitoring.',
    highlights: 'Performance timer cards with visual SLA status anchors; product segment matrices using Sharia-specific transactional states; interactive message-volume tracking; a global filter bar for rapid pivot analysis.',
    image: tradingOverviewImage,
  },
  {
    view: 'View 3', title: 'Islamic Portfolio (Islamic Finance)',
    description: 'Portfolio compliance monitoring and Sharia-compliant investment tracking.',
    supports: 'Portfolio-wide compliance scoring, instrument mix tracking (Murabaha, Mudaraba, Ijara), structured facility details with profit rates and risk ratings, and Sharia Board review timelines.',
    highlights: 'Instrument mix visualization cards; a structured facilities ledger; a centralized compliance monitor; a unified maturity timeline for portfolio planning.',
    image: islamicPortfolioImage,
  },
  {
    view: 'View 4', title: 'TAT Summary (Operations)',
    description: 'Turnaround-time analysis, SLA compliance, and alert prioritization for operations leads.',
    supports: 'Real-time processing throughput, weighted stage-by-stage process metrics, SLA breach identification by segment, and trend analysis for capacity planning.',
    highlights: 'A process builder timeline with weighted stage tracking; a segment-level SLA pass/fail table; aging statistics with risk-threshold alerts; a rolling weekly trend chart.',
    image: tatSummaryImage,
  },
  {
    view: 'View 5', title: 'Supplier Analysis (Procurement)',
    description: 'Vendor performance metrics, procurement analytics, and supply chain risk.',
    supports: 'Supplier monitoring across billing platforms, payment network coverage, vendor SLA trends, and cost-optimization insight.',
    highlights: 'A vendor risk matrix plotting tier against risk factors; a payment network performance comparison; a correspondent bank performance ledger; revenue and volume analytics.',
    image: supplierAnalysisImage,
  },
];

const outcomes = [
  ['Scope & scale', '5 role-based hubs, unifying previously fragmented departmental systems', 'A shared component library and semantic token system used across all views', 'Full bilingual (English/Arabic RTL) coverage across every screen, table, and chart'],
  ['Design outcome', 'Reduced the number of systems a relationship manager needs to check for a full operational picture, from several disconnected tools to one', 'Made role-specific priorities visible immediately, rather than requiring users to search for what is relevant to them', 'Built a consistent pattern language that should shorten onboarding time for new users moving between departments'],
];

export const Project1: React.FC = () => {
  return (
    <main className="project1-page" id="project1-top">
      <section className="project1-hero">
        <div className="project1-glows" aria-hidden="true">
          <div className="project1-glow project1-glow-left"><img src="/assets/banking-glow-top-left.svg" alt="" /></div>
          <div className="project1-glow project1-glow-right"><img src="/assets/banking-glow-top-right.svg" alt="" /></div>
        </div>
        <div className="project1-hero-inner">
          <span className="project1-pill">Case study</span>
          <h1>Enterprise Banking Platform</h1>
          <p className="project1-lead">Designing role-based operational experiences for enterprise banking, Sharia compliance, and multi-channel workflows.</p>
          <div className="project1-hero-image">
            <img src={heroImage} alt="Representative enterprise banking dashboard" />
          </div>
          <div className="project1-nda">
            <img src="/assets/banking-lock.svg" alt="" />
            <p>This project was completed under NDA for a confidential enterprise banking client. Names, data, &amp; visuals shown here are recreated &amp; representative, not the original product.</p>
          </div>
        </div>
      </section>

      <section className="project1-snapshot" aria-label="Project snapshot">
        <div><span>Domain</span><strong>Enterprise Corporate Banking &amp; Sharia Finance</strong></div>
        <div><span>Timeline</span><strong>12-Week Design Cycle</strong></div>
        <div><span>Role</span><strong>UX Strategy, IA, High-Fidelity UI, System Architecture</strong></div>
        <div><span>Tags</span><div className="project1-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
      </section>

      <section className="project1-section project1-outputs">
        <div className="project1-section-inner">
          <h2>Key outputs delivered</h2>
          <div className="project1-output-grid">
            {outputs.map(([number, title, description]) => (
              <article className="project1-card" key={number}>
                <div className="project1-number"><span>{number}</span></div>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="project1-section project1-problem">
        <div className="project1-section-inner">
          <span className="project1-pill">The problem</span>
          <h2>Too many platforms. Zero shared context.</h2>
          <p>Enterprise banking teams across corporate operations, trade settlement, Sharia finance, and procurement relied on separate legacy systems. This created fragmented customer insight, duplicated workflows, disjointed system statuses, and heavy cognitive load whenever relationship managers had to switch operational context.</p>
        </div>
      </section>

      <section className="project1-section project1-complexity">
        <div className="project1-section-inner">
          <span className="project1-pill">The complexity</span>
          <h2>Understanding the ecosystem</h2>
          <p>The platform needed to unify five distinct business dimensions into one navigation structure, while keeping each role's priorities distinct.</p>
          <div className="project1-complexity-grid">
            <article className="project1-card project1-hub-card"><h3>Platform Hubs</h3>{hubs.map(([title, description]) => <div className="project1-row" key={title}><strong>{title}</strong><span>{description}</span></div>)}</article>
            <article className="project1-card"><h3>User Roles &amp; Decisions</h3>{roles.map(([title, description]) => <div className="project1-role" key={title}><strong>{title}</strong><span>{description}</span></div>)}</article>
          </div>
          <p className="project1-callout">A single platform, five distinct decision-makers - each needing their own priorities surfaced first, without duplicating the underlying system.</p>
        </div>
      </section>

      <section className="project1-section project1-system">
        <div className="project1-section-inner">
          <span className="project1-pill">System model</span>
          <h2>Design principles</h2>
          <div className="project1-principles">{principles.map(([title, description]) => <article className="project1-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
          <div className="project1-system-grid">
            <div className="project1-system-copy">
              <div>
                <h3>Typography - dual-type harmonization</h3>
                <p>Paired a high-performance Latin numeral typeface (for precise vertical alignment of financial ledgers) with a native Arabic corporate typeface, so both languages read with equal clarity in tabular data.</p>
              </div>
              <div>
                <h3>Localization</h3>
                <p>Every dashboard was designed with full Arabic RTL support as a core requirement, not an afterthought. Navigation, data tables, KPI cards, and charts mirror seamlessly between LTR and RTL layouts.</p>
              </div>
            </div>
            <div className="project1-token-copy">
              <h3>Design tokens - semantic architecture</h3>
              <p>Built for high-intensity, daylight operations, with a token system ensuring WCAG AA contrast across every component:</p>
              <div className="project1-token-swatches" aria-label="Semantic text color tokens">
                <span><i className="token-primary" />Text primary</span>
                <span><i className="token-secondary" />Text secondary</span>
                <span><i className="token-tertiary" />Text tertiary</span>
              </div>
              <div className="project1-token-notes">
                <span><strong>Surface tokens</strong>success / warning / error backdrops for transaction states</span>
                <span><strong>Text tokens</strong>high-readability confirmation, alert, and failure labels at full contrast</span>
              </div>
            </div>
          </div>
          <div className="project1-component-library">
            <h3>Component library</h3>
            <p>A full atomic library - typography scale, core palette, button system, data tables, status chips, and an 8-point spacing scale - built to support Sharia-compliant financial taxonomy across all five hubs.</p>
          </div>
        </div>
      </section>

      <section className="project1-section project1-showcase">
        <div className="project1-section-inner">
          <span className="project1-pill">Design showcase</span>
          <h2>Platform Interface Architecture</h2>
          <p>Figures shown across these views are illustrative, built to represent realistic operational scale rather than actual client data.</p>
          <div className="project1-showcase-list">
            {showcase.map(({ view, title, description, supports, highlights, image }) => (
              <article className="project1-showcase-item" key={view}>
                <div className="project1-showcase-copy">
                  <span className="project1-view-label">{view}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <p><strong>What this view supports:</strong> {supports}</p>
                  <p><strong>Design highlights:</strong> {highlights}</p>
                </div>
                <div className="project1-showcase-image" data-view={view}>
                  <img src={image} alt={`${title} representative interface`} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="project1-section project1-outcome">
        <div className="project1-section-inner">
          <span className="project1-pill">Outcome</span>
          <div className="project1-outcome-grid">
            {outcomes.map(([title, ...items]) => (
              <article className="project1-card project1-outcome-card" key={title}>
                <h3>{title}</h3>
                {items.map((item) => <p key={item}>{item}</p>)}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="project1-section project1-reflection">
        <div className="project1-section-inner">
          <span className="project1-pill">Reflection</span>
          <p className="project1-reflection-copy">Enterprise UX turned out to be less about creating visually distinct dashboards, and more about designing consistent systems that support different operational responsibilities while staying familiar across roles. The bilingual RTL requirement pushed my thinking on layout architecture further than I expected - every component had to work in both directions without losing usability.</p>
        </div>
      </section>
    </main>
  );
};
