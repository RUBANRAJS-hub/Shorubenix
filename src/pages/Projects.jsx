import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiCode, FiExternalLink, FiX, FiCheckCircle, FiTerminal, FiLayers } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { PROJECTS_DATA, PROJECT_CATEGORIES as CATEGORIES } from '../data/projects'
import { COMPANY_INFO } from '../data/company'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import Card from '../components/common/Card'
import './Projects.css'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const getWhatsAppLink = (projectTitle) => {
    const text = encodeURIComponent(
      `Hi Shorubenix Info Technology, I am interested in the IEEE/Industrial Project: "${projectTitle}". Please share full documentation and pricing details!`
    )
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`
  }

  return (
    <div className="projects-page page-enter bg-black min-h-screen pt-32 pb-20">
      {/* Hero Header */}
      <section className="projects-hero section text-center mb-8">
        <div className="app-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">⚡ 2026 Verified Catalog</span>
            <h1 className="projects-hero__title font-afacad gold-gradient-text text-5xl font-bold mt-2">
              IEEE &amp; Enterprise Project Repository
            </h1>
            <p className="projects-hero__sub text-gray-300 text-base max-w-2xl mx-auto mt-3">
              Explore 100% original, Turnitin-verified research projects and production-ready web applications built with Next.js, Python, AI, and Blockchain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Controls Bar */}
      <section className="section pt-0">
        <div className="app-container">
          <div className="controls-bar glass-card p-6 border border-gray-800 rounded-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="search-wrap relative w-full md:w-96">
              <FiSearch className="search-icon absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by topic, keyword, or tech (e.g. Python, AI)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input w-full bg-black/60 border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white text-sm focus:border-amber-500 outline-none"
              />
            </div>

            <div className="tabs-wrap flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`tab-btn px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                      : 'bg-gray-900 text-gray-300 hover:bg-gray-800 border border-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="empty-results text-center py-20 bg-gray-950/40 rounded-2xl border border-gray-800">
              <FiCode size={48} className="mx-auto text-amber-500/50 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No Matching Projects Found</h3>
              <p className="text-gray-400 text-sm">Try tweaking your search query or switching categories.</p>
            </div>
          ) : (
            <motion.div layout className="projects-grid">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="project-card glass-card p-6 border border-gray-800 rounded-2xl flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="project-category-tag px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-xs font-bold">
                            {project.category}
                          </span>
                          <span className="text-xs text-gray-500 font-mono">ID: #{project.id}</span>
                        </div>
                        <h3 className="project-card__title text-xl font-bold text-white font-afacad mb-3">{project.title}</h3>
                        <p className="project-card__desc text-gray-300 text-xs leading-relaxed mb-6">{project.desc}</p>

                        <div className="project-tech-badges flex flex-wrap gap-2 mb-6">
                          {project.tech.map((t) => (
                            <span key={t} className="tech-badge bg-black/40 border border-gray-800 text-amber-300 text-xs px-2.5 py-1 rounded-md">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="project-card__actions grid grid-cols-2 gap-3 pt-4 border-t border-gray-800">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="btn btn-outline py-2 text-xs font-semibold flex items-center justify-center gap-1.5"
                        >
                          <FiTerminal size={14} /> View Code
                        </button>
                        <a
                          href={getWhatsAppLink(project.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-whatsapp py-2 text-xs font-bold flex items-center justify-center gap-1.5"
                        >
                          <FaWhatsapp size={15} /> Request
                        </a>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Details Code Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="modal-backdrop fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="modal-content nx-card-gradient max-w-2xl w-full p-8 rounded-3xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="modal-close-btn absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-full bg-gray-900 border border-gray-800"
              >
                <FiX size={20} />
              </button>

              <span className="modal-category text-xs font-bold uppercase text-amber-400 tracking-wider block mb-2">{selectedProject.category}</span>
              <h3 className="modal-title text-2xl font-bold text-white font-afacad mb-4">{selectedProject.title}</h3>
              
              <div className="modal-body space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-200 mb-2 flex items-center gap-2">
                    <FiTerminal className="text-amber-400" /> Architecture Overview
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed bg-black/50 p-4 rounded-xl border border-gray-800">{selectedProject.desc}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-200 mb-2 flex items-center gap-2">
                    <FiLayers className="text-amber-400" /> Included Modules &amp; Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                    {selectedProject.modules?.map((mod, i) => (
                      <div key={i} className="flex items-center gap-2 bg-gray-950/60 p-2.5 rounded-lg border border-gray-800">
                        <FiCheckCircle className="text-amber-400 flex-shrink-0" />
                        <span>{mod}</span>
                      </div>
                    )) || (
                      <>
                        <div className="flex items-center gap-2 bg-gray-950/60 p-2.5 rounded-lg border border-gray-800"><FiCheckCircle className="text-amber-400" /> Complete 100% Working Code</div>
                        <div className="flex items-center gap-2 bg-gray-950/60 p-2.5 rounded-lg border border-gray-800"><FiCheckCircle className="text-amber-400" /> Turnitin Plagiarism Report (&lt;10%)</div>
                        <div className="flex items-center gap-2 bg-gray-950/60 p-2.5 rounded-lg border border-gray-800"><FiCheckCircle className="text-amber-400" /> Viva-Voce Question Bank</div>
                        <div className="flex items-center gap-2 bg-gray-950/60 p-2.5 rounded-lg border border-gray-800"><FiCheckCircle className="text-amber-400" /> PPT Milestone Slide Decks</div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="modal-footer flex justify-end gap-3 mt-8 pt-4 border-t border-gray-800">
                <button onClick={() => setSelectedProject(null)} className="btn btn-ghost py-2 px-4 text-xs">
                  Close
                </button>
                <a
                  href={getWhatsAppLink(selectedProject.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp py-2 px-6 text-xs font-bold"
                >
                  <FaWhatsapp size={16} /> Request Complete Package
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
