import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
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
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }, [pathname])

  const toggleMobile = () => {
    setMobileOpen(p => {
      document.body.style.overflow = !p ? 'hidden' : ''
      return !p
    })
  }

  const closeMobile = () => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }

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
          {navLinks.map(({ to, label }) => (
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
          ))}
        </nav>

        {/* CTA */}
        <div className="navbar__actions">
          <Link to="/contact" className="btn btn-primary navbar__cta" id="navbar-get-started-btn">
            Get Started
          </Link>
          <button
            className="navbar__hamburger"
            onClick={toggleMobile}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
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
        aria-hidden={!mobileOpen}
        inert={!mobileOpen ? true : undefined}
      >
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
        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px' }} id="mobile-get-started-btn" onClick={closeMobile}>
          Get Started
        </Link>
      </div>
    </header>
  )
}
