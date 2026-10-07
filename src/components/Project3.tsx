import React from 'react';
import { Check, ChevronRight, MapPin, Signal, WifiOff } from 'lucide-react';
import './Project3.css';

const screen = (n: number) => `/assets/strip-test/screen-${String(n).padStart(2, '0')}.png`;

const approach = [
  ['01', 'Many plots, little time', 'An agent may visit several farms and samples in one day.', 'A route-led home screen keeps today’s work and pending tests close.'],
  ['02', 'Signal is situational', 'Coverage can disappear at the exact point of capture.', 'Local save states and explicit sync language preserve momentum.'],
  ['03', 'Location needs interpretation', 'GPS is useful evidence, but field boundaries and accuracy vary.', 'Show accuracy, explain uncertainty, and offer a humane retry.'],
];
const principles = [
  ['01', 'Make the next action obvious', 'One primary action per state. Supporting information stays quiet until it is useful.'],
  ['02', 'Keep context attached', 'Plot, sample and result remain visibly connected throughout the workflow.'],
  ['03', 'Never hide uncertainty', 'Location, save and sync status are explicit so the agent can act with confidence.'],
];
const chapters = [
  { number: '01', title: 'Get started', description: 'Start with the right plot and enough context to trust what comes next.', points: ['Open today’s assigned route', 'Confirm farmer, field and variety', 'See incomplete setup before starting'], insight: 'The next task is explicit, while incomplete setup stays visible without blocking route planning.', caption: 'The day is visible at a glance.', image: 3 },
  { number: '02', title: 'Capture', description: 'Guide the sample in context without turning the field task into data entry.', points: ['Verify the agent is inside the plot', 'Photograph a consistent sample', 'Record only essential observations'], insight: 'Capture guidance appears at the moment it is needed, not as a tutorial to remember.', caption: 'The camera keeps sample progress visible.', image: 4 },
  { number: '03', title: 'Results', description: 'Review the field record while the sample and location are still fresh.', points: ['Compare sample outcomes', 'Correct an individual entry', 'Preview the report before submit'], insight: 'Results stay editable until submission and retain their sample context.', caption: 'Results stay connected to their sample.', image: 5 },
  { number: '04', title: 'Offline and recovery', description: 'Protect progress when signal drops. Make status legible and the next action credible.', points: ['Save locally without blocking work', 'Show what is waiting to sync', 'Resume from the last safe step'], insight: 'A saved state is more reassuring than a spinner when the network disappears.', caption: 'A saved state replaces network anxiety.', image: 6 },
];
const edgeCases: [string, string, typeof MapPin][] = [
  ['Weak GPS', 'Show current accuracy and let the agent retry from a better position.', MapPin],
  ['Outside plot', 'Explain the boundary clearly before asking the agent to move.', MapPin],
  ['No signal', 'Continue safely and label what will sync later.', WifiOff],
  ['Photo issue', 'Keep the sample and ask only for the image that needs replacing.', Signal],
  ['Submit failed', 'Preserve the report and offer one credible retry action.', Check],
];
const overviewScreens = ['Route', 'Start', 'Location', 'Sample', 'Camera', 'Offline', 'Saved', 'Results', 'Review', 'Report'];

function Device({ image, caption, className = '' }: { image: number; caption?: string; className?: string }) {
  return <figure className={`p3-device-story ${className}`}>
    <div className="p3-device"><img src={screen(image)} alt={`${caption || 'Strip Test'} app screen`} /></div>
    {caption && <figcaption>{caption}</figcaption>}
  </figure>;
}

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <header className="p3-section-intro"><span className="p3-label">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</header>;
}

