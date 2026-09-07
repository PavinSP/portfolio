import { useReveal } from '../hooks/useReveal';

export type Stage = {
  label: string;
  detail: string;
};

type Props = {
  title: string;
  stages: Stage[];
  outcome?: string;
};

/**
 * A horizontal pipeline that draws itself when scrolled into view: each stage
 * fades up in turn and the connector between them extends. Explains how a
 * project actually works rather than decorating the page.
 */
const PipelineDiagram = ({ title, stages, outcome }: Props) => {
  const { ref, shown } = useReveal();

  return (
    <figure ref={ref} className={`pipeline ${shown ? 'is-shown' : ''}`}>
      <figcaption className="pipeline-title">{title}</figcaption>

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
