import { Link } from 'react-router-dom'
import {
  FiMail, FiPhone, FiMapPin,
  FiTwitter, FiLinkedin, FiGithub, FiInstagram
} from 'react-icons/fi'
import './Footer.css'

const quickLinks = [
  { to: '/',         label: 'Home'     },
  { to: '/services', label: 'Services' },
  { to: '/about',    label: 'About Us' },
  { to: '/contact',  label: 'Contact'  },
]

const services = [
  'Student Projects',
  'Paper Publication',
  'PPT & Reports',
  'Final Year Projects',
]

const socials = [
  { icon: <FiTwitter />,  href: '#', label: 'Twitter'  },
  { icon: <FiLinkedin />, href: '#', label: 'LinkedIn'  },
  { icon: <FiGithub />,   href: '#', label: 'GitHub'   },
  { icon: <FiInstagram />,href: '#', label: 'Instagram' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" role="contentinfo">
      {/* Top glow line */}
      <div className="footer__glow-line" />

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
                <a href="mailto:shorubenixinfotechnology@gmail.com" className="footer__nav-link">
                  shorubenixinfotechnology@gmail.com
                </a>
              </li>
              <li>
                <FiPhone className="footer__contact-icon" />
                <a href="tel:+918778584218" className="footer__nav-link">
                  +91 8778584218 (Admin)
                </a>
              </li>
              <li>
                <FiPhone className="footer__contact-icon" />
                <a href="tel:+916384640244" className="footer__nav-link">
                  +91 6384640244 (Support)
                </a>
              </li>
              <li>
                <FiMapPin className="footer__contact-icon" />
                <span className="footer__nav-link">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>&copy; {year} Shorubenix Info Technology. All rights reserved.</p>
          <p>Built with passion &amp; precision.</p>
        </div>
      </div>
    </footer>
  )
}
