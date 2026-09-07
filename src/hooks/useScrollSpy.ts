import { useEffect, useState } from 'react';

/**
 * Reports which section id is currently in view.
 *
 * Chooses the last section whose top has passed the offset line, which is
 * how a reader perceives "where am I" while scrolling down. Falls back to
 * the first section above that line and forces the last one at the very
 * bottom, where a short final section may never reach the line.
 */
export function useScrollSpy(ids: string[], offset = 140) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const pick = () => {
      const nodes = ids
        .map((id) => document.getElementById(id))
        .filter((n): n is HTMLElement => n !== null);
      if (!nodes.length) return;

      // Bottom of the page: the final section is what the reader is on.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        setActive(nodes[nodes.length - 1].id);
        return;
      }

      let current = nodes[0].id;
      for (const node of nodes) {
        if (node.getBoundingClientRect().top - offset <= 0) current = node.id;
      }
      setActive(current);
    };

    pick();
    window.addEventListener('scroll', pick, { passive: true });
    window.addEventListener('resize', pick);
    return () => {
      window.removeEventListener('scroll', pick);
      window.removeEventListener('resize', pick);
    };
  }, [ids, offset]);

  return active;
}
