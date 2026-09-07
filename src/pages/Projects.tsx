import { categoryCovers, pipelines, projects } from '../data/portfolio';
import LinkRow from '../components/LinkRow';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { usePointerTilt } from '../hooks/usePointerTilt';
import TechIcon from '../components/TechIcon';
import PipelineDiagram from '../components/PipelineDiagram';
import { resolve } from '../utils/assetUrl';

const Projects = () => {
  usePointerTilt('.project-card', 'tilt');

  return (
  <div className="page-wrapper">
    <SectionHeader
      eyebrow="03. What I've built"
      title="Featured Projects"
      subtitle="Computer vision, generative AI, NLP and machine learning work from research, hackathons and publications."
    />

    {pipelines.map((pipeline) => (
      <PipelineDiagram
        key={pipeline.title}
        title={pipeline.title}
        stages={pipeline.stages}
        outcome={pipeline.outcome}
      />
    ))}

    {projects.map((group) => (
      <section key={group.category}>
        <div className="category-banner">
          {categoryCovers[group.category] && (
            <img
              className="category-cover"
              src={resolve(categoryCovers[group.category])}
              alt=""
              loading="lazy"
              decoding="async"
            />
          )}
          <h3 className="category-heading">{group.category}</h3>
        </div>
        <div className="projects-grid">
          {group.projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 80} stretch>
              <article className="card project-card">
                <LinkRow links={project.links} />
                <h3 className="project-name">
                  {project.name}
                  {project.badge && <span className="badge">{project.badge}</span>}
                </h3>
                <div className="project-desc">
                  {project.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <ul className="pill-list">
                  {project.tech.map((tech) => (
                    <li key={tech}>
                      <TechIcon tech={tech} />
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    ))}
    </div>
  );
};

export default Projects;
