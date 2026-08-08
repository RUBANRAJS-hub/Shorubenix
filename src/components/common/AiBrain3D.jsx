import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiCpu, FiZap, FiActivity, FiLayers } from 'react-icons/fi'

export default function AiBrain3D() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = canvas.parentElement.offsetWidth || 600)
    let height = (canvas.height = canvas.parentElement.offsetHeight || 450)

    const isMobile = window.innerWidth < 768
    const particles = []
    const numParticles = isMobile ? 40 : 90

    for (let i = 0; i < numParticles; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      const r = isMobile ? 110 : 160

      particles.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        baseRadius: Math.random() * 2 + 1,
      })
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.offsetWidth || 600
      height = canvas.height = canvas.parentElement.offsetHeight || 450
    }

    window.addEventListener('resize', handleResize)

    let rotY = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      rotY += 0.01

      const cx = width / 2
      const cy = height / 2

      // Glowing Neural Core Glow
      const glow = ctx.createRadialGradient(cx, cy, 10, cx, cy, isMobile ? 140 : 220)
      glow.addColorStop(0, 'rgba(0, 245, 212, 0.4)')
      glow.addColorStop(0.5, 'rgba(157, 78, 221, 0.2)')
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)')

      ctx.fillStyle = glow
      ctx.beginPath()
      ctx.arc(cx, cy, isMobile ? 140 : 220, 0, Math.PI * 2)
      ctx.fill()

      const projected = []

      // 3D Neural Nodes
      particles.forEach((p) => {
        const x1 = p.x * Math.cos(rotY) - p.z * Math.sin(rotY)
        const z1 = p.z * Math.cos(rotY) + p.x * Math.sin(rotY)
        const scale = 320 / (320 + z1 + 200)

        const px = cx + x1 * scale
        const py = cy + p.y * scale

        projected.push({ x: px, y: py, z: z1, scale })
      })

      // Synaptic Connections
      ctx.lineWidth = 0.8
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i]
          const p2 = projected[j]
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y)

          if (dist < (isMobile ? 55 : 85)) {
            const alpha = (1 - dist / 85) * 0.3
            ctx.strokeStyle = `rgba(0, 245, 212, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      // Draw Neural Points
      projected.forEach((p) => {
        const alpha = Math.max(0.2, (p.z + 160) / 320)
        ctx.fillStyle = `rgba(0, 245, 212, ${alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2 * p.scale, 0, Math.PI * 2)
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

  return (
    <section className="relative py-24 bg-[#0B0614] overflow-hidden border-t border-[#16152B]">
      <div className="app-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: AI Description & Pipeline */}
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/30 px-3.5 py-1.5 rounded-full">
            🤖 Generative AI & Machine Intelligence
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-afacad text-white mt-4 leading-tight">
            INTELLIGENCE, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#9D4EDD]">ENGINEERED.</span>
          </h2>
          <p className="text-gray-300 text-base mt-4 font-sansation leading-relaxed">
            Harness custom LLMs, RAG architectures, and predictive machine learning pipelines to convert unstructured enterprise data into autonomous automated action.
          </p>

          {/* Pipeline Flow: DATA → AI → INSIGHT → ACTION */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            {[
              { title: 'DATA', icon: <FiLayers /> },
              { title: 'AI', icon: <FiCpu /> },
              { title: 'INSIGHT', icon: <FiActivity /> },
              { title: 'ACTION', icon: <FiZap /> },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-3.5 rounded-xl bg-[#08030F] border border-[#21B6FF]/30 text-center flex flex-col items-center justify-center gap-1.5 shadow-lg"
              >
                <span className="text-[#00F5D4] text-xl">{step.icon}</span>
                <span className="text-xs font-bold text-white tracking-widest">{step.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: 3D AI Brain Neural Sphere */}
        <div className="relative w-full h-[400px] sm:h-[450px] flex items-center justify-center">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>
      </div>
    </section>
  )
}
