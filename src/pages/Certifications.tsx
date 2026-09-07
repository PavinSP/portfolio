import { certifications } from '../data/portfolio';
import { resolve } from '../utils/assetUrl';
import Reveal from '../components/Reveal';
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

        return (
          <Reveal key={cert.name} delay={i * 70} stretch>
            <article className={`card cert-card ${ongoing ? 'is-ongoing' : ''}`}>
              <span className="cert-mark" aria-hidden="true">
                {ongoing ? '◔' : '🏆'}
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
