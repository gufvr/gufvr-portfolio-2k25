import { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [visibleCategories, setVisibleCategories] = useState(new Set());
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCategories(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.5 }
    );

    const categories = document.querySelectorAll('.skill-category');
    categories.forEach(category => observerRef.current.observe(category));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express", "MongoDB", "Sequelize", "REST APIs", "WebSocket"]
    },
    {
      title: "Mobile",
      skills: ["React Native", "Expo", "Mobile UI/UX"]
    },
    {
      title: "Ferramentas",
      skills: ["Git", "GitHub", "Vercel", "Figma"]
    }
  ];

  return (
    <section id="curriculo" className="skills">
      {/* Subtle Background Animation */}
      <div className="skills-animations">
        <div className="floating-code" style={{ top: '15%', left: '-200px', animationName: 'drift', animationDuration: '25s', animationDelay: '0s' }}>
          npm install success
        </div>
        <div className="floating-code" style={{ top: '60%', left: '-150px', animationName: 'drift', animationDuration: '30s', animationDelay: '8s' }}>
          {"{ framework: 'React' }"}
        </div>
        <div className="tech-particle" style={{ top: '20%', left: '3%', animationDelay: '1s' }}></div>
        <div className="tech-particle" style={{ top: '80%', left: '97%', animationDelay: '3s' }}></div>
      </div>
      
      <div className="skills-container">
        {/* Section Header */}
        <div className="skills-header">
          <h2 className="skills-title">
            Experiência & <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="skills-subtitle">
            Desenvolvedor Full Stack em formação com foco em tecnologias modernas
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              data-index={index}
              className={`skill-category ${
                visibleCategories.has(index.toString()) ? 'skill-category-visible' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="skill-category-title">
                {category.title}
              </h3>
              
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    style={{ 
                      transitionDelay: visibleCategories.has(index.toString()) ? `${skillIndex * 50}ms` : '0ms'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
