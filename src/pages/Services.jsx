import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiCode, FiBookOpen, FiAward,
  FiLayers, FiGlobe,
  FiArrowRight, FiCheckCircle, FiTrendingUp, FiServer, FiTerminal
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { COMMERCIAL_SERVICES, ACADEMIC_SERVICES } from '../data/services'
import { COMPANY_INFO } from '../data/company'
import Card from '../components/common/Card'
import Badge from '../components/common/Badge'
import Button from '../components/common/Button'
import './Services.css'

const iconMap = {
  'Software Development': <FiCode size={32} />,
  'Web & Mobile App Design': <FiGlobe size={32} />,
  'Digital Marketing Services': <FiTrendingUp size={32} />,
  'Cloud Solutions & Hosting': <FiServer size={32} />,
  'IT Consulting & Architecture': <FiLayers size={32} />,
  'Academic R&D & Publications': <FiBookOpen size={32} />,
  'Final Year CSE/IT Projects': <FiAward size={32} />,
}

export default function Services() {
  const [activeCodePreview, setActiveCodePreview] = useState(null)

  const getWhatsAppLink = (serviceTitle) => {
    const text = encodeURIComponent(
      `Hi Shorubenix Info Technology, I am interested in your service: "${serviceTitle}". Please provide details and pricing!`
    )
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`
  }

  return (
    <div className="services-page page-enter bg-black min-h-screen pt-32 pb-20">
      {/* Page Header */}
      <section className="services-hero section text-center mb-12">
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header max-w-3xl mx-auto"
          >
            <span className="section-tag">⚡ Next-Gen Solutions</span>
            <h1 className="section-title font-afacad gold-gradient-text text-5xl font-bold mt-2">
              Commercial &amp; Academic Services
            </h1>
            <p className="section-subtitle text-gray-300 text-base mt-3 leading-relaxed">
              From enterprise software engineering and cloud DevOps to IEEE Scopus R&amp;D publications — built with precision, speed, and integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section pt-0">
        <div className="app-container">
          <h2 className="section-title font-afacad text-center text-3xl font-bold mb-10 gold-gradient-text">
            Commercial IT Solutions
          </h2>
          <div className="services-commercial-grid">
            {COMMERCIAL_SERVICES.map(({ id, title, badge, badgeColor, desc, features }, idx) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Card className="srv-card glass-card p-8 border border-gray-800 rounded-2xl h-full flex flex-col justify-between" id={`service-${id}`}>
                  <div>
                    <div className="srv-card__header flex items-center justify-between mb-6">
                      <div className="srv-card__icon p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                        {iconMap[title] || <FiCode size={32} />}
                      </div>
                      <Badge color={badgeColor}>{badge}</Badge>
                    </div>
                    <h2 className="srv-card__title text-2xl font-bold text-white font-afacad mb-3">{title}</h2>
                    <p className="srv-card__desc text-gray-300 text-sm leading-relaxed mb-6">{desc}</p>
                    <ul className="srv-card__features space-y-2 mb-8">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-xs text-gray-300">
                          <FiCheckCircle className="text-amber-400 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-gray-800">
                    <a
                      href={getWhatsAppLink(title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp flex-1 justify-center py-2.5 text-xs font-bold"
                    >
                      <FaWhatsapp size={16} /> WhatsApp Inquiry
                    </a>
                    <Button as={Link} to="/contact" variant="outline" className="py-2.5 px-4 text-xs font-semibold">
                      Quote <FiArrowRight />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <h2 className="section-title font-afacad text-center text-3xl font-bold mb-10 gold-gradient-text">
            Specialized Academic R&amp;D Division
          </h2>
          <div className="services-academic-grid">
            {ACADEMIC_SERVICES.map(({ id, title, badge, badgeColor, desc, features }, idx) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Card className="srv-card srv-card--academic glass-card p-8 border border-amber-500/30 rounded-2xl h-full flex flex-col justify-between" id={`service-${id}`}>
                  <div>
                    <div className="srv-card__header flex items-center justify-between mb-6">
                      <div className="srv-card__icon text-amber-400 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30">
                        {iconMap[title] || <FiBookOpen size={32} />}
                      </div>
                      <Badge color={badgeColor}>{badge}</Badge>
                    </div>
                    <h2 className="srv-card__title text-2xl font-bold text-white font-afacad mb-3">{title}</h2>
                    <p className="srv-card__desc text-gray-300 text-sm leading-relaxed mb-6">{desc}</p>
                    <ul className="srv-card__features space-y-2 mb-8">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-xs text-gray-300">
                          <FiCheckCircle className="text-amber-400 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-gray-800">
                    <a
                      href={getWhatsAppLink(title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp flex-1 justify-center py-2.5 text-xs font-bold"
                    >
                      <FaWhatsapp size={16} /> WhatsApp Inquiry
                    </a>
                    <Button as={Link} to="/projects" variant="outline" className="py-2.5 px-4 text-xs font-semibold">
                      Catalog <FiArrowRight />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section services-cta py-16">
        <div className="app-container">
          <div className="nx-card-gradient text-center p-12 rounded-3xl">
            <h2 className="section-title font-afacad gold-gradient-text text-4xl font-bold mb-4">
              Don't See What You Need? Let's Build It.
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto text-base mb-8">
              We engineer custom software microservices, ML pipelines, and unique research solutions. Contact our engineering lead directly.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href={getWhatsAppLink('Custom Requirement')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp py-3 px-8"
              >
                <FaWhatsapp size={18} /> Chat with Lead Developer
              </a>
              <Button as={Link} to="/contact" variant="primary" className="py-3 px-8">
                Request Custom Quote <FiArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
