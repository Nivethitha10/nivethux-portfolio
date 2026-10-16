import React from 'react';
import { ArrowRight, X } from 'lucide-react';
import { routes } from '../routes';
import './GolfProject.css';

const screen = (index: number) => `/assets/golf/screen-${String(index).padStart(2, '0')}.png`;

const processSteps = ['Frame the trust gaps', 'Map the service', 'Prototype key states', 'Stress-test recovery'];
const findings = [
  ['01', 'People before places', 'The crew’s needs shape the plan before a course or package does.'],
  ['02', 'Confidence before convenience', 'A fast flow is only valuable when rules, rates, and outcomes feel certain.'],
  ['03', 'Routines over rediscovery', 'Saturday golfers want to repeat a trusted plan, not rebuild it every week.'],
  ['04', 'Experiences over categories', 'People ask for a day together—not a tee time, cart, rental, and lesson separately.'],
  ['05', 'Reliability is part of the experience', 'A failed hold, unclear total, or unreadable QR changes how the whole venue feels.'],
];
const principles = [
  ['01', 'Explain every constraint', 'Rules arrive before the golfer reaches a dead end.'],
  ['02', 'Keep intent alive', 'When one option closes, preserve the plan and redirect it.'],
  ['03', 'Show the complete math', 'Rates, extras, credits, and holds reconcile in one place.'],
  ['04', 'Design graceful recovery', 'Every fragile state has a legible, human fallback.'],
];
const chapters = [
  { n: '01', title: 'A “not yet” that doesn’t feel like a no', story: 'Rahul asks for Championship North. The concierge keeps the aspiration visible, explains the handicap rule, and finds a path the whole crew can play today.', note: 'The blocked course remains part of the story instead of disappearing behind an error.', support: 'Preserve intent · state the rule · offer a credible next move', screen: 'One rule before we book', caption: 'The state explains what is true now, what happens next, and how the golfer stays in control.', image: 1 },
  { n: '02', title: 'A held tee time you can trust', story: 'A live hold makes scarcity concrete: one tee time, one clear timer, and an explicit outcome if the group does not finish.', note: 'The system separates “selected” from “secured,” so urgency never becomes ambiguity.', support: '14:51 remaining · reserved for your crew · no hidden charge', screen: 'Your tee time is held', caption: 'The state explains what is true now, what happens next, and how the golfer stays in control.', image: 2 },
  { n: '03', title: 'Everything accounted for before paying', story: 'Member and guest rates, carts, rentals, and taxes resolve into a total the organizer can explain without doing the math twice.', note: 'Every line item answers who it belongs to and why it is there.', support: '4 players · 2 carts · 1 rental · member credit applied', screen: 'Review and pay', caption: 'The state explains what is true now, what happens next, and how the golfer stays in control.', image: 3 },
  { n: '04', title: 'Confirmation that closes the loop', story: 'Payment is not the finish. The confirmation turns a transaction into a usable plan with time, location, group status, and next steps.', note: 'The organizer knows what is done—and what still needs attention.', support: 'Booked · shared with crew · ready for Saturday', screen: 'You’re booked.', caption: 'The state explains what is true now, what happens next, and how the golfer stays in control.', image: 4 },
  { n: '05', title: 'A group that coordinates itself', story: 'Invites, payment, rental needs, and arrival status live in one lightweight group view rather than a chain of screenshots and messages.', note: 'A useful overview replaces the organizer’s private checklist.', support: '3 confirmed · 1 pending · organizer can nudge once', screen: 'Saturday crew', caption: 'The state explains what is true now, what happens next, and how the golfer stays in control.', image: 5 },
  { n: '06', title: 'A check-in that works when the QR doesn’t', story: 'The primary QR is fast, but the booking code and clubhouse lookup remain visible enough to rescue a real arrival.', note: 'Recovery is designed into the happy path, not hidden in support.', support: 'QR · booking code · staffed check-in', screen: 'Check in at the clubhouse', caption: 'The state explains what is true now, what happens next, and how the golfer stays in control.', image: 6 },
  { n: '07', title: 'Repeat in one review', story: 'The crew can replay a trusted Saturday without reconstructing it from categories—then review the few things that changed.', note: 'Routine becomes a feature while control stays with the player.', support: 'Same course · same crew · one review', screen: 'Repeat this Saturday?', caption: 'The state explains what is true now, what happens next, and how the golfer stays in control.', image: 7 },
  { n: '08', title: 'When plans change', story: 'Removing a player recalculates the booking in place and makes the refund, new split, and remaining total explicit before confirmation.', note: 'A changed plan should never force the organizer to start over.', support: '4 → 3 players · credit $31 · new total $92', screen: 'Update your booking', caption: 'The state explains what is true now, what happens next, and how the golfer stays in control.', image: 8 },
];
const measures = [
  ['01', 'Task confidence', 'Can participants explain what is held, paid, and pending?'],
  ['02', 'Price comprehension', 'Can every participant reconcile the total without help?'],
  ['03', 'Recovery success', 'Can a failed scan or changed player be resolved in place?'],
  ['04', 'Repeat intent', 'Would the group confidently use this plan again next Saturday?'],
];

