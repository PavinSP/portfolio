import { useEffect, useState } from 'react';

type Props = {
  /** Phrases cycled through, one character at a time. */
  phrases: string[];
  typeSpeed?: number;
  eraseSpeed?: number;
  holdMs?: number;
};

const Typed = ({ phrases, typeSpeed = 55, eraseSpeed = 28, holdMs = 1900 }: Props) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [erasing, setErasing] = useState(false);

  const reduced =
    typeof window !== 'undefined' &&
    (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false);

  useEffect(() => {
    if (reduced) return;

    const phrase = phrases[index % phrases.length];

    // Finished typing: hold, then start erasing.
    if (!erasing && text === phrase) {
      const hold = window.setTimeout(() => setErasing(true), holdMs);
      return () => window.clearTimeout(hold);
    }

    // Finished erasing: advance to the next phrase.
    if (erasing && text === '') {
      setErasing(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const step = window.setTimeout(
      () =>
        setText((current) =>
          erasing ? current.slice(0, -1) : phrase.slice(0, current.length + 1),
        ),
      erasing ? eraseSpeed : typeSpeed,
    );

    return () => window.clearTimeout(step);
  }, [text, erasing, index, phrases, typeSpeed, eraseSpeed, holdMs, reduced]);

  // Static first phrase when motion is reduced.
  if (reduced) return <>{phrases[0]}</>;

  return (
    <>
      {text}
      <span className="typed-caret" aria-hidden="true" />
    </>
  );
};

export default Typed;
