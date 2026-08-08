import { Link } from 'react-router-dom'
import {
  FiMail, FiPhone, FiMapPin,
  FiTwitter, FiLinkedin, FiGithub, FiInstagram
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { COMPANY_INFO } from '../data/company'
import './Footer.css'

const quickLinks = [
  { to: '/',         label: 'Home'     },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects Catalog' },
  { to: '/about',    label: 'About Us' },
  { to: '/contact',  label: 'Contact Us'  },
]

const services = [
  'Software Development',
  'Web & Mobile App Design',
  'Digital Marketing Services',
  'Cloud Solutions & Infrastructure',
  'IT Consulting & Solutions',
  'Specialized Academic R&D',
]

const socials = [
  { icon: <FiTwitter />,  href: 'https://twitter.com/shorubenix', label: 'Twitter'  },
  { icon: <FiLinkedin />, href: 'https://linkedin.com/company/shorubenix', label: 'LinkedIn'  },
  { icon: <FiGithub />,   href: 'https://github.com/RUBANRAJS-hub/Shorubenix', label: 'GitHub'   },
  { icon: <FiInstagram />,href: 'https://instagram.com/shorubenix', label: 'Instagram' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi Shorubenix Info Technology, I would like to inquire about project development or software services.'
  )}`

  return (
    <footer className="footer" role="contentinfo">
      {/* Top glow line */}
      <div className="footer__glow-line" />

      {/* Global Floating WhatsApp Widget */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-widget"
        aria-label="Chat with Shorubenix Developers on WhatsApp"
        title="Chat with Shorubenix Developers on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <FaWhatsapp size={28} />
        <span className="floating-whatsapp-tooltip">Chat with Developers</span>
      </a>

      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img src="/phoenix_logo.png" alt="Shorubenix logo" />
              <span>Shorubenix</span>
            </Link>
            <p className="footer__tagline">Code • Solve • Deliver</p>
            <p className="footer__desc">
              Empowering students and businesses with premium tech solutions.
              From concept to delivery — we build what matters.
            </p>
            <div className="footer__socials">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="footer__social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul>
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__nav-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul>
              {services.map(s => (
                <li key={s}>
                  <Link to="/services" className="footer__nav-link">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__contact-list">
              <li>
                <FiMail className="footer__contact-icon" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="footer__nav-link">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li>
                <FiPhone className="footer__contact-icon" />
                <a href={`tel:${COMPANY_INFO.phoneAdmin.replace(/\s+/g, '')}`} className="footer__nav-link">
                  {COMPANY_INFO.phoneAdmin} (Admin)
                </a>
              </li>
              <li>
                <FiPhone className="footer__contact-icon" />
                <a href={`tel:${COMPANY_INFO.phoneSupport.replace(/\s+/g, '')}`} className="footer__nav-link">
                  {COMPANY_INFO.phoneSupport} (Support)
                </a>
              </li>
              <li>
                <FiMapPin className="footer__contact-icon" />
                <span className="footer__nav-link">Madurai, TN, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>&copy; {year} Shorubenix Info Technology. All rights reserved.</p>
          <p>Built with passion &amp; technical precision.</p>
        </div>
      </div>
    </footer>
  )
}

