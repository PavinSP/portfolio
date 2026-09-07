import { useEffect } from 'react';

/**
 * Adds pointer-reactive motion to elements matching `selector` inside `root`.
 *
 * `tilt` rotates a card in 3D toward the cursor; `magnet` nudges a button
 * toward it. Both write CSS custom properties and let CSS do the animating,
 * and both no-op for reduced motion or coarse pointers.
 */
export function usePointerTilt(
  selector: string,
  mode: 'tilt' | 'magnet',
  strength = 1,
) {
  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia?.('(pointer: fine)').matches ?? false;
    if (reduced || !fine) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!nodes.length) return;

    const cleanups = nodes.map((node) => {
      const onMove = (e: PointerEvent) => {
        const rect = node.getBoundingClientRect();
        // -0.5..0.5 relative to the element's centre.
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;

        if (mode === 'tilt') {
          node.style.setProperty('--tilt-x', `${(-py * 8 * strength).toFixed(2)}deg`);
          node.style.setProperty('--tilt-y', `${(px * 10 * strength).toFixed(2)}deg`);
        } else {
          node.style.setProperty('--pull-x', `${(px * 8 * strength).toFixed(2)}px`);
          node.style.setProperty('--pull-y', `${(py * 6 * strength).toFixed(2)}px`);
        }
      };

      const onLeave = () => {
        node.style.removeProperty('--tilt-x');
        node.style.removeProperty('--tilt-y');
        node.style.removeProperty('--pull-x');
        node.style.removeProperty('--pull-y');
      };

      node.addEventListener('pointermove', onMove);
      node.addEventListener('pointerleave', onLeave);
      return () => {
        node.removeEventListener('pointermove', onMove);
        node.removeEventListener('pointerleave', onLeave);
        onLeave();
      };
    });

    return () => cleanups.forEach((fn) => fn());
  }, [selector, mode, strength]);
}
