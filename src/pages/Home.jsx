import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiZap, FiShield, FiClock, FiRefreshCw,
  FiArrowRight, FiCode, FiFileText, FiBookOpen, FiAward, FiStar
} from 'react-icons/fi'
import { SHEETS_CONFIG } from '../sheets.config'
import './Home.css'

/* ─── FAQ Data (20 Items) ─── */
const faqData = [
  {
    id: 1,
    question: "What services does Shorubenix Info Technology offer in Madurai?",
    answer: "Shorubenix Info Technology is Madurai's premier hub providing professional software development (React, Next.js, Node.js), CSE/IT final year academic engineering project development (complete source code, 100+ page documentation, live installation), Scopus-indexed research paper drafting, IEEE journal publication guidance, and high-converting PowerPoint presentations."
  },
  {
    id: 2,
    question: "Who are the founders and technical leads of Shorubenix Info Technology?",
    answer: "Shorubenix Info Technology was founded by Ruban Raj S, a Senior Software Architect and cryptography researcher, alongside Subbulakshmi, our lead Academic Coordinator and Research Specialist. Together they drive absolute technical rigor, clean-code standards, and high-impact academic publication success."
  },
  {
    id: 3,
    question: "Which computer science domains do you cover for engineering projects?",
    answer: "We provide custom project development in Artificial Intelligence (AI), Machine Learning (ML), Deep Learning (Python, PyTorch), Full-Stack Web Development (MERN, Next.js), Mobile App Development (Flutter, React Native), Internet of Things (IoT with Raspberry Pi and Arduino), Cloud Computing, Blockchain Smart Contracts (Solidity), and Advanced Cryptographic Security."
  },
  {
    id: 4,
    question: "How does Shorubenix ensure that academic projects are plagiarism-free?",
    answer: "All source code, database structures, and documentation are designed and written 100% from scratch. We run standard industry plagiarism scans on all technical reports and manuscripts before delivery to match strict university standards (less than 10% similarity rate)."
  },
  {
    id: 5,
    question: "Do you provide installation support and viva voce preparation for students?",
    answer: "Yes, we provide 100% complete installation support. We host live screen-sharing sessions (via AnyDesk, Zoom, or Google Meet) to set up and run the code on the student's personal laptop. Additionally, we conduct simulated viva-voce mock interviews and deliver a comprehensive viva question bank with explanations."
  },
  {
    id: 6,
    question: "What deliverables are included with a final year CSE project package?",
    answer: "Our premium end-to-end package includes: (1) 100% working source code, (2) Clean schema SQL/NoSQL database script, (3) A highly detailed 100+ page project report following university format templates, (4) An academic project synopsis, (5) Premium PowerPoint presentations for all review milestones, and (6) 24/7 developer WhatsApp help."
  },
  {
    id: 7,
    question: "How does your Scopus and IEEE publication guidance service work?",
    answer: "Our research consulting guides you through the entire lifecycle: (1) Novel problem identification and literature survey drafting, (2) Architectural planning and mathematical model design, (3) Plagiarism-free writing, (4) Professional LaTeX paper typesetting, and (5) Journal selection and peer-review response coordination."
  },
  {
    id: 8,
    question: "Can you handle emergency or express project deliveries under tight deadlines?",
    answer: "Yes, we specialize in high-speed express project development. We have dedicated rapid-response software engineers who can build fully functional custom React, Node, or Python applications and compile professional documentation in under 48 to 72 hours."
  },
  {
    id: 9,
    question: "Is Shorubenix Info Technology a physically registered business in Madurai?",
    answer: "Yes, we are a physically registered software development and academic research consulting firm. Our primary office is located at Madurai Main Road, Madurai, TN 625001, India, with active geo-coordinates (9.9252° N, 78.1198° E) matching all major maps."
  },
  {
    id: 10,
    question: "Do you develop custom web and mobile applications for startups?",
    answer: "Yes, we build scalable, high-performance Minimum Viable Products (MVPs) for early-stage startups. We specialize in fast-loading React/Next.js frontend applications, secure Node.js REST APIs, relational/document database schemas, and smooth cloud integration on AWS, Vercel, and Heroku."
  },
  {
    id: 11,
    question: "What is the typical price range for a standard final year project?",
    answer: "Our pricing model is highly transparent, flexible, and tailored specifically to student budgets. The price varies depending on the complexity of the domain (e.g., deep learning or IoT hardware requirements) and milestones. We offer easy installment payments as project reviews progress."
  },
  {
    id: 12,
    question: "How do you handle post-delivery bugs or modifications for reviews?",
    answer: "We provide unlimited bug fixes and minor revisions for review milestones absolutely free of charge. If your college guides request modifications or database adjustments after a presentation, our developers will update the code promptly."
  },
  {
    id: 13,
    question: "What IoT hardware modules do you support in your projects?",
    answer: "We support a wide array of embedded and IoT components, including Raspberry Pi 4/5, Arduino Uno/Nano, ESP32 Wi-Fi modules, NodeMCU, various specialized sensors (DHT11, ultrasonic, RFID, biometrics, gas detectors), and cloud platforms like Blynk, Adafruit IO, and AWS IoT Core."
  },
  {
    id: 14,
    question: "Do you offer online classes for project explanation and code walkthroughs?",
    answer: "Yes, every project includes detailed one-on-one virtual walkthrough sessions. Our developer will share their screen and explain the entire architecture line-by-line, including data flows, function definitions, database hooks, and routing logic, so you can present it confidently."
  },
  {
    id: 15,
    question: "Can students customize an existing project idea or request unique features?",
    answer: "Absolutely! We encourage personalization. Students can combine different technologies, add new API features, implement unique UI designs, or integrate specialized machine learning models to make their projects stand out."
  },
  {
    id: 16,
    question: "How can I book a project synopsis or consult with your team?",
    answer: "You can contact our lead developers directly on WhatsApp at +91 8778584218, email us at support@shorubenixinfo.tech, or fill out the project inquiry form on our official website. We will draft and send a free project synopsis within 24 hours."
  },
  {
    id: 17,
    question: "Which engineering departments can benefit from your services?",
    answer: "Our primary domains benefit Computer Science (CSE), Information Technology (IT), Electronics and Communication (ECE), Electrical and Electronics (EEE), and postgraduate degrees like MCA, M.Sc. CS, and M.E. Research Scholars."
  },
  {
    id: 18,
    question: "Do you supply IEEE research papers from recent publishing years (2025/2026)?",
    answer: "Yes, we base our projects on the latest publishing cycles, specializing in implementing systems based on recent 2025 and 2026 IEEE transactions. This guarantees high-scoring evaluations since the systems utilize contemporary technical methodologies."
  },
  {
    id: 19,
    question: "How does Shorubenix maintain confidentiality for student projects?",
    answer: "We operate with strict confidentiality protocols. Your personal details, institute credentials, and custom project codebases are kept highly secure and are never shared or resold to other students or third parties."
  },
  {
    id: 20,
    question: "Why is Shorubenix the highest rated project center in Madurai?",
    answer: "Our exceptional reputation is built on delivering high-quality, fully documented, bug-free applications combined with outstanding 24/7 technical mentorship, which is reflected in our 4.9 average rating by 128+ student reviews on Google."
  }
]

