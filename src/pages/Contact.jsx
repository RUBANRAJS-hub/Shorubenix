import { useState, useCallback } from 'react'
import {
  FiMail, FiPhone, FiMapPin, FiSend,
  FiCheckCircle, FiAlertCircle, FiUser,
  FiMessageSquare, FiChevronDown
} from 'react-icons/fi'
import Toast, { useToast } from '../components/Toast'
import { SHEETS_CONFIG } from '../sheets.config'
import './Contact.css'

/* ─── Static Data ─── */
const contactInfo = [
  {
    icon: <FiMail size={22} />,
    label: 'Email Us',
    value: 'shorubenixinfotechnology@gmail.com',
    link: 'mailto:shorubenixinfotechnology@gmail.com',
    id: 'contact-email',
  },
  {
    icon: <FiPhone size={22} />,
    label: 'Admin',
    value: '+91 8778584218',
    link: 'tel:+918778584218',
    id: 'contact-phone-admin',
  },
  {
    icon: <FiPhone size={22} />,
    label: 'Support',
    value: '+91 6384640244',
    link: 'tel:+916384640244',
    id: 'contact-phone-support',
  },
  {
    icon: <FiMapPin size={22} />,
    label: 'Based In',
    value: 'India (Serving Pan-India)',
    link: null,
    id: 'contact-location',
  },
]

const SUBJECTS = [
  { value: '',                label: 'Select a service...' },
  { value: 'Final Year Project',    label: '🎓 Final Year Project' },
  { value: 'Paper Publication',     label: '📄 Research Paper Publication' },
  { value: 'PPT & Report',          label: '📊 PPT & Report Creation' },
  { value: 'Web Development',       label: '🌐 Website / App Development' },
  { value: 'AI/ML Project',         label: '🤖 AI / ML Project' },
  { value: 'Pricing Enquiry',       label: '💰 Pricing Enquiry' },
  { value: 'Other',                 label: '📌 Other' },
]

const INITIAL_FORM = { name: '', email: '', phone: '', subject: '', message: '' }

/* ─── Validation ─── */
function validate(form) {
  const errors = {}
  if (!form.name.trim())               errors.name    = 'Full name is required'
  if (!form.email.trim())              errors.email   = 'Email address is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                        errors.email   = 'Enter a valid email address'
  if (!form.subject)                   errors.subject = 'Please select a subject'
  if (!form.message.trim())            errors.message = 'Message cannot be empty'
  else if (form.message.trim().length < 20)
                                        errors.message = 'Message must be at least 20 characters'
  return errors
}

/* ─── Submit to Google Sheets via Apps Script ─── */
async function submitToSheets(formData) {
  const response = await fetch(SHEETS_CONFIG.SCRIPT_URL, {
    method:   'POST',
    redirect: 'follow',
    headers:  { 'Content-Type': 'text/plain;charset=utf-8' },
    body:     JSON.stringify({
      name:    formData.name.trim(),
      email:   formData.email.trim().toLowerCase(),
      phone:   formData.phone.trim() || 'Not provided',
      subject: formData.subject,
      message: formData.message.trim(),
    }),
  })
  if (!response.ok) throw new Error(`Server error: ${response.status}`)
  const json = await response.json()
  if (json.status !== 'success') throw new Error(json.message || 'Submission failed')
  return json
}

/* ─── Field Component ─── */
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

