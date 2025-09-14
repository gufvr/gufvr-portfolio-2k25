import './Footer.css';

const Footer = () => {
  return (
    <footer id="contato" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2025 Gustavo Favero. Desenvolvido com paixão e dedicação.</p>
          </div>
          
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/gustavo-favero-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/gufvr"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
