import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiUsers, FiZap, FiArrowRight, FiCheckCircle,
  FiClock, FiMessageCircle, FiTrendingUp
} from 'react-icons/fi'
import { FaWhatsapp, FaQuoteLeft } from 'react-icons/fa'
import { COMPANY_INFO } from '../data/company'
import TiltedCard from '../components/common/TiltedCard'
import './About.css'

const milestones = [
  {
    year: '2021',
    label: 'The Startup Genesis',
    desc: 'Shorubenix Info Technology began operations focusing on small student engineering projects and custom web tools.',
  },
  {
    year: '2022',
    label: 'Service & R&D Expansion',
    desc: 'Expanded our service catalog to incorporate IEEE research paper documentation, LaTeX typesetting, and technical reporting.',
  },
  {
    year: '2023',
    label: 'Full-Stack & Cloud Integration',
    desc: 'Massive growth in MERN, Next.js, and Python ML inquiries. Scaled our developer bandwidth and cloud infrastructure.',
  },
  {
    year: '2024',
    label: 'Brand Recognition & Pan-India Reach',
    desc: 'Solidified our reputation across top engineering universities with verified Turnitin <10% plagiarism reports.',
  },
  {
    year: '2025',
    label: 'Enterprise Outsourcing & AI Labs',
    desc: 'Established dedicated AI labs for LLM RAG pipelines, smart contracts, and commercial SaaS microservices.',
  },
  {
    year: '2026',
    label: 'Present Day & Global Expansion',
    desc: 'Today, Shorubenix is an established digital transformation leader serving global enterprises, startups, and researchers.',
  },
]

const whyUs = [
  { icon: <FiZap size={22} />, title: 'Affordable Tech Services', desc: 'We believe professional-grade tech guidance should be accessible to all students and startups.' },
  { icon: <FiClock size={22} />, title: 'Fast and Reliable Delivery', desc: 'Prioritizing deadline-focused execution with clear project milestones so you stay informed.' },
  { icon: <FiMessageCircle size={22} />, title: 'Real-Time Developer Channels', desc: '24/7 accessibility via WhatsApp, Telegram, and active email support.' },
  { icon: <FiCheckCircle size={22} />, title: '100% Original Custom Code', desc: 'No generic templates. Built entirely from scratch to match university and business guidelines.' },
  { icon: <FiTrendingUp size={22} />, title: 'Viva Training & Mentorship', desc: 'Complete deployment support, system explanations, and simulated viva voce prep.' },
  { icon: <FiUsers size={22} />, title: 'Trusted Track Record', desc: 'Spans over 1,000 successful projects and satisfied clients.' },
]

