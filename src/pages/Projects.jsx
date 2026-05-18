import { useState } from 'react'
import { FiCode, FiArrowRight, FiCheckCircle, FiBookOpen, FiCpu, FiX, FiSearch } from 'react-icons/fi'
import { SHEETS_CONFIG } from '../sheets.config'
import './Projects.css'

/* ─── Projects Data ─── */
const projectsData = [
  {
    id: 1,
    title: 'AI-Driven Precision Agriculture Irrigation System',
    category: 'AI & IoT',
    tech: ['Python', 'TensorFlow Lite', 'Arduino IoT', 'React.js'],
    desc: 'Smart agriculture platform measuring real-time soil NPK and moisture levels, running edge-AI models to predict exact water demands, synced to a custom dashboard.',
    synopsis: {
      problem: 'Traditional farming methods suffer from critical water wastage and inaccurate crop fertilization timelines due to lack of real-time telemetry data.',
      solution: 'An AI-powered IoT system utilizing edge-computing sensors and deep learning regression models to dynamically manage solenoid valves for optimized micro-irrigation.',
      modules: ['Hardware IoT Telemetry Module', 'Edge Inference AI Model', 'Web Dashboard Control Panel', 'Automated Solenoid Relays'],
      timeline: '4 Weeks Deliverable (Hardware Schematics + Source Code + Synopsis)'
    }
  },
  {
    id: 2,
    title: 'LoveSync: Real-Time Relationship Compatibility Analyzer',
    category: 'Web Apps',
    tech: ['React.js', 'Node.js', 'Express', 'Socket.io', 'MongoDB'],
    desc: 'Commercial micro-SaaS connecting partners through interactive psychological quizzes, dynamic emotional telemetry charts, and live compatibility metrics.',
    synopsis: {
      problem: 'Online relationship assessments are static and lack real-time multiplayer coordination and analytical charts.',
      solution: 'A modern full-stack application establishing active Socket.io communication rooms to parse live user input into high-performance telemetry diagrams.',
      modules: ['Live WebSocket Coordination', 'Chart.js Telemetry Dashboard', 'Psychological Scoring Engines', 'Secure User Auth'],
      timeline: '3 Weeks Deliverable (Production-Ready Source Code + DB Schematics)'
    }
  },
  {
    id: 3,
    title: 'IEEE Scopus Plagiarism-Free Academic Synopsis Builder',
    category: 'Student Support',
    tech: ['Next.js', 'Flask', 'OpenAI API', 'LaTeX Exporter'],
    desc: 'Automated academic abstract assistant parsing standard IEEE journal structures, rewriting research topics, and exporting formatted LaTeX synopses.',
    synopsis: {
      problem: 'Engineering students struggle with formatting project summaries and literature surveys to comply with rigid IEEE and Scopus guidelines.',
      solution: 'An AI-assisted template generator that rewrites student abstracts, checks citation flow, and exports publication-ready LaTeX PDFs.',
      modules: ['IEEE Document Parser', 'AI Plagiarism Rewriter', 'LaTeX Export Engine', 'UGC Formatting Checker'],
      timeline: '2 Weeks Deliverable (AI Prompt Systems + PDF Generator)'
    }
  },
  {
    id: 4,
    title: 'Decentralized Secure Health Record Management Ledger',
    category: 'Web Apps',
    tech: ['Solidity', 'Ethereum', 'React.js', 'IPFS', 'Web3.js'],
    desc: 'Secure medical ecosystem utilizing IPFS for distributed medical records storage and smart contracts for selective patient-doctor access key exchanges.',
    synopsis: {
      problem: 'Centralized hospital record systems are highly vulnerable to ransomware cyberattacks and unauthorized patient data access.',
      solution: 'A Web3 dApp encrypting medical records into IPFS and managing security authorization keys via immutable Ethereum smart contracts.',
      modules: ['Solidity Records Smart Contract', 'IPFS Encrypted Storage Node', 'Doctor-Patient Web3 Interface', 'Metamask Handshake'],
      timeline: '4 Weeks Deliverable (Smart Contract Source + Web3 Web Interface)'
    }
  },
  {
    id: 5,
    title: 'Dynamic Scopus/UGC Indexing Literature Survey Aggregator',
    category: 'Research Papers',
    tech: ['Python (Scrapy)', 'Selenium', 'FastAPI', 'PostgreSQL'],
    desc: 'Academic research engine scraping active IEEE Explorer and Google Scholar citation indices, structuring literature tables with citation counts in a single click.',
    synopsis: {
      problem: 'Research scholars spend dozens of hours manually searching, sorting, and compiling references for their literature reviews.',
      solution: 'An automated web crawler that parses citations, indexes high-impact journals, and generates structured bibliography tables in MS Word format.',
      modules: ['Multi-Source Scraper Engine', 'Reference Verification API', 'Table Generator Module', 'Citation Count Sorter'],
      timeline: '2 Weeks Deliverable (Scraping Script + REST API + Table Exporter)'
    }
  },
  {
    id: 6,
    title: 'Cross-Platform Student Attendance & Academic Portal',
    category: 'Mobile Apps',
    tech: ['Flutter', 'Firebase Auth', 'Node.js', 'MongoDB'],
    desc: 'High-performance mobile application allowing biometric fingerprint authentication, real-time push announcements, exam result reports, and assignment downloads.',
    synopsis: {
      problem: 'Colleges struggle to maintain real-time, tamper-proof student attendance logs and instant notifications for parents.',
      solution: 'A responsive Flutter app linking secure device biometric sensors to centralized Cloud databases, updating parent and student panels instantly.',
      modules: ['Flutter Biometric Authentication', 'Push Notifications Gateway', 'Academic Mark Sheet System', 'Real-Time MongoDB Logs'],
      timeline: '3 Weeks Deliverable (Mobile APK + Admin Web Dashboard)'
    }
  }
]

