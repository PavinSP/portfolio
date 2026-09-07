import { skills } from '../data/portfolio';
import ContributionGraph from '../components/ContributionGraph';
import { resolve } from '../utils/assetUrl';
import { LinkIcon } from '../components/Icons';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';

const Skills = () => (
  <div className="page-wrapper">
    <SectionHeader
      eyebrow="04. What I work with"
      title="Technical Skills & Certifications"
      subtitle="Tools and frameworks I use across the AI, data and infrastructure stack."
    />

    <Reveal>
      <section style={{ marginBottom: '3rem' }}>
        <h3 className="category-heading" style={{ marginTop: 0 }}>
          GitHub Activity
        </h3>
        <ContributionGraph username="PavinSP" since={2022} />
      </section>
    </Reveal>

    <div className="skills-grid">
      {skills.map((group, i) => (
        <Reveal key={group.title} delay={i * 80} stretch>
          <article className="card skill-card">
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.skills.map((skill) =>
                typeof skill === 'string' ? (
                  <li key={skill}>{skill}</li>
                ) : (
                  <li key={skill.url}>
                    <a
                      className="inline-link"
                      href={resolve(skill.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {skill.label} <LinkIcon icon={skill.icon} />
                    </a>
                  </li>
                ),
              )}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  </div>
);

export default Skills;
