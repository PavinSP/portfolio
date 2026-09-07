import { education } from '../data/portfolio';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';

const Education = () => (
  <div className="page-wrapper">
    <SectionHeader
      eyebrow="01. Where I've studied"
      title="Academic Journey"
      subtitle="Research-oriented AI study in Germany, built on an AI & Data Science undergraduate foundation."
    />

    <div className="timeline">
      {education.map((degree, i) => (
        <Reveal key={degree.degree} delay={i * 90}>
          <article className="card timeline-card">
            <div className="timeline-meta">
              <h3>{degree.degree}</h3>
              <p className="company">{degree.institution}</p>
              <p className="date">{degree.location}</p>
            </div>
            <div className="timeline-details">
              <p>{degree.intro}</p>

              {degree.modulesHeading && (
                <h4 className="modules-heading">{degree.modulesHeading}</h4>
              )}

              {degree.modules.map((module) => (
                <div className="module" key={module.title}>
                  <p className="module-title">{module.title}</p>
                  {module.summary && <p className="module-summary">{module.summary}</p>}
                  <ul className="module-points">
                    {module.points.map((point) => (
                      <li key={point.text}>
                        {point.label && <strong>{point.label}: </strong>}
                        {point.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </div>
);

export default Education;
