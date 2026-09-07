import { skills } from '../data/portfolio';
import { resolve } from '../utils/assetUrl';
import { LinkIcon } from '../components/Icons';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import SkillRow from '../components/SkillRow';

const Skills = () => (
  <div className="page-wrapper">
    <SectionHeader
      eyebrow="04. What I work with"
      title="Technical Skills & Certifications"
      subtitle="Tools and frameworks I use across the AI, data and infrastructure stack."
    />

    <div className="skills-grid">
      {skills.map((group, i) => (
        <Reveal key={group.title} delay={i * 80} stretch>
          <article className="card skill-card">
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.skills.map((skill) =>
                typeof skill === 'string' ? (
                  <SkillRow key={skill} text={skill} />
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
