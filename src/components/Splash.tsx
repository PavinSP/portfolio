import { useEffect, useState } from 'react';

const KEY = 'pavin-splash-shown';
/** Keep in sync with the .splash animation timings in App.css. */
const DURATION = 1600;

/** Has the intro already played in this browser session? */
const alreadyShown = () => {
  try {
    return window.sessionStorage.getItem(KEY) === '1';
  } catch {
    // Storage blocked (private window, site data off): treat as shown so a
    // visitor is never stuck behind an intro that cannot record itself.
    return true;
  }
};

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

const Splash = () => {
  // Decide once, before first paint, so the intro never flashes when skipped.
  const [visible, setVisible] = useState(
    () => !alreadyShown() && !prefersReducedMotion(),
  );

  useEffect(() => {
    if (!visible) return;

    try {
      window.sessionStorage.setItem(KEY, '1');
    } catch {
      // Non-fatal: the intro just may replay.
    }

    // Don't leave the page unusable if the animation event never fires.
    const timer = window.setTimeout(() => setVisible(false), DURATION + 400);
    document.body.style.overflow = 'hidden';

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="splash"
      role="presentation"
      aria-hidden="true"
      onAnimationEnd={(e) => {
        // Only the wrapper's own fade-out ends the splash.
        if (e.currentTarget === e.target) setVisible(false);
      }}
    >
      <svg className="splash-mark" viewBox="0 0 120 120" aria-hidden="true">
        <rect
          className="splash-badge"
          x="8"
          y="8"
          width="104"
          height="104"
          rx="26"
          fill="none"
          strokeWidth="3"
        />
        <text className="splash-initials" x="60" y="60" textAnchor="middle" dominantBaseline="central">
          PSP
        </text>
      </svg>
    </div>
  );
};

export default Splash;
