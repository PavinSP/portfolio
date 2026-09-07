import { Mail } from 'lucide-react';
import { socials } from '../data/portfolio';
import { GithubIcon, LinkedInIcon } from './Icons';

const glyph = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  mail: Mail,
};

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-socials">
        {socials.map((social) => {
          const Glyph = glyph[social.icon];
          return (
            <a
              key={social.label}
              href={social.url}
              target={social.icon === 'mail' ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <Glyph size={20} />
            </a>
          );
        })}
      </div>
      <p>Designed &amp; Built by Pavin Sumathi Palanichamy</p>
    </div>
  </footer>
);

export default Footer;
