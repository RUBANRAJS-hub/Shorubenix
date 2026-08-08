import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiArrowRight, FiCode, FiLayers,
  FiServer, FiCpu, FiChevronLeft, FiChevronRight, FiStar
} from 'react-icons/fi'
import {
  FaFigma, FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaHtml5, FaEthereum,
  FaPenNib, FaCropSimple, FaVectorSquare, FaLayerGroup
} from 'react-icons/fa6'
import {
  SiFramer, SiTypescript, SiTailwindcss, SiVite, SiFastapi, SiPostgresql, SiMongodb,
  SiPytorch, SiTensorflow, SiOpenai, SiSolidity
} from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'

import { REVIEWS_DATA } from '../data/reviews'
import { useFaqs } from '../hooks/useFaqs'
import Accordion from '../components/common/Accordion'
import Card from '../components/common/Card'
import Badge from '../components/common/Badge'
import CodeTerminalAnimation from '../components/common/CodeTerminalAnimation'
import MatrixBackground from '../components/common/MatrixBackground'
import HeroThreeGlobe3D from '../components/common/HeroThreeGlobe3D'
import TechStack3DCanvas from '../components/common/TechStack3DCanvas'

// ReactBits 2026 Interactive Components
import DecryptedText from '../components/common/DecryptedText'
import SpotlightCard from '../components/common/SpotlightCard'
import CountUp from '../components/common/CountUp'
import Magnet from '../components/common/Magnet'

import './Home.css'

// Bullet Icon Component
const BulletIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="bullet-icon" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.8267 7.32816L7.02968 13.1258C6.93973 13.2157 6.81741 13.2665 6.69004 13.2665H0.481356C0.0534622 13.2665 -0.161006 12.7493 0.141718 12.4471C1.91467 10.6724 5.95273 6.63273 5.95273 6.63273C5.95273 6.63273 1.91413 2.59409 0.141718 0.819449C-0.161042 0.517264 0.0534622 0 0.481356 0H6.69008C6.81744 0 6.93977 0.0508376 7.02972 0.140748L9.66069 2.77172L12.8268 5.93726C13.2105 6.32159 13.2105 6.94384 12.8267 7.32816Z" fill="#21B6FF" />
    <path d="M9.19592 7.32816L3.39886 13.1258C3.30892 13.2157 3.18659 13.2665 3.05922 13.2665H0.481356C0.0534622 13.2665 -0.161006 12.7493 0.141718 12.4471C1.91467 10.6724 5.95273 6.63273 5.95273 6.63273C5.95273 6.63273 1.91413 2.59409 0.141718 0.819449C-0.161042 0.517264 0.0534622 0 0.481356 0H3.05926C3.18662 0 3.30895 0.0508376 3.3989 0.140748L9.19595 5.93723C9.57967 6.32159 9.57967 6.94384 9.19592 7.32816Z" fill="#1380D2" />
    <path d="M9.19594 7.32812L3.39888 13.1257C3.30894 13.2157 3.18661 13.2665 3.05925 13.2665H1.54883C1.67619 13.2665 1.79852 13.2157 1.88847 13.1257L7.85311 7.16054C8.23686 6.77621 8.23686 6.4891 7.85311 6.10482L1.88847 0.140748C1.79852 0.0508016 1.67619 0 1.54883 0H3.05925C3.18661 0 3.30894 0.0508376 3.39888 0.140748L9.19594 5.93723C9.57969 6.32155 9.57969 6.9438 9.19594 7.32812Z" fill="#0B2E7A" />
  </svg>
)

