import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiSun, FiMoon } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { COMPANY_INFO } from '../data/company'
import './Navbar.css'

const navLinks = [
  { to: '/',         label: 'Home'     },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about',    label: 'About'    },
  { to: '/contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }, [pathname])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  const toggleMobile = () => {
    setMobileOpen(p => {
      document.body.style.overflow = !p ? 'hidden' : ''
      return !p
    })
  }

  const closeMobile = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
    setMobileOpen(false)
    document.body.style.overflow = ''
  }

  const whatsappHeaderUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi Shorubenix Info Technology, I would like to inquire about software development and academic research services.'
  )}`

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="Shorubenix Home">
          <img src="/phoenix_logo.png" alt="Shorubenix Phoenix Logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">
            <span className="gradient-text">Shorubenix</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map(({ to, label }) => {
            if (label === 'Services') {
              return (
                <div key={to} className="navbar__nav-item">
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `navbar__link${isActive ? ' navbar__link--active' : ''}`
                    }
                  >
                    {label}
                  </NavLink>
                  {/* Mega Menu Dropdown */}
                  <div className="navbar__mega-menu" role="region" aria-label="Services Mega Menu">
                    <div className="mega-menu__column">
                      <div className="mega-menu__column-title">
                        <span>💻</span> Commercial IT Solutions
                      </div>
                      <div className="mega-menu__link-list">
                        <Link to="/services" className="mega-menu__link">
                          <span className="mega-menu__bullet">▶</span> Custom Software & Web Development
                        </Link>
                        <Link to="/services" className="mega-menu__link">
                          <span className="mega-menu__bullet">▶</span> Web & Mobile App Architecture
                        </Link>
                        <Link to="/services" className="mega-menu__link">
                          <span className="mega-menu__bullet">▶</span> Cloud Infrastructure & Hosting
                        </Link>
                        <Link to="/services" className="mega-menu__link">
                          <span className="mega-menu__bullet">▶</span> Digital Marketing & Growth
                        </Link>
                      </div>
                    </div>

                    <div className="mega-menu__column">
                      <div className="mega-menu__column-title mega-menu__column-title--gold">
                        <span>🎓</span> Academic R&D Hub
                      </div>
                      <div className="mega-menu__link-list">
                        <Link to="/projects" className="mega-menu__link">
                          <span className="mega-menu__bullet">⚡</span> Final Year CSE / IT IEEE Projects
                        </Link>
                        <Link to="/services" className="mega-menu__link">
                          <span className="mega-menu__bullet">⚡</span> Scopus & IEEE Journal Guidance
                        </Link>
                        <Link to="/services" className="mega-menu__link">
                          <span className="mega-menu__bullet">⚡</span> LaTeX Typesetting & Plagiarism &lt;10%
                        </Link>
                        <Link to="/services" className="mega-menu__link">
                          <span className="mega-menu__bullet">⚡</span> Viva Voce Prep & Slide Decks
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            return (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            )
          })}
        </nav>


        {/* CTA & Actions */}
        <div className="navbar__actions">
          <button
            onClick={toggleTheme}
            className="navbar__theme-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun size={19} /> : <FiMoon size={19} />}
          </button>
          
          <a
            href={whatsappHeaderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp navbar__wa-btn"
            title="Chat on WhatsApp"
            id="navbar-whatsapp-btn"
          >
            <FaWhatsapp size={16} />
            <span className="wa-text">Chat Now</span>
          </a>

          <Link to="/contact" className="btn btn-primary navbar__cta" id="navbar-get-started-btn">
            Get Quote
          </Link>
          
          <button
            className="navbar__hamburger"
            onClick={toggleMobile}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            id="navbar-hamburger-btn"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div className={`navbar__mobile-overlay${mobileOpen ? ' open' : ''}`} onClick={closeMobile} />
      <div 
        className={`navbar__mobile${mobileOpen ? ' open' : ''}`} 
        inert={!mobileOpen ? '' : undefined}
      >

        <button 
          className="navbar__mobile-close" 
          onClick={closeMobile} 
          aria-label="Close menu"
        >
          <HiX size={24} />
        </button>
        <nav aria-label="Mobile navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `navbar__mobile-link${isActive ? ' active' : ''}`
              }
              onClick={closeMobile}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a
            href={whatsappHeaderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: '100%' }}
            onClick={closeMobile}
          >
            <FaWhatsapp size={18} /> Chat on WhatsApp
          </a>
          <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }} id="mobile-get-started-btn" onClick={closeMobile}>
            Request Quote
          </Link>
        </div>
      </div>
    </header>
  )
}

