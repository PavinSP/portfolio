import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">&gt;_ Pavin SP</Link>
        <ul className="nav-links">
          <li><Link to="/education">~/education</Link></li>
          <li><Link to="/experience">~/experience</Link></li>
          <li><Link to="/projects">~/projects</Link></li>
          <li><Link to="/skills">~/skills</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