export default function About() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi Shorubenix Info Technology, I would like to learn more about your team and discuss a project.'
  )}`

  return (
    <div className="about-page">

      {/* ── 1. Hero ── */}
      <section className="about-hero section" id="about-hero">
        <div className="app-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2E7A]/40 border border-[#21B6FF]/40 shadow-md">
                <img src="/phoenix_logo.png" alt="Shorubenix Phoenix" className="w-5 h-5 object-contain animate-pulse" />
                <span className="text-[#21B6FF] text-xs font-extrabold tracking-wider uppercase">CODE • SOLVE • DELIVER</span>
              </div>
              <span className="section-tag">⚡ Company Overview</span>
            </div>
            <h1 className="section-title font-afacad gold-gradient-text">
              We Do Not Just Build Software. We Build Your Digital Future.
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Shorubenix Info Technology is a pioneering digital transformation and software development house committed to bridging the gap between innovative startup visions and enterprise-ready execution.
            </p>
            <div className="about-hero__btns">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <FaWhatsapp size={18} /> Chat on WhatsApp
              </a>
              <Link to="/contact" className="btn btn-primary">
                Start Your Project <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Founders / Leadership ── */}
      <section className="founders-sec" id="founders">
        <div className="app-container">
          <div className="section-header">
            <span className="section-tag">Our Leadership</span>
            <h2 className="section-title font-afacad gold-gradient-text">
              Meet Our Leadership
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Meet the driving force behind Shorubenix Info Technology, combining operational excellence with technical mastery.
            </p>
          </div>

          <div className="founders-grid">
            {COMPANY_INFO.founders.map(({ name, role, bio, vision, avatarInitials, imageSrc }, idx) => (
              <motion.div
                key={name}
                className="executive-founder-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                {/* Portrait Header */}
                <div className="founder-portrait-header">
                  <div className="founder-portrait-frame">
                    <TiltedCard
                      imageSrc={
                        imageSrc ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=300&background=0B2E7A&color=21B6FF&bold=true&font-size=0.38`
                      }
                      altText={`${name} — ${role}`}
                      captionText={name}
                      containerHeight="220px"
                      containerWidth="220px"
                      imageHeight="220px"
                      imageWidth="220px"
                      rotateAmplitude={12}
                      scaleOnHover={1.06}
                      showMobileWarning={false}
                      showTooltip={false}
                      displayOverlayContent={true}
                      overlayContent={
                        <div className="founder-tilt-overlay">
                          <span className="founder-initials-badge">{avatarInitials}</span>
                        </div>
                      }
                    />
                  </div>
                </div>

                {/* Founder Info Details */}
                <div className="founder-card-body">
                  <div className="founder-role-badge">
                    <span className="role-pill">{role}</span>
                  </div>

                  <h3 className="founder-name">{name}</h3>

                  {bio && <p className="founder-bio">{bio}</p>}

                  {vision && (
                    <div className="founder-quote-box">
                      <FaQuoteLeft className="quote-icon" />
                      <p className="quote-text">&ldquo;{vision}&rdquo;</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Mission & Vision ── */}
      <section className="mission-vision-sec" id="mission-vision">
        <div className="app-container">
          <div className="section-header">
            <span className="section-tag">Our Purpose</span>
            <h2 className="section-title font-afacad gold-gradient-text">
              Mission &amp; Vision
            </h2>
          </div>
          <div className="mission-grid">
            <div className="nx-card-gradient">
              <div className="nx-card-gradient__inner">
                <span className="section-tag" style={{ marginBottom: 16 }}>Our Mission</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-heading)', marginBottom: 12 }}>
                  Democratizing High-Tech Excellence
                </h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.75 }}>
                  To offer top-tier custom software development, cloud solutions, and IEEE-compliant R&amp;D project assistance with 100% code ownership, enabling students and startups to lead in the digital era.
                </p>
              </div>
            </div>

            <div className="nx-card-gradient">
              <div className="nx-card-gradient__inner">
                <span className="section-tag" style={{ marginBottom: 16 }}>Our Vision</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-heading)', marginBottom: 12 }}>
                  Shaping Future SaaS &amp; AI
                </h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.75 }}>
                  To become the most trusted technical partner for digital transformation and academic R&amp;D, converting complex ideas into scalable, production-ready software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Timeline ── */}
      <section className="timeline-sec" id="our-journey">
        <div className="app-container">
          <div className="section-header">
            <span className="section-tag">Timeline History</span>
            <h2 className="section-title font-afacad gold-gradient-text">
              Our Journey From 2021 to 2026
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A comprehensive chronicle of our growth, milestones, and technical achievements over the years.
            </p>
          </div>

          <div className="timeline-grid">
            {milestones.map(({ year, label, desc }, idx) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.09 }}
                className="timeline-card"
              >
                <span className="timeline-card__year">{year}</span>
                <h4 className="timeline-card__label">{label}</h4>
                <p className="timeline-card__desc">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Why Choose Us ── */}
      <section className="why-choose-sec" id="why-choose-us">
        <div className="app-container">
          <div className="section-header">
            <span className="section-tag">Value Proposition</span>
            <h2 className="section-title font-afacad gold-gradient-text">
              Why Clients Choose Shorubenix
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We stand apart through our commitment to transparency, technical excellence, and customized project delivery.
            </p>
          </div>

          <div className="why-grid">
            {whyUs.map(({ icon, title, desc }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className="why-card">
                  <div className="why-card__icon">{icon}</div>
                  <h4 className="why-card__title">{title}</h4>
                  <p className="why-card__desc">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
