import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi'
import { FiSun, FiMoon, FiClock, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa'
import { useTheme } from '../../hooks/useTheme'
import { COMPANY_INFO } from '../../data/company'
import './Navbar.css'

// Bullet Icon Component
const BulletIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="bullet-icon" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.8267 7.32816L7.02968 13.1258C6.93973 13.2157 6.81741 13.2665 6.69004 13.2665H0.481356C0.0534622 13.2665 -0.161006 12.7493 0.141718 12.4471C1.91467 10.6724 5.95273 6.63273 5.95273 6.63273C5.95273 6.63273 1.91413 2.59409 0.141718 0.819449C-0.161042 0.517264 0.0534622 0 0.481356 0H6.69008C6.81744 0 6.93977 0.0508376 7.02972 0.140748L9.66069 2.77172L12.8268 5.93726C13.2105 6.32159 13.2105 6.94384 12.8267 7.32816Z" fill="#FFCE00" />
    <path d="M9.19592 7.32816L3.39886 13.1258C3.30892 13.2157 3.18659 13.2665 3.05922 13.2665H0.481356C0.0534622 13.2665 -0.161006 12.7493 0.141718 12.4471C1.91467 10.6724 5.95273 6.63273 5.95273 6.63273C5.95273 6.63273 1.91413 2.59409 0.141718 0.819449C-0.161042 0.517264 0.0534622 0 0.481356 0H3.05926C3.18662 0 3.30895 0.0508376 3.3989 0.140748L9.19595 5.93723C9.57967 6.32159 9.57967 6.94384 9.19592 7.32816Z" fill="#FFA81E" />
    <path d="M9.19594 7.32812L3.39888 13.1257C3.30894 13.2157 3.18661 13.2665 3.05925 13.2665H1.54883C1.67619 13.2665 1.79852 13.2157 1.88847 13.1257L7.85311 7.16054C8.23686 6.77621 8.23686 6.4891 7.85311 0.140748C1.79852 0.0508016 1.67619 0 1.54883 0H3.05925C3.18661 0 3.30894 0.0508376 3.39888 0.140748L9.19594 5.93723C9.57969 6.32155 9.57969 6.9438 9.19594 7.32812Z" fill="#FF9900" />
  </svg>
)