const categories = ['All', 'Web Apps', 'Mobile Apps', 'AI & IoT', 'Research Papers', 'Student Support']

/* ─── Component ─── */
export default function Projects() {
  const [activeTab, setActiveTab] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)

  // Filter logic
  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = activeTab === 'All' || project.category === activeTab
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  // Pre-filled WhatsApp message helper
  const getWhatsAppLink = (projTitle) => {
    const text = encodeURIComponent(`Hi Shorubenix Info Technology, I am interested in getting pricing and synopsis details for the project: "${projTitle}". Please assist me!`)
    return `https://wa.me/${SHEETS_CONFIG.WHATSAPP_NUMBER}?text=${text}`
  }

  return (
    <div className="projects-page">
      {/* ── Page Header ── */}
      <section className="projects-hero">
        <div className="container">
          <span className="section-tag">Academic & Commercial Excellence</span>
          <h1 className="projects-hero__title">
            Our <span className="gradient-text">Project Portfolio</span>
          </h1>
          <p className="projects-hero__sub">
            Explore our curated selection of high-scoring final year academic projects, Scopus-standard research systems, and production-ready startup MVPs.
          </p>
          <div className="divider" style={{ margin: '24px auto 0' }} />
        </div>
      </section>

      {/* ── Projects Catalog ── */}
      <section className="projects-catalog section">
        <div className="container">
          {/* Controls Bar */}
          <div className="controls-bar glass-card">
            {/* Search Input */}
            <div className="search-wrap">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search by project title or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Filter Tabs */}
            <div className="tabs-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`tab-btn${activeTab === cat ? ' active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Catalog Grid */}
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((proj) => (
                <div key={proj.id} className="project-card glass-card" id={`project-card-${proj.id}`}>
                  <span className="project-category-tag">{proj.category}</span>
                  <h3 className="project-card__title">{proj.title}</h3>
                  <p className="project-card__desc">{proj.desc}</p>
                  
                  {/* Tech stack badges */}
                  <div className="project-tech-badges">
                    {proj.tech.map((t, idx) => (
                      <span key={idx} className="tech-badge">{t}</span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="project-card__actions">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="btn btn-outline btn-sm"
                      id={`view-synopsis-btn-${proj.id}`}
                    >
                      View Synopsis
                    </button>
                    <a
                      href={getWhatsAppLink(proj.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      id={`inquire-whatsapp-btn-${proj.id}`}
                    >
                      Inquire now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-results glass-card">
              <h3>No projects found</h3>
              <p>Try searching for a different keyword or technology name (e.g. React, Python).</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Dynamic Synopsis Modal ── */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-card animate-pulse-glow" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="modal-close-btn"
              aria-label="Close Synopsis Modal"
              id="close-synopsis-modal"
            >
              <FiX size={20} />
            </button>

            {/* Modal Header */}
            <div className="modal-header">
              <span className="modal-category">{selectedProject.category}</span>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <div className="modal-tech-list">
                {selectedProject.tech.map((t, idx) => (
                  <span key={idx} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Problem */}
              <div className="modal-section">
                <h4><FiCpu className="sec-icon" /> The Problem Statement</h4>
                <p>{selectedProject.synopsis.problem}</p>
              </div>

              {/* Solution */}
              <div className="modal-section">
                <h4><FiCheckCircle className="sec-icon" /> The Shorubenix Solution</h4>
                <p>{selectedProject.synopsis.solution}</p>
              </div>

              {/* Modules */}
              <div className="modal-section">
                <h4><FiCode className="sec-icon" /> Key Architectural Modules</h4>
                <ul className="modules-list">
                  {selectedProject.synopsis.modules.map((mod, idx) => (
                    <li key={idx}><span className="bullet">⚡</span> {mod}</li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div className="modal-section timeline-box">
                <h4><FiBookOpen className="sec-icon" /> Academic Execution Timeline</h4>
                <p className="timeline-text">{selectedProject.synopsis.timeline}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <button
                onClick={() => setSelectedProject(null)}
                className="btn btn-outline"
                id="modal-close-action"
              >
                Close View
              </button>
              <a
                href={getWhatsAppLink(selectedProject.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="modal-whatsapp-inquiry"
              >
                Book This Project <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
