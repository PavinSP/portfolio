import { certifications } from '../data/portfolio';
import { resolve } from '../utils/assetUrl';
import Reveal from '../components/Reveal';
import TechIcon from '../components/TechIcon';
import { findIcon, PROVIDER_IMAGES, PROVIDER_LETTERMARKS } from '../data/techIcons';
import SectionHeader from '../components/SectionHeader';

const Certifications = () => (
  <div className="page-wrapper">
    <SectionHeader
      eyebrow="05. What I've certified"
      title="Certifications & Courses"
      subtitle="Completed certificates are linked; ongoing courses are marked as in progress."
    />

    <div className="cert-grid">
      {certifications.map((cert, i) => {
        const ongoing = cert.status === 'ongoing';
        // Only Coursera and Udemy have marks in the icon set; the rest keep
        // the generic status glyph.
        const hasLogo = cert.provider ? Boolean(findIcon(cert.provider)) : false;
        const logoImage = cert.provider ? PROVIDER_IMAGES[cert.provider] : undefined;
        const lettermark = cert.provider ? PROVIDER_LETTERMARKS[cert.provider] : undefined;

        return (
          <Reveal key={cert.name} delay={i * 70} stretch>
            <article className={`card cert-card ${ongoing ? 'is-ongoing' : ''}`}>
              <span className="cert-mark" aria-hidden="true">
                {hasLogo && cert.provider ? (
                  <TechIcon tech={cert.provider} size={20} />
                ) : logoImage ? (
                  <img
                    className="cert-logo-img"
                    src={resolve(logoImage)}
                    alt=""
                    width={26}
                    height={14}
                    loading="lazy"
                  />
                ) : lettermark ? (
                  <span className="cert-lettermark" style={{ color: lettermark.color }}>
                    {lettermark.text}
                  </span>
                ) : ongoing ? (
                  '◔'
                ) : (
                  '🏆'
                )}
              </span>

              <div className="cert-body">
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>

                {ongoing ? (
                  <span className="cert-status">In progress</span>
                ) : (
                  cert.url && (
                    <a
                      className="cert-link"
                      href={resolve(cert.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View certificate
                    </a>
                  )
                )}
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  </div>
);

export default Certifications;
