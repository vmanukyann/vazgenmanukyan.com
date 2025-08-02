import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Database, Palette, Globe } from 'lucide-react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const projects = [
    {
      title: "vazgenmanukyan.com",
      description: "A personal portfolio website showcasing my skills, projects, and contact information. Built with React and Tailwind CSS for a modern look.",
      tech: ["React", "Flask"],
      github: "https://github.com/vmanukyann/vazgenmanukyan.com",
      live: "#"
    },
    {
      title: "Penn Chatbot",
      description: "A chatbot application that integrates with Penn High School's systems to provide students with quick access to information and services.",
      tech: ["React", "MongoDB", "Docker", "Flask"],
      github: "https://github.com/vmanukyann/Penn-Chatbot",
      live: "#"
    },
    {
      title: "Aunalytics",
      description: "A chatbot application that integrates with Penn High School's systems to provide students with quick access to information and services.",
      tech: ["React", "MongoDB", "Docker", "Flask"],
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { category: "Frontend", icon: <Code className="w-6 h-6" />, items: ["React", "JavaScript", "HTML", "Tailwind CSS"] },
    { category: "Backend", icon: <Database className="w-6 h-6" />, items: ["Python", "Flask",  "MongoDB"] },
    { category: "Tools", icon: <Globe className="w-6 h-6" />, items: ["Git", "Docker",] }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">VM</div>
          <div className="nav-links">
            {['hero', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">
              <span className="gradient-text">Vazgen Manukyan</span>
            </h1>
            <p className="hero-subtitle">Full Stack - AI Develepor - Prompt Engineer</p>
            <p className="hero-description">
              I am a passionate developer with a focus on creating innovative solutions using the latest technologies.
            </p>
            <div className="hero-buttons">
              <button 
                onClick={() => scrollToSection('projects')} 
                className="btn btn-primary"
              >
                My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="btn btn-secondary"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-elements">
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
              <div className="floating-element element-3"></div>
            </div>
          </div>
        </div>
        <button 
          onClick={() => scrollToSection('projects')} 
          className="scroll-indicator"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects & Employment</h2>
          <p className="section-subtitle">A showcase of my work</p>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a href={project.live} className="project-link">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with to bring ideas to life</p>
          
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  {skillGroup.icon}
                  <h3>{skillGroup.category}</h3>
                </div>
                <div className="skill-items">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Ready to collaborate? Let's discuss your next project</p>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="contact-links">
                <a href="https://mail.google.com/mail/u/0/#inbox" className="contact-link">
                  <Mail className="w-5 h-5" />
                  vazgenmanukyan08@gmail.com
                </a>
                <a href="https://github.com/vazgenmanukyann" className="contact-link">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/vazgen-manukyan-a60601318/" className="contact-link">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
            
            <div className="contact-form">
              <div className="contact-form-content">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5"></textarea>
                </div>
                <button onClick={() => alert('Message functionality would be implemented with a backend service')} className="btn btn-primary">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Vazgen Manukyan</p>
        </div>
      </footer>
    </div>
  );
}

export default App;