function SectionTag({ children }: { children: React.ReactNode }) { return <span className="golf-section-tag"><i />{children}</span>; }
function LabeledRow({ label, children, className = '' }: { label: string; children: React.ReactNode; className?: string }) {
  return <div className={`golf-labeled-row ${className}`}><div className="golf-row-label"><SectionTag>{label}</SectionTag></div><div className="golf-row-content">{children}</div></div>;
}
function DeviceScreen({ image, caption }: { image: number; caption?: string }) {
  return <figure className="golf-device-story"><div className="golf-phone"><img src={screen(image)} alt={`Golf app screen: ${chapters[image - 1]?.screen ?? 'booking overview'}`} /></div>{caption && <figcaption>{caption}</figcaption>}</figure>;
}

export const GolfProject: React.FC = () => <main className="golf-project" id="golf-top">
  <section className="golf-hero">
    <div className="golf-hero-inner">
      <div className="golf-banner"><img src="/assets/golf/golf-banner.png" alt="Golf course landscape"/><div className="golf-banner-shade"/></div>
      <div className="golf-project-marker"><span className="golf-category">Golf · leisure · group booking <i/></span></div>
      <h1>Golf</h1>
      <div className="golf-promise-row"><p>An AI concierge design concept that turns one intent into a whole golf day, with booking, group coordination, and recovery designed around clear expectations.</p><div className="golf-service-promise"><span>The service promise</span><div>ASK <ArrowRight/> ALIGN <ArrowRight/> BOOK <ArrowRight/> PLAY</div></div></div>
    </div>
  </section>

  <section className="golf-foundations">
    <div className="golf-wrap">
      <LabeledRow label="Who it’s for" className="golf-audience"><p>Members, tourists, beginners, and group organizers — each needs confidence before they commit: that eligibility rules are clear, that the price adds up, that the group is coordinated, and that check-in will work when they arrive.</p><div className="golf-audience-pills">{['Members','Tourists','Beginners','Group organizers'].map(x=><span key={x}>{x}</span>)}</div></LabeledRow>
      <div className="golf-divider"/>
      <LabeledRow label="How I worked"><p className="golf-role-note">I owned the end-to-end booking, group, and gameday experience for this concept.</p><div className="golf-process-steps">{processSteps.map((step,i)=><article key={step}><small>0{i+1}</small><strong>{step}</strong></article>)}</div></LabeledRow>
      <div className="golf-divider"/>
      <LabeledRow label="Overview"><p>Golf is a concierge-led booking experience for a golf and leisure group. Instead of hunting through categories and filters, a player says what they want—“plan my Saturday with the crew”—and the app handles the group, rules, price and day itself.</p></LabeledRow>
      <div className="golf-scope-note"><b>What I designed</b><p>I designed the booking, group and gameday experience, focusing on moments where trust is won or lost.</p></div>

      <div className="golf-visual-system">
        <LabeledRow label="Visual system"><p>A warm editorial palette and a two-font system. Fraunces carries headings and course names; Inter handles UI, labels, and data.</p></LabeledRow>
        <div className="golf-visual-samples"><article><span>Palette</span><div className="golf-swatches"><i/><i/><i/></div><small>Warm neutral · sage · tangerine</small></article><article><span>Typography</span><b>A day well played.</b><small>Fraunces + Inter</small></article></div>
      </div>

      <LabeledRow label="Decision I’d defend" className="golf-decision"><h2>Keep the aspirational course visible — even when it’s out of reach.</h2><p>When Rahul’s beginner status blocks Championship North, the instinct is to hide the course or show a generic error. Instead, Golf keeps the course visible with the handicap requirement stated plainly, offers same-property alternatives with member and guest rates for each, and provides a reminder for when eligibility changes.</p><div className="golf-callout"><i/><b>Tell the truth without abandoning the player’s original intent.</b></div></LabeledRow>
      <div className="golf-divider"/>
      <LabeledRow label="The problem" className="golf-problem"><h2>Four players can mean different rates, eligibility rules, carts, rentals—and a tee time that can disappear.</h2><p>The deeper failure is uncertainty: late rules and fees, totals that do not add up, failed QR codes, and plans that cannot change without restarting.</p></LabeledRow>

      <section className="golf-findings"><div className="golf-findings-heading"><SectionTag>Research findings</SectionTag><div><h2>What people optimize for isn’t the booking.</h2><p>A synthesis framing the emotional and operational jobs behind a golf day.</p></div></div><div className="golf-findings-grid">{findings.map(([n,title,copy])=><article key={n}><small>{n}</small><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
      <section className="golf-principles"><div className="golf-findings-heading"><SectionTag>Design principles</SectionTag><h2>Design the truth into every state.</h2></div><div className="golf-principles-grid">{principles.map(([n,title,copy])=><article key={n}><span>{n}</span><i/><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    </div>
  </section>

  <section className="golf-experience">
    <div className="golf-wrap golf-experience-intro"><SectionTag>The experience</SectionTag><h2>Eight moments where trust can hold—or disappear.</h2><p>The product is organized around the moments a golfer, organizer, or clubhouse team needs the system to be unmistakably honest.</p></div>
    {chapters.map((chapter,index)=><article className={`golf-chapter${index%2?' golf-chapter--reverse':''}`} key={chapter.n}><div className="golf-wrap"><header className="golf-chapter-header"><div><span>{chapter.n}</span><small>/ 08</small></div><span className="golf-trust-label">Trust moment</span><h2>{chapter.title}</h2><p>{chapter.story}</p></header><div className="golf-chapter-stage"><div className="golf-chapter-notes"><h3>{chapter.note}</h3><p>{chapter.support}</p><div className="golf-trust-note"><i/><span>{chapter.caption}</span></div></div><DeviceScreen image={chapter.image}/></div></div></article>)}
  </section>

  <section className="golf-outcome"><div className="golf-wrap">
    <LabeledRow label="What I’d test next" className="golf-test-intro"><h2>Prove that confidence survives the messy moments.</h2><p>The next round would pair realistic booking tasks with interruptions: an ineligible player, an expiring hold, a failed QR, and a last-minute cancellation.</p></LabeledRow>
    <div className="golf-test-plan"><article className="golf-participants"><span>Participants</span><strong>12</strong><p>4 members · 3 first-time visitors · 3 group organizers · 2 clubhouse staff</p></article><div className="golf-measures">{measures.map(([n,title,copy])=><article key={n}><small>{n}</small><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div>
  </div></section>
  <section className="golf-reflection"><div className="golf-wrap"><div className="golf-reflection-marker"><span className="golf-reflection-tag">Reflection <X aria-hidden="true"/></span><span>GOLF · 2026</span></div><blockquote>Trust comes from small honest states—held, expired, pending, refunded.</blockquote><div className="golf-reflection-details"><p>These moments matter more than adding features. They are where a concierge proves whether it understands the plan, the money, and the people involved.</p><p>I would bring venue staff in earlier because the clubhouse service handshake is part of the product—not an edge case after the interface is done.</p></div></div></section>
  <section className="golf-project-footer"><div className="golf-wrap"><div className="golf-project-heading"><div className="golf-project-close"><small>Case study complete</small><h2>Golf</h2></div><nav aria-label="Project navigation"><a href={routes.work}>← Previous project</a><a href={routes.agtechStripTest}>Next project →</a></nav></div><div className="golf-legal"><span>Product design portfolio · 2026</span><span>Made with care for the full service journey.</span></div></div></section>
</main>;
