import { useEffect, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Fades and lifts page content whenever the route changes.
 *
 * The wrapper is keyed on the pathname so React remounts it per route: a
 * fresh element starts in the "out" state and transitions in. Toggling a
 * flag in one effect instead would batch both states into a single render,
 * and the out state would never paint.
 */
const PageTransition = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <PageFrame key={pathname} pathname={pathname}>
      {children}
    </PageFrame>
  );
};

const PageFrame = ({
  children,
  pathname,
}: {
  children: ReactNode;
  pathname: string;
}) => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Land at the top of each newly opened page.
    window.scrollTo({ top: 0, behavior: 'auto' });

    // Two frames: the first paints the out state, the second starts the
    // transition toward the in state.
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => setShown(true));
    });

    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
    };
  }, [pathname]);

  return <div className={`page-transition ${shown ? 'is-shown' : ''}`}>{children}</div>;
};

export default PageTransition;
