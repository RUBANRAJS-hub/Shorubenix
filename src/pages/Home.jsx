import { Link } from 'react-router-dom'
import {
  FiZap, FiShield, FiClock, FiRefreshCw,
  FiArrowRight, FiCode, FiFileText, FiBookOpen, FiAward
} from 'react-icons/fi'
import './Home.css'

/* ─── Data ─── */
const services = [
  {
    icon: <FiCode size={28} />,
    title: 'Student Projects',
    desc: 'Full-stack web, mobile, and embedded projects tailored to your university guidelines and tech stack.',
    badge: 'Popular',
  },
  {
    icon: <FiBookOpen size={28} />,
    title: 'Paper Publication',
    desc: 'Research paper writing, formatting, and publication support for IEEE, Scopus, and UGC journals.',
    badge: 'Academic',
  },
  {
    icon: <FiFileText size={28} />,
    title: 'PPT & Reports',
    desc: 'Premium presentations, project documentation, and technical reports designed to impress.',
    badge: 'Creative',
  },
  {
    icon: <FiAward size={28} />,
    title: 'Final Year Projects',
    desc: 'End-to-end final year project development with complete source code, synopsis, and demo support.',
    badge: 'Premium',
  },
]

const features = [
  { icon: <FiZap size={24} />,       title: 'Fast Delivery',     desc: 'Deadline-focused execution with transparent milestones.' },
  { icon: <FiShield size={24} />,    title: 'Affordable',        desc: 'Student-friendly pricing without compromising quality.' },
  { icon: <FiClock size={24} />,     title: '24/7 Support',      desc: 'Round-the-clock support via WhatsApp and email.' },
  { icon: <FiRefreshCw size={24} />, title: 'Real-Time Updates', desc: 'Live progress tracking and regular project updates.' },
]

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '50+',  label: 'Journals Published' },
  { value: '24/7', label: 'Support Available' },
]

/* ─── Component ─── */
export default function Home() {
  return (
    <div className="home">
      {/* ── Hero ── */}
      <section className="hero section" id="hero">
        {/* Background glow orbs */}
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />

        <div className="container hero__inner">
          {/* Left */}
          <div className="hero__content">
            <span className="section-tag">🚀 Innovation Starts Here</span>
            <h1 className="hero__title">
              Build <span className="gradient-text">Smart Solutions</span><br />
              with Shorubenix
            </h1>
            <p className="hero__subtitle">
              We craft cutting-edge academic and professional tech solutions — from student projects to
              research publications. Your vision, our code.
            </p>
            <div className="hero__cta-group">
              <Link to="/contact" className="btn btn-primary" id="hero-get-started-btn">
                Get Started <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-ghost" id="hero-contact-btn">
                Contact Us
              </Link>
            </div>

            {/* Stats row */}
            <div className="hero__stats">
              {stats.map(({ value, label }) => (
                <div key={label} className="hero__stat">
                  <span className="hero__stat-value gradient-text">{value}</span>
                  <span className="hero__stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Phoenix Illustration */}
          <div className="hero__visual">
            <div className="hero__visual-ring hero__visual-ring--outer" />
            <div className="hero__visual-ring hero__visual-ring--middle" />
            <div className="hero__visual-core animate-pulse-glow">
              <img
                src="/phoenix_logo.png"
                alt="Shorubenix Phoenix — Futuristic Tech Icon"
                className="hero__phoenix animate-float"
              />
            </div>
            {/* Floating code chips */}
            <div className="hero__chip hero__chip--1">&lt;/&gt;</div>
            <div className="hero__chip hero__chip--2">{ }</div>
            <div className="hero__chip hero__chip--3">AI</div>
            <div className="hero__chip hero__chip--4">01</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll-hint">
          <span />
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section services-sec" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="section-subtitle">
              Premium academic and tech services delivered with precision and passion.
            </p>
            <div className="divider" />
          </div>

          <div className="services-grid">
            {services.map(({ icon, title, desc, badge }) => (
              <div key={title} className="service-card glass-card" id={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="service-card__badge">{badge}</div>
                <div className="service-card__icon">{icon}</div>
                <h3 className="service-card__title">{title}</h3>
                <p className="service-card__desc">{desc}</p>
                <Link to="/services" className="service-card__link">
                  Learn more <FiArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section why-sec" id="why-choose-us">
        <div className="container">
          <div className="why-sec__inner">
            <div className="why-sec__left">
              <span className="section-tag">Why Choose Us</span>
              <h2 className="section-title">
                Built for Results.<br />
                <span className="gradient-text">Trusted by Students.</span>
              </h2>
              <p className="section-subtitle">
                We combine technical expertise with deep academic understanding to deliver work
                that's not just complete — but exceptional.
              </p>
              <Link to="/about" className="btn btn-outline" style={{ marginTop: '32px' }} id="why-learn-more-btn">
                Learn More About Us <FiArrowRight />
              </Link>
            </div>

            <div className="why-sec__right">
              {features.map(({ icon, title, desc }) => (
                <div key={title} className="feature-card glass-card" id={`feature-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="feature-card__icon">{icon}</div>
                  <div>
                    <h4 className="feature-card__title">{title}</h4>
                    <p className="feature-card__desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="section cta-banner" id="cta-banner">
        <div className="container">
          <div className="cta-banner__inner glass-card">
            <div className="cta-banner__glow" />
            <span className="section-tag">Let's Collaborate</span>
            <h2 className="cta-banner__title">
              Have a Project Idea?<br />
              <span className="gradient-text">Let's Build It Together</span>
            </h2>
            <p className="cta-banner__sub">
              Whether it's a final year project, a research paper, or an innovative app —
              we're ready to bring it to life.
            </p>
            <Link to="/contact" className="btn btn-primary cta-banner__btn" id="cta-contact-now-btn">
              Contact Now <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
