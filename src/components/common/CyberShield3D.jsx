import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiShield, FiLock, FiKey, FiCloudOff } from 'react-icons/fi'

export default function CyberShield3D() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = canvas.parentElement.offsetWidth || 550)
    let height = (canvas.height = canvas.parentElement.offsetHeight || 450)

    const isMobile = window.innerWidth < 768
    const particles = []

    for (let i = 0; i < (isMobile ? 25 : 55); i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 2.5 + 1,
      })
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.offsetWidth || 550
      height = canvas.height = canvas.parentElement.offsetHeight || 450
    }

    window.addEventListener('resize', handleResize)

    let shieldPulse = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      shieldPulse += 0.03

      const cx = width / 2
      const cy = height / 2
      const shieldRadius = isMobile ? 80 : 120

      // Shield Aura Pulse
      const aura = ctx.createRadialGradient(cx, cy, 20, cx, cy, shieldRadius + 60)
      aura.addColorStop(0, 'rgba(0, 245, 212, 0.35)')
      aura.addColorStop(0.6, 'rgba(157, 78, 221, 0.15)')
      aura.addColorStop(1, 'rgba(0, 0, 0, 0)')

      ctx.fillStyle = aura
      ctx.beginPath()
      ctx.arc(cx, cy, shieldRadius + 60, 0, Math.PI * 2)
      ctx.fill()

      // Shield Outer Geometry (3D Pentagon / Shield)
      ctx.strokeStyle = '#00F5D4'
      ctx.lineWidth = 3
      ctx.shadowColor = '#00F5D4'
      ctx.shadowBlur = 18 + Math.sin(shieldPulse) * 8

      ctx.beginPath()
      ctx.moveTo(cx, cy - shieldRadius)
      ctx.lineTo(cx + shieldRadius * 0.85, cy - shieldRadius * 0.4)
      ctx.lineTo(cx + shieldRadius * 0.7, cy + shieldRadius * 0.6)
      ctx.lineTo(cx, cy + shieldRadius)
      ctx.lineTo(cx - shieldRadius * 0.7, cy + shieldRadius * 0.6)
      ctx.lineTo(cx - shieldRadius * 0.85, cy - shieldRadius * 0.4)
      ctx.closePath()
      ctx.stroke()
      ctx.shadowBlur = 0

      // Repelled Cyber Particles Collisions
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        const dist = Math.hypot(p.x - cx, p.y - cy)
        if (dist < shieldRadius + 15) {
          // Deflect particle away from shield
          const angle = Math.atan2(p.y - cy, p.x - cx)
          p.x = cx + Math.cos(angle) * (shieldRadius + 20)
          p.y = cy + Math.sin(angle) * (shieldRadius + 20)
          p.vx = Math.cos(angle) * 3
          p.vy = Math.sin(angle) * 3
        }

        ctx.fillStyle = '#F72585'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const securityFeatures = [
    { title: 'Quantum Encryption', icon: <FiLock className="text-[#00F5D4]" /> },
    { title: 'Zero-Trust Auth', icon: <FiKey className="text-[#9D4EDD]" /> },
    { title: 'API Firewalling', icon: <FiShield className="text-[#21B6FF]" /> },
    { title: 'Cloud Data Defense', icon: <FiCloudOff className="text-[#F72585]" /> },
  ]

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden border-t border-[#16152B]">
      <div className="app-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: 3D Cybersecurity Shield Canvas */}
        <div className="relative w-full h-[400px] sm:h-[450px] flex items-center justify-center order-2 lg:order-1">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>

        {/* Right Column: Security Copy & Features */}
        <div className="order-1 lg:order-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/30 px-3.5 py-1.5 rounded-full">
            🛡️ Zero-Downtime Cyber Security
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-afacad text-white mt-4 leading-tight">
            QUANTUM <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#F72585]">DIGITAL SHIELD.</span>
          </h2>
          <p className="text-gray-300 text-base mt-4 font-sansation leading-relaxed">
            Enterprise-grade cyber security protocols, end-to-end data encryption, automated vulnerability penetration testing, and zero-trust perimeter defense.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {securityFeatures.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-4 rounded-2xl bg-[#0B0614] border border-[#21B6FF]/30 flex items-center gap-3 shadow-xl"
              >
                <div className="text-2xl">{item.icon}</div>
                <span className="text-sm font-bold text-white font-afacad">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
