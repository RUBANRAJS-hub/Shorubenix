import { Link } from 'react-router-dom'
import {
  FiTarget, FiEye, FiCode,
  FiUsers, FiZap, FiArrowRight, FiCheckCircle,
  FiClock, FiMessageCircle, FiTrendingUp,
  FiAward, FiBookOpen, FiFileText, FiGlobe, FiStar
} from 'react-icons/fi'
import './About.css'

/* ─── Data ─── */
const stats = [
  { value: '1000+', label: 'Students Supported',   icon: <FiUsers size={22} />    },
  { value: '500+',  label: 'Projects Delivered',    icon: <FiCode size={22} />     },
  { value: '95%',   label: 'Client Satisfaction',   icon: <FiStar size={22} />     },
  { value: '50+',   label: 'Research Publications', icon: <FiBookOpen size={22} /> },
]

const milestones = [
  {
    year: '2020', label: 'Where It All Began',
    desc: `Two developers. One mission. We started from a small room with a big problem to solve — students were struggling to get quality tech support for their academic projects. We decided to change that.`,
  },
  {
    year: '2021', label: '100 Projects Milestone',
    desc: `Within the first year, we had successfully delivered 100+ projects across multiple universities. Word spread fast — students knew they could count on us to deliver, not just promise.`,
  },
  {
    year: '2022', label: 'Research Wing Launched',
    desc: `We saw another gap — students needed help with research papers too. We launched our academic publication service, helping students get published in IEEE, Scopus, and UGC journals.`,
  },
  {
    year: '2023', label: 'AI & Full-Stack Expansion',
    desc: `As technology evolved, so did we. We added AI/ML solutions, full-stack web apps, and mobile development to our service portfolio — future-proofing our student support system.`,
  },
  {
    year: '2024', label: '500+ Clients & Growing',
    desc: `Today, we serve students from 10+ universities across India. With 95% satisfaction and 500+ projects delivered, we're not just a service — we're a movement for student success.`,
  },
]

const services = [
  {
    icon: <FiAward size={26} />, id: 'service-fyp',
    title: 'Final Year Projects',
    desc: `From concept to code — we build complete, submission-ready final year projects with source code, documentation, and viva support. Your grade matters. Our delivery reflects that.`,
  },
  {
    icon: <FiBookOpen size={26} />, id: 'service-research',
    title: 'Research Paper Publication',
    desc: `Got an idea worth publishing? We write, format, and guide your research paper to get accepted in recognized journals. Your research deserves to be seen by the world.`,
  },
  {
    icon: <FiFileText size={26} />, id: 'service-ppt',
    title: 'PPT & Report Creation',
    desc: `Professional presentations and technical reports that speak for you — even before you say a word. Designed to impress professors, clients, and investors alike.`,
  },
  {
    icon: <FiGlobe size={26} />, id: 'service-web',
    title: 'Website & App Development',
    desc: `Whether you're a student building a portfolio or a startup launching a product — we develop modern, fast, and scalable websites and applications that stand out.`,
  },
]

const whyUs = [
  {
    icon: <FiZap size={22} />, title: 'Starting at Just \u20b91,999',
    desc: `We believe great tech shouldn't cost a fortune. Our student-friendly pricing starts at \u20b91,999 — because every student deserves professional-grade support.`,
  },
  {
    icon: <FiClock size={22} />, title: 'Fast & Reliable Delivery',
    desc: `Deadlines are non-negotiable in academics. We deliver on time, every time — with milestone tracking so you always know where your project stands.`,
  },
  {
    icon: <FiMessageCircle size={22} />, title: 'Real-Time WhatsApp Support',
    desc: `Got a doubt at 11 PM before submission? We're there. Our team is reachable on WhatsApp and email 24/7 — because your peace of mind matters.`,
  },
  {
    icon: <FiCheckCircle size={22} />, title: '100% Original Work',
    desc: `No copy-paste. No shortcuts. Every project is built fresh — tailored to your requirements, your university, and your tech stack.`,
  },
  {
    icon: <FiTrendingUp size={22} />, title: 'End-to-End Project Support',
    desc: `We don't just build and disappear. From concept to viva presentation, we stay by your side — explaining, revising, and supporting every step.`,
  },
  {
    icon: <FiUsers size={22} />, title: 'Trusted by 1000+ Students',
    desc: `Over a thousand students have trusted us with their most important academic work. Their success is our testimonial — and it keeps growing every day.`,
  },
]

