import { Link } from 'react-router-dom'
import {
  FiTarget, FiEye, FiCode,
  FiUsers, FiZap, FiArrowRight, FiCheckCircle,
  FiClock, FiMessageCircle, FiTrendingUp,
  FiBookOpen, FiStar
} from 'react-icons/fi'
import './About.css'

/* ─── Static Data ─── */
const stats = [
  { value: '1000+', label: 'Students Supported',   icon: <FiUsers size={22} />    },
  { value: '500+',  label: 'Projects Delivered',    icon: <FiCode size={22} />     },
  { value: '98%',   label: 'Client Satisfaction',   icon: <FiStar size={22} />     },
  { value: '50+',   label: 'Research Publications', icon: <FiBookOpen size={22} /> },
]

const milestones = [
  {
    year: '2021',
    label: 'The Startup Genesis',
    desc: 'Shorubenix Info Technology began operations in a small workspace with limited capital. We focused entirely on small student projects, laying down our core philosophy of student-focused IT support. Gaining the trust of our early clients was a rigorous struggle, but our dedication to on-time deliveries set us apart.',
  },
  {
    year: '2022',
    label: 'Foundation Building and Service Expansion',
    desc: 'During our second year, we expanded our service catalog to incorporate professional research paper documentation and technical reporting. We faced serious struggles balancing rapid academic deadlines and managing heavy resource limitations, forcing us to optimize our delivery pipelines.',
  },
  {
    year: '2023',
    label: 'Growth and Technical Integration',
    desc: 'This phase marked a massive spike in full-stack web and mobile development inquiries. We expanded our technical bandwidth, scaled our dev environments, and successfully supported over 300 students with practical, industry-grade source code and comprehensive presentation training.',
  },
  {
    year: '2024',
    label: 'Brand Recognition and Digital Footprint',
    desc: 'Word-of-mouth recommendations solidified our reputation across engineering universities. We established a strong online presence and structured our public outreach, earning wide recognition for our strict adherence to plagiarism-free work and robust system architectures.',
  },
  {
    year: '2025',
    label: 'Scaling Through Market Challenges',
    desc: 'As workload volume increased significantly, we faced scaling constraints and time management hurdles. By establishing strict workflow systems, expanding our developer network, and optimizing our client communication, we successfully converted these bottlenecks into streamlined operations.',
  },
  {
    year: '2026',
    label: 'Present Day and Future Vision',
    desc: 'Today, Shorubenix is an established brand serving students, startups, and academic researchers pan-India. We are actively expanding our capabilities into AI-driven tools, SaaS platforms, and enterprise software systems, ensuring our clients stay at the cutting edge of tech.',
  },
]

const whyUs = [
  {
    icon: <FiZap size={22} />,
    title: 'Affordable IT Services',
    desc: 'We believe professional-grade tech guidance should not be a financial burden. Our student-friendly pricing starts at highly competitive rates, making quality accessible to all.',
  },
  {
    icon: <FiClock size={22} />,
    title: 'Fast and Reliable Delivery',
    desc: 'Academic and business timelines are absolute. We prioritize deadline-focused execution with clear project milestones so you always stay informed.',
  },
  {
    icon: <FiMessageCircle size={22} />,
    title: 'Real-Time Support Channels',
    desc: 'Whether you require a project revision or a quick clarification before a presentation, our team is accessible 24/7 via WhatsApp and active email support.',
  },
  {
    icon: <FiCheckCircle size={22} />,
    title: '100% Original and Custom Code',
    desc: 'No generic templates. Every script, web application, and document is built entirely from scratch, tailored perfectly to your university or industry guidelines.',
  },
  {
    icon: <FiTrendingUp size={22} />,
    title: 'End-to-End Support and Viva Training',
    desc: 'We stay by your side through the entire process, providing complete deployment support, system explanations, and rigorous viva voice preparation.',
  },
  {
    icon: <FiUsers size={22} />,
    title: 'Trusted by 1000+ Clients',
    desc: 'Our track record spans over a thousand successful projects and satisfied students across major tech hubs and universities.',
  },
]