// NxDeep Solutions Carousel Data
const breakthroughSolutions = [
  {
    id: 1,
    title: 'Cloud Migration & Modern Infrastructure',
    icon: <FiServer className="text-[#21B6FF] text-4xl" />,
    desc: 'Adoption of cloud platforms that can be scaled easily will provide higher performance, enhanced security, and global accessibility. Legacy systems are updated by integrating microservices and APIs.',
    points: ['Serverless & Kubernetes Deployment', 'Zero-Downtime Migration Pipelines', 'Automated Infrastructure as Code']
  },
  {
    id: 2,
    title: 'AI Engineering & Generative Intelligence',
    icon: <FiCpu className="text-[#21B6FF] text-4xl" />,
    desc: 'Harness LLMs, predictive modeling, and automated data pipelines to transform raw enterprise data into actionable insights and high-converting automated customer workflows.',
    points: ['Custom Machine Learning Pipelines', 'RAG & AI Agent Architectures', 'Computer Vision & Data Science']
  },
  {
    id: 3,
    title: 'Enterprise Software & Custom Web Apps',
    icon: <FiCode className="text-[#21B6FF] text-4xl" />,
    desc: 'Building bespoke ERP, CRM, and high-performance Web/Mobile applications tailored specifically to modern corporate requirements with pixel-perfect responsive execution.',
    points: ['React 19 & Next.js Ecosystems', 'Scalable Node / Python Microservices', 'Enterprise Security & Compliance']
  },
  {
    id: 4,
    title: 'Blockchain & Decentralized Ecosystems',
    icon: <FiLayers className="text-[#21B6FF] text-4xl" />,
    desc: 'Empowering businesses with smart contracts, tokenomics, DeFi protocols, and Web3 integration for transparent, tamper-proof global digital assets.',
    points: ['Solidity Smart Contract Audits', 'DeFi & Crypto Exchange Engines', 'Web3 Identity & Asset Systems']
  }
]

// Tabbed Services Showcase Data
const serviceShowcase = [
  {
    num: '01',
    title: 'Software & Web Development Excellence',
    heading: 'Custom Software & Web Engineering',
    desc: 'Shorubenix Info Technology delivers pre-built and custom software solutions according to your exact requirements. Our ERP, CRM, and HRMS platforms unify operations, customer engagement, and workforce management.',
    bullets: ['Custom Web App Architecture', 'Progressive Web Apps (PWA)', 'Microservice & API Integration', 'Database Optimization & Security']
  },
  {
    num: '02',
    title: 'Emerging Technologies & Innovation',
    heading: 'AI Models, Generative AI & Web3',
    desc: 'Pioneer the future with integrated Artificial Intelligence, Machine Learning models, and decentralized blockchain systems designed for seamless enterprise automation.',
    bullets: ['Predictive Machine Learning', 'Smart Contracts & Web3 DApps', 'Computer Vision & NLP', 'Automated AI Data Bots']
  },
  {
    num: '03',
    title: 'Strategic Outsourcing & Off-Shore Solutions',
    heading: 'Dedicated Developer & Tech Teams',
    desc: 'Scale your engineering bandwidth rapidly with dedicated full-stack developers, UI/UX designers, and DevOps engineers tailored to your sprint schedules.',
    bullets: ['Dedicated Engineering Talent', 'Agile Team Augmentation', '24/7 Operations Support', 'Cost-Effective Delivery']
  },
  {
    num: '04',
    title: 'Business Support & Academic R&D',
    heading: 'Research Mentorship & Tech Guidance',
    desc: 'Empowering research scholars, academic institutions, and corporate R&D teams with publication-ready IEEE LaTeX documentation and validated simulation architectures.',
    bullets: ['IEEE & Scopus Mentorship', 'Turnitin Plagiarism Verification (<10%)', 'Simulink & MATLAB Modeling', 'Viva Voce & Technical Defense']
  }
]

