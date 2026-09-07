import { useEffect, useRef, useState } from 'react';
import { greeting } from '../data/portfolio';

/** Keep in sync with the .splash animation timings in App.css. */
const DURATION = 4200;
/** The name starts typing once the mark has drawn. */
const TYPE_START = 1700;
const TYPE_TOTAL = 1500;

/** A 2-2-1 graph inside the hexagon. Coordinates are in the SVG's 200x200
 *  viewBox, kept well inside the inner hexagon's bounds. */
const NET_NODES = [
  { x: 66, y: 80, r: 6 },    // input
  { x: 66, y: 124, r: 6 },   // input
  { x: 102, y: 62, r: 5.5 }, // hidden
  { x: 102, y: 102, r: 5.5 },// hidden
  { x: 102, y: 142, r: 5.5 },// hidden
  { x: 140, y: 102, r: 7.5 },// output
];

const NET_EDGES: [number, number][] = [
  [0, 2], [0, 3], [0, 4],
  [1, 2], [1, 3], [1, 4],
  [2, 5], [3, 5], [4, 5],
];

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

const Splash = () => {
  // Plays on every page load. Decided before first paint so it never flashes
  // when skipped for reduced motion.
  const [visible, setVisible] = useState(() => !prefersReducedMotion());
  const [typed, setTyped] = useState('');
  const frame = useRef(0);

  // Type the name out one character at a time, in step with the CSS timings.
  useEffect(() => {
    if (!visible) return;

    const name = greeting.name;
    const perChar = TYPE_TOTAL / name.length;
    let start = 0;

    const tick = (now: number) => {
      if (!start) start = now;
      const elapsed = now - start - TYPE_START;

      if (elapsed >= 0) {
        const count = Math.min(Math.floor(elapsed / perChar), name.length);
        setTyped(name.slice(0, count));
        if (count >= name.length) return;
      }

      frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [visible]);

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
      <div className="splash-inner">
        <svg className="splash-mark" viewBox="0 0 200 200" aria-hidden="true">
          {/* Outer and inner hexagons, drawn as offset outlines. */}
          <polygon
            className="splash-hex splash-hex-outer"
            points="100,14 174,57 174,143 100,186 26,143 26,57"
            fill="none"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <polygon
            className="splash-hex splash-hex-inner"
            points="106,22 178,64 178,148 106,190 34,148 34,64"
            fill="none"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* A small neural graph: two input nodes, two hidden, one output.
              Edges draw in first, then the nodes pop, so it reads as a
              network assembling rather than a static icon. */}
          <g className="splash-net">
            <g className="splash-net-edges">
              {NET_EDGES.map(([a, b]) => (
                <line
                  key={`${a}-${b}`}
                  x1={NET_NODES[a].x}
                  y1={NET_NODES[a].y}
                  x2={NET_NODES[b].x}
                  y2={NET_NODES[b].y}
                  strokeWidth="1.6"
                />
              ))}
            </g>
            {NET_NODES.map((node, i) => (
              <circle
                key={i}
                className="splash-net-node"
                cx={node.x}
                cy={node.y}
                r={node.r}
                style={{ ['--n' as string]: i }}
              />
            ))}
          </g>
        </svg>

        <p className="splash-signature">
          <span className="splash-prompt">&gt;&nbsp;</span>
          {typed}
          <span className="splash-cursor" />
        </p>
      </div>
    </div>
  );
};

export default Splash;
