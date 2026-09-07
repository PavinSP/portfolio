import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const pages = [
  { to: '/education', label: 'Education' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          Pavin SP
        </Link>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {pages.map((page) => (
            <li key={page.to}>
              <NavLink to={page.to} onClick={() => setOpen(false)}>
                {page.label}
              </NavLink>
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
    </nav>
  );
};

export default Navbar;