// Tech Stack Categories
const techCategories = [
  {
    name: 'Frontend Tech',
    tools: [
      { name: 'React 19', icon: <FaReact size={28} className="text-[#21B6FF]" /> },
      { name: 'Next.js', icon: <RiNextjsFill size={28} className="text-[#21B6FF]" /> },
      { name: 'TypeScript', icon: <SiTypescript size={28} className="text-[#21B6FF]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={28} className="text-[#21B6FF]" /> },
      { name: 'Vite', icon: <SiVite size={28} className="text-[#21B6FF]" /> },
      { name: 'HTML5/CSS3', icon: <FaHtml5 size={28} className="text-[#21B6FF]" /> }
    ]
  },
  {
    name: 'Backend & Cloud',
    tools: [
      { name: 'Node.js', icon: <FaNodeJs size={28} className="text-[#21B6FF]" /> },
      { name: 'Python', icon: <FaPython size={28} className="text-[#21B6FF]" /> },
      { name: 'FastAPI', icon: <SiFastapi size={28} className="text-[#21B6FF]" /> },
      { name: 'AWS', icon: <FaAws size={28} className="text-[#21B6FF]" /> },
      { name: 'Docker', icon: <FaDocker size={28} className="text-[#21B6FF]" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql size={28} className="text-[#21B6FF]" /> }
    ]
  },
  {
    name: 'AI & Blockchain',
    tools: [
      { name: 'PyTorch', icon: <SiPytorch size={28} className="text-[#21B6FF]" /> },
      { name: 'TensorFlow', icon: <SiTensorflow size={28} className="text-[#21B6FF]" /> },
      { name: 'OpenAI API', icon: <SiOpenai size={28} className="text-[#21B6FF]" /> },
      { name: 'Solidity', icon: <SiSolidity size={28} className="text-[#21B6FF]" /> },
      { name: 'MongoDB', icon: <SiMongodb size={28} className="text-[#21B6FF]" /> },
      { name: 'Ethereum', icon: <FaEthereum size={28} className="text-[#21B6FF]" /> }
    ]
  }
]

// Delivery Steps
const deliverySteps = [
  { step: '01', title: 'Consultation & Scope', desc: 'In-depth analysis of your business goals, user personas, and technical requirements.' },
  { step: '02', title: 'Architecture & Design', desc: 'Crafting UI/UX wireframes, system diagrams, and scalable database schemas.' },
  { step: '03', title: 'Agile Sprint Build', desc: 'Fast, modular development with frequent code reviews and live staging builds.' },
  { step: '04', title: 'QA & Security Testing', desc: 'Comprehensive unit, performance, and vulnerability testing to guarantee stability.' },
  { step: '05', title: 'Cloud Deployment', desc: 'Seamless launch to AWS, Vercel, or custom servers with zero-downtime CI/CD.' },
  { step: '06', title: '24/7 Support & Scale', desc: 'Continuous monitoring, routine maintenance, and feature enhancements.' }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeServiceIdx, setActiveServiceIdx] = useState(0)
  const [activeTechCategory, setActiveTechCategory] = useState(0)
  const { searchQuery, setSearchQuery, activeFaq, toggleFaq, faqs } = useFaqs()

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % breakthroughSolutions.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + breakthroughSolutions.length) % breakthroughSolutions.length)
  }

  const activeSolution = breakthroughSolutions[currentSlide]
  const activeService = serviceShowcase[activeServiceIdx]

  return (
    <div className="home-page overflow-hidden">
      {/* ── 1. Hero Section ── */}
      <section className="hero-nx relative min-h-screen flex items-center justify-center pt-32 pb-20 bg-black" id="hero">
        <MatrixBackground />
        
        <div className="hero-nx__glow-orb hero-nx__glow-orb--left" />
        <div className="hero-nx__glow-orb hero-nx__glow-orb--right" />

        <div className="app-container hero-nx__inner relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-nx__content text-left"
          >
            <div className="hero-nx__tag-wrap mb-4 flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2E7A]/40 border border-[#21B6FF]/40 shadow-md">
                <img src="/phoenix_logo.png" alt="Shorubenix Phoenix" className="w-5 h-5 object-contain animate-pulse" />
                <span className="text-[#21B6FF] text-xs font-extrabold tracking-wider uppercase">CODE • SOLVE • DELIVER</span>
              </div>
              <span className="section-tag">
                ⚡ <DecryptedText text="Digital Transformation Company" speed={60} />
              </span>
            </div>

            <h1 className="hero-nx__title font-afacad leading-tight text-left">
              <span className="gold-gradient-text block font-bold text-5xl sm:text-6xl lg:text-7xl">Digital</span>
              <span className="gold-gradient-text block font-bold text-4xl sm:text-5xl lg:text-6xl">
                <DecryptedText text="Transformation Company" speed={70} />
              </span>
            </h1>

            <h2 className="hero-nx__subtitle font-sansation text-xl sm:text-2xl text-white font-bold my-4 text-left">
              All-in-One Partner For Seamless Transformation In The Digital Interim
            </h2>

            <p className="hero-nx__desc font-sansation text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl text-left">
              Shorubenix Info Technology emphasizes comprehensive digital transformations, custom software engineering, and modern IT solutions. We assist you in developing a culture of innovation, agility, and continuous learning to thrive in a data-driven enterprise environment.
            </p>

            <div className="hero-nx__cta-group flex items-center gap-4 flex-wrap">
              <Magnet strength={25}>
                <a href="https://t.me/+918925518459" target="_blank" rel="noopener noreferrer" className="bu_tn py-3 px-8">
                  Free Consultation
                </a>
              </Magnet>
              <Magnet strength={25}>
                <Link to="/services" className="btn btn-outline py-3 px-6">
                  Explore Services <FiArrowRight />
                </Link>
              </Magnet>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-nx__3d-wrap w-full flex justify-center"
          >
            <HeroThreeGlobe3D />
          </motion.div>
        </div>
      </section>

      {/* ── 2. Breakthrough Solutions Carousel ── */}
      <section className="breakthrough-sec section" id="breakthroughs">
        <div className="app-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header text-center mb-12"
          >
            <span className="section-tag mb-3">Enterprise Solutions</span>
            <h2 className="section-title font-afacad gold-gradient-text text-4xl lg:text-5xl font-bold text-center">
              From Barriers to Breakthroughs
            </h2>
            <p className="section-subtitle font-sansation text-lg text-white mt-2 text-center">
              The Power of Digital Transformation
            </p>
            <p className="text-gray-300 max-w-3xl mx-auto mt-4 text-sm leading-relaxed text-center">
              Many organizations struggle to keep pace with rapid technology shifts and evolving customer expectations. Traditional business models and outdated legacy systems hold back agility. Shorubenix collaborates with businesses to conquer the digital frontier.
            </p>
          </motion.div>

          <div className="solutions-card-wrapper">
            <div className="solutions-card-inner">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeSolution.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35 }}
                  className="solutions-content-col text-left"
                >
                  <div className="solutions-icon-box mb-4">{activeSolution.icon}</div>
                  <h3 className="solutions-card-title text-left">{activeSolution.title}</h3>
                  <p className="solutions-card-desc text-left">{activeSolution.desc}</p>
                  
                  <div className="solutions-points-grid">
                    {activeSolution.points.map((pt, idx) => (
                      <div key={idx} className="solutions-point-item text-left">
                        <BulletIcon />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="solutions-controls-col text-center">
                <div className="solutions-module-number">0{activeSolution.id}</div>
                <span className="solutions-module-label">Solution Module</span>
                
                <div className="solutions-nav-row justify-center">
                  <Magnet strength={15}>
                    <button onClick={prevSlide} className="nx-nav-btn" aria-label="Previous solution">
                      <FiChevronLeft size={22} />
                    </button>
                  </Magnet>
                  <span className="solutions-counter-text">{currentSlide + 1} / {breakthroughSolutions.length}</span>
                  <Magnet strength={15}>
                    <button onClick={nextSlide} className="nx-nav-btn" aria-label="Next solution">
                      <FiChevronRight size={22} />
                    </button>
                  </Magnet>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Animated Metrics & Impact Stats Counter (ReactBits CountUp) ── */}
      <section className="stats-banner-sec bg-black py-16 border-b border-[#1a1a24]" id="stats">
        <div className="app-container">
          <div className="stats-grid">
            {[
              { val: 10, label: 'Years Of Experience' },
              { val: 90, label: 'Successful Projects' },
              { val: 60, label: 'Technology Consultants' },
              { val: 100, label: 'Worldwide Clients' },
              { val: 50, label: 'Countries Served' }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="stat-card text-center"
              >
                <p className="stat-value font-afacad gold-gradient-text text-center">
                  <CountUp end={stat.val} suffix="+" />
                </p>
                <p className="stat-label font-sansation text-center">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. "Services We Offer For You" Interactive Showcase ── */}
      <section className="services-offer-sec section" id="services-offer">
        <div className="app-container">
          <div className="services-showcase-grid">
            {/* Left Column: Navigation Tabs */}
            <div className="services-tabs-col text-left">
              <span className="section-tag mb-3">Core Offerings</span>
              <h2 className="text-4xl lg:text-5xl font-bold font-afacad gold-gradient-text mb-2 text-left">
                Services
              </h2>
              <p className="text-2xl lg:text-3xl font-bold font-afacad text-white mb-6 text-left">
                We Offer For You
              </p>

              <div className="services-tabs-list">
                {serviceShowcase.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 6 }}
                    onClick={() => setActiveServiceIdx(idx)}
                    className={`service-showcase-tab ${activeServiceIdx === idx ? 'active' : ''}`}
                  >
                    <span className="tab-number">{item.num}</span>
                    <span className="tab-title">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Active Service Showcase Details */}
            <div className="services-details-col text-left">
              <SpotlightCard className="services-details-card">
                <div className="services-details-inner text-left">
                  <div className="service-badge-row">
                    <span className="service-track-badge">Service Track {activeService.num}</span>
                  </div>

                  <h3 className="service-heading text-left">{activeService.heading}</h3>
                  <p className="service-description text-left">{activeService.desc}</p>
                  
                  <div className="service-bullets-grid">
                    {activeService.bullets.map((b, i) => (
                      <div key={i} className="service-bullet-box text-left">
                        <BulletIcon />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="service-cta-row">
                    <Magnet strength={20}>
                      <Link to="/contact" className="bu_tn">
                        Inquire About This Service <FiArrowRight />
                      </Link>
                    </Magnet>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Categorized Technology Stack Grid (Spotlight Cards & Brand Logos) ── */}
      <section className="tech-stack-sec section py-20 bg-black" id="tech-stack">
        <div className="app-container">
          <div className="section-header text-center mb-12">
            <span className="section-tag">Next-Gen Tools</span>
            <h2 className="section-title font-afacad gold-gradient-text text-4xl font-bold mt-2">
              <DecryptedText text="Technologies & Frameworks We Master" speed={50} />
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-2 text-gray-300">
              We leverage modern language stacks, cloud services, and AI engines to engineer robust scalable software.
            </p>
          </div>

          {/* 3D Orbiting Tech Constellation Canvas */}
          <TechStack3DCanvas />

          <div className="tech-tabs-row">
            {techCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTechCategory(idx)}
                className={`tech-tab-btn ${activeTechCategory === idx ? 'tech-tab-btn--active' : ''}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="tech-cards-grid">
            {techCategories[activeTechCategory].tools.map((tool, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -6 }}
              >
                <SpotlightCard className="tech-card-box h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#21B6FF]/10 border border-[#21B6FF]/30 flex items-center justify-center mb-3 shadow-lg shadow-[#21B6FF]/5">
                    {tool.icon}
                  </div>
                  <span className="text-white text-sm font-semibold">{tool.name}</span>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Step-by-Step Delivery Process ── */}
      <section className="process-sec section py-20 bg-[#040406] border-t border-[#1a1a24]" id="process">
        <div className="app-container">
          <div className="section-header text-center mb-12">
            <span className="section-tag">Proven Methodology</span>
            <h2 className="section-title font-afacad gold-gradient-text text-4xl font-bold mt-2">
              Our 6-Stage Delivery Process
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-2 text-gray-300">
              From initial blueprinting to production launch — we maintain complete transparency and technical perfection.
            </p>
          </div>

          <div className="process-cards-grid">
            {deliverySteps.map((s, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <SpotlightCard className="process-card-box group h-full">
                  <div className="text-5xl font-bold font-afacad text-gray-800 group-hover:text-[#21B6FF]/40 transition-colors absolute top-4 right-4">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-afacad mb-3 mt-4">{s.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Verified Client Reviews & Ratings ── */}
      <section className="reviews-sec section py-20 bg-black" id="reviews">
        <div className="app-container">
          <div className="section-header text-center mb-12">
            <span className="section-tag">Client Feedback</span>
            <h2 className="section-title font-afacad gold-gradient-text text-4xl font-bold mt-2">
              What Our Clients Say
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-2 text-gray-300">
              Verified testimonials from global enterprises, startups, and academic research scholars.
            </p>
          </div>

          <div className="reviews-cards-grid">
            {REVIEWS_DATA.slice(0, 3).map((r) => (
              <motion.div key={r.id} whileHover={{ y: -5 }}>
                <SpotlightCard className="review-card-box h-full">
                  <div>
                    <div className="flex items-center gap-1.5 mb-4">
                      {[...Array(r.rating)].map((_, i) => (
                        <FiStar key={i} className="text-[#21B6FF] fill-[#21B6FF]" size={18} />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">“{r.text}”</p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-800/80">
                    <div className="w-10 h-10 rounded-full bg-[#21B6FF]/20 border border-[#21B6FF]/40 text-[#21B6FF] flex items-center justify-center font-bold text-sm">
                      {r.initials}
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-bold">{r.name}</h4>
                      <span className="text-gray-400 text-xs">{r.role}</span>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Technology Partner Program & CTA Banner ── */}
      <section className="partner-banner-sec section py-16 bg-black" id="partner-banner">
        <div className="app-container">
          <SpotlightCard className="partner-cta-card rounded-3xl">
            <span className="section-tag mb-4">Join Our Network</span>
            <h2 className="partner-cta-title gold-gradient-text">
              <DecryptedText text="Technology Partner Program" speed={60} />
            </h2>
            <p className="partner-cta-desc">
              Are you an IT consultancy, agency, or software solution provider? Collaborate with Shorubenix to co-develop scalable enterprise solutions and leverage our specialized R&amp;D engineering pool.
            </p>
            <div className="partner-cta-btns">
              <Magnet strength={25}>
                <Link to="/contact" className="bu_tn py-3 px-8">
                  Become a Partner <FiArrowRight />
                </Link>
              </Magnet>
              <Magnet strength={25}>
                <a href="https://t.me/+918925518459" target="_blank" rel="noopener noreferrer" className="btn btn-outline py-3 px-8">
                  Telegram Inquiry
                </a>
              </Magnet>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* ── 9. Interactive FAQ Section ── */}
      <section className="faq-sec section py-20 bg-[#050507]" id="faq">
        <div className="app-container">
          <div className="section-header text-center mb-12">
            <span className="section-tag">Q&amp;A Knowledge Base</span>
            <h2 className="section-title font-afacad gold-gradient-text text-4xl font-bold mt-2">
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-2 text-gray-300">
              Got questions? Search our database or explore common questions regarding our software services and delivery pipelines.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-10">
            <input
              type="text"
              placeholder="Search topics (e.g., Cloud, AI, Web Development, Plagiarism)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900/90 border border-gray-800 rounded-xl px-6 py-4 text-white focus:border-[#21B6FF] outline-none transition-all"
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion items={faqs} activeIndex={activeFaq} onToggle={toggleFaq} searchQuery={searchQuery} />
          </div>
        </div>
      </section>
    </div>
  )
}
