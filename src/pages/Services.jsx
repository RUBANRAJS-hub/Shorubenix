import { Link } from 'react-router-dom'
import {
  FiCode, FiBookOpen, FiFileText, FiAward,
  FiCpu, FiLayers, FiDatabase, FiGlobe,
  FiArrowRight, FiCheckCircle
} from 'react-icons/fi'
import './Services.css'

const services = [
  {
    id: 'student-projects',
    icon: <FiCode size={32} />,
    title: 'Student Projects',
    badge: 'Most Popular',
    badgeColor: '#00AEEF',
    desc: 'Complete web, mobile, IoT, and embedded system projects built to your university specifications. Includes source code, documentation, and deployment support.',
    features: ['Full Source Code', 'Documentation', 'Viva Preparation', 'Multiple Tech Stacks'],
    color: 'blue',
  },
  {
    id: 'paper-publication',
    icon: <FiBookOpen size={32} />,
    title: 'Paper Publication',
    badge: 'Academic',
    badgeColor: '#7c3aed',
    desc: 'Professional research paper writing, editing, formatting and submission guidance for IEEE, Scopus, UGC, and Springer journals.',
    features: ['Original Research', 'Journal Selection', 'Plagiarism-Free', 'Formatting Support'],
    color: 'purple',
  },
  {
    id: 'ppt-reports',
    icon: <FiFileText size={32} />,
    title: 'PPT & Reports',
    badge: 'Creative',
    badgeColor: '#0891b2',
    desc: 'Stunning PowerPoint presentations, technical project reports, and comprehensive documentation tailored to your audience and guidelines.',
    features: ['Professional Design', 'Content Writing', 'Custom Templates', 'Multiple Formats'],
    color: 'cyan',
  },
  {
    id: 'final-year-projects',
    icon: <FiAward size={32} />,
    title: 'Final Year Projects',
    badge: 'Premium',
    badgeColor: '#ea580c',
    desc: 'End-to-end final year project execution — ideation, development, testing, documentation, and viva support — all in one place.',
    features: ['End-to-End Support', 'Demo Videos', 'Synopsis Writing', 'Deployment Ready'],
    color: 'orange',
  },
  {
    id: 'web-development',
    icon: <FiGlobe size={32} />,
    title: 'Web Development',
    badge: 'New',
    badgeColor: '#16a34a',
    desc: 'Modern, responsive websites and web applications using React, Next.js, Node.js, and other cutting-edge technologies.',
    features: ['React / Next.js', 'Full-Stack', 'SEO Optimized', 'Mobile Responsive'],
    color: 'green',
  },
  {
    id: 'ai-ml-solutions',
    icon: <FiCpu size={32} />,
    title: 'AI / ML Solutions',
    badge: 'Advanced',
    badgeColor: '#db2777',
    desc: 'Machine learning models, deep learning systems, NLP solutions, and AI-powered applications for academic and commercial use.',
    features: ['Python / TensorFlow', 'Model Training', 'Data Analysis', 'Visualization'],
    color: 'pink',
  },
  {
    id: 'database-solutions',
    icon: <FiDatabase size={32} />,
    title: 'Database Solutions',
    badge: 'Technical',
    badgeColor: '#0A1F44',
    desc: 'Database design, optimization, and management for MySQL, MongoDB, PostgreSQL, and Firebase-based applications.',
    features: ['Schema Design', 'Query Optimization', 'Backup & Recovery', 'Cloud DB'],
    color: 'navy',
  },
  {
    id: 'system-design',
    icon: <FiLayers size={32} />,
    title: 'System Design',
    badge: 'Enterprise',
    badgeColor: '#7c3aed',
    desc: 'Complete system architecture, UML diagrams, flowcharts, and technical documentation for your complex software systems.',
    features: ['UML Diagrams', 'Architecture Plans', 'ERD & DFD', 'Technical Docs'],
    color: 'indigo',
  },
]

export default function Services() {
  return (
    <div className="services-page page-enter">
      {/* Page Header */}
      <section className="services-hero section">
        <div className="services-hero__orb" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <span className="section-tag">What We Offer</span>
            <h1 className="section-title">
              Our <span className="gradient-text">Premium Services</span>
            </h1>
            <p className="section-subtitle">
              From student projects to enterprise solutions — we deliver tech excellence
              at every level with speed, quality, and innovation.
            </p>
            <div className="divider" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="services-page-grid">
            {services.map(({ id, icon, title, badge, badgeColor, desc, features }) => (
              <div key={id} className="srv-card glass-card" id={`service-${id}`}>
                <div className="srv-card__header">
                  <div className="srv-card__icon">{icon}</div>
                  <span
                    className="srv-card__badge"
                    style={{ background: `${badgeColor}20`, color: badgeColor, borderColor: `${badgeColor}40` }}
                  >
                    {badge}
                  </span>
                </div>
                <h2 className="srv-card__title">{title}</h2>
                <p className="srv-card__desc">{desc}</p>
                <ul className="srv-card__features">
                  {features.map(f => (
                    <li key={f}>
                      <FiCheckCircle className="srv-card__check" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-outline srv-card__cta" id={`service-${id}-cta`}>
                  Get This Service <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section services-cta">
        <div className="container">
          <div className="glass-card services-cta__inner">
            <div className="services-cta__glow" />
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Don't See What You Need?
              <br />
              <span className="gradient-text">Let's Talk.</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 32px' }}>
              We take on custom projects too. Tell us your requirement and we'll build a tailored solution.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <Link to="/contact" className="btn btn-primary" id="services-cta-btn">
                Contact Us <FiArrowRight />
              </Link>
              <Link to="/about" className="btn btn-ghost" id="services-about-btn">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
