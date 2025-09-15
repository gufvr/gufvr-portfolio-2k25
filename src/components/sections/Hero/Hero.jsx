import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projetos');
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero">
      {/* Floating Code Animations */}
      <div className="hero-animations">
        <div className="floating-code code-drift" style={{ top: '20%', animationDelay: '0s' }}>
          const developer = {'{'}<br/>
          <span className="code-line-empty"></span><br/>
          &nbsp;&nbsp;name: "Gustavo",<br/>
          &nbsp;&nbsp;passion: "coding"<br/>
          {'}'};
        </div>
        <div className="floating-code code-drift" style={{ top: '35%', animationDelay: '5s' }}>
          function createAwesome() {'{'}<br/>
          <span className="code-line-empty"></span><br/>
          &nbsp;&nbsp;return innovation;<br/>
          {'}'}
        </div>
        <div className="floating-code code-drift" style={{ top: '55%', animationDelay: '10s' }}>
          &lt;Component<br/>
          <span className="code-line-empty"></span><br/>
          &nbsp;&nbsp;passion="coding"<br/>
          /&gt;
        </div>
        <div className="floating-code code-drift" style={{ top: '75%', animationDelay: '15s' }}>
          git add .<br/>
          <span className="code-line-empty"></span><br/>
          git commit -m "Building the future"
        </div>
        
        {/* Tech Particles */}
        <div className="tech-particle" style={{ top: '15%', left: '10%', animationDelay: '0s' }}></div>
        <div className="tech-particle" style={{ top: '25%', left: '85%', animationDelay: '2s' }}></div>
        <div className="tech-particle" style={{ top: '65%', left: '15%', animationDelay: '4s' }}></div>
        <div className="tech-particle" style={{ top: '85%', left: '80%', animationDelay: '6s' }}></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Text Content */}
          <div className={`hero-text ${isVisible ? 'hero-text-visible' : ''}`}>
            <h1 className="hero-title">
              <span className="gradient-text">Gustavo Favero</span>
              <br />
              <span className="hero-subtitle">Desenvolvedor Full Stack</span>
            </h1>
            
            <p className="hero-description">
              Transformo ideias em soluções digitais com foco em performance e experiência do usuário, utilizando tecnologias como <strong className="tech-js">JavaScript</strong>, <strong className="tech-ts">TypeScript</strong>, 
              <strong className="tech-react"> React</strong>, <strong className="tech-node">Node.js</strong> e <strong className="tech-rn">React Native</strong>.
            </p>

            {/* Stats */}
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">25+</div>
                <div className="hero-stat-label">Projetos</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">4+</div>
                <div className="hero-stat-label">Anos</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">100%</div>
                <div className="hero-stat-label">Dedicação</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <button onClick={scrollToProjects} className="btn-primary hero-btn-primary">
                Ver Projetos
              </button>
              <a
                href="https://www.linkedin.com/messaging/compose/?recipient=gustavo-favero-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hero-btn-secondary"
              >
                Contato
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`hero-image ${isVisible ? 'hero-image-visible' : ''}`}>
            <div className="hero-profile">
              <div className="profile-glow">
                <img
                  src="/Hero.jpeg"
                  alt="Gustavo Favero"
                  className="profile-image"
                />
                <div className="image-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
