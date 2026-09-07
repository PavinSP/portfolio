import { Mail } from 'lucide-react';
import { contact, greeting, socials } from '../data/portfolio';
import { GithubIcon, LinkedInIcon } from '../components/Icons';
import Contributions3D from '../components/Contributions3D';
import Reveal from '../components/Reveal';
import Typed from '../components/Typed';
import StatsRow from '../components/StatsRow';
import { usePointerTilt } from '../hooks/usePointerTilt';

const ROLES = [
  'M.Sc. Student in Artificial Intelligence at THWS',
  'Computer Vision & Deep Learning',
  'Generative AI & NLP Engineering',
  'Cloud, Data & Infrastructure',
];

const Home = () => {
  const github = socials.find((s) => s.icon === 'github');
  const linkedin = socials.find((s) => s.icon === 'linkedin');

  usePointerTilt('.hero-actions .btn', 'magnet');

  return (
    <div className="home-page">
      <Reveal>
        <section className="hero">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-title">{greeting.name}</h1>
          <h2 className="hero-subtitle">
            <Typed phrases={ROLES} />
          </h2>
          <p className="hero-description">
            {greeting.subtitle.map((line, i) => (
              <span key={line}>
                {line}
                {i < greeting.subtitle.length - 1 && <br />}
              </span>
            ))}
          </p>
          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
                document.getElementById('projects')?.scrollIntoView({
                  behavior: reduced ? 'auto' : 'smooth',
                });
              }}
            >
              View Projects
            </a>
            {github && (
              <a href={github.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <GithubIcon size={18} /> GitHub
              </a>
            )}
            {linkedin && (
              <a href={linkedin.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <LinkedInIcon size={18} /> LinkedIn
              </a>
            )}
          </div>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <StatsRow />
      </Reveal>

      <Reveal delay={100}>
        <section className="section home-contrib">
          <h3 className="category-heading" style={{ marginTop: 0 }}>
            GitHub Activity
          </h3>
          <Contributions3D username="PavinSP" />
        </section>
      </Reveal>

      <Reveal delay={150}>
        <section className="contact-section">
          <span className="contact-tag">{contact.tag}</span>
          <h2 className="contact-title">{contact.heading}</h2>
          <p className="contact-desc">{contact.description}</p>
          <div className="contact-details">
            <a href={`mailto:${contact.email}`}>
              <Mail size={15} style={{ display: 'inline', verticalAlign: 'text-bottom' }} /> {contact.email}
            </a>
            <span>{contact.phone}</span>
            <span>{contact.location}</span>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default Home;
