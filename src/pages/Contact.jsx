import { useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import {
  FiMail, FiPhone, FiMapPin, FiSend,
  FiCheckCircle, FiAlertCircle, FiUser,
  FiMessageSquare, FiChevronDown, FiTerminal
} from 'react-icons/fi'
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa'
import { useContactForm } from '../hooks/useContactForm'
import { COMPANY_INFO } from '../data/company'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import './Contact.css'

const contactInfo = [
  {
    icon: <FiMail size={22} />,
    label: 'Official Email',
    value: COMPANY_INFO.email,
    link: `mailto:${COMPANY_INFO.email}`,
    id: 'info-email',
  },
  {
    icon: <FiPhone size={22} />,
    label: 'Administration Helpline',
    value: COMPANY_INFO.phoneAdmin,
    link: `tel:${COMPANY_INFO.phoneAdmin.replace(/\s+/g, '')}`,
    id: 'info-phone-admin',
  },
  {
    icon: <FiPhone size={22} />,
    label: 'Academic Support Desk',
    value: COMPANY_INFO.phoneSupport,
    link: `tel:${COMPANY_INFO.phoneSupport.replace(/\s+/g, '')}`,
    id: 'info-phone-support',
  },
  {
    icon: <FiMapPin size={22} />,
    label: 'Headquarters',
    value: COMPANY_INFO.address,
    link: null,
    id: 'info-location',
  },
]

const SUBJECTS = [
  { value: '', label: 'Select service requirement...' },
  { value: 'Final Year CSE/IT Project', label: '🎓 Final Year CSE/IT Project (IEEE 2026)' },
  { value: 'Academic R&D & Publications', label: '📄 Scopus / IEEE Journal Publication' },
  { value: 'Software Development', label: '💻 Custom Web / Mobile App Development' },
  { value: 'Cloud Solutions & Hosting', label: '☁️ Cloud Architecture & Hosting' },
  { value: 'IT Consulting & Architecture', label: '🧠 Startup MVP Consulting' },
  { value: 'Other', label: '📌 General Inquiry' },
]

function Field({ label, id, error, required, children }) {
  return (
    <div className={`form-group${error ? ' form-group--error' : ''}`}>
      <label htmlFor={id} className="form-label">
        {label} {required && <span className="form-required">*</span>}
      </label>
      {children}
      {error && (
        <span className="form-error" role="alert">
          <FiAlertCircle size={12} /> {error}
        </span>
      )}
    </div>
  )
}

export default function Contact() {
  const { form, errors, loading, submitted, handleChange, handleSubmit, resetForm } = useContactForm()

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const success = await handleSubmit(e)
    if (success || true) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      })
    }
  }

  const whatsappMsg = encodeURIComponent(
    `Hi Shorubenix! I would like to inquire about: ${form.subject || 'Project Assistance'}. My name is ${form.name || 'Student/Client'}.`
  )

  return (
    <div className="contact-page page-enter bg-black min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="contact-hero section text-center mb-12">
        <div className="app-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2E7A]/40 border border-[#21B6FF]/40 shadow-md">
                <img src="/phoenix_logo.png" alt="Shorubenix Phoenix" className="w-5 h-5 object-contain animate-pulse" />
                <span className="text-[#21B6FF] text-xs font-extrabold tracking-wider uppercase">CODE • SOLVE • DELIVER</span>
              </div>
              <span className="section-tag">⚡ Get In Touch</span>
            </div>
            <h1 className="section-title font-afacad gold-gradient-text text-5xl font-bold mt-2">
              Let's Build Your Next Solution
            </h1>
            <p className="section-subtitle text-gray-300 text-base mt-3">
              Need a quote for software development or help with an IEEE CSE project? Connect directly with our software architects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section pt-0">
        <div className="app-container">
          <div className="contact-layout grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Info Panel */}
            <div className="contact-info-panel lg:col-span-5">
              <Card className="contact-info-card glass-card p-8 border border-gray-800 rounded-3xl">
                <h2 className="contact-info-card__title text-2xl font-bold text-white font-afacad mb-2">Direct Touchpoints</h2>
                <p className="contact-info-card__sub text-gray-300 text-xs mb-8">
                  Connect directly with Shorubenix Info Technology software engineers and research mentors.
                </p>

                <div className="contact-items space-y-6 mb-8">
                  {contactInfo.map(({ icon, label, value, link, id }) => (
                    <div key={id} className="contact-item flex items-start gap-4" id={id}>
                      <div className="contact-item__icon p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                        {icon}
                      </div>
                      <div>
                        <p className="contact-item__label text-xs uppercase tracking-wider text-gray-400 font-semibold">{label}</p>
                        {link ? (
                          <a href={link} className="contact-item__value contact-item__link text-sm text-white font-medium hover:text-amber-300 transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="contact-item__value text-sm text-white font-medium">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp w-full justify-center py-3 text-xs font-bold"
                  >
                    <FaWhatsapp size={18} /> Instant WhatsApp Support
                  </a>
                  <a
                    href="https://t.me/+918925518459"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline w-full justify-center py-3 text-xs font-semibold"
                  >
                    <FaTelegramPlane size={18} /> Telegram Channel
                  </a>
                </div>
              </Card>
            </div>

            {/* Form */}
            <div className="contact-form-wrap lg:col-span-7">
              {submitted ? (
                <Card className="success-state nx-card-gradient p-12 text-center rounded-3xl">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                    ✓
                  </div>
                  <h3 className="success-title text-3xl font-bold text-white font-afacad mb-2">Message Received!</h3>
                  <p className="success-text text-gray-300 text-sm max-w-md mx-auto mb-8">
                    Your inquiry has been dispatched to our engineering team. We'll get back to you within 24 hours.
                  </p>
                  <div className="success-actions flex justify-center gap-4">
                    <Button onClick={resetForm} variant="primary" className="py-2.5 px-6 text-xs">
                      Send Another Message
                    </Button>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp py-2.5 px-6 text-xs font-bold"
                    >
                      Follow Up on WhatsApp
                    </a>
                  </div>
                </Card>
              ) : (
                <form className="glass-card contact-form p-8 border border-gray-800 rounded-3xl" onSubmit={handleFormSubmit} noValidate id="contact-form">
                  <h2 className="contact-form__title text-2xl font-bold text-white font-afacad mb-1">Send Us a Message</h2>
                  <p className="contact-form__sub text-gray-400 text-xs mb-8">Fill in the form — your message goes directly to our team.</p>

                  <div className="form-row grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <Field label="Full Name" id="contact-name" error={errors.name} required>
                      <div className="input-wrap relative">
                        <FiUser className="input-icon absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          className="form-input w-full bg-black/50 border border-gray-800 rounded-xl pl-11 pr-4 py-3 text-white text-xs focus:border-amber-500 outline-none"
                          autoComplete="name"
                          maxLength={80}
                        />
                      </div>
                    </Field>

                    <Field label="Email Address" id="contact-email" error={errors.email} required>
                      <div className="input-wrap relative">
                        <FiMail className="input-icon absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleChange}
                          className="form-input w-full bg-black/50 border border-gray-800 rounded-xl pl-11 pr-4 py-3 text-white text-xs focus:border-amber-500 outline-none"
                          autoComplete="email"
                          maxLength={120}
                        />
                      </div>
                    </Field>
                  </div>

                  <div className="form-row grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <Field label="Phone Number" id="contact-phone" error={errors.phone}>
                      <div className="input-wrap relative">
                        <FiPhone className="input-icon absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={handleChange}
                          className="form-input w-full bg-black/50 border border-gray-800 rounded-xl pl-11 pr-4 py-3 text-white text-xs focus:border-amber-500 outline-none"
                          autoComplete="tel"
                          maxLength={20}
                        />
                      </div>
                    </Field>

                    <Field label="Subject" id="contact-subject" error={errors.subject} required>
                      <div className="input-wrap select-wrap relative">
                        <select
                          id="contact-subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className="form-input form-select w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 text-white text-xs focus:border-amber-500 outline-none cursor-pointer"
                        >
                          {SUBJECTS.map(({ value, label }) => (
                            <option key={value} value={value} disabled={!value} className="bg-gray-900 text-white">
                              {label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </Field>
                  </div>

                  <Field label="Message" id="contact-message" error={errors.message} required>
                    <div className="input-wrap relative">
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        placeholder="Describe your project requirement in detail (min 20 characters)..."
                        value={form.message}
                        onChange={handleChange}
                        className="form-input form-textarea w-full bg-black/50 border border-gray-800 rounded-xl p-4 text-white text-xs focus:border-amber-500 outline-none"
                        maxLength={2000}
                      />
                    </div>
                  </Field>

                  <Button
                    type="submit"
                    variant="primary"
                    className="contact-submit w-full py-3 mt-4 text-xs font-bold flex items-center justify-center gap-2"
                    loading={loading}
                    id="contact-submit-btn"
                  >
                    Send Message <FiSend />
                  </Button>

                  <p className="form-privacy text-center text-[10px] text-gray-500 mt-4">
                    🔒 Your data is processed securely under strict privacy guidelines.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
