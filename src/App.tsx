import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import CursorTrail from './components/CursorTrail';
import SkyLayer from './components/SkyLayer';
import Section from './components/Section';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import './App.css';

/** Old routed URLs (#/projects) map onto the new anchors (#projects) so
 *  links already shared keep working. */
const LEGACY = ['education', 'experience', 'projects', 'skills', 'certifications'];

const useLegacyHashRedirect = () => {
  useEffect(() => {
    const apply = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash) return;

      const target = LEGACY.includes(hash) ? hash : null;
      if (!target) return;

      // Replace so the old form does not linger in history.
      window.history.replaceState(null, '', `#${target}`);
      document.getElementById(target)?.scrollIntoView({ behavior: 'auto' });
    };

    // Run after the sections have mounted.
    const frame = requestAnimationFrame(apply);
    window.addEventListener('hashchange', apply);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('hashchange', apply);
    };
  }, []);
};

function App() {
  useLegacyHashRedirect();

  return (
    <ThemeProvider>
      <Splash />
      <SkyLayer />
      <CursorTrail />
      <div className="app-container">
        <Navbar />
        <main className="container page-content">
          <Section id="home">
            <Home />
          </Section>
          <Section id="education">
            <Education />
          </Section>
          <Section id="experience">
            <Experience />
          </Section>
          <Section id="projects">
            <Projects />
          </Section>
          <Section id="skills">
            <Skills />
          </Section>
          <Section id="certifications">
            <Certifications />
          </Section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
