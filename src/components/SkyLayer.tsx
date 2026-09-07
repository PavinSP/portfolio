import { useMemo } from 'react';
import { useTheme } from '../contexts/themeStore';

type Star = {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
};

type Crater = {
  left: number;
  top: number;
  size: number;
  depth: number;
};

const STAR_COUNT = 70;

/** Deterministic PRNG so the star field is stable across re-renders. */
const seeded = (seed: number) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};

/** Craters placed by hand so they read as a familiar lunar face rather than
 *  random dots. Percentages are relative to the moon's own box. */
const CRATERS: Crater[] = [
  { left: 24, top: 22, size: 17, depth: 0.3 },
  { left: 55, top: 15, size: 10, depth: 0.24 },
  { left: 67, top: 39, size: 13, depth: 0.27 },
  { left: 31, top: 52, size: 20, depth: 0.26 },
  { left: 15, top: 43, size: 8, depth: 0.2 },
  { left: 50, top: 67, size: 11, depth: 0.22 },
  { left: 73, top: 63, size: 7, depth: 0.18 },
  { left: 41, top: 34, size: 6, depth: 0.2 },
  { left: 62, top: 76, size: 5, depth: 0.16 },
  { left: 36, top: 79, size: 4, depth: 0.15 },
  { left: 20, top: 66, size: 5, depth: 0.17 },
  { left: 78, top: 27, size: 4, depth: 0.15 },
];

/** Granule cells give the photosphere its mottled texture. */
const GRANULES = [
  { left: 22, top: 30, size: 34, opacity: 0.3 },
  { left: 58, top: 20, size: 27, opacity: 0.24 },
  { left: 66, top: 55, size: 31, opacity: 0.26 },
  { left: 30, top: 62, size: 29, opacity: 0.22 },
  { left: 46, top: 42, size: 22, opacity: 0.18 },
  { left: 12, top: 48, size: 19, opacity: 0.2 },
  { left: 74, top: 32, size: 16, opacity: 0.16 },
  { left: 44, top: 76, size: 18, opacity: 0.17 },
];

const SkyLayer = () => {
  const { theme, toggleTheme } = useTheme();

  const stars = useMemo<Star[]>(() => {
    const rand = seeded(20260907);
    return Array.from({ length: STAR_COUNT }, () => ({
      left: rand() * 100,
      // Keep stars in the upper band so they read as sky, not confetti.
      top: rand() * 62,
      size: 1 + rand() * 1.8,
      delay: rand() * 6,
      duration: 3.4 + rand() * 4.2,
      opacity: 0.35 + rand() * 0.5,
    }));
  }, []);

  const isLight = theme === 'light';

  // The body doubles as the theme switch, so it is a real button: reachable
  // by keyboard and announced, even though the sky around it is decorative.
  const bodyProps = {
    type: 'button' as const,
    onClick: toggleTheme,
    'aria-label': `Switch to ${isLight ? 'dark' : 'light'} mode`,
    title: `Switch to ${isLight ? 'dark' : 'light'} mode`,
  };

  if (isLight) {
    return (
      <div className="sky-layer sky-day">
        <div className="day-glow" aria-hidden="true" />
        <button className="celestial day-sun" {...bodyProps}>
          <span className="sun-halo" aria-hidden="true" />
          <span className="sun-corona" aria-hidden="true" />
          <span className="sun-disc" aria-hidden="true">
            {GRANULES.map((cell, i) => (
              <span
                key={i}
                className="sun-granule"
                style={{
                  left: `${cell.left}%`,
                  top: `${cell.top}%`,
                  width: `${cell.size}%`,
                  height: `${cell.size}%`,
                  opacity: cell.opacity,
                }}
              />
            ))}
            <span className="sun-limb" />
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="sky-layer sky-night">
      <div className="night-glow" aria-hidden="true" />
      <button className="celestial night-moon" {...bodyProps}>
        {CRATERS.map((crater, i) => (
          <span
            key={i}
            className="moon-crater"
            aria-hidden="true"
            style={{
              left: `${crater.left}%`,
              top: `${crater.top}%`,
              width: `${crater.size}%`,
              height: `${crater.size}%`,
              ['--crater-depth' as string]: crater.depth,
            }}
          />
        ))}
        <span className="moon-shading" aria-hidden="true" />
      </button>
      {stars.map((star, i) => (
        <span
          key={i}
          className="night-star"
          aria-hidden="true"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            // Custom property so the twinkle keyframes peak at each
            // star's own brightness rather than a uniform value.
            ['--star-opacity' as string]: star.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default SkyLayer;