const serviceCategories = [
  {
    id: 'web',
    name: 'Web Development',
    links: [
      { name: 'Web Design & Development', path: '/services#web' },
      { name: 'Web Application Development', path: '/services#webapp' },
      { name: 'Progressive Web Apps (PWA)', path: '/services#pwa' },
      { name: 'E-Commerce Solutions', path: '/services#ecommerce' },
      { name: 'Serverless Microservices', isComingSoon: true }
    ]
  },
  {
    id: 'app',
    name: 'App Development',
    links: [
      { name: 'iOS App Development', path: '/services#ios' },
      { name: 'Android App Development', path: '/services#android' },
      { name: 'Flutter Cross-Platform', path: '/services#flutter' },
      { name: 'React Native Apps', path: '/services#reactnative' },
      { name: 'AR/VR Spatial Mobile Apps', isComingSoon: true }
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise Solutions',
    links: [
      { name: 'Custom ERP Systems', path: '/services#erp' },
      { name: 'CRM & HRMS Automation', path: '/services#crm' },
      { name: 'Cloud Migration & Ops', path: '/services#cloud' },
      { name: 'Microservices & API Architecture', path: '/services#api' },
      { name: 'Quantum Cloud Security', isComingSoon: true }
    ]
  },
  {
    id: 'ai',
    name: 'AI & Data Solutions',
    links: [
      { name: 'AI Models & Generative AI', path: '/services#ai' },
      { name: 'Predictive Analytics', path: '/services#analytics' },
      { name: 'Data Engineering & Lakes', path: '/services#data' },
      { name: 'Machine Learning Pipelines', path: '/services#ml' },
      { name: 'Autonomous Agent Swarms', isComingSoon: true }
    ]
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Web3',
    links: [
      { name: 'Smart Contract Development', path: '/services#smartcontracts' },
      { name: 'DeFi & Exchange Platforms', path: '/services#crypto' },
      { name: 'Tokenomics & NFT Platforms', path: '/services#web3' },
      { name: 'Metaverse DApp Ecosystems', isComingSoon: true }
    ]
  }
]

const industryCategories = [
  {
    id: 'fintech',
    name: 'Fintech & Banking',
    links: [
      { name: 'Fintech Software', path: '/services#fintech' },
      { name: 'Digital Banking Platforms', path: '/services#banking' },
      { name: 'E-Wallet Applications', path: '/services#ewallet' },
      { name: 'Payment Gateway Integration', path: '/services#payments' }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Pharma',
    links: [
      { name: 'Telemedicine Apps', path: '/services#telemed' },
      { name: 'Hospital Management (EHR)', path: '/services#ehr' },
      { name: 'Health Analytics & AI', path: '/services#healthai' },
      { name: 'Medical Telemetry Hubs', isComingSoon: true }
    ]
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    links: [
      { name: 'Fleet Management Software', path: '/services#fleet' },
      { name: 'Warehouse Automation', path: '/services#warehouse' },
      { name: 'Supply Chain Tracking', path: '/services#supply' }
    ]
  },
  {
    id: 'retail',
    name: 'E-Commerce & Retail',
    links: [
      { name: 'Multi-Vendor Marketplace', path: '/services#marketplace' },
      { name: 'POS & Inventory Systems', path: '/services#pos' },
      { name: 'Omnichannel Platforms', path: '/services#retail' }
    ]
  }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeServiceTab, setActiveServiceTab] = useState('web')
  const [activeIndustryTab, setActiveIndustryTab] = useState('fintech')
  const [mobileAccordion, setMobileAccordion] = useState(null)
  const [comingSoonModalItem, setComingSoonModalItem] = useState(null)

  const { theme, toggleTheme } = useTheme()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = ''
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        closeMobile()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen])

  const toggleMobile = () => {
    setMobileOpen((prev) => {
      const next = !prev
      document.body.style.overflow = next ? 'hidden' : ''
      return next
    })
  }

  const closeMobile = () => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }

  const toggleAccordion = (key) => {
    setMobileAccordion(mobileAccordion === key ? null : key)
  }

  const handleSubItemClick = (e, link) => {
    if (link.isComingSoon) {
      e.preventDefault()
      e.stopPropagation()
      setComingSoonModalItem(link.name)
      if (mobileOpen) closeMobile()
    } else if (link.path) {
      closeMobile()
      navigate(link.path)
    }
  }

  const activeServiceGroup = serviceCategories.find((cat) => cat.id === activeServiceTab) || serviceCategories[0]
  const activeIndustryGroup = industryCategories.find((cat) => cat.id === activeIndustryTab) || industryCategories[0]

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
        <div className="app-container navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo flex items-center gap-3" aria-label="Shorubenix Home" onClick={closeMobile}>
            <div className="navbar__logo-badge p-1.5 bg-[#0B2E7A]/30 border border-[#21B6FF]/40 rounded-xl shadow-lg shadow-[#21B6FF]/10 flex items-center justify-center">
              <img src="/phoenix_logo.png" alt="Shorubenix Phoenix Logo" className="navbar__logo-img w-8 h-8 object-contain" />
            </div>
            <div className="navbar__logo-text-group flex flex-col">
              <span className="navbar__logo-brand gold-gradient-text text-xl font-bold font-afacad leading-none mb-0.5">Shorubenix</span>
              <span className="text-[9px] text-[#21B6FF] tracking-widest font-extrabold uppercase font-sansation">CODE • SOLVE • DELIVER</span>
            </div>
          </Link>

          {/* Desktop Navigation Links & Mega Menus */}
          <nav className="navbar__links" aria-label="Main navigation">
            <NavLink to="/" end className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}>
              Home
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}>
              About Us
            </NavLink>

            {/* Services Mega Dropdown */}
            <div className="navbar__menu-group">
              <button className="navbar__link navbar__link--dropdown" onClick={() => navigate('/services')}>
                Services <HiChevronDown className="dropdown-arrow" />
              </button>
              <div className="navbar__mega-menu tech_box_gradient">
                <div className="mega-menu__header flex justify-between items-center">
                  <span className="mega-menu__title gold-gradient-text">Services We Offer</span>
                  <Link to="/services" className="text-xs text-amber-400 hover:underline font-semibold">View All Services →</Link>
                </div>
                <div className="mega-menu__body">
                  <div className="mega-menu__tabs">
                    {serviceCategories.map((cat) => (
                      <div
                        key={cat.id}
                        className={`mega-menu__tab${activeServiceTab === cat.id ? ' active' : ''}`}
                        onMouseEnter={() => setActiveServiceTab(cat.id)}
                        onClick={() => navigate('/services')}
                      >
                        {cat.name}
                      </div>
                    ))}
                  </div>
                  <div className="mega-menu__content">
                    <div className="mega-menu__grid">
                      {activeServiceGroup.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.path || '#'}
                          onClick={(e) => handleSubItemClick(e, link)}
                          className={`mega-menu__link-item ${link.isComingSoon ? 'opacity-80 hover:opacity-100' : ''}`}
                        >
                          <BulletIcon />
                          <span className="flex items-center gap-2">
                            {link.name}
                            {link.isComingSoon && (
                              <span className="px-1.5 py-0.5 text-[9px] font-bold bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-full uppercase tracking-wider">
                                Coming Soon
                              </span>
                            )}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Mega Dropdown */}
            <div className="navbar__menu-group">
              <button className="navbar__link navbar__link--dropdown" onClick={() => navigate('/services')}>
                Industries <HiChevronDown className="dropdown-arrow" />
              </button>
              <div className="navbar__mega-menu tech_box_gradient">
                <div className="mega-menu__body">
                  <div className="mega-menu__tabs">
                    {industryCategories.map((cat) => (
                      <div
                        key={cat.id}
                        className={`mega-menu__tab${activeIndustryTab === cat.id ? ' active' : ''}`}
                        onMouseEnter={() => setActiveIndustryTab(cat.id)}
                        onClick={() => navigate('/services')}
                      >
                        {cat.name}
                      </div>
                    ))}
                  </div>
                  <div className="mega-menu__content">
                    <div className="mega-menu__grid">
                      {activeIndustryGroup.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.path || '#'}
                          onClick={(e) => handleSubItemClick(e, link)}
                          className={`mega-menu__link-item ${link.isComingSoon ? 'opacity-80 hover:opacity-100' : ''}`}
                        >
                          <BulletIcon />
                          <span className="flex items-center gap-2">
                            {link.name}
                            {link.isComingSoon && (
                              <span className="px-1.5 py-0.5 text-[9px] font-bold bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-full uppercase tracking-wider">
                                Coming Soon
                              </span>
                            )}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/projects" className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}>
              Projects
            </NavLink>

            {/* Join Us Dropdown */}
            <div className="navbar__menu-group">
              <button className="navbar__link navbar__link--dropdown">
                Join Us <HiChevronDown className="dropdown-arrow" />
              </button>
              <div className="navbar__simple-dropdown tech_box_gradient">
                <Link to="/about#partner" className="dropdown-item">
                  <BulletIcon /> Technology Partner Program
                </Link>
                <Link to="/careers" className="dropdown-item">
                  <BulletIcon /> Careers &amp; Hiring
                </Link>
              </div>
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="navbar__actions">
            <Link to="/contact" className="bu_tn navbar__consultation-btn">
              Free Consultation
            </Link>

            <button
              className="navbar__hamburger"
              onClick={toggleMobile}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`navbar__backdrop${mobileOpen ? ' open' : ''}`} onClick={closeMobile} />
        <aside className={`navbar__mobile${mobileOpen ? ' open' : ''}`} aria-label="Mobile Menu">
          <div className="navbar__mobile-header">
            <Link to="/" className="navbar__logo flex items-center gap-2.5" onClick={closeMobile}>
              <div className="p-1 bg-[#0B2E7A]/40 border border-[#21B6FF]/40 rounded-lg">
                <img src="/phoenix_logo.png" alt="Shorubenix Phoenix" className="w-6 h-6 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="navbar__logo-brand gold-gradient-text text-lg font-bold font-afacad leading-none">Shorubenix</span>
                <span className="text-[8px] text-[#21B6FF] font-extrabold uppercase font-sansation tracking-widest mt-0.5">CODE • SOLVE • DELIVER</span>
              </div>
            </Link>
            <button className="navbar__mobile-close p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-300 hover:text-white" onClick={closeMobile} aria-label="Close Mobile Navigation">
              <HiX size={20} />
            </button>
          </div>

          <nav className="navbar__mobile-links">
            <Link to="/" className="navbar__mobile-link" onClick={closeMobile}>Home</Link>
            <Link to="/about" className="navbar__mobile-link" onClick={closeMobile}>About Us</Link>

            {/* Accordion: Services */}
            <div className="navbar__mobile-accordion">
              <button className="navbar__mobile-accordion-btn" onClick={() => toggleAccordion('services')}>
                <span>Services</span>
                <HiChevronDown className={`accordion-chevron${mobileAccordion === 'services' ? ' open' : ''}`} />
              </button>
              {mobileAccordion === 'services' && (
                <div className="navbar__mobile-sublist">
                  {serviceCategories.map((cat) => (
                    <div key={cat.id} className="mobile-subcat">
                      <span className="subcat-title">{cat.name}</span>
                      {cat.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.path || '#'}
                          className="mobile-sublink flex items-center justify-between"
                          onClick={(e) => handleSubItemClick(e, link)}
                        >
                          <span className="flex items-center gap-2"><BulletIcon /> {link.name}</span>
                          {link.isComingSoon && <span className="text-[9px] text-amber-400 font-bold">Coming Soon</span>}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion: Industries */}
            <div className="navbar__mobile-accordion">
              <button className="navbar__mobile-accordion-btn" onClick={() => toggleAccordion('industries')}>
                <span>Industries</span>
                <HiChevronDown className={`accordion-chevron${mobileAccordion === 'industries' ? ' open' : ''}`} />
              </button>
              {mobileAccordion === 'industries' && (
                <div className="navbar__mobile-sublist">
                  {industryCategories.map((cat) => (
                    <div key={cat.id} className="mobile-subcat">
                      <span className="subcat-title">{cat.name}</span>
                      {cat.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.path || '#'}
                          className="mobile-sublink flex items-center justify-between"
                          onClick={(e) => handleSubItemClick(e, link)}
                        >
                          <span className="flex items-center gap-2"><BulletIcon /> {link.name}</span>
                          {link.isComingSoon && <span className="text-[9px] text-amber-400 font-bold">Coming Soon</span>}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to="/projects" className="navbar__mobile-link" onClick={closeMobile}>Projects</Link>
            <Link to="/careers" className="navbar__mobile-link" onClick={closeMobile}>Careers &amp; Hiring</Link>
            <Link to="/contact" className="navbar__mobile-link" onClick={closeMobile}>Contact Us</Link>
          </nav>

          <div className="navbar__mobile-footer">
            <Link to="/contact" className="bu_tn w-full" onClick={closeMobile}>
              Free Consultation
            </Link>
          </div>
        </aside>
      </header>

      {/* 2026 "Coming Soon" R&D Pop-up Modal Banner */}
      <AnimatePresence>
        {comingSoonModalItem && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="nx-card-gradient max-w-md w-full p-1 rounded-3xl"
            >
              <div className="nx-card-gradient__inner p-8 text-center rounded-3xl relative bg-[#09090e]">
                <button
                  onClick={() => setComingSoonModalItem(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
                  aria-label="Close modal"
                >
                  <HiX size={22} />
                </button>

                <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  🚀
                </div>

                <span className="section-tag text-[10px] py-1 px-3.5 mb-2">R&amp;D Deployment In Progress</span>

                <h3 className="text-2xl font-bold text-white font-afacad mb-2 mt-2">
                  {comingSoonModalItem}
                </h3>

                <p className="text-gray-300 text-xs leading-relaxed mb-6">
                  Our engineering team is currently deploying this specialized digital transformation module. Contact our software architects via WhatsApp for early preview access and priority consultation!
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Shorubenix! I would like to inquire about priority preview access for: ${comingSoonModalItem}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp w-full justify-center py-3 text-xs font-bold gap-2"
                  >
                    <FaWhatsapp size={18} /> Direct Inquiry on WhatsApp
                  </a>
                  <button
                    onClick={() => setComingSoonModalItem(null)}
                    className="btn btn-ghost w-full py-2.5 text-xs font-semibold text-gray-400 hover:text-white"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