const quotes = [
  { text: `Your project is not just an assignment — it's your first step into the real tech world.`, author: '— Shorubenix Team' },
  { text: `Every great developer started with a final year project. Make yours count.`, author: '— Shorubenix Belief' },
  { text: `We don't just help you submit. We help you shine.`, author: '— Our Promise' },
]

/* ─── Component ─── */
export default function About() {
  return (
    <div className="about-page page-enter">

      {/* ── 1. HERO INTRODUCTION ── */}
      <section className="about-hero section" id="about-hero">
        <div className="about-hero__orb" />
        <div className="about-hero__orb about-hero__orb--2" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <span className="section-tag">🔥 Who We Are</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', maxWidth: 760, margin: '0 auto 20px' }}>
              We Don&apos;t Just Build Projects.<br />
              <span className="gradient-text">We Build Your Future.</span>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: 680, margin: '0 auto 16px' }}>
              Shorubenix Info Technology is a next-generation IT services company built
              for students, startups, and small businesses who refuse to settle for average.
              We combine technical mastery with academic insight to deliver solutions that
              actually work — and actually matter.
            </p>
            <p className="about-hero__mission">
              <span className="gradient-text">Our Mission:</span> To make world-class technology
              accessible to every student and small business in India — affordably, reliably, and with heart.
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

      {/* ── 2. OUR BEGINNING ── */}
      <section className="section" id="our-beginning">
        <div className="container">
          <div className="about-story glass-card">
            <div className="about-story__left">
              <div className="about-story__logo-wrap animate-float">
                <img src="/phoenix_logo.png" alt="Shorubenix Phoenix Logo" className="about-story__logo" />
              </div>
              <div className="about-story__badge">
                <span className="gradient-text">Code</span>&nbsp;•&nbsp;
                <span className="gradient-text">Solve</span>&nbsp;•&nbsp;
                <span className="gradient-text">Deliver</span>
              </div>
            </div>
            <div className="about-story__right">
              <span className="section-tag">Our Beginning</span>
              <h2 className="section-title">
                Started With a <span className="gradient-text">Problem.</span><br />
                Built for a <span className="gradient-text">Purpose.</span>
              </h2>
              <p className="about-story__text">
                It was 2020. Engineering students across India were panicking — final year deadlines
                looming, professors demanding polished work, but no reliable, affordable support in sight.
                Freelancers were expensive. Agencies didn&apos;t understand academic requirements.
                And students were left to figure it all out alone.
              </p>
              <p className="about-story__text">
                That&apos;s where Shorubenix began. Founded by a group of developers and researchers
                who had lived that exact struggle, we built the company we wished existed when we were
                students. Simple as that.
              </p>
              <p className="about-story__text" style={{ marginBottom: 32 }}>
                Our name &ldquo;Shorubenix&rdquo; carries the spirit of a phoenix — always rising, always
                evolving, always delivering brilliance from the ashes of complexity. That&apos;s what we
                do for our students every single day.
              </p>
              <Link to="/contact" className="btn btn-primary" id="about-contact-btn">
                Join Our Growing Family <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR JOURNEY (Timeline) ── */}
      <section className="section" id="our-journey" style={{ background: 'rgba(10,31,68,0.08)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">
              From Zero to <span className="gradient-text">1000+ Students</span>
            </h2>
            <p className="section-subtitle">
              Every great company has a story. Ours is built on late nights, tough deadlines,
              happy students, and the relentless drive to get better.
            </p>
            <div className="divider" />
          </div>
          <div className="timeline">
            {milestones.map(({ year, label, desc }, i) => (
              <div key={year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} id={`milestone-${year}`}>
                <div className="timeline-content glass-card">
                  <span className="timeline-year gradient-text">{year}</span>
                  <h4 className="timeline-label">{label}</h4>
                  <p className="timeline-desc">{desc}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHAT WE DO ── */}
      <section className="section" id="what-we-do">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">
              Services Built for <span className="gradient-text">Student Success</span>
            </h2>
            <p className="section-subtitle">
              Four core services. One clear goal — help you deliver your best work,
              on time, every time.
            </p>
            <div className="divider" />
          </div>
          <div className="about-services-grid">
            {services.map(({ icon, title, desc, id }) => (
              <div key={id} className="about-service-card glass-card" id={id}>
                <div className="about-service-card__icon">{icon}</div>
                <h3 className="about-service-card__title">{title}</h3>
                <p className="about-service-card__desc">{desc}</p>
                <Link to="/services" className="about-service-card__link">
                  Learn more <FiArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. OUR SUCCESS (Stats) ── */}
      <section className="section success-section" id="our-success">
        <div className="container">
          <div className="success-inner">
            <div className="success-inner__text">
              <span className="section-tag">Our Achievements</span>
              <h2 className="section-title">
                Numbers That Tell <span className="gradient-text">Our Story</span>
              </h2>
              <p className="section-subtitle">
                We don&apos;t just talk results — we prove them. Every number here
                represents a student whose project we delivered, a deadline we
                met, and a dream we helped make real.
              </p>
              <p className="success-motivational">
                <em>&ldquo;When you trust us with your project, you&apos;re not just a client — you&apos;re our mission.&rdquo;</em>
              </p>
            </div>
            <div className="success-stats-grid">
              {stats.map(({ value, label, icon }) => (
                <div key={label} className="stat-card glass-card" id={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="stat-card__icon">{icon}</div>
                  <div className="stat-card__value gradient-text">{value}</div>
                  <div className="stat-card__label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Motivational Quotes ── */}
      <section className="section" style={{ paddingTop: 0 }} id="motivational">
        <div className="container">
          <div className="quotes-row">
            {quotes.map(({ text, author }) => (
              <blockquote key={author} className="quote-card glass-card">
                <FiStar className="quote-card__star" />
                <p className="quote-card__text">&ldquo;{text}&rdquo;</p>
                <cite className="quote-card__author">{author}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WHY CHOOSE US ── */}
      <section className="section" id="why-choose-us" style={{ background: 'rgba(10,31,68,0.08)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Shorubenix</span>
            <h2 className="section-title">
              Because You Deserve <span className="gradient-text">Better Than Average</span>
            </h2>
            <p className="section-subtitle">
              Here&apos;s what makes us different — and why 1000+ students keep coming back.
            </p>
            <div className="divider" />
          </div>
          <div className="why-grid">
            {whyUs.map(({ icon, title, desc }) => (
              <div key={title} className="why-card glass-card">
                <div className="why-card__icon">{icon}</div>
                <h4 className="why-card__title">{title}</h4>
                <p className="why-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. VISION & MISSION ── */}
      <section className="section mission-section" id="vision-mission">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Direction</span>
            <h2 className="section-title">
              Where We Are &amp; <span className="gradient-text">Where We&apos;re Headed</span>
            </h2>
            <div className="divider" />
          </div>
          <div className="mission-grid">
            <div className="mission-card glass-card" id="mission-card">
              <div className="mission-card__icon">
                <FiTarget size={28} />
              </div>
              <h3 className="mission-card__title">🎯 Our Mission</h3>
              <p className="mission-card__text">
                To deliver premium technology and academic solutions that empower every student
                and small business to achieve their goals — faster, smarter, and with full confidence.
              </p>
              <ul className="mission-card__list">
                <li><FiCheckCircle size={14} /> Affordable, high-quality project support</li>
                <li><FiCheckCircle size={14} /> Honest timelines, real-time communication</li>
                <li><FiCheckCircle size={14} /> Empowering students to own their success</li>
              </ul>
            </div>
            <div className="mission-card glass-card" id="vision-card">
              <div className="mission-card__icon mission-card__icon--vision">
                <FiEye size={28} />
              </div>
              <h3 className="mission-card__title">🚀 Our Vision</h3>
              <p className="mission-card__text">
                To become India&apos;s most trusted academic technology partner — known not just
                for what we build, but for how many students we help rise above their limitations
                and step confidently into the professional world.
              </p>
              <ul className="mission-card__list">
                <li><FiCheckCircle size={14} /> Serving every college in India by 2027</li>
                <li><FiCheckCircle size={14} /> 10,000+ student success stories</li>
                <li><FiCheckCircle size={14} /> A brand synonymous with student trust</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CTA ── */}
      <section className="section about-cta-section" id="about-cta">
        <div className="container">
          <div className="about-cta-card glass-card">
            <div className="about-cta-card__glow" />
            <span className="section-tag">Ready to Begin?</span>
            <h2 className="about-cta-card__title">
              Your Success Story<br />
              <span className="gradient-text">Starts With One Message.</span>
            </h2>
            <p className="about-cta-card__sub">
              Don&apos;t let a project hold back your potential. Whether it&apos;s a final year
              project, a research paper, or a website — we&apos;re one message away.
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
