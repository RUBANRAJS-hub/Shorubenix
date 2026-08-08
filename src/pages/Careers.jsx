import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiBriefcase, FiMapPin, FiClock, FiCheckCircle, FiArrowRight,
  FiZap, FiUsers, FiAward, FiBookOpen, FiSend, FiX, FiCheck
} from 'react-icons/fi'
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa'
import { COMPANY_INFO } from '../data/company'
import SpotlightCard from '../components/common/SpotlightCard'
import Magnet from '../components/common/Magnet'
import CountUp from '../components/common/CountUp'
import DecryptedText from '../components/common/DecryptedText'
import { useToast } from '../hooks/useToast'
import './Careers.css'

const culturePillars = [
  {
    icon: <FiZap />,
    title: 'High-Impact Engineering',
    desc: 'Work on cutting-edge React 19, Python RAG AI pipelines, Cloud Native microservices, and decentralized blockchain systems.'
  },
  {
    icon: <FiUsers />,
    title: '100% Remote & Hybrid Flexibility',
    desc: 'We value output over hours. Enjoy flexible schedules, autonomous decision-making, and asynchronous team collaboration.'
  },
  {
    icon: <FiBookOpen />,
    title: 'Research & IEEE Mentorship',
    desc: 'Access dedicated R&D labs, sponsor technical papers, publish Scopus research, and attend global technology conferences.'
  },
  {
    icon: <FiAward />,
    title: 'Competitive Growth & Perks',
    desc: 'Performance bonuses, top-tier hardware allowances, continuous learning stipends, and clear fast-track promotion pathways.'
  }
]

const jobOpenings = [
  {
    id: 'ai-eng',
    category: 'Engineering & AI',
    title: 'Senior Full-Stack AI Engineer',
    type: 'Full-Time',
    typeClass: 'opening-badge--fulltime',
    location: 'Remote (Pan-India / Global)',
    experience: '3 - 6 Years',
    desc: 'Architect enterprise LLM pipelines, RAG agent workflows, and responsive React 19 dashboards for international enterprise clients.',
    tags: ['React 19', 'Python', 'FastAPI', 'OpenAI RAG', 'PostgreSQL', 'Docker'],
    responsibilities: [
      'Build end-to-end AI agent architectures using Python and FastAPI',
      'Develop modern responsive React 19 / Next.js web applications',
      'Integrate vector databases (Pinecone, Qdrant) for real-time document search',
      'Collaborate with UI/UX designers to refine digital customer touchpoints'
    ]
  },
  {
    id: 'ui-designer',
    category: 'Design & UI/UX',
    title: 'Lead UI/UX & Motion Designer',
    type: 'Full-Time',
    typeClass: 'opening-badge--fulltime',
    location: 'Remote / Hybrid (Madurai HQ)',
    experience: '2 - 5 Years',
    desc: 'Design futuristic glassmorphic UI systems, interactive micro-animations, and high-converting marketing experiences.',
    tags: ['Figma', 'Framer Motion', 'Design Systems', 'Glassmorphism', 'Prototyping'],
    responsibilities: [
      'Establish enterprise design tokens, component libraries, and visual guidelines',
      'Create high-fidelity interactive wireframes and web prototypes',
      'Conduct user testing sessions to optimize user engagement metrics',
      'Partner with frontend developers to ensure 100% pixel-perfect implementation'
    ]
  },
  {
    id: 'cloud-devops',
    category: 'Engineering & AI',
    title: 'Cloud Native & DevOps Architect',
    type: 'Full-Time',
    typeClass: 'opening-badge--fulltime',
    location: 'Remote',
    experience: '4+ Years',
    desc: 'Manage multi-region AWS cloud infrastructure, Kubernetes clusters, serverless CI/CD automation, and security audits.',
    tags: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD Pipelines', 'Linux'],
    responsibilities: [
      'Deploy zero-downtime microservices on AWS EKS and EC2',
      'Automate Infrastructure as Code using Terraform and GitHub Actions',
      'Perform regular vulnerability scans and cloud cost optimization audits',
      'Maintain 99.99% operational uptime across enterprise deployments'
    ]
  },
  {
    id: 'academic-writer',
    category: 'Academic & R&D',
    title: 'IEEE & Academic Technical Researcher',
    type: 'Full-Time / Part-Time',
    typeClass: 'opening-badge--fulltime',
    location: 'Remote',
    experience: '1 - 4 Years',
    desc: 'Guide academic research scholars, author Scopus-indexed LaTeX manuscripts, and validate Python/MATLAB simulation models.',
    tags: ['IEEE LaTeX', 'Scopus Mentorship', 'Python Simulation', 'MATLAB', 'Technical Writing'],
    responsibilities: [
      'Draft and format publication-ready IEEE conference & journal manuscripts',
      'Ensure verified Turnitin plagiarism compliance (<10% threshold)',
      'Construct mathematical simulation scripts in Python and Simulink',
      'Conduct mock viva-voce prep sessions for final-year scholars'
    ]
  },
  {
    id: 'mobile-dev',
    category: 'Engineering & AI',
    title: 'Senior Mobile Engineer (Flutter / React Native)',
    type: 'Full-Time',
    typeClass: 'opening-badge--fulltime',
    location: 'Remote',
    experience: '3+ Years',
    desc: 'Develop high-performance iOS and Android applications with smooth 60fps animations and offline sync engines.',
    tags: ['Flutter', 'React Native', 'Dart', 'iOS/Android', 'REST/GraphQL API'],
    responsibilities: [
      'Engineer cross-platform mobile apps for Fintech, Healthcare, and E-Commerce',
      'Implement real-time push notification and offline caching architectures',
      'Publish and optimize applications on Apple App Store and Google Play Store'
    ]
  },
  {
    id: 'intern-scholar',
    category: 'Academic & R&D',
    title: 'Student Engineering Intern & Research Fellow',
    type: 'Internship (3 - 6 Months)',
    typeClass: 'opening-badge--intern',
    location: 'Remote / On-site (Madurai HQ)',
    experience: 'Freshers / Final-Year Students',
    desc: 'Hands-on practical training for CSE/IT/ECE students in full-stack web development, AI model building, and viva voce defense.',
    tags: ['React', 'Python', 'Web Development', 'Mentorship', 'PPO Pathway'],
    responsibilities: [
      'Learn production software practices alongside senior software engineers',
      'Build real-world web/mobile project modules under expert supervision',
      'Receive full technical documentation support and pre-placement offers (PPO)'
    ]
  }
]

