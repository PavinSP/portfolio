import { useEffect, useState } from 'react';

/** Keep in sync with the .splash animation timings in App.css. */
const DURATION = 3300;

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

const Splash = () => {
  // Plays on every page load. Decided before first paint so it never flashes
  // when skipped for reduced motion.
  const [visible, setVisible] = useState(() => !prefersReducedMotion());

  useEffect(() => {
    if (!visible) return;

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
