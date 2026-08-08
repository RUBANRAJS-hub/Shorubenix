import { useRef } from 'react'

export default function SpotlightCard({ children, className = '', spotlightColor = 'rgba(33, 182, 255, 0.12)' }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--spotlight-x', `${x}px`)
    card.style.setProperty('--spotlight-y', `${y}px`)
    card.style.setProperty('--spotlight-color', spotlightColor)
    card.style.setProperty('--spotlight-opacity', '1')
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--spotlight-opacity', '0')
  }

  return (
    <div
      ref={cardRef}
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        overflow: 'hidden',
        '--spotlight-opacity': 0,
        '--spotlight-x': '50%',
        '--spotlight-y': '50%',
        '--spotlight-color': spotlightColor,
      }}
    >
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          opacity: 'var(--spotlight-opacity)',
          transition: 'opacity 0.3s ease',
          background: 'radial-gradient(300px circle at var(--spotlight-x) var(--spotlight-y), var(--spotlight-color), transparent 70%)',
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
