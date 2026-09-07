import { experience } from '../data/portfolio';
import LinkRow from '../components/LinkRow';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';

const Experience = () => (
  <div className="page-wrapper">
    <SectionHeader
      eyebrow="02. Where I've worked"
      title="Professional Experience"
      subtitle="Enterprise data engineering and full-stack development across agile teams."
    />

    <div className="timeline">
      {experience.map((job, i) => (
        <Reveal key={job.company} delay={i * 90}>
          <article className="card timeline-card">
            <div className="timeline-meta">
              <h3>{job.role}</h3>
              <p className="company">{job.company}</p>
              <p className="date">{job.date}</p>
              <LinkRow links={job.links} />
            </div>
            <div className="timeline-details">
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </div>
);

export default Experience;
