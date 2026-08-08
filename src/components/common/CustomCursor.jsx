import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      const target = e.target.closest('[data-cursor-text], a, button, .spotlight-card, .service-showcase-tab, .solutions-point-item')
      if (target) {
        setIsHovered(true)
        const customText = target.getAttribute('data-cursor-text')
        setCursorText(customText || '')
      } else {
        setIsHovered(false)
        setCursorText('')
      }
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Central Cursor Dot */}
      <div
        className="fixed w-3 h-3 rounded-full bg-[#00F5D4] shadow-[0_0_12px_#00F5D4] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />

      {/* Expanding Ring & Tech Label Badge */}
      <div
        className={`fixed flex items-center justify-center rounded-full border border-[#21B6FF]/60 bg-[#0B2E7A]/20 backdrop-blur-sm transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isHovered ? 'w-16 h-16 scale-110 border-[#00F5D4] shadow-[0_0_20px_rgba(0,245,212,0.4)]' : 'w-9 h-9 scale-100'
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        {cursorText && (
          <span className="text-[9px] font-bold text-[#00F5D4] tracking-widest uppercase animate-pulse px-1 text-center leading-none">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  )
}
