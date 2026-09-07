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

const STAR_COUNT = 70;

/** Deterministic PRNG so the star field is stable across re-renders. */
const seeded = (seed: number) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};

const NightSky = () => {
  const { theme } = useTheme();

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

  if (theme !== 'dark') return null;

  return (
    <div className="night-sky" aria-hidden="true">
      <div className="night-glow" />
      <div className="night-moon" />
      {stars.map((star, i) => (
        <span
          key={i}
          className="night-star"
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

export default NightSky;
