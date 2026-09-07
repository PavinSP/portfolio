import { useReveal } from '../hooks/useReveal';

export type Stage = {
  label: string;
  detail: string;
};

type Props = {
  title: string;
  stages: Stage[];
  outcome?: string;
  /** Only set where the project actually has a working demo. */
  demoUrl?: string;
};

/**
 * A horizontal pipeline that draws itself when scrolled into view: each stage
 * fades up in turn and the connector between them extends. Explains how a
 * project actually works rather than decorating the page.
 */
const PipelineDiagram = ({ title, stages, outcome, demoUrl }: Props) => {
  const { ref, shown } = useReveal();

  return (
    <figure ref={ref} className={`pipeline ${shown ? 'is-shown' : ''}`}>
      <div className="pipeline-head">
        <figcaption className="pipeline-title">{title}</figcaption>
        {demoUrl && (
          <a
            className="link-demo pipeline-demo"
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
            Try the live demo
          </a>
        )}
      </div>

      <ol className="pipeline-track">
        {stages.map((stage, i) => (
          <li
            key={stage.label}
            className="pipeline-stage"
            style={{ ['--i' as string]: i }}
          >
            <span className="pipeline-node">{i + 1}</span>
            <span className="pipeline-label">{stage.label}</span>
            <span className="pipeline-detail">{stage.detail}</span>
          </li>
        ))}
      </ol>

      {outcome && <p className="pipeline-outcome">{outcome}</p>}
    </figure>
  );
};

export default PipelineDiagram;
