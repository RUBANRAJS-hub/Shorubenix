import { Link } from 'react-router-dom'
import {
  FiZap, FiShield, FiClock, FiRefreshCw,
  FiArrowRight, FiCode, FiFileText, FiBookOpen, FiAward, FiStar
} from 'react-icons/fi'
import { SHEETS_CONFIG } from '../sheets.config'
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

const googleReviews = [
  {
    id: 1,
    name: 'Vijay Kumar',
    role: 'Student, CSE',
    initials: 'VK',
    rating: 5,
    text: 'Exceptional final year project support! Ruban and Subbulakshmi helped me build a custom AI-driven IoT system. The code was clean, fully commented, and their viva prep support helped me score an A+!',
    time: '2 weeks ago',
  },
  {
    id: 2,
    name: 'Deepika R.',
    role: 'Research Scholar',
    initials: 'DR',
    rating: 5,
    text: 'I got IEEE paper publication guidance from Shorubenix. Their literature survey drafting and research methodology section was extremely detailed and plagiarism-free. Highly recommended for any student researcher!',
    time: '3 weeks ago',
  },
  {
    id: 3,
    name: 'Sanjay Shrinivas',
    role: 'Startup Founder',
    initials: 'SS',
    rating: 5,
    text: 'We hired Shorubenix for full-stack React and Node web app development. The website is extremely responsive on mobile, loads in less than a second, and their post-delivery support is incredibly fast. Brilliant job!',
    time: '1 month ago',
  },
  {
    id: 4,
    name: 'Abinaya K.',
    role: 'Engineering Graduate',
    initials: 'AK',
    rating: 5,
    text: 'Extremely professional! They delivered my web app project and detailed technical project reports 3 days before my university deadline. Their quick response on WhatsApp saved my final presentation!',
    time: '1 month ago',
  },
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
            <div className="hero__chip hero__chip--2">{"{ }"}</div>
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

      {/* ── Live Google Reviews ── */}
      <section className="section reviews-sec" id="google-reviews">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Client Reviews</span>
            <h2 className="section-title">
              What Our Clients Say on <span className="gradient-text">Google</span>
            </h2>
            <p className="section-subtitle">
              Verified feedback from CSE/IT engineering students, researchers, and early-stage startups.
            </p>
            <div className="divider" />
          </div>

          <div className="reviews-layout">
            {/* Google Rating Summary Card */}
            <div className="reviews-summary glass-card">
              <div className="google-brand-meta">
                <svg viewBox="0 0 24 24" width="36" height="36" className="google-icon">
                  <path fill="#EA4335" d="M12 5.04c1.62 0 3.08.56 4.22 1.64l3.15-3.15C17.45 1.74 14.96 1 12 1 7.35 1 3.39 3.65 1.5 7.5l3.6 2.8C6.01 7.15 8.78 5.04 12 5.04z" />
                  <path fill="#4285F4" d="M23.49 12.27c0-.8-.07-1.56-.2-2.3H12v4.51h6.44c-.28 1.47-1.11 2.71-2.36 3.55l3.66 2.84c2.14-1.97 3.39-4.88 3.39-8.6z" />
                  <path fill="#FBBC05" d="M5.1 14.8c-.24-.72-.38-1.5-.38-2.3s.14-1.58.38-2.3l-3.6-2.8C.54 9.1 0 10.5 0 12s.54 2.9 1.5 4.6l3.6-2.8z" />
                  <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.92l-3.66-2.84c-1.01.67-2.3 1.08-4.3 1.08-3.22 0-5.99-2.11-6.9-5.26l-3.6 2.8C3.39 20.35 7.35 23 12 23z" />
                </svg>
                <div className="google-text-meta">
                  <h4>Google Rating</h4>
                  <span className="live-sync-indicator">
                    <span className="pulse-dot" /> Live Verified
                  </span>
                </div>
              </div>

              <div className="rating-score-block">
                <span className="rating-score-val">4.9</span>
                <div className="rating-stars-wrap">
                  <div className="stars-row">
                    <FiStar className="star-icon filled" />
                    <FiStar className="star-icon filled" />
                    <FiStar className="star-icon filled" />
                    <FiStar className="star-icon filled" />
                    <FiStar className="star-icon filled" />
                  </div>
                  <span className="reviews-count-text">Based on 128 reviews</span>
                </div>
              </div>

              <p className="summary-desc">
                We are highly recommended for detailed CSE project development, IEEE publications, and quick 24-hour delivery constraints.
              </p>

              <a
                href={SHEETS_CONFIG.GOOGLE_REVIEW_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary write-review-btn"
                id="google-write-review-btn"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Write a Review
              </a>
            </div>

            {/* Reviews Grid */}
            <div className="reviews-grid-carousel">
              {googleReviews.map(({ id, name, role, initials, rating, text, time }) => (
                <div key={id} className="review-card glass-card" id={`google-review-${id}`}>
                  <div className="review-card__header">
                    <div className="reviewer-avatar">
                      <span>{initials}</span>
                    </div>
                    <div className="reviewer-meta">
                      <h4 className="reviewer-name">{name}</h4>
                      <span className="reviewer-role">{role}</span>
                    </div>
                    <div className="verified-badge-wrap">
                      <span className="verified-google-badge">Verified</span>
                    </div>
                  </div>

                  <div className="review-card__rating">
                    {[...Array(rating)].map((_, i) => (
                      <FiStar key={i} className="star-icon filled" size={14} style={{ color: '#FBBC05' }} />
                    ))}
                    <span className="review-time">{time}</span>
                  </div>

                  <p className="review-card__text">“{text}”</p>
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
