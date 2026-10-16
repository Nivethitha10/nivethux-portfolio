import React from 'react';
import { Boxes, DatabaseBackup, Factory, ShieldCheck, Truck, Volume2 } from 'lucide-react';
import './Project2.css';

const asset = (number: number) => `/assets/warehouse/screen-${String(number).padStart(2, '0')}.png`;

const meta = [
  ['ROLE', 'Lead Industrial UX Architect'],
  ['DESIGN TIMELINE', 'Design & Prototyping'],
  ['TARGET DEVICES', 'Zebra TC52 / TC57 Touch'],
  ['MIDDLEWARE INTEGRATION', 'Zebra DataWedge API'],
  ['TARGET ENVIRONMENT', 'Automotive Floor'],
];

const personas = [
  { icon: Factory, name: 'Line Operator', role: 'Production Assembly', copy: 'Manages just-in-time Kanban bin replenishment directly next to fast-paced heavy welding cells.' },
  { icon: Boxes, name: 'Warehouse Picker', role: 'Directed Storage', copy: 'Coordinates bulk pallet relocation, stock transfers, and high-density material putaway sequences.' },
  { icon: Truck, name: 'Dock Coordinator', role: 'Logistics & Dispatch', copy: 'Verifies outbound trailer dispatch, final package manifests, and physical security seal compliance.' },
];

const coreFlows = [
  ['STEP 01 / START', 'Preserial Create', 'WMS-level batch print of physical product labels.'],
  ['STEP 02 / TRANSIT', 'Kanban Classic', 'Closed-loop replenishment signal verification.'],
  ['STEP 03 / DISPATCH', 'Close Truck', 'Validating outbound pallet counts & loading.'],
];

const screens = [
  { src: 2, label: '01. Initial Scan Prompt' },
  { src: 5, label: '02. Empty Success' },
  { src: 6, label: '03. Wrong Line Exception' },
];
const closeTruckScreens = [
  { src: 7, label: '01. High-Speed Loading' },
  { src: 8, label: '02. Verify Shipment' },
  { src: 9, label: '03. Hold-to-Close Action' },
  { src: 10, label: '04. Route Guard Block' },
];
const preserialScreens = [
  { src: 11, label: '01. Scan Material Label' },
  { src: 12, label: '02. Print Progress' },
  { src: 13, label: '03. Label Verification' },
  { src: 14, label: '04. Serial Collision' },
];

const patterns = [
  ['PATTERN 01', 'Scan-First Template', 'Every flow starts the same way: a full-screen scan prompt with a single call-to-action. The scan target label changes, but the layout and the trigger are identical.', 'blue'],
  ['PATTERN 02', 'The Gate Pattern', 'When progress must be blocked, the system uses a consistent hard-gate: a full-screen alert with a clear explanation and a single path forward.', 'red'],
  ['PATTERN 03', 'Prevention & Recovery', 'Every flow has both a prevention mechanism and a recovery path. Wrong Line + Undo in Kanban echoes Destination Mismatch + Remove LPN.', 'amber'],
  ['PATTERN 04', 'Consistent Severity', 'Errors follow a traffic-light severity system across all flows. Green = success/info, Yellow = warning/attention, Red = blocking error.', 'green'],
];

const otherFlows = [
  ['Component Reintro', 'Reintroducing quarantined assembly pieces into raw stock bins.'],
  ['Move to Warehouse', 'Direct storage relocations from docking bays to long-term holds.'],
  ['Close the Picking', 'Closing out dispatch waves to verify pallet completeness.'],
  ['Transfer Picking', 'Direct inter-station relocations with active barcode routing.'],
  ['Quick Move', 'Instant one-scan relocation for rapid line adjustments.'],
];

function Device({ src, size = 'small', alt }: { src: number; size?: 'small' | 'hero'; alt: string }) {
  return (
    <div className={`warehouse-device warehouse-device--${size}`}>
      <span className="warehouse-device__bumper warehouse-device__bumper--left" />
      <span className="warehouse-device__bumper warehouse-device__bumper--right" />
      <div className="warehouse-device__bezel"><i /><b /></div>
      <img src={asset(src)} alt={alt} />
    </div>
  );
}

