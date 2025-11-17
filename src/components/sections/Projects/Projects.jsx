import { useState, useEffect, useRef } from 'react'
import mbFisioterapeutaThumb from '../../../assets/MB-fisioterapeuta-thumb.png'
import genPassThumb from '../../../assets/gen-pass-thumb.png'
import serralheiroThumb from '../../../assets/serralheiro-thumb.png'
import './Projects.css'

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState(new Set())
  const observerRef = useRef()

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.dataset.index]))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    const cards = document.querySelectorAll('.project-card')
    cards.forEach(card => observerRef.current.observe(card))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: 'MB Fisioterapeuta',
      description:
        'Site profissional desenvolvido para fisioterapeuta, centralizando canais de contato e informações profissionais. Interface limpa e responsiva com foco na experiência do usuário.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: ['Layout Responsivo', 'Links Diretos', 'Interface Limpa'],
      liveUrl: 'https://gufvr.github.io/mb-fisioterapeuta/',
      codeUrl: 'https://github.com/gufvr/mb-fisioterapeuta',
      thumbnail: mbFisioterapeutaThumb,
      featured: true,
    },
    {
      id: 2,
      title: 'Serralheiro Eduardo Rodrigues',
      description:
        'Projeto desenvolvido para o Serralheiro Eduardo Rodrigues, com o objetivo de concentrar seus canais de contato e apresentar seus serviços de forma clara e profissional.',
      technologies: ['TailWindCSS', 'Resposividade', 'JavaScript'],
      features: ['Interface moderna e intuitiva', 'Integração com WhatsApp'],
      liveUrl: 'https://eduardo-rodrigues-serralheiro.vercel.app/',
      codeUrl: 'https://github.com/gufvr/eduardo-serralheiro',
      thumbnail: serralheiroThumb,
      featured: false,
    },
    {
      id: 3,
      title: 'Gen Pass',
      description:
        'Gerador de senhas mobile desenvolvido em React Native. Permite criar senhas seguras e personalizáveis diretamente no dispositivo, com suporte a clipboard.',
      technologies: ['React Native', 'Mobile', 'Security'],
      features: ['Geração Segura', 'Suporte Clipboard', 'APK Disponível'],
      liveUrl:
        'https://drive.google.com/file/d/1xRB5PD9G7-AxHMBkOxH1bKn7wMk8NOon/view?usp=drive_link',
      codeUrl: 'https://github.com/gufvr/gen-pass',
      thumbnail: genPassThumb,
      featured: false,
    },
  ]

  return (
    <section id="projetos" className="projects">
      <div className="projects-animations">
        <div
          className="tech-particle"
          style={{ top: '10%', left: '5%', animationDelay: '0s' }}
        ></div>
        <div
          className="tech-particle"
          style={{ top: '30%', left: '95%', animationDelay: '2s' }}
        ></div>
        <div
          className="tech-particle"
          style={{ top: '70%', left: '8%', animationDelay: '4s' }}
        ></div>
        <div
          className="tech-particle"
          style={{ top: '90%', left: '92%', animationDelay: '6s' }}
        ></div>
      </div>

      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">
            Projetos em <span className="gradient-text">Destaque</span>
          </h2>
          <p className="projects-subtitle">
            Soluções inovadoras que demonstram expertise técnica e visão estratégica
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-index={index}
              className={`project-card ${
                project.featured ? 'project-card-featured' : ''
              } ${visibleCards.has(index.toString()) ? 'project-card-visible' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Gradient */}
              <div className="project-card-bg"></div>

              {/* Project Thumbnail */}
              <div className="project-thumbnail">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} preview`}
                  className="project-image"
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="project-fallback">
                  <div className="project-tech-stack">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Tech stack overlay on hover */}
                <div className="project-overlay">
                  <div className="project-tech-hover">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag-hover">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  {project.features.map(feature => (
                    <span key={feature} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn-primary"
                  >
                    {project.id === 3
                      ? 'Download APK'
                      : project.id === 2
                      ? 'Ver Site'
                      : 'Ver Site'}
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn-secondary"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a
            href="https://github.com/gufvr?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-btn-more"
          >
            Ver Todos os Projetos
            <span className="projects-btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
