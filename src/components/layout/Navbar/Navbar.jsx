import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo" onClick={scrollToTop}>
            <img src="/public/logo-gf.svg" alt="GF Logo" className="logo-image" />
          </div>
          <ul className="navbar-menu">
            <li>
              <button onClick={() => scrollToSection('projetos')} className="navbar-link group">
                <span className="navbar-link-text">Projetos</span>
                <span className="navbar-link-underline"></span>
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('curriculo')} className="navbar-link group">
                <span className="navbar-link-text">Experiência</span>
                <span className="navbar-link-underline"></span>
              </button>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gustavo-favero-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-link group"
              >
                <span className="navbar-link-text">LinkedIn</span>
                <span className="navbar-link-underline"></span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/faveroid"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-link group"
              >
                <span className="navbar-link-text">Instagram</span>
                <span className="navbar-link-underline"></span>
              </a>
            </li>
            <li>
              <a
                href="https://dev.to/gufvr"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-link group"
              >
                <span className="navbar-link-text">DEV Community</span>
                <span className="navbar-link-underline"></span>
              </a>
            </li>
          </ul>
          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile ${isOpen ? 'navbar-mobile-open' : ''}`}>
        <ul className="navbar-mobile-menu">
          <li>
            <button onClick={() => scrollToSection('projetos')} className="navbar-mobile-link">
              Projetos
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('curriculo')} className="navbar-mobile-link">
              Experiência
            </button>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/gustavo-favero-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-mobile-link"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/faveroid"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-mobile-link"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://dev.to/gufvr"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-mobile-link"
            >
              DEV Community
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
