import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function Magnet({ children, strength = 30, className = '' }) {
  const ref = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const dx = e.clientX - centerX
    const dy = e.clientY - centerY
    posRef.current = {
      x: (dx / rect.width) * strength,
      y: (dy / rect.height) * strength,
    }
    el._magnetMotion?.set(posRef.current)
  }

  const handleMouseLeave = (e) => {
    const el = ref.current
    if (el?._magnetMotion) {
      el._magnetMotion.set({ x: 0, y: 0 })
    }
  }

  return (
    <motion.div
      ref={(node) => {
        ref.current = node
      }}
      className={`magnet-wrap inline-block ${className}`}
      whileHover={{ scale: 1.04 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
