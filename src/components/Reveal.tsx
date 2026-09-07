import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Set in grid contexts so the wrapper stretches and doesn't collapse
   *  the child's equal-height behaviour. */
  stretch?: boolean;
};

const Reveal = ({ children, delay = 0, className = '', stretch = false }: Props) => {
  const { ref, shown } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${stretch ? 'reveal-stretch' : ''} ${shown ? 'is-visible' : ''} ${className}`.replace(/\s+/g, ' ').trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;