export const Project3: React.FC = () => <main className="project3-page" id="project3-top">
  <section className="p3-hero">
    <div className="p3-hero-inner">
      <div className="p3-hero-copy">
        <h1>Strip Test</h1>
        <p>A field-first mobile workflow that helps agents capture consistent potato quality checks—even when location and signal are unreliable.</p>
        <div className="p3-tags"><span>Product design</span><span>Mobile workflow</span><span>Field operations</span></div>
        <div className="p3-hero-meta"><div><small>Role</small><b>Lead product designer</b></div><div><small>Focus</small><b>Field capture &amp; recovery</b></div><div><small>Platform</small><b>Android mobile</b></div></div>
      </div>
      <div className="p3-hero-devices"><Device image={1} caption="Plan the day"/><Device image={2} caption="Capture in context"/></div>
    </div>
  </section>

  <section className="p3-problem">
    <div className="p3-wrap p3-problem-grid"><span className="p3-section-number">01 · Problem</span><div><h2>A quality check is only useful if the field context and the sample are both trustworthy.</h2><p>Manual potato quality checks across large fields are slow, inconsistent, and prone to capture errors. That uncertainty flows into pricing and yield decisions, so the product needed to make each test easier to perform and easier to trust—without inventing certainty where field conditions make it impossible.</p></div></div>
  </section>

  <section className="p3-user">
    <div className="p3-wrap p3-user-grid"><div className="p3-user-copy"><SectionIntro eyebrow="02 · Who it’s for" title="One field agent. Many farmers, plots, and imperfect conditions." description="The primary user manages a changing set of farmers and plots, works outdoors, and often arrives with weak signal or uncertain GPS. The dashboard reduces the mental load: what is next, what is pending, and what is safely saved."/><ul className="p3-check-list"><li><Check/>Several farms and plots can be active in one day.</li><li><Check/>Gloves, glare and interruptions shape every interaction.</li><li><Check/>The agent must know what is saved before leaving the field.</li></ul></div><Device image={1} caption="A calm route view keeps the next test close." className="p3-user-device"/></div>
  </section>

  <section className="p3-approach"><div className="p3-wrap"><SectionIntro eyebrow="03 · How I worked" title="Grounded in direct stakeholder conversations—not a formal research programme." description="The direction came from stakeholder conversations that captured notes about current field checks, offline work, and report sharing. I treated those notes as working hypotheses, translated them into design changes, and kept the gaps visible for later validation."/><div className="p3-approach-grid">{approach.map(([num,title,copy,response])=><article className="p3-content-card" key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p><div><small>Design response</small><p>{response}</p></div></article>)}</div></div></section>

  <section className="p3-principles"><div className="p3-wrap"><SectionIntro eyebrow="04 · Design principles" title="Three rules for decisions in the field" description="Every interaction had to earn its place against these constraints."/><div className="p3-principle-grid">{principles.map(([num,title,copy])=><article className="p3-content-card" key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

  <section className="p3-flow"><div className="p3-wrap"><SectionIntro eyebrow="05 · The flow" title="Four chapters, one continuous field record" description="The flow compresses an operational task into a small number of confident hand-offs: identify, verify, capture, review, submit. Captions focus on what each chapter gives the agent, not on the feature inventory."/></div>
    <div className="p3-chapters">{chapters.map((chapter, index)=><article className={`p3-chapter${index % 2 ? ' p3-chapter--reverse' : ''}`} key={chapter.number}><div className="p3-chapter-inner"><Device image={chapter.image} caption={chapter.caption}/><div className="p3-chapter-copy"><span className="p3-chapter-number">{chapter.number}</span><h3>{chapter.title}</h3><p>{chapter.description}</p><ul className="p3-check-list">{chapter.points.map((point)=><li key={point}><Check/>{point}</li>)}</ul><div className="p3-chapter-insight"><i>✳</i><span>{chapter.insight}</span></div></div></div></article>)}</div>
  </section>

  <section className="p3-edge"><div className="p3-wrap"><SectionIntro eyebrow="06 · When things go wrong" title="Recovery is part of the core flow" description="Field tools are judged at their edges. These states make the problem legible, preserve work where possible, and give one credible next step."/><div className="p3-edge-grid">{edgeCases.map(([title,copy,Icon])=>{const EdgeIcon=Icon;return <article key={title as string}><span><EdgeIcon size={19}/></span><div><h3>{title}</h3><p>{copy}</p></div></article>;})}</div></div></section>

  <section className="p3-decision"><div className="p3-wrap p3-decision-grid"><div className="p3-decision-copy"><SectionIntro eyebrow="07 · One decision I’d defend" title="Verify the agent is inside the plot before a test begins." description="That gate protects the integrity of the record, but it adds friction at exactly the moment an agent wants to move. The answer was not to remove the check; it was to make uncertainty understandable and recovery humane."/><ul className="p3-check-list"><li><Check/>The location check protects the provenance of every sample.</li><li><Check/>Accuracy is shown as a range, never as false precision.</li><li><Check/>When verification fails, the agent keeps context and receives one next step.</li></ul><div className="p3-decision-insight"><i>✳</i><p>The principle: protect the record without punishing the person doing the work.</p></div></div><div className="p3-decision-devices"><Device image={7} caption="Signal is weak, so retry without losing context."/><Device image={8} caption="Permission is explained before the system hand-off."/></div></div></section>

  <section className="p3-visual-system"><div className="p3-wrap"><SectionIntro eyebrow="08 · Visual system" title="Warm enough for field work. Strict enough for status." description="A restrained russet palette carries actions and hierarchy; Noto Sans keeps the interface plainspoken and readable. Green is reserved only for good results and confirmed success."/><div className="p3-system-samples"><article className="p3-palette"><span>Status palette</span><div>{['#7b4a2d','#fbf6ee','#ffffff','#2a211b','#1b7f3b'].map((color)=><i key={color} style={{background:color}}/>)}</div><p>Russet leads action and focus. Cream and ink carry structure. Green communicates confirmed success only.</p></article><article className="p3-type-sample"><span>Noto Sans</span><strong>Field clarity, without ceremony.</strong><p>Plainspoken labels, generous line height, and strong numeric states remain readable outdoors.</p></article></div></div></section>

  <section className="p3-outcome"><div className="p3-wrap"><SectionIntro eyebrow="09 · Outcome and reflection" title="A coherent field record from plot verification to report." description="The product enables an agent to identify the right field context, capture consistent samples, preserve work through connectivity gaps, and leave with a traceable report. This is a designed capability—not a claim of measured impact."/><div className="p3-outcome-grid">{[
    ['What the design enables', 'A clear path from assigned plot to a saved, traceable field record.'],['What remains unknown', 'Speed, completion rate and error reduction still require field validation.'],['What I’d test next', 'GPS recovery language, sample guidance and hand-off into report sharing.'],['Evidence boundary', 'This case study describes designed capability—not measured impact.'],
  ].map(([title,copy])=><article className="p3-content-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

  <section className="p3-overview"><div className="p3-wrap"><div className="p3-overview-heading"><div><span className="p3-label">Screen overview</span><h2>Depth lives in the transitions, not only the happy path.</h2></div><p>A secondary map of the Section 1 screen set, recreated with identifying content removed.</p></div><div className="p3-overview-grid">{overviewScreens.map((title,index)=><article key={title}><header><span>{String(index+1).padStart(2,'0')}</span><b>{title}</b></header><div className="p3-mini-screen"><img src={screen(index < 8 ? index + 1 : index === 8 ? 5 : 6)} alt=""/><div className="p3-mini-overlay"><i/><i/><i/></div></div></article>)}</div></div></section>

  <section className="p3-project-nav"><div className="p3-wrap"><div className="p3-closing"><span className="p3-label">End of case study</span><h2>Designing for the field means treating uncertainty as a product state.</h2></div><div className="p3-project-cards"><a href="/work"><span>Previous · Farm profile</span><h3>Identity and operational context across a growing network.</h3><ChevronRight/></a><a className="p3-project-current" href="#project3-top"><span>Current · Strip Test</span><h3>A trusted field record from plot to report.</h3><ChevronRight/></a><a href="/work"><span>Next · Yield planning</span><h3>Decision support for the season ahead.</h3><ChevronRight/></a></div><div className="p3-page-index">Product design portfolio · Selected work <span>01 — 02 — 03</span></div></div></section>
</main>;