function ScreenGallery({ items, className = '' }: { items: { src: number; label: string }[]; className?: string }) {
  return <div className={`warehouse-screen-gallery ${className}`}>
    {items.map((item) => <figure className="warehouse-screen-card" key={item.label}>
      <Device src={item.src} alt={item.label} />
      <figcaption>{item.label}</figcaption>
    </figure>)}
  </div>;
}

function SectionHeading({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return <header className="warehouse-section-heading">
    <div className="warehouse-rule" />
    <h2><span>{number}</span>{title}</h2>
    <p>{subtitle}</p>
  </header>;
}

function WorkflowSection({
  id, title, subtitle, problemTitle, problem, images, decisions, highlight, icon,
}: {
  id: string; title: string; subtitle: string; problemTitle: string; problem: string;
  images: { src: number; label: string }[]; decisions: [string, string, string, string]; highlight: [string, string]; icon: 'sound' | 'shield' | 'database';
}) {
  const HighlightIcon = icon === 'sound' ? Volume2 : icon === 'shield' ? ShieldCheck : DatabaseBackup;
  return <section className="warehouse-section warehouse-deep-dive" id={id}>
    <div className="warehouse-content">
      <SectionHeading number={id === 'kanban' ? '01' : id === 'close-truck' ? '02' : '03'} title={title} subtitle={subtitle} />
      <div className="warehouse-problem">
        <div className="warehouse-kicker">01 <span>The Problem</span></div>
        <article><h3>{problemTitle}</h3><p>{problem}</p></article>
      </div>
      <div className="warehouse-gallery-section">
        <div className="warehouse-kicker">02 <span>Core Flow Progression</span></div>
        <ScreenGallery items={images} className={images.length === 4 ? 'warehouse-screen-gallery--four' : ''} />
      </div>
      <div className="warehouse-decision-grid">
        <article className="warehouse-decision-card"><span>THE DECISION</span><h3>{decisions[0]}</h3><p>{decisions[1]}</p></article>
        <article className="warehouse-decision-card warehouse-decision-card--accent"><span>THE TRADEOFF</span><h3>{decisions[2]}</h3><p>{decisions[3]}</p></article>
      </div>
      <div className="warehouse-highlight">
        <span className="warehouse-kicker">03 <span>Design Polish Highlight</span></span>
        <div className="warehouse-highlight__body"><span className="warehouse-highlight__icon"><HighlightIcon size={24} /></span><div><h3>{highlight[0]}</h3><p>{highlight[1]}</p></div></div>
      </div>
    </div>
  </section>;
}

export const Project2: React.FC = () => <main className="project2-page" id="project2-top">
  <section className="warehouse-hero">
    <div className="warehouse-content">
      <span className="warehouse-eyebrow">UX CASE STUDY // INDUSTRIAL DESIGN</span>
      <h1>Designing for Gloved Hands and a Factory Floor</h1>
      <p className="warehouse-hero__lead">I designed warehouse workflows for material movement on rugged Zebra handhelds, balancing scan-first speed with safeguards for high-risk actions.</p>
      <div className="warehouse-meta">{meta.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
      <div className="warehouse-hero-device"><Device src={1} size="hero" alt="Warehouse operations interface displayed on a rugged Zebra handheld" /></div>
      <div className="warehouse-rule" />
    </div>
  </section>

  <section className="warehouse-section warehouse-context">
    <div className="warehouse-content">
      <div className="warehouse-context-intro"><h2>The Harsh Reality of the Factory Floor</h2><p>Line operators, warehouse pickers, and dock coordinators use these handheld terminals for 8+ hours a day. Extreme environments break consumer UX assumptions. Heavy duty gloves, one-handed touch, overhead fluorescent glares, continuous mechanical noise, and Wi-Fi dead zones require absolute visual clarity and physical resilience.</p></div>
      <div className="warehouse-personas">{personas.map((p) => { const Icon = p.icon; return <article className="warehouse-persona" key={p.name}><div className="warehouse-persona__icon" aria-hidden="true"><Icon size={24} strokeWidth={1.8} /></div><h3>{p.name}</h3><span>{p.role}</span><p>{p.copy}</p></article>; })}</div>
      <div className="warehouse-flow-map"><h3>3 of 8 Designed Core Workflows</h3><div>{coreFlows.map(([step, name, copy]) => <article key={step}><span>{step}</span><strong>{name}</strong><p>{copy}</p></article>)}</div></div>
      <blockquote><span>THE CORE QUESTION</span><p>How do you keep low-risk tasks <em>instant</em> and high-risk tasks <strong>completely safe</strong>, on the same terminal, for the same users?</p></blockquote>
      <div className="warehouse-rule" />
    </div>
  </section>

  <section className="warehouse-section warehouse-principle">
    <div className="warehouse-content">
      <span className="warehouse-eyebrow">CORE DESIGN TENET</span>
      <h2>Friction is proportional to risk, not uniform.</h2>
      <p className="warehouse-principle__intro">Instead of enforcing a rigid security scan step on every action, the interface scales transactional resistance dynamically. Low-stake loops trigger automatically on a single scan; high-consequence operations require structured gates.</p>
      <div className="warehouse-risk-bar"><i /><i /><i /></div>
      <div className="warehouse-risk-levels">{[
        ['LOW RISK // ASYNC BUFFER', '01. Kanban Replenishment', 'A physical barcode scan triggers instant automated loop execution.', 'blue'],
        ['MEDIUM RISK // GATE CONFIRM', '02. Close Truck Dispatch', 'Fast inventory tracking is combined with a conscious, deliberate physical hold.', 'amber'],
        ['HIGH RISK // PERSISTENT OVERLAY', '03. Preserial Stock Block', 'Errors cause severe downstream shipping blocks. Highly guarded alert screens.', 'red'],
      ].map(([risk, title, copy, color]) => <article className={`warehouse-risk-level warehouse-risk-level--${color}`} key={risk}><span>{risk}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      <ScreenGallery items={[{ src: 2, label: '01. Instant replenishment scan' }, { src: 3, label: '02. Fast scan with hold-commit' }, { src: 4, label: '03. Strictly guarded block validation' }]} className="warehouse-risk-gallery" />
      <div className="warehouse-rule" />
    </div>
  </section>

  <WorkflowSection id="kanban" title="Component Kanban Classic" subtitle="Replenishment Loops — One scan empties a bin, one scan refills it." problemTitle="Production Lines Can't Wait for Parts" problem="Kanban replenishment must be instant and error-free. The core challenge: make a highly reversible action feel instant while still preventing wrong-line triggers that cause major manufacturing downtime." images={screens} decisions={[
    'Light-Switch Trigger', 'One scan equals action complete. No verification dialogue, no second tap needed. The scan itself is the confirmation because Kanban actions are fully reversible — if you empty the wrong bin, an instant Undo is always one tap away.',
    'Speed Over Caution', 'Wrong-line validation catches structural errors automatically; for the rare physical mis-scan, a one-tap Undo is cheaper than adding a confirmation step to every scan.',
  ]} highlight={['Multi-Modal Feedback Signature', 'Every state change fires an audible beep, a unique haptic pattern, and a bright LED status indicator concurrently. Operators feel and hear the transactional outcome through heavy gloves.']} icon="sound" />

  <WorkflowSection id="close-truck" title="Close Truck Dispatch" subtitle="Fast LPN scanning during loading, then a deliberate hold at the irreversible commit." problemTitle="High-Speed Loading vs. Accidental Dispatch" problem="Dock coordinators load pallets under intense time pressure — they require fast, uninterrupted scanning. But closing a truck officially dispatches the ASN and seals the trailer. An accidental tap-to-close causes expensive physical retrievals from packed moving vehicles." images={closeTruckScreens} decisions={[
    'Hold-to-Close Pattern', 'A physical press-and-hold replaces the standard tap-to-confirm. The duration was set at 3 seconds as a starting point, to be calibrated with real operators. The gesture is intentionally demanding — you cannot accidentally complete it with gloved hands while juggling heavy scan equipment. If you release the press early, the state resets with zero data loss.',
    'Targeted Micro-Friction', 'Every single step in the packaging, loading, and scanning sequence is optimized for maximum speed (scan-to-add, auto-tally). The hold gesture is the single point of deliberate friction in the tool, positioned at the exact moment of no return.',
  ]} highlight={['Integrated Route Guard Mismatch Block', 'The system intercepts misrouted pallets before the truck is allowed to seal. If an LPN belongs to a different trailer, the screen flashes red and blocks immediately. It presents a simple “Remove LPN & Continue” escape hatch, following the same mistake-proofing paradigm as Kanban.']} icon="shield" />

  <WorkflowSection id="preserial" title="Preserial Stock Creation" subtitle="Registry-backed serial blocks with verification gates — printed labels can't be unprinted." problemTitle="Manual Destruct Loops & Serial Clashes" problem="Generating preserial stock produces physical labels with unique serialized barcodes. A misprint, duplicate block, or unverified sequence requires tedious manual label destruction, database quarantining, and immediate line delays. Every step must be heavily guarded." images={preserialScreens} decisions={[
    'Strict Verification Gates', 'Every individual label must be physically scanned to register active verification before the entire serial block can release downstream. An unverified block stays locked in PENDING status forever — there is intentionally no override command on this gate.',
    'Throughput vs. Traceability', 'Verifying a 50-label batch requires exactly 50 individual verification scans. This slows down the batch-creation throughput. However, each verification creates an ironclad, auditable chain of physical custody that satisfies automotive tracing standards.',
  ]} highlight={['Intelligent Local Collision Recovery', 'When the central serial registry triggers a collision warning, the system gracefully rolls back only the unprinted spooling cache, identifies the conflicting duplicate, and automatically increments the queue to the next available unique ID. Line operators resume printing in one click without restarting their entire task.']} icon="database" />

  <section className="warehouse-section warehouse-patterns"><div className="warehouse-content"><div className="warehouse-rule" /><h2>What separates 8 screens from one design system</h2><p>Four shared interaction patterns surface across every workflow — proving this is one coherent system, not eight isolated builds.</p><div className="warehouse-pattern-grid">{patterns.map(([label, title, copy, color]) => <article className={`warehouse-pattern warehouse-pattern--${color}`} key={label}><span><i />{label}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

  <section className="warehouse-section warehouse-other-flows"><div className="warehouse-content"><div className="warehouse-rule" /><div className="warehouse-other-heading"><span className="warehouse-eyebrow">SYSTEM SCOPE</span><h2>The Other 5 Designed Workflows</h2></div><div className="warehouse-other-grid">{otherFlows.map(([title, copy]) => <article key={title}><div className="warehouse-other-title"><i /><h3>{title}</h3></div><p>{copy}</p></article>)}</div></div></section>

  <section className="warehouse-section warehouse-reflection"><div className="warehouse-content"><div className="warehouse-rule" /><h2>What I'd validate if this shipped</h2><p className="warehouse-reflection__intro">Empirical field testing and technical performance markers to measure operational resilience.</p><div className="warehouse-reflection-grid"><article><h3>Open Questions</h3><ul><li>Does one-scan verification hold up against fatigue on a 50-label batch?</li><li>Does the 3-second hold gesture feel natural under heavy industrial gloves?</li><li>How do operators experience the transitional UI in extreme Wi-Fi dead zones?</li></ul></article><article><h3>What I Would Change</h3><ul><li>Reusable slot-based templates for all scanner interaction layouts.</li><li>Introduce a synthetic simulation training sandbox mode for new hires.</li><li>Build the complementary real-time supervisor productivity cockpit dashboard.</li></ul></article></div><div className="warehouse-rule" /></div></section>
</main>;