/* ─── Main Component ─── */
export default function Contact() {
  const [form,     setForm]     = useState(INITIAL_FORM)
  const [errors,   setErrors]   = useState({})
  const [loading,  setLoading]  = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { toasts, removeToast, success, error: toastError } = useToast()

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) {
      setErrors(errs)
      toastError('Incomplete Form', 'Please fix the highlighted fields before submitting.')
      // Scroll to first error
      const firstKey = Object.keys(errs)[0]
      document.getElementById(`contact-${firstKey}`)?.focus()
      return
    }

    setLoading(true)
    try {
      await submitToSheets(form)
      setSubmitted(true)
      setForm(INITIAL_FORM)
      setErrors({})
      success(
        '✅ Message Sent!',
        `Thanks ${form.name.split(' ')[0]}! We'll get back to you within 24 hours.`,
        6000
      )
    } catch (err) {
      console.error('Sheets error:', err)
      toastError(
        '❌ Submission Failed',
        'Could not send your message. Please try WhatsApp or email us directly.',
        7000
      )
    } finally {
      setLoading(false)
    }
  }

  const whatsappMsg = encodeURIComponent(
    `Hi Shorubenix! I'd like to discuss: ${form.subject || 'a project'}. My name is ${form.name || 'a prospective client'}.`
  )

  return (
    <>
      <Toast toasts={toasts} onRemove={removeToast} />

      <div className="contact-page page-enter">

        {/* ── Hero ── */}
        <section className="contact-hero section">
          <div className="contact-hero__orb" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-header">
              <span className="section-tag">Get In Touch</span>
              <h1 className="section-title">
                Let&apos;s <span className="gradient-text">Start Something</span> Great
              </h1>
              <p className="section-subtitle">
                Have a project idea, question, or need a quote? We&apos;d love to hear from you.
                Reach out and we&apos;ll get back to you within 24 hours.
              </p>
              <div className="divider" />
            </div>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="contact-layout">

              {/* ── Left — Info Panel ── */}
              <div className="contact-info-panel">
                <div className="glass-card contact-info-card">
                  <h2 className="contact-info-card__title">Contact Information</h2>
                  <p className="contact-info-card__sub">
                    Reach us through any of these channels. We&apos;re always ready to help.
                  </p>

                  <div className="contact-items">
                    {contactInfo.map(({ icon, label, value, link, id }) => (
                      <div key={id} className="contact-item" id={id}>
                        <div className="contact-item__icon">{icon}</div>
                        <div>
                          <p className="contact-item__label">{label}</p>
                          {link
                            ? <a href={link} className="contact-item__value contact-item__link">{value}</a>
                            : <p className="contact-item__value">{value}</p>
                          }
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href={`https://wa.me/${SHEETS_CONFIG.WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn whatsapp-btn"
                    id="whatsapp-contact-btn"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat on WhatsApp
                  </a>

                  <div className="contact-info-card__glow" />
                </div>
              </div>

              {/* ── Right — Form ── */}
              <div className="contact-form-wrap">
                {submitted ? (
                  /* ── Success State ── */
                  <div className="glass-card success-state">
                    <div className="success-icon">
                      <FiCheckCircle size={48} />
                    </div>
                    <h3 className="success-title">Message Received!</h3>
                    <p className="success-text">
                      Your message has been saved to our system. We&apos;ll get back to you
                      within 24 hours — meanwhile, feel free to WhatsApp us for faster support.
                    </p>
                    <div className="success-actions">
                      <button
                        className="btn btn-primary"
                        onClick={() => setSubmitted(false)}
                        id="send-another-btn"
                      >
                        Send Another Message
                      </button>
                      <a
                        href={`https://wa.me/${SHEETS_CONFIG.WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn whatsapp-btn success-wa-btn"
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Follow Up on WhatsApp
                      </a>
                    </div>
                  </div>
                ) : (
                  /* ── Contact Form ── */
                  <form
                    className="glass-card contact-form"
                    onSubmit={handleSubmit}
                    noValidate
                    id="contact-form"
                  >
                    <h2 className="contact-form__title">Send Us a Message</h2>
                    <p className="contact-form__sub">
                      Fill in the form — your message goes directly to our team.
                    </p>

                    {/* Row 1: Name + Email */}
                    <div className="form-row">
                      <Field label="Full Name" id="contact-name" error={errors.name} required>
                        <div className="input-wrap">
                          <FiUser className="input-icon" />
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            placeholder="Your full name"
                            value={form.name}
                            onChange={handleChange}
                            className="form-input form-input--icon"
                            autoComplete="name"
                            maxLength={80}
                          />
                        </div>
                      </Field>

                      <Field label="Email Address" id="contact-email" error={errors.email} required>
                        <div className="input-wrap">
                          <FiMail className="input-icon" />
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                            className="form-input form-input--icon"
                            autoComplete="email"
                            maxLength={120}
                          />
                        </div>
                      </Field>
                    </div>

                    {/* Row 2: Phone + Subject */}
                    <div className="form-row">
                      <Field label="Phone Number" id="contact-phone" error={errors.phone}>
                        <div className="input-wrap">
                          <FiPhone className="input-icon" />
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={form.phone}
                            onChange={handleChange}
                            className="form-input form-input--icon"
                            autoComplete="tel"
                            maxLength={20}
                          />
                        </div>
                      </Field>

                      <Field label="Subject" id="contact-subject" error={errors.subject} required>
                        <div className="input-wrap select-wrap">
                          <FiChevronDown className="select-chevron" />
                          <select
                            id="contact-subject"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="form-input form-select"
                          >
                            {SUBJECTS.map(({ value, label }) => (
                              <option key={value} value={value} disabled={!value}>
                                {label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </Field>
                    </div>

                    {/* Message */}
                    <Field label="Message" id="contact-message" error={errors.message} required>
                      <div className="input-wrap">
                        <FiMessageSquare className="input-icon input-icon--top" />
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={5}
                          placeholder="Describe your project or requirement in detail (min 20 characters)..."
                          value={form.message}
                          onChange={handleChange}
                          className="form-input form-input--icon form-textarea"
                          maxLength={2000}
                        />
                        <span className="char-count">
                          {form.message.length}/2000
                        </span>
                      </div>
                    </Field>

                    {/* Submit */}
                    <button
                      type="submit"
                      className={`btn btn-primary contact-submit${loading ? ' loading' : ''}`}
                      disabled={loading}
                      id="contact-submit-btn"
                    >
                      {loading ? (
                        <>
                          <span className="spinner" />
                          Sending to our team...
                        </>
                      ) : (
                        <>
                          Send Message <FiSend />
                        </>
                      )}
                    </button>

                    <p className="form-privacy">
                      🔒 Your data is stored securely. We never share your information.
                    </p>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}