const founders = [
  {
    name: 'Subbulakshmi',
    role: 'Co-Founder — Operations & Academic Support',
    skills: ['Project Coordination', 'Academic Documentation', 'Client Relations', 'Quality Standards Alignment'],
    vision: 'To democratize professional technology guidance, ensuring every student has access to affordable, high-quality project development and academic support to launch their career with confidence.',
    avatarInitials: 'SL'
  },
  {
    name: 'Ruban Raj',
    role: 'Co-Founder — Technical Lead',
    skills: ['Full-Stack Development', 'UI/UX Design', 'System Architecture', 'Database Management'],
    vision: 'To build robust, practical, and production-ready tech solutions that bridge the gap between academic learning and industry standards, setting a new benchmark for software engineering.',
    avatarInitials: 'RR'
  }
]

/* ─── Component ─── */
export default function About() {
  return (
    <div className="about-page page-enter">

      {/* ── 1. HERO SECTION ── */}
      <section className="about-hero section" id="about-hero">
        <div className="about-hero__orb" />
        <div className="about-hero__orb about-hero__orb--2" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <span className="section-tag">Company Overview</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', maxWidth: 860, margin: '0 auto 20px' }}>
              We Do Not Just Build Projects.<br />
              <span className="gradient-text"><b>We Build Your Tech Future.</b></span>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: 760, margin: '0 auto 16px' }}>
              Shorubenix Info Technology is a pioneering IT services company committed to bridging the gap between theoretical learning and industry execution. Established with a startup spirit, we focus on student-focused IT services, full-stack web and mobile application development, research and journal publication support, and premium documentation. We believe that professional tech engineering should be accessible, affordable, and practical.
            </p>
            <p className="about-hero__mission">
              <span className="gradient-text"><b>Our Core Mission:</b></span> To make industry-level technology support accessible to every student and startup in India, delivered with absolute integrity, reliability, and professional standard.
            </p>
            <div className="divider" />
            <div className="about-hero__ctas">
              <Link to="/contact" className="btn btn-primary" id="about-hero-cta-btn">
                Start Your Project <FiArrowRight />
              </Link>
              <Link to="/services" className="btn btn-ghost" id="about-hero-services-btn">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. FOUNDERS SECTION ── */}
      <section className="section founders-sec" id="founders">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Leadership</span>
            <h2 className="section-title">
              Meet Our <span className="gradient-text"><b>Co-Founders</b></span>
            </h2>
            <p className="section-subtitle">
              The driving force behind Shorubenix Info Technology, combining operations excellence with advanced technical mastery.
            </p>
            <div className="divider" />
          </div>

          <div className="founders-grid">
            {founders.map(({ name, role, skills, vision, avatarInitials }) => (
              <div key={name} className="founder-card glass-card" id={`founder-${name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="founder-card__avatar">
                  <span>{avatarInitials}</span>
                </div>
                <h3 className="founder-card__name"><b>{name}</b></h3>
                <p className="founder-card__role"><b>{role}</b></p>
                <div className="founder-card__skills">
                  <strong>Professional Skills:</strong>
                  <ul>
                    {skills.map(skill => (
                      <li key={skill}>
                        <FiCheckCircle className="skill-check-icon" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="founder-card__vision">
                  <strong>Vision Statement:</strong>
                  <p>&ldquo;{vision}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. STARTUP STORY & STRUGGLES ── */}
      <section className="section story-sec" id="our-story">
        <div className="container">
          <div className="about-story glass-card">
            <div className="about-story__left">
              <div className="about-story__logo-wrap animate-float">
                <img src="/phoenix_logo.png" alt="Shorubenix Phoenix Logo" className="about-story__logo" />
              </div>
              <div className="about-story__badge">
                <span className="gradient-text"><b>Code</b></span>&nbsp;•&nbsp;
                <span className="gradient-text"><b>Solve</b></span>&nbsp;•&nbsp;
                <span className="gradient-text"><b>Deliver</b></span>
              </div>
            </div>
            <div className="about-story__right">
              <span className="section-tag">Our Startup Journey</span>
              <h2 className="section-title">
                Started With a <span className="gradient-text"><b>Problem.</b></span><br />
                Built on <span className="gradient-text"><b>Resilience.</b></span>
              </h2>
              <p className="about-story__text">
                The journey of Shorubenix Info Technology was not a story of overnight success. We started with nothing but a couple of laptops and a shared vision in a tiny workspace. In the early days, our founders worked 16-hour shifts, struggle-testing systems, writing research reports, and managing administrative tasks with minimal margins. 
              </p>
              <p className="about-story__text">
                We faced severe resource limitations, heavy time constraints, and intense market competition. There were times when managing simultaneous university deadlines seemed nearly impossible with our small initial team. However, we chose to convert every single challenge into a lessons-learned ledger, refusing to compromise on project quality or student trust.
              </p>
              <p className="about-story__text" style={{ marginBottom: 32 }}>
                This resilience is what built Shorubenix. Our name carries the spirit of a phoenix, representing a system that constantly rises, refines, and delivers technological brilliance out of complex academic and software challenges.
              </p>
              <Link to="/contact" className="btn btn-primary" id="about-contact-btn">
                Join Our Growing Client Base <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. COMPANY TIMELINE (2021–2026) ── */}
      <section className="section timeline-sec" id="our-journey" style={{ background: 'rgba(10,31,68,0.08)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Timeline History</span>
            <h2 className="section-title">
              Our Journey <span className="gradient-text"><b>From 2021 to 2026</b></span>
            </h2>
            <p className="section-subtitle">
              A comprehensive chronicle of our growth, milestones, challenges, and key achievements over the years.
            </p>
            <div className="divider" />
          </div>
          <div className="timeline">
            {milestones.map(({ year, label, desc }, i) => (
              <div key={year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} id={`milestone-${year}`}>
                <div className="timeline-content glass-card">
                  <span className="timeline-year gradient-text"><b>{year}</b></span>
                  <h4 className="timeline-label"><b>{label}</b></h4>
                  <p className="timeline-desc">{desc}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. GOALS & FUTURE VISION ── */}
      <section className="section goals-sec" id="goals-vision">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Strategic Direction</span>
            <h2 className="section-title">
              Our Future <span className="gradient-text"><b>Goals and Vision</b></span>
            </h2>
            <p className="section-subtitle">
              Establishing a clear direction to scale our operations, foster student innovation, and venture into next-generation technology systems.
            </p>
            <div className="divider" />
          </div>

          <div className="mission-grid">
            <div className="mission-card glass-card" id="goals-card">
              <div className="mission-card__icon">
                <FiTarget size={28} />
              </div>
              <h3 className="mission-card__title"><b>🎯 Strategic Goals</b></h3>
              <p className="mission-card__text">
                We are actively expanding our service architectures to deliver robust software and academic support across more engineering domains, driven by affordability and quality.
              </p>
              <ul className="mission-card__list">
                <li><FiCheckCircle size={14} /> <b>Affordable IT Services:</b> Providing premium research paper drafting and project architectures at highly student-friendly rates.</li>
                <li><FiCheckCircle size={14} /> <b>Industry-Level Standards:</b> Engineering academic projects using the exact development standards, architectures, and guidelines as commercial SaaS products.</li>
                <li><FiCheckCircle size={14} /> <b>SaaS and AI Expansion:</b> Transitioning to develop custom AI tools and software-as-a-service utilities to help automate academic documentation.</li>
              </ul>
            </div>
            <div className="mission-card glass-card" id="vision-card">
              <div className="mission-card__icon mission-card__icon--vision">
                <FiEye size={28} />
              </div>
              <h3 className="mission-card__title"><b>🚀 Future Vision</b></h3>
              <p className="mission-card__text">
                To build an inclusive tech ecosystem that serves as India&apos;s most reliable academic software partner, empowering thousands of students to step confidently into technical careers.
              </p>
              <ul className="mission-card__list">
                <li><FiCheckCircle size={14} /> <b>Student Innovation Hub:</b> Establishing a launchpad to help students turn theoretical final year projects into validated software products.</li>
                <li><FiCheckCircle size={14} /> <b>10,000+ Student Milestone:</b> Reaching and supporting 10,000+ engineering students with practical code and research guidance.</li>
                <li><FiCheckCircle size={14} /> <b>Pan-India Academic Footprint:</b> Expanding operations to partner with schools and technical colleges in every state by 2027.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. GOOGLE REVIEWS & CLIENT TRUST ── */}
      <section className="section reviews-sec" id="client-trust" style={{ background: 'rgba(10,31,68,0.08)' }}>
        <div className="container">
          <div className="success-inner">
            <div className="success-inner__text">
              <span className="section-tag">Client Trust Growth</span>
              <h2 className="section-title">
                Google Reviews <span className="gradient-text"><b>and Trust Journey</b></span>
              </h2>
              <p className="section-subtitle">
                Trust is not given, it is earned transaction by transaction. Over the 2021 to 2026 journey, we started with zero reviews. By focusing heavily on client feedback, implementing unlimited revisions, and maintaining a strict plagiarism-free standard, our positive review track record has grown exponentially. Today, our Google Reviews represent a strong foundation of student and startup client trust.
              </p>
              <div className="success-motivational">
                <p><b>Client Satisfaction Milestones:</b></p>
                <ul>
                  <li>Rigorous project quality checking and deployment tests</li>
                  <li>Timely response with round-the-clock developer availability</li>
                  <li>Direct access to founders for academic coordination</li>
                </ul>
              </div>
            </div>
            <div className="success-stats-grid">
              {stats.map(({ value, label, icon }) => (
                <div key={label} className="stat-card glass-card" id={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="stat-card__icon">{icon}</div>
                  <div className="stat-card__value gradient-text"><b>{value}</b></div>
                  <div className="stat-card__label"><b>{label}</b></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. WHY CHOOSE US LIST ── */}
      <section className="section why-choose-sec" id="why-choose-us">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Value Proposition</span>
            <h2 className="section-title">
              Why Clients <span className="gradient-text"><b>Choose Shorubenix</b></span>
            </h2>
            <p className="section-subtitle">
              We stand apart through our commitment to transparency, technical excellence, and customized academic project delivery.
            </p>
            <div className="divider" />
          </div>
          <div className="why-grid">
            {whyUs.map(({ icon, title, desc }) => (
              <div key={title} className="why-card glass-card">
                <div className="why-card__icon">{icon}</div>
                <h4 className="why-card__title"><b>{title}</b></h4>
                <p className="why-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA SECTION ── */}
      <section className="section about-cta-section" id="about-cta">
        <div className="container">
          <div className="about-cta-card glass-card">
            <div className="about-cta-card__glow" />
            <span className="section-tag">Start Today</span>
            <h2 className="about-cta-card__title">
              Your Project Journey<br />
              <span className="gradient-text"><b>Starts With a Single Conversation.</b></span>
            </h2>
            <p className="about-cta-card__sub">
              Do not let complex project requirements or intense paper publication processes stall your career milestones. Reach out today for a professional, quick-response consultation.
            </p>
            <div className="about-cta-card__actions">
              <a
                href="https://wa.me/918778584218?text=Hi%20Shorubenix!%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn whatsapp-cta-btn"
                id="about-whatsapp-btn"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
              <Link to="/contact" className="btn btn-primary" id="about-cta-contact-btn">
                Send Us a Message <FiArrowRight />
              </Link>
            </div>
            <p className="about-cta-card__note">
              📧 shorubenixinfotechnology@gmail.com &nbsp;|&nbsp; 📞 +91 8778584218 (Admin) &nbsp;|&nbsp; +91 6384640244 (Support)
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
