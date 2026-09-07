import type { ReactNode } from 'react';

type Props = {
  id: string;
  children: ReactNode;
};

/** A scroll target on the single-page layout. The scroll-margin keeps the
 *  heading clear of the fixed navbar when jumped to. */
const Section = ({ id, children }: Props) => (
  <section id={id} className="page-section">
    {children}
  </section>
);

export default Section;
