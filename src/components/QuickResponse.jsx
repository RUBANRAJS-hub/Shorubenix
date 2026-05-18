import { useState, useEffect } from 'react'
import { FiMessageCircle, FiX, FiPhoneCall } from 'react-icons/fi'
import { SHEETS_CONFIG } from '../sheets.config'
import './QuickResponse.css'

export default function QuickResponse() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show a gentle popover nudge after 3 seconds to welcome users
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)

    // Auto-hide tooltip after 10 seconds so it remains non-intrusive
    const hideTimer = setTimeout(() => {
      setShowTooltip(false)
    }, 13000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  const defaultMsg = encodeURIComponent(
    "Hi Shorubenix Info Technology! I am looking for a quick response regarding a project development / academic service. Could you please help me?"
  )

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${SHEETS_CONFIG.WHATSAPP_NUMBER}?text=${defaultMsg}`, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
  }

  const handleCallClick = () => {
    window.open(`tel:+918778584218`, '_self')
    setIsOpen(false)
  }

  return (
    <div className="quick-response-container">
      {/* Sleek popover bubble */}
      {showTooltip && !isOpen && (
        <div className="quick-response-bubble animate-fadeUp">
          <button 
            className="quick-response-bubble__close" 
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
          >
            <FiX size={14} />
          </button>
          <div className="quick-response-bubble__content" onClick={() => setIsOpen(true)}>
            <span className="quick-response-bubble__badge">Online Now</span>
            <p className="quick-response-bubble__text">🚀 Need a project or paper built? Get a <strong>Quick Response</strong> in 5 mins!</p>
          </div>
        </div>
      )}

      {/* Expanded Quick Options Panel */}
      {isOpen && (
        <div className="quick-response-panel animate-fadeUp">
          <div className="quick-response-panel__header">
            <div className="quick-response-panel__header-logo">
              <img src="/phoenix_logo.png" alt="Shorubenix logo" />
              <div>
                <h4>Shorubenix Support</h4>
                <span>Typically replies in under 5 mins</span>
              </div>
            </div>
            <button 
              className="quick-response-panel__close" 
              onClick={() => setIsOpen(false)}
              aria-label="Close panel"
            >
              <FiX size={18} />
            </button>
          </div>
          <div className="quick-response-panel__body">
            <p className="quick-response-panel__intro">👋 Hello! How can we assist you today? Select a contact method below for instant connection.</p>
            
            <button 
              onClick={handleWhatsAppClick} 
              className="btn quick-response-panel__btn quick-response-panel__btn--whatsapp"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </button>

            <button 
              onClick={handleCallClick} 
              className="btn quick-response-panel__btn quick-response-panel__btn--call"
            >
              <FiPhoneCall size={16} />
              Call Admin Office
            </button>
          </div>
        </div>
      )}

      {/* Main floating button */}
      <button 
        className={`quick-response-btn${isOpen ? ' active' : ''}`}
        onClick={() => {
          setIsOpen(!isOpen)
          setShowTooltip(false)
        }}
        aria-label="Open Quick Support Menu"
        id="quick-response-floating-btn"
      >
        <div className="quick-response-btn__glow" />
        <div className="quick-response-btn__pulses">
          <div className="pulse-ring pulse-ring--1" />
          <div className="pulse-ring pulse-ring--2" />
        </div>
        <div className="quick-response-btn__icon">
          {isOpen ? <FiX size={24} /> : <FiMessageCircle size={28} />}
        </div>
      </button>
    </div>
  )
}