/* ─── Services Data ─── */
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

/* ─── Features Data ─── */
const features = [
  { icon: <FiZap size={24} />,       title: 'Fast Delivery',     desc: 'Deadline-focused execution with transparent milestones.' },
  { icon: <FiShield size={24} />,    title: 'Affordable',        desc: 'Student-friendly pricing without compromising quality.' },
  { icon: <FiClock size={24} />,     title: '24/7 Support',      desc: 'Round-the-clock support via WhatsApp and email.' },
  { icon: <FiRefreshCw size={24} />, title: 'Real-Time Updates', desc: 'Live progress tracking and regular project updates.' },
]

/* ─── Stats Data ─── */
const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '50+',  label: 'Journals Published' },
  { value: '24/7', label: 'Support Available' },
]

/* ─── Google Reviews Data ─── */
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

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFaq, setActiveFaq] = useState(null)

  // Toggle FAQ item collapse
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  // Filter FAQs based on search input (AEO helper)
  const filteredFaqs = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="home">
      {/* ── Hero (H1) ── */}
      <section className="hero section" id="hero">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />

        <div className="container hero__inner">
          <div className="hero__content speakable-intro">
            <span className="section-tag">🚀 Madurai's Leading IT Center</span>
            <h1 className="hero__title">
              IT Company in Madurai & <span className="gradient-text">Final Year Project Center</span> for CSE/IT
            </h1>
            <p className="hero__subtitle speakable-summary">
              Welcome to Shorubenix Info Technology. We are Madurai's leading software development house and academic research consultancy. We specialize in engineering high-scoring MERN stack systems, custom Python Artificial Intelligence (AI/ML) models, IoT hardware systems, and Scopus-indexed IEEE paper publications.
            </p>
            <div className="hero__cta-group">
              <Link to="/contact" className="btn btn-primary" id="hero-get-started-btn">
                Book Project Synopsis <FiArrowRight />
              </Link>
              <Link to="/about" className="btn btn-ghost" id="hero-contact-btn">
                Meet Our Experts
              </Link>
            </div>

            <div className="hero__stats">
              {stats.map(({ value, label }) => (
                <div key={label} className="hero__stat">
                  <span className="hero__stat-value gradient-text">{value}</span>
                  <span className="hero__stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__visual-ring hero__visual-ring--outer" />
            <div className="hero__visual-ring hero__visual-ring--middle" />
            <div className="hero__visual-core animate-pulse-glow">
              <img
                src="/phoenix_logo.png"
                alt="Shorubenix Info Technology Phoenix logo — premium digital software solutions"
                className="hero__phoenix animate-float"
              />
            </div>
            <div className="hero__chip hero__chip--1">Next.js</div>
            <div className="hero__chip hero__chip--2">Python</div>
            <div className="hero__chip hero__chip--3">IEEE</div>
            <div className="hero__chip hero__chip--4">MERN</div>
          </div>
        </div>
      </section>

      {/* ── High-Quality Educational & R&D Copy (GEO/AEO optimized) ── */}
      <section className="section info-sec" id="educational-excellence" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="section-tag">R&D and Academic Integrity</span>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>
                End-to-End <span className="gradient-text">Academic Research</span> & Software Rigor
              </h2>
              <p style={{ color: 'var(--text-gray)', marginBottom: '20px', fontSize: '0.98rem', lineHeight: '1.75' }}>
                At Shorubenix Info Technology, we bridge the gap between academic theories and industry practice. Unlike traditional project training institutes that distribute recycled code templates, we build and document every project entirely from scratch. Every client receives custom-coded architectures corresponding to the latest 2025 and 2026 IEEE transactions.
              </p>
              <p style={{ color: 'var(--text-gray)', marginBottom: '20px', fontSize: '0.98rem', lineHeight: '1.75' }}>
                We cover extensive design and documentation scopes: from database indexing and physical layer schematic wireframes, up to standard performance graphs comparing parameters like throughput, prediction accuracy, and runtime latency. We guarantee less than 10% similarity rates under Turnitin and copy-scan systems, ensuring seamless university approval processes.
              </p>
            </div>
            <div>
              <h3 className="section-title" style={{ fontSize: '1.6rem', marginTop: '12px' }}>
                Complete <span className="gradient-text">Viva Voce Prep</span> and Developer Mentorship
              </h3>
              <p style={{ color: 'var(--text-gray)', marginBottom: '20px', fontSize: '0.98rem', lineHeight: '1.75' }}>
                Preparing for final year presentations can be stressful for computer science (CSE) and information technology (IT) graduates. To ensure your absolute success, Shorubenix assigns dedicated software developers to guide you. We host custom screen-sharing installation sessions (AnyDesk, Zoom) to set up databases, install virtual environments, and configure hardware on your personal machine.
              </p>
              <p style={{ color: 'var(--text-gray)', marginBottom: '24px', fontSize: '0.98rem', lineHeight: '1.75' }}>
                Furthermore, we supply detailed milestone slide decks (PPTs), comprehensive project synopsis reports, and a dedicated viva-voce question bank. Our developers walk you line-by-line through your React frontend files, Node.js controllers, and machine learning scripts so you can speak confidently in front of university examiners.
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Link to="/services" className="btn btn-outline">Explore Project Scope</Link>
                <Link to="/contact" className="btn btn-ghost">Contact Developers</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section services-sec" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">
              Our <span className="gradient-text">Expert Services</span>
            </h2>
            <p className="section-subtitle">
              Professional software development and academic research publication services delivered with extreme precision.
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

      {/* ── High-Density Data Tables (AEO/GEO Citation Rich Section) ── */}
      <section className="section table-sec" id="project-domains-matrix">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Research & Tech Stack Data Matrix</span>
            <h2 className="section-title">
              Authorized <span className="gradient-text">Project Domains & Technologies</span>
            </h2>
            <p className="section-subtitle">
              Detailed technical matrices mapping specialized computing domains, backend tools, turnaround speeds, and custom pricing frameworks.
            </p>
            <div className="divider" />
          </div>

          <div className="table-wrapper">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Computing Domain</th>
                  <th>Core Technology Stack</th>
                  <th>Deliverables Included</th>
                  <th>Turnaround Time</th>
                  <th>Price Range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="highlight-cell">Artificial Intelligence & Deep Learning</td>
                  <td>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">TensorFlow</span>
                    <span className="tech-tag">PyTorch</span>
                    <span className="tech-tag">OpenCV</span>
                  </td>
                  <td>Custom ML model, performance graph dashboard, LaTeX report, PPT slides.</td>
                  <td>7 - 10 Days</td>
                  <td>Budget Friendly</td>
                </tr>
                <tr>
                  <td className="highlight-cell">Full-Stack Web Applications</td>
                  <td>
                    <span className="tech-tag">React.js</span>
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">MongoDB</span>
                  </td>
                  <td>Responsive UI dashboard, JWT auth APIs, database schema script, 100+ page report.</td>
                  <td>5 - 8 Days</td>
                  <td>Flexible Installments</td>
                </tr>
                <tr>
                  <td className="highlight-cell">Mobile App Development</td>
                  <td>
                    <span className="tech-tag">Flutter</span>
                    <span className="tech-tag">React Native</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">Restful API</span>
                  </td>
                  <td>Cross-platform APK & IPA, dashboard backend code, sync report, viva guide.</td>
                  <td>8 - 12 Days</td>
                  <td>Startup Friendly</td>
                </tr>
                <tr>
                  <td className="highlight-cell">Internet of Things (IoT) & Embedded</td>
                  <td>
                    <span className="tech-tag">Raspberry Pi</span>
                    <span className="tech-tag">Arduino</span>
                    <span className="tech-tag">ESP32</span>
                    <span className="tech-tag">Sensors</span>
                  </td>
                  <td>Custom circuit schematics, hardware firmware, web analytics panel, setup video.</td>
                  <td>10 - 15 Days</td>
                  <td>Cost Effective</td>
                </tr>
                <tr>
                  <td className="highlight-cell">Blockchain & Secure Cryptography</td>
                  <td>
                    <span className="tech-tag">Solidity</span>
                    <span className="tech-tag">Ethereum</span>
                    <span className="tech-tag">Web3.js</span>
                    <span className="tech-tag">IPFS</span>
                  </td>
                  <td>Smart Contract scripts, Gas optimization reports, crypto encryption keys, ppt deck.</td>
                  <td>6 - 10 Days</td>
                  <td>Premium Support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T Founders Profile Grid (Trust and Authority Building) ── */}
      <section className="section eeat-sec" id="leadership-team">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Academic Credibility & E-E-A-T</span>
            <h2 className="section-title">
              Our <span className="gradient-text">Founding Experts & Researchers</span>
            </h2>
            <p className="section-subtitle">
              Learn about our highly qualified technical leadership driving top-tier development and scholarly research standards.
            </p>
            <div className="divider" />
          </div>

          <div className="eeat-grid">
            {/* Founder 1 */}
            <div className="founder-card glass-card">
              <div className="founder-avatar-wrap">RR</div>
              <h3 className="founder-name">Ruban Raj S</h3>
              <span className="founder-title">Senior Software Architect & Researcher</span>
              <p className="founder-bio">
                Ruban Raj S is a full-stack engineer and cryptography researcher specializing in Next-Gen web architectures, cloud-native deployments, and distributed systems. With extensive development experience in Node.js, React, and Python AI modeling, he ensures every project code written at Shorubenix meets rigorous enterprise software quality and secure clean-code standards.
              </p>
              <div className="founder-credentials-list">
                <span className="founder-credential">Full-Stack Architect</span>
                <span className="founder-credential">Cryptography Specialist</span>
                <span className="founder-credential">500+ Projects Audited</span>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="founder-card glass-card">
              <div className="founder-avatar-wrap">SL</div>
              <h3 className="founder-name">Subbulakshmi</h3>
              <span className="founder-title">Academic Coordinator & Research Lead</span>
              <p className="founder-bio">
                Subbulakshmi oversees academic project coordination, research methodologies, and publication strategies. She is an expert in IEEE styling, LaTeX typesetting, UGC-Care guidelines, and Scopus journal indexing. She provides thorough literature survey architectures and mathematical formulation support, transforming project outputs into publishable academic manuscripts.
              </p>
              <div className="founder-credentials-list">
                <span className="founder-credential">Academic Coordinator</span>
                <span className="founder-credential">Scopus/IEEE Research Mentor</span>
                <span className="founder-credential">LaTeX & UGC Specialist</span>
              </div>
            </div>
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
                Built for Quality.<br />
                <span className="gradient-text">Trusted by Thousands.</span>
              </h2>
              <p className="section-subtitle">
                We combine industry-level programming experience with comprehensive academic credentials to provide high-quality student projects and research paper writing services in Madurai.
              </p>
              <Link to="/about" className="btn btn-outline" style={{ marginTop: '32px' }} id="why-learn-more-btn">
                Our Research Portfolio <FiArrowRight />
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

      {/* ── Interactive FAQ Accordion (AEO/GEO Critical Target) ── */}
      <section className="section faq-sec" id="faq">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Interactive Q&A Hub</span>
            <h2 className="section-title">
              Frequently <span className="gradient-text">Asked Questions</span>
            </h2>
            <p className="section-subtitle">
              Explore our comprehensive help center to learn more about our development process, SEO optimization, GEO & AEO strategies, E-E-A-T implementation, project delivery standards, and ongoing support services. Find clear answers to common questions and discover how Shorubenix Info Technology helps businesses, startups, and students achieve their digital goals.
            </p>
            <div className="divider" />
          </div>

          {/* Search Input for FAQ searchability (Answer Engine Optimization) */}
          <div className="faq-search-wrapper">
            <input
              type="text"
              placeholder="Search questions or keywords (e.g. Scopus, Viva, Turnitin, Next.js)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-box"
              id="faq-live-search-box"
            />
          </div>

          <div className="faq-accordion">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isActive = activeFaq === index
                return (
                  <div
                    key={faq.id}
                    className={`faq-item ${isActive ? 'active' : ''}`}
                    id={`faq-item-${faq.id}`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isActive}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-icon-wrap">+</span>
                    </button>

                    <div
                      id={`faq-answer-${faq.id}`}
                      className="faq-answer"
                      role="region"
                    >
                      <div className="faq-answer-inner">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              <p className="faq-no-results">No questions match your search query. Try keywords like "Solidity", "Viva", "Anna University", or "plagiarism".</p>
            )}
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
              Have an Innovative Project Idea?<br />
              <span className="gradient-text">Let's Build It Together</span>
            </h2>
            <p className="cta-banner__sub">
              Whether it's a final year engineering project, a LaTeX research paper, or a custom Next.js startup application — our software engineers are ready to bring your vision to life.
            </p>
            <Link to="/contact" className="btn btn-primary cta-banner__btn" id="cta-contact-now-btn">
              Consult with our Team <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