export default function Careers() {
  const [activeCategory, setActiveCategory] = useState('All Roles')
  const [selectedJob, setSelectedJob] = useState(null)
  const [isApplying, setIsApplying] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { addToast } = useToast()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    message: ''
  })

  const categories = ['All Roles', 'Engineering & AI', 'Design & UI/UX', 'Academic & R&D']

  const filteredJobs = activeCategory === 'All Roles'
    ? jobOpenings
    : jobOpenings.filter((job) => job.category === activeCategory)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setIsApplying(true)

    setTimeout(() => {
      setIsApplying(false)
      setFormSubmitted(true)
      addToast('Application submitted successfully! Our recruitment team will review your profile.', 'success')
    }, 1200)
  }

  const closeModal = () => {
    setSelectedJob(null)
    setFormSubmitted(false)
    setFormData({ name: '', email: '', phone: '', portfolio: '', message: '' })
  }

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi Shorubenix HR Team, I am interested in exploring career opportunities at Shorubenix Info Technology.'
  )}`

  return (
    <div className="careers-page">

      {/* ── 1. Hero Section ── */}
      <section className="careers-hero">
        <div className="app-container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="careers-hero__badge">
              ⚡ <DecryptedText text="Join Our Global Team" speed={50} />
            </div>

            <h1 className="careers-hero__title font-afacad gold-gradient-text">
              Build What's Next with Shorubenix
            </h1>

            <p className="careers-hero__subtitle font-sansation">
              We are a team of passionate software architects, AI researchers, UI/UX strategists, and cloud engineers. At Shorubenix Info Technology, your work directly impacts global enterprise clients and next-generation R&amp;D innovations.
            </p>

            <div className="careers-hero__cta">
              <Magnet strength={25}>
                <a href="#openings" className="bu_tn py-3.5 px-8 font-bold">
                  Explore Open Positions <FiArrowRight />
                </a>
              </Magnet>
              <Magnet strength={25}>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline py-3.5 px-7">
                  <FaWhatsapp size={18} className="text-[#25D366]" /> HR WhatsApp Chat
                </a>
              </Magnet>
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <div className="careers-stats-grid">
            <div className="careers-stat-card">
              <div className="careers-stat-val gold-gradient-text font-afacad">
                <CountUp end={100} suffix="%" />
              </div>
              <div className="careers-stat-lbl font-sansation">Remote &amp; Hybrid Culture</div>
            </div>
            <div className="careers-stat-card">
              <div className="careers-stat-val gold-gradient-text font-afacad">
                <CountUp end={10} suffix="+" />
              </div>
              <div className="careers-stat-lbl font-sansation">R&amp;D Tech Labs</div>
            </div>
            <div className="careers-stat-card">
              <div className="careers-stat-val gold-gradient-text font-afacad">
                <CountUp end={24} suffix="/7" />
              </div>
              <div className="careers-stat-lbl font-sansation">Developer Channels</div>
            </div>
            <div className="careers-stat-card">
              <div className="careers-stat-val gold-gradient-text font-afacad">
                <CountUp end={1000} suffix="+" />
              </div>
              <div className="careers-stat-lbl font-sansation">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Culture & Benefits ── */}
      <section className="careers-culture">
        <div className="app-container">
          <div className="section-header text-center">
            <span className="section-tag mb-3">Why Shorubenix?</span>
            <h2 className="section-title font-afacad gold-gradient-text text-4xl lg:text-5xl font-bold">
              Engineering Culture &amp; Growth Perks
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-2 text-gray-300">
              We empower our engineers with world-class tools, continuous learning allowances, and complete project ownership.
            </p>
          </div>

          <div className="culture-grid">
            {culturePillars.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <SpotlightCard className="culture-card h-full">
                  <div className="culture-icon">{p.icon}</div>
                  <h3 className="culture-card-title font-afacad">{p.title}</h3>
                  <p className="culture-card-desc font-sansation">{p.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Open Positions ── */}
      <section className="careers-openings" id="openings">
        <div className="app-container">
          <div className="section-header text-center mb-10">
            <span className="section-tag mb-3">Hiring Opportunities</span>
            <h2 className="section-title font-afacad gold-gradient-text text-4xl lg:text-5xl font-bold">
              Current Openings
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-2 text-gray-300">
              Find your next role below. We review all applications on a rolling basis.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`category-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Jobs List */}
          <div className="openings-list">
            <AnimatePresence mode="wait">
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="opening-card text-left"
                >
                  <div className="opening-info text-left">
                    <div className="opening-header">
                      <h3 className="opening-title font-afacad">{job.title}</h3>
                      <span className={`opening-badge ${job.typeClass}`}>{job.type}</span>
                    </div>

                    <div className="opening-meta">
                      <div className="opening-meta-item">
                        <FiMapPin className="text-[#21B6FF]" />
                        <span>{job.location}</span>
                      </div>
                      <div className="opening-meta-item">
                        <FiClock className="text-[#21B6FF]" />
                        <span>Experience: {job.experience}</span>
                      </div>
                    </div>

                    <p className="opening-desc font-sansation">{job.desc}</p>

                    <div className="opening-tags">
                      {job.tags.map((t, i) => (
                        <span key={i} className="opening-tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="opening-action">
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="bu_tn py-2.5 px-6 text-xs font-bold uppercase tracking-wider"
                    >
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── 4. Job Application Modal / Drawer ── */}
      <AnimatePresence>
        {selectedJob && (
          <div className="job-modal-overlay">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="job-modal-content text-left"
            >
              <button onClick={closeModal} className="job-modal-close" aria-label="Close modal">
                <FiX size={20} />
              </button>

              {!formSubmitted ? (
                <>
                  <div className="mb-6">
                    <span className={`opening-badge ${selectedJob.typeClass} inline-block mb-2`}>{selectedJob.type}</span>
                    <h2 className="text-2xl font-bold font-afacad gold-gradient-text">{selectedJob.title}</h2>
                    <p className="text-xs text-gray-400 mt-1">{selectedJob.location} • Experience: {selectedJob.experience}</p>
                  </div>

                  <div className="mb-6 bg-[#161622] p-4 rounded-xl border border-gray-800">
                    <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1.5 text-xs text-gray-300">
                      {selectedJob.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FiCheck className="text-[#21B6FF] mt-0.5 shrink-0" size={14} />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <form onSubmit={handleFormSubmit} className="apply-form">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone / WhatsApp Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">LinkedIn / GitHub / Portfolio URL</label>
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        placeholder="https://github.com/yourusername"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Brief Note / Cover Summary</label>
                      <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your background, relevant projects, and why you would like to join Shorubenix..."
                        className="form-textarea"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isApplying}
                      className="bu_tn py-3.5 w-full font-bold flex items-center justify-center gap-2 mt-2"
                    >
                      {isApplying ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <FiSend size={16} /> Submit Job Application
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#21B6FF]/20 border border-[#21B6FF]/40 text-[#21B6FF] flex items-center justify-center mx-auto mb-4 text-2xl">
                    <FiCheckCircle />
                  </div>
                  <h3 className="text-2xl font-bold font-afacad gold-gradient-text mb-2">Application Received!</h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you for applying for <strong className="text-white">{selectedJob.title}</strong> at Shorubenix Info Technology. Our recruitment team will review your application and contact you shortly.
                  </p>
                  <button onClick={closeModal} className="bu_tn py-3 px-8">
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}
