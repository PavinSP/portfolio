import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/themeStore';

type Node = { x: number; y: number; vx: number; vy: number; r: number };

const COUNT = 64;
const LINK_DIST = 170;

/** Nodes drift slowly and link to nearby neighbours, so the field reads as a
 *  network rather than a star map. Signals travel along the brightest edges. */
const NeuralBackdrop = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    let nodes: Node[] = [];

    const accent = theme === 'light' ? '192, 57, 47' : '255, 122, 107';

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      nodes = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 1.2 + Math.random() * 1.9,
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
        }
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > LINK_DIST) continue;
          const strength = 1 - d / LINK_DIST;
          // A slow travelling wave brightens edges in sequence.
          const pulse = reduced ? 0 : 0.35 * Math.sin(t / 900 - (a.x + a.y) / 260);
          ctx.strokeStyle = `rgba(${accent}, ${(strength * 0.3 + pulse * strength * 0.3).toFixed(3)})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = `rgba(${accent}, 0.75)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    seed();
    raf = requestAnimationFrame(draw);
    const onResize = () => {
      resize();
      seed();
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, [theme]);

  return <canvas ref={ref} className="backdrop-canvas" aria-hidden="true" />;
};

export default NeuralBackdrop;
