import { Link } from 'react-router-dom'
import {
  FiMail, FiPhone, FiMapPin,
  FiTwitter, FiLinkedin, FiGithub, FiInstagram, FiArrowUp, FiSend
} from 'react-icons/fi'
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa'
import { COMPANY_INFO } from '../../data/company'
import './Footer.css'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/careers', label: 'Careers & Hiring' },
  { to: '/contact', label: 'Contact Us' },
]

const servicesList = [
  { name: 'Software Development', path: '/services#software' },
  { name: 'Web Design & Development', path: '/services#web' },
  { name: 'Mobile App Development', path: '/services#mobile' },
  { name: 'AI & Data Solutions', path: '/services#ai' },
  { name: 'Blockchain & Web3', path: '/services#blockchain' },
  { name: 'Cloud & Infrastructure', path: '/services#cloud' },
]

const industryList = [
  { name: 'Fintech & Banking', path: '/services#fintech' },
  { name: 'Healthcare & Pharma', path: '/services#healthcare' },
  { name: 'E-Commerce & Retail', path: '/services#ecommerce' },
  { name: 'Logistics & Supply Chain', path: '/services#logistics' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__glow-bar" />

      <div className="app-container">
        {/* Top Newsletter / CTA Bar */}
        <div className="footer__top-cta tech_box_gradient">
          <div className="footer__top-content">
            <h3 className="gold-gradient-text text-2xl font-bold font-afacad">Ready to Transform Your Digital Ecosystem?</h3>
            <p className="text-gray-300 text-sm">Partner with Shorubenix for scalable software, cloud infrastructure, and emerging tech solutions.</p>
          </div>
          <div className="footer__top-action">
            <Link to="/contact" className="bu_tn">
              Schedule Free Consultation
            </Link>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="footer__grid">
          {/* Column 1: Brand Info */}
          <div className="footer__brand-col">
            <Link to="/" className="footer__logo flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#0B2E7A]/40 border border-[#21B6FF]/50 rounded-2xl shadow-xl shadow-[#21B6FF]/10">
                <img src="/phoenix_logo.png" alt="Shorubenix Phoenix Logo" className="w-10 h-10 object-contain" />
              </div>
              <div className="flex flex-col text-left">
                <span className="gold-gradient-text font-bold text-2xl font-afacad leading-none mb-1">Shorubenix</span>
                <span className="text-[10px] text-[#21B6FF] tracking-widest font-extrabold uppercase font-sansation">CODE • SOLVE • DELIVER</span>
              </div>
            </Link>
            <p className="footer__desc text-gray-300 text-sm leading-relaxed mb-4">
              Shorubenix Info Technology delivers end-to-end digital solutions, custom software engineering, web &amp; mobile app development, and cloud modernization to empower global enterprises.
            </p>

            {/* Social Hub Icons */}
            <div className="footer__socials">
              <a href="https://t.me/+918925518459" target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="Telegram">
                <FaTelegramPlane />
              </a>
              <a href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="https://instagram.com/shorubenix" target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="https://github.com/RUBANRAJS-hub/Shorubenix" target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="GitHub">
                <FiGithub />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer__col">
            <h4 className="footer__title gold-gradient-text">Company</h4>
            <ul className="footer__links">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__link">{label}</Link>
                </li>
              ))}
              <li>
                <Link to="/about#partner" className="footer__link">Partner Program</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer__col">
            <h4 className="footer__title gold-gradient-text">Services</h4>
            <ul className="footer__links">
              {servicesList.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="footer__link">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Industries & Contact */}
          <div className="footer__col">
            <h4 className="footer__title gold-gradient-text">Industries &amp; Touchpoints</h4>
            <ul className="footer__links">
              {industryList.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="footer__link">{item.name}</Link>
                </li>
              ))}
            </ul>

            <div className="footer__contact-info mt-6">
              <div className="contact-item">
                <FiMail className="contact-icon" />
                <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              </div>
              <div className="contact-item">
                <FiPhone className="contact-icon" />
                <a href={`tel:${COMPANY_INFO.phoneAdmin.replace(/\s+/g, '')}`}>{COMPANY_INFO.phoneAdmin}</a>
                <span className="mx-1 text-gray-500">/</span>
                <a href={`tel:${COMPANY_INFO.phoneSupport.replace(/\s+/g, '')}`}>{COMPANY_INFO.phoneSupport}</a>
              </div>
              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <span>Madurai, TN, India (Serving Global)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer__bottom">
          <p>&copy; {year} Shorubenix Info Technology. All rights reserved.</p>
          <div className="footer__bottom-right">
            <span>Designed with Tech Excellence &amp; Passion</span>
            <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Back to top">
              <FiArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
