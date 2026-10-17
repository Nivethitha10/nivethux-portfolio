import React, { useRef, useCallback, useEffect, useState } from 'react';
import './SpotlightAvatar.css';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const RADIUS = 120;       // full spotlight radius in px
const FEATHER = 50;       // soft-edge width in px
const LERP_POS = 0.10;   // position trailing factor
const LERP_R = 0.09;     // radius grow/shrink factor

/**
 * A fully transparent mask that hides the spider layer completely.
 * Must be a valid two-stop gradient — single-stop gradients are invalid
 * CSS and browsers silently fall back to mask-image:none (element fully visible).
 */
const MASK_HIDDEN = 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 100%)';

/**
 * Build the feathered circular spotlight mask centred at (x, y).
 * In CSS masks: black = show element, transparent = hide element.
 */
function buildMask(x: number, y: number, r: number): string {
  if (r < 0.5) return MASK_HIDDEN;
  const outer = r + FEATHER / 2;
  const inner = Math.max(0, r - FEATHER / 2);
  return `radial-gradient(circle ${outer}px at ${x}px ${y}px, #fff ${inner}px, transparent ${outer}px)`;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export const SpotlightAvatar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // The SPIDER image is layer 2 (top). Its CSS mask is updated each RAF frame.
  const spiderRef = useRef<HTMLImageElement>(null);

  // All animation state in refs — no re-renders during the RAF loop
  const curPos = useRef({ x: 0, y: 0 });  // currently rendered spotlight position
  const tgtPos = useRef({ x: 0, y: 0 });  // cursor target position
  const curRadius = useRef(0);              // currently rendered spotlight radius
  const tgtRadius = useRef(0);             // target radius: 0 = hidden, RADIUS = full
  const rafId = useRef<number | null>(null);
  const loopRunning = useRef(false);

  // Touch-toggle (state → triggers useEffect → updates mask)
  const [touchOn, setTouchOn] = useState(false);
  const touchStartY = useRef(0);


  // -------------------------------------------------------------------------
  // Write a mask string directly to the spider DOM element
  // -------------------------------------------------------------------------
  const applyMask = useCallback((mask: string) => {
    const el = spiderRef.current;
    if (!el) return;
    // Set both prefixed and unprefixed to cover all browsers
    el.style.webkitMaskImage = mask;
    el.style.maskImage = mask;
  }, []);

  // -------------------------------------------------------------------------
  // RAF loop — lerps spotlight position AND radius each frame
  // -------------------------------------------------------------------------
  const startLoop = useCallback(() => {
    if (loopRunning.current) return;
    loopRunning.current = true;

    const tick = () => {
      // Lerp position and radius toward their targets
      curPos.current.x += (tgtPos.current.x - curPos.current.x) * LERP_POS;
      curPos.current.y += (tgtPos.current.y - curPos.current.y) * LERP_POS;
      curRadius.current += (tgtRadius.current - curRadius.current) * LERP_R;

      applyMask(buildMask(curPos.current.x, curPos.current.y, curRadius.current));

      // Stop when both are close enough to their targets
      const settled =
        Math.abs(curRadius.current - tgtRadius.current) < 0.3 &&
        Math.abs(curPos.current.x - tgtPos.current.x) < 0.3 &&
        Math.abs(curPos.current.y - tgtPos.current.y) < 0.3;

      if (settled) {
        curRadius.current = tgtRadius.current;
        // Ensure we end cleanly on a valid "fully hidden" mask
        if (tgtRadius.current === 0) applyMask(MASK_HIDDEN);
        loopRunning.current = false;
      } else {
        rafId.current = requestAnimationFrame(tick);
      }
    };

    rafId.current = requestAnimationFrame(tick);
  }, [applyMask]);

  // -------------------------------------------------------------------------
  // Mouse handlers — React synthetic events (attached via JSX props).
  // Using onMouseMove/onMouseLeave on the div is simpler than addEventListener
  // and eliminates any ref-timing or cleanup edge cases.
  // -------------------------------------------------------------------------
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Snap position on first entry so there is no lerp-from-origin lag
      if (tgtRadius.current === 0) {
        curPos.current = { x, y };
      }
      tgtPos.current = { x, y };
      tgtRadius.current = RADIUS;
      startLoop();
    },
    [startLoop],
  );

  const handleMouseLeave = useCallback(() => {
    tgtRadius.current = 0;
    startLoop();
  }, [startLoop]);

  // -------------------------------------------------------------------------
  // Touch events — native addEventListener required for passive:false on
  // touchend (prevents scroll while allowing preventDefault for tap detection)
  // -------------------------------------------------------------------------
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      // Ignore if finger moved more than 10px vertically (scroll gesture)
      if (Math.abs(e.changedTouches[0].clientY - touchStartY.current) > 10) return;
      e.preventDefault();
      setTouchOn((prev) => !prev);
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: false });

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  // Sync touch toggle → mask (instant, no animation)
  useEffect(() => {
    // 'none' = no mask = spider fully visible; MASK_HIDDEN = fully transparent
    applyMask(touchOn ? 'none' : MASK_HIDDEN);
  }, [touchOn, applyMask]);

  // -------------------------------------------------------------------------
  // Keyboard: Enter / Space toggles full reveal (same as touch)
  // -------------------------------------------------------------------------
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setTouchOn((prev) => !prev);
    }
  }, []);

  // -------------------------------------------------------------------------
  // RAF cleanup on unmount
  // -------------------------------------------------------------------------
  useEffect(() => {
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // -------------------------------------------------------------------------
  // Render
  //
  // Layer 1 — BOTTOM: normal portrait, always fully visible.
  // Layer 2 — TOP:    Spider-Girl, hidden by the transparent CSS mask.
  //   The RAFloop updates the spider's mask-image on every frame so a soft
  //   circular spotlight follows the cursor. Everywhere the mask is transparent,
  //   the normal image below shows through. Everywhere it is black (opaque),
  //   the spider image is revealed.
  // -------------------------------------------------------------------------
  return (
    <div
      ref={containerRef}
      className="sa-container"
      role="img"
      aria-label="Portrait of Nivethitha — hover to reveal Spider-Girl version"
      tabIndex={0}
      onMouseEnter={handleMouseMove}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    >
      {/* Layer 1 (z-index: 1) — always visible underneath */}
      <img
        src="/images/avatar-normal.png"
        alt=""
        aria-hidden="true"
        className="sa-img sa-normal"
        draggable={false}
      />

      {/* Layer 2 (z-index: 2) — on top, hidden by mask, revealed in spotlight */}
      <img
        ref={spiderRef}
        src="/images/avatar-spidergirl.png"
        alt=""
        aria-hidden="true"
        className="sa-img sa-spider"
        draggable={false}
      />
    </div>
  );
};
