import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import ScrollProgress from './ScrollProgress';

const sections = [
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certificates' },
];

const IDS = ['home', ...sections.map((s) => s.id)];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(IDS);

  const jump = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);

    const target = document.getElementById(id);
    if (!target) return;

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
    // Keep the address bar in step without triggering a jump.
    window.history.replaceState(null, '', id === 'home' ? '#' : `#${id}`);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <a href="#" className="logo" onClick={jump('home')}>
          Pavin Sumathi Palanichamy
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={active === section.id ? 'active' : undefined}
                aria-current={active === section.id ? 'true' : undefined}
                onClick={jump(section.id)}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <ScrollProgress />
    </nav>
  );
};

export default Navbar;
