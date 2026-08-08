import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiTrendingUp, FiCheckCircle } from 'react-icons/fi'

export default function DigitalGrowth3D() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = canvas.parentElement.offsetWidth || 1200)
    let height = (canvas.height = canvas.parentElement.offsetHeight || 400)

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.offsetWidth || 1200
      height = canvas.height = canvas.parentElement.offsetHeight || 400
    }

    window.addEventListener('resize', handleResize)

    const streams = []
    for (let i = 0; i < 45; i++) {
      streams.push({
        x: Math.random() * width,
        y: height + Math.random() * 100,
        speed: Math.random() * 2 + 1.5,
        length: Math.random() * 40 + 20,
        color: i % 3 === 0 ? '#00F5D4' : i % 3 === 1 ? '#9D4EDD' : '#21B6FF',
      })
    }

    let time = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      time += 0.02

      // Draw 3D Mountain Mesh Grid at Bottom
      ctx.strokeStyle = 'rgba(157, 78, 221, 0.25)'
      ctx.lineWidth = 1

      const cols = 24
      const rows = 12
      const stepX = width / cols
      const stepY = (height * 0.6) / rows

      for (let r = 0; r < rows; r++) {
        ctx.beginPath()
        for (let c = 0; c <= cols; c++) {
          const x = c * stepX
          // Dynamic wave height forming digital mountain
          const elevation = Math.sin(c * 0.4 + time) * Math.cos(r * 0.3 + time) * 22
          const y = height - r * stepY - elevation

          if (c === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      // Draw Upward Data Streams
      streams.forEach((s) => {
        s.y -= s.speed
        if (s.y < 0) s.y = height + 40

        const gradient = ctx.createLinearGradient(s.x, s.y, s.x, s.y + s.length)
        gradient.addColorStop(0, s.color)
        gradient.addColorStop(1, 'transparent')

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x, s.y + s.length)
        ctx.stroke()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const growthStages = [
    { title: 'IDEA', desc: 'Conceptualization & Scope', step: '01' },
    { title: 'BUILD', desc: 'Agile 3D Architecture', step: '02' },
    { title: 'LAUNCH', desc: 'Zero-Downtime Release', step: '03' },
    { title: 'SCALE', desc: 'Enterprise Expansion', step: '04' },
    { title: 'GROWTH', desc: 'Market Dominance', step: '05' },
  ]

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden border-t border-[#16152B]">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      <div className="app-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/30 px-3.5 py-1.5 rounded-full">
            ⚡ 3D Digital Growth Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-afacad text-white mt-4">
            YOUR IDEA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9D4EDD] to-[#00F5D4]">→ OUR TECHNOLOGY →</span> YOUR GROWTH
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-4 font-sansation">
            An ascending digital landscape propelling modern businesses from early-stage concepts to global enterprise dominance.
          </p>
        </div>

        {/* Growth Mountain Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {growthStages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-6 rounded-2xl bg-[#0B0614]/90 border border-[#21B6FF]/30 backdrop-blur-xl shadow-xl hover:border-[#00F5D4] transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold font-afacad text-[#00F5D4] bg-[#00F5D4]/10 px-2.5 py-1 rounded-md border border-[#00F5D4]/30">
                  STAGE {stage.step}
                </span>
                <FiTrendingUp className="text-[#9D4EDD] text-xl group-hover:scale-125 transition-transform" />
              </div>
              <h3 className="text-xl font-bold font-afacad text-white mb-2 group-hover:text-[#00F5D4] transition-colors">
                {stage.title}
              </h3>
              <p className="text-xs text-gray-400 font-sansation leading-relaxed">
                {stage.desc}
              </p>
              <div className="mt-4 pt-3 border-t border-gray-800/60 flex items-center gap-2 text-[11px] text-[#99DCFF]">
                <FiCheckCircle className="text-[#00F5D4]" />
                <span>Verified Milestone</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
