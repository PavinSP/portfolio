import { useEffect, useRef, useState } from 'react';
import { createCursorTrail } from '../utils/cursorTrail';
import { useTheme } from '../contexts/themeStore';

/** Ink colour per theme. Additive blending means alpha reads as intensity. */
const INK = {
  dark: 'rgba(96, 116, 255, 0.055)',
  light: 'rgba(74, 86, 226, 0.05)',
};

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  // Skip on touch-only devices (nothing to follow) and for reduced motion.
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia?.('(pointer: fine)').matches ?? false;
    return !reduced && finePointer;
  });

  useEffect(() => {
    if (!enabled || !canvasRef.current) return;

    const trail = createCursorTrail({
      canvas: canvasRef.current,
      color: INK[theme],
    });

    return () => trail.destroy();
  }, [enabled, theme]);

  if (!enabled) return null;

  return <canvas ref={canvasRef} className="cursor-trail" aria-hidden="true" />;
};

export default CursorTrail;
