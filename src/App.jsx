import { useState, useEffect, useRef } from 'react'

const profile = {
  name: 'Faisal Inayath',
  role: 'Full Stack Cloud Engineer',
  location: 'Bengaluru, India',
  phone: '+91 90081 97150',
  email: 'faisalinayath16@gmail.com',
  linkedin: 'https://www.linkedin.com/in/faisal-i-b8a351201/',
  github: 'https://github.com/finayath',
}

const skillCards = [
  {
    title: 'Languages & Frameworks',
    items: ['Python', 'JavaScript', 'SQL', 'Django', 'React', 'FastAPI', 'Flask'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['Microsoft Azure', 'Azure Functions', 'AKS', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'CI/CD', 'DNS'],
  },
  {
    title: 'Databases & Tools',
    items: ['PostgreSQL', 'Redis', 'Veracode', 'Splunk', 'OpenTelemetry', 'Prisma Cloud'],
  },
  {
    title: 'Testing & Security',
    items: ['Pytest', 'Unit Testing', 'Integration Testing', 'SAST/DAST', 'PCI-DSS'],
  },
  {
    title: 'Architecture',
    items: ['Microservices', 'REST APIs', 'Event-Driven', 'Infrastructure as Code', 'System Design'],
  },
]

const experiences = [
  {
    period: '2023 - Present',
    company: 'First American India',
    role: 'Software Engineer',
    location: 'Bengaluru, India',
    technologies: ['Django', 'React', 'Azure Functions', 'Redis', 'Kubernetes', 'Helm', 'Terraform', 'GitOps', 'PCI-DSS'],
    points: [
      'Modernized a Ruby on Rails monolith into Django and React microservices across 5+ downstream systems',
      'Optimized high-volume payment APIs to sub-200ms latency using Django ORM, Redis caching, and database indexing',
      'Built Azure Functions for payment processing with retries, idempotency, and dead-letter handling for 99.9% reliability',
      'Drove Kubernetes migration, Helm-based release management, and GitOps workflows',
      'Resolved 450+ SAST and DAST vulnerabilities and supported PCI-DSS Level 1 compliance',
      'Automated infrastructure provisioning with Terraform, reducing deployment time by 70%',
      'Conducted Azure Learn & Share technical sessions on containers, container orchestration, and Azure Storage Accounts to enable knowledge sharing across teams',
      'Built Selenium automation scripts to validate check images and reconcile opening balances across multiple banking applications, improving accuracy and reducing manual effort',
      'Designed and presented an LLM-based solution using T5 for automated meeting summarization and sentiment analysis during an internal hackathon',
    ],
  },
  {
    period: '2023',
    company: 'HiNext Business Solutions',
    role: 'Software Development Engineer Intern',
    location: 'Bengaluru, India',
    technologies: ['Django REST', 'React', 'Geospatial Search', 'Filtering', 'CRM'],
    points: [
      'Improved a Django REST and React CRM platform used by 100+ schools',
      'Implemented geospatial search and hybrid filtering, improving institution discovery by 40%',
    ],
  },
]

const projects = [
  {
    name: 'UnlockCivil',
    period: '2025 - Present',
    type: 'B2B SaaS marketplace',
    url: 'https://unlockcivil.com',
    summary: 'A lead marketplace platform built for scale, monetization, and operational efficiency',
    points: [
      'Launched a production product supporting 1000+ concurrent users',
      'Designed a points-based monetization model with payment integration',
      'Improved lead conversion rates by 20-30% through better discovery and filtering flows',
      'Automated ad lifecycle management with Azure Functions, reducing manual effort by 70%',
      'Implemented CI/CD pipelines that reduced deployment time by 50%',
    ],
  },
  {
    name: 'Billing Software',
    period: '2024',
    type: 'Full-stack billing and record management platform',
    url: 'https://brave-moss-08a2ce100.1.azurestaticapps.net/dashboard',
    summary:
      'A billing solution built to streamline purchase and sales workflows, automate calculations, and preserve historical records for faster future operations.',
    points: [
      'Built purchase and sales billing flows with inbuilt calculation logic for totals, taxes, and recurring value adjustments',
      'Created bill history views so past invoices and transactions can be reviewed quickly from a single dashboard',
      'Added configurable default values to simplify repeated calculations and reduce manual data entry',
      'Stored historical transaction data to support future calculations, reporting, and reference tracking',
      'Integrated Django REST Framework APIs with a React frontend and SQL-backed persistence for reliable day-to-day usage',
      'Deployed the backend on Azure App Service and the frontend on Azure Static Web Apps for a clean cloud-hosted setup',
    ],
  },
  {
    name: 'Gao Kings Properties',
    period: '2024',
    type: 'Frontend-only real estate website',
    url: 'https://www.gaokingsproperties.com',
    summary:
      'A responsive property website focused on clean browsing flows, strong brand presentation, and smooth content-driven user experience.',
    points: [
      'Developed the frontend using React, React Hooks, and state management patterns to keep the UI modular and maintainable',
      'Built responsive page layouts for property discovery, service presentation, and lead generation across desktop and mobile',
      'Structured reusable components to make future content and design updates faster',
      'Improved visual consistency and navigation clarity to support better visitor engagement',
      'Deployed the website on Hostinger for reliable public hosting and easy content rollout',
    ],
  },
]

function ScrollReveal({ children, className = '' }) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(domRef.current)
        }
      },
      { threshold: 0.1 }
    )

    if (domRef.current) observer.observe(domRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={domRef} className={`${className} reveal ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand-mark" href="#top">
          FI
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>

        <nav className={`topnav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <div className={`menu-backdrop ${menuOpen ? 'is-open' : ''}`} onClick={closeMenu} />
      </header>

      <main id="top">
        <section className="hero-block">
          <div className="hero-glow" />
          <div className="section-container hero-grid">
            <div className="hero-left">
              <span className="kicker">Full Stack Cloud Engineer</span>
              <p className="hero-name">{profile.name}</p>
              <h1 className="hero-headline">
                Building Systems
                <br />
                <span className="text-gradient">That Scale</span>
              </h1>
              <p className="hero-copy">
                Backend engineer specializing in cloud infrastructure, microservices, and production reliability. 3+ years
                crafting payment platforms, DevOps automation, and scalable architectures.
              </p>
              <div className="hero-cta">
                <a href="#contact" className="primary-cta">
                  Get in Touch
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="secondary-cta">
                  View GitHub
                </a>
              </div>
            </div>
            <div className="hero-right">
              <div className="stats-card">
                <div className="stat-item">
                  <div className="stat-value">3+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <div className="stat-value">450+</div>
                  <div className="stat-label">Vulnerabilities Fixed</div>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <div className="stat-value">5+</div>
                  <div className="stat-label">Systems Modernized</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-container">
            <h2 className="section-title">About</h2>
            <div className="about-content">
              <p className="about-text">
                I'm drawn to problems that require both careful architecture and disciplined execution. My recent work
                spans payment systems, Kubernetes infrastructure, cloud security, and event-driven microservices—always
                with an emphasis on reliability, maintainability, and clean code.
              </p>
              <p className="about-text">
                I believe great systems are built on foundations of clarity, consistency, and a deep understanding of
                tradeoffs. Every architectural decision should balance performance, maintainability, and cost.
              </p>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-container">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
              {skillCards.map((card, i) => (
                <ScrollReveal key={i} className="skill-card">
                  <h3>{card.title}</h3>
                  <div className="pill-cloud">
                    {card.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-container">
            <h2 className="section-title">Experience</h2>
            <div className="experience-list">
              {experiences.map((exp, i) => (
                <ScrollReveal key={i} className="exp-card">
                  <div className="exp-header">
                    <div className="exp-info">
                      <h3>{exp.company}</h3>
                      <p className="exp-role">{exp.role}</p>
                      <div className="exp-meta">
                        <span>{exp.period}</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="exp-content">
                    <ul className="exp-points">
                      {exp.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>

                    <div className="exp-tech">
                      <span className="tech-label">Tech:</span>
                      <div className="pill-cloud">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="tech-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-container">
            <h2 className="section-title">Featured Work</h2>
            <div className="projects-list">
              {projects.map((project, i) => (
                <ScrollReveal key={i} className="project-card">
                  <div className="project-header">
                    <div>
                      <h3>{project.name}</h3>
                      <p className="project-summary">{project.summary}</p>
                      <p className="project-type">{project.type}</p>
                    </div>
                    <a href={project.url} target="_blank" rel="noreferrer" className="project-link">
                      Visit →
                    </a>
                  </div>

                  <ul className="project-points">
                    {project.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>

                  <p className="project-period">{project.period}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
              <p className="contact-intro">
                Always interested in discussing interesting problems, collaboration opportunities, or just saying hello.
              </p>

              <div className="contact-grid">
                <a href={`mailto:${profile.email}`} className="contact-card">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{profile.email}</span>
                </a>

                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="contact-card">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">{profile.phone}</span>
                </a>

                <a href={profile.github} target="_blank" rel="noreferrer" className="contact-card">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">github.com/finayath</span>
                </a>

                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-card">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">in/faisal-i</span>
                </a>
              </div>

              <a href={`mailto:${profile.email}`} className="primary-cta">
                Send an Email
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="section-container">
            <p>© 2026 Faisal Inayath.</p>
          </div>
        </footer>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap');

        :root {
          --bg: #0a0e1a;
          --bg-soft: #121826;
          --bg-card: rgba(255, 255, 255, 0.03);
          --text: #ffffff;
          --text-secondary: #e0e7ff;
          --text-muted: #94a3b8;
          --accent: #3b82f6;
          --accent-light: #60a5fa;
          --accent-glow: rgba(59, 130, 246, 0.5);
          --border: rgba(255, 255, 255, 0.08);
          --border-light: rgba(255, 255, 255, 0.05);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Plus Jakarta Sans', sans-serif;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        #root {
          width: 100%;
        }

        .site-shell {
          width: 100%;
          overflow-x: hidden;
        }

        .section-container {
          width: min(1200px, 90%);
          margin: 0 auto;
        }

        .text-gradient {
          background: linear-gradient(to right, #60a5fa, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* HEADER */
        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 5%;
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(10, 14, 26, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }

        .brand-mark {
          font-family: 'Syne', sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--accent);
          letter-spacing: 0.05em;
        }

        .topnav {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .topnav a {
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .topnav a:hover {
          color: var(--text);
        }

        .topnav a::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--accent);
          transition: width 0.3s ease;
        }

        .topnav a:hover::after {
          width: 100%;
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          width: 24px;
          height: 24px;
          border: none;
          background: none;
          cursor: pointer;
          z-index: 101;
          padding: 0;
        }

        .menu-toggle span {
          width: 100%;
          height: 1.5px;
          background: var(--text);
          transition: all 0.3s ease;
        }

        .menu-toggle.is-open span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }

        .menu-toggle.is-open span:nth-child(2) {
          opacity: 0;
        }

        .menu-backdrop {
          display: none;
        }

        .menu-backdrop.is-open {
          display: block;
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 50;
        }

        /* HERO */
        .hero-block {
          padding: 6rem 5% 5rem;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--border-light);
        }

        .hero-glow {
          position: absolute;
          width: 40vw;
          height: 40vw;
          background: var(--accent-glow);
          filter: blur(120px);
          border-radius: 50%;
          top: -10%;
          right: -5%;
          opacity: 0.3;
          pointer-events: none;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .kicker {
          color: var(--accent);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 1rem;
        }

        .hero-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          line-height: 0.95;
          font-weight: 800;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          letter-spacing: -0.03em;
        }

        .hero-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.6rem, 3.6vw, 2.6rem);
          line-height: 1.15;
          margin-bottom: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .hero-copy {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          max-width: 500px;
          line-height: 1.7;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .primary-cta {
          background: var(--accent);
          color: white;
          padding: 0.95rem 2rem;
          border-radius: 8px;
          font-weight: 700;
          display: inline-block;
          transition: all 0.3s ease;
          border: 1px solid var(--accent);
          font-size: 0.95rem;
        }

        .primary-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px var(--accent-glow);
        }

        .secondary-cta {
          border: 1px solid var(--border);
          color: var(--text);
          padding: 0.95rem 2rem;
          border-radius: 8px;
          font-weight: 700;
          display: inline-block;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .secondary-cta:hover {
          border-color: var(--accent);
          background: rgba(59, 130, 246, 0.1);
        }

        .hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .stats-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
          display: grid;
          gap: 1.5rem;
        }

        .stat-item {
          display: grid;
          gap: 0.5rem;
        }

        .stat-value {
          font-family: 'Syne', sans-serif;
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--accent-light);
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .stat-divider {
          height: 1px;
          background: var(--border);
        }

        /* SECTIONS */
        .section {
          padding: 5rem 5%;
          border-bottom: 1px solid var(--border-light);
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          margin-bottom: 3rem;
          letter-spacing: -0.01em;
        }

        /* ABOUT */
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          max-width: 1000px;
        }

        .about-text {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.8;
        }

        /* SKILLS */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .skill-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          border-color: var(--accent);
          background: rgba(59, 130, 246, 0.08);
          transform: translateY(-4px);
        }

        .skill-card h3 {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text);
        }

        .pill-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .pill-cloud span {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .pill-cloud span:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: var(--accent);
          color: var(--accent-light);
        }

        /* EXPERIENCE */
        .experience-list {
          display: grid;
          gap: 2rem;
        }

        .exp-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2.5rem;
          transition: all 0.3s ease;
        }

        .exp-card:hover {
          border-color: var(--accent);
          background: rgba(59, 130, 246, 0.08);
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .exp-info h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .exp-role {
          color: var(--accent);
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 0.8rem;
        }

        .exp-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .exp-content {
          display: grid;
          gap: 2rem;
        }

        .exp-points {
          list-style: none;
          display: grid;
          gap: 0.8rem;
        }

        .exp-points li {
          color: var(--text-muted);
          padding-left: 1.5rem;
          position: relative;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .exp-points li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: 700;
        }

        .exp-tech {
          display: grid;
          gap: 1rem;
        }

        .tech-label {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .tech-pill {
          background: rgba(168, 85, 247, 0.1);
          border-color: rgba(168, 85, 247, 0.3) !important;
          color: #d8b4fe;
        }

        .tech-pill:hover {
          background: rgba(168, 85, 247, 0.2);
          border-color: #d8b4fe !important;
        }

        /* PROJECTS */
        .projects-list {
          display: grid;
          gap: 2rem;
        }

        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2.5rem;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          border-color: var(--accent);
          background: rgba(59, 130, 246, 0.08);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .project-header h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .project-summary {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 0.8rem;
        }

        .project-type {
          color: var(--accent);
          font-weight: 600;
          font-size: 0.85rem;
        }

        .project-link {
          color: var(--accent-light);
          font-weight: 700;
          font-size: 0.95rem;
          white-space: nowrap;
          padding: 0.5rem 1rem;
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: rgba(59, 130, 246, 0.15);
          border-color: var(--accent-light);
        }

        .project-points {
          list-style: none;
          display: grid;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .project-points li {
          color: var(--text-muted);
          padding-left: 1.5rem;
          position: relative;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .project-points li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: 700;
        }

        .project-period {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* CONTACT */
        .contact-section {
          padding: 5rem 5% 6rem;
        }

        .contact-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-intro {
          font-size: 1.05rem;
          color: var(--text-muted);
          margin-bottom: 3rem;
          line-height: 1.7;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .contact-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.8rem;
          transition: all 0.3s ease;
          display: grid;
          gap: 0.6rem;
        }

        .contact-card:hover {
          border-color: var(--accent);
          background: rgba(59, 130, 246, 0.08);
        }

        .contact-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
        }

        .contact-value {
          font-size: 0.95rem;
          color: var(--text);
          font-weight: 600;
        }

        /* FOOTER */
        .footer {
          padding: 2.5rem 5%;
          text-align: center;
          border-top: 1px solid var(--border-light);
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        /* ANIMATIONS */
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
                      transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .topbar {
            padding: 1rem 4%;
          }

          .topnav {
            position: fixed;
            top: 60px;
            left: 0;
            width: 100vw;
            height: calc(100vh - 60px);
            flex-direction: column;
            gap: 1.5rem;
            background: rgba(10, 14, 26, 0.95);
            backdrop-filter: blur(12px);
            padding: 2rem;
            border-top: 1px solid var(--border);
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            z-index: 50;
            align-items: flex-start;
          }

          .topnav.is-open {
            transform: translateX(0);
          }

          .topnav a::after {
            display: none;
          }

          .menu-toggle {
            display: flex;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-content {
            grid-template-columns: 1fr;
          }

          .hero-right {
            margin-top: 2rem;
          }

          .exp-header {
            flex-direction: column;
            gap: 1rem;
          }

          .project-header {
            flex-direction: column;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .topbar {
            padding: 1rem 3%;
          }

          .section {
            padding: 3rem 3%;
          }

          .section-title {
            font-size: 1.8rem;
            margin-bottom: 2rem;
          }

          .hero-block {
            padding: 3rem 3% 2rem;
            min-height: auto;
          }

          .hero-name {
            font-size: 2.7rem;
          }

          .hero-headline {
            font-size: 1.5rem;
          }

          .hero-copy {
            font-size: 1rem;
          }

          .hero-cta {
            flex-direction: column;
          }

          .primary-cta,
          .secondary-cta {
            width: 100%;
            text-align: center;
          }

          .stats-card {
            padding: 1.5rem;
          }

          .pill-cloud {
            gap: 0.4rem;
          }

          .pill-cloud span {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default App
