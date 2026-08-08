import { useEffect, useRef } from 'react'

export default function TechConstellation3D() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = canvas.parentElement.offsetWidth || 1100)
    let height = (canvas.height = canvas.parentElement.offsetHeight || 500)

    const isMobile = window.innerWidth < 768

    const constellationNodes = [
      { name: 'React 19', group: 'Frontend', color: '#61DAFB', r: 150, angle: 0, speed: 0.007 },
      { name: 'Python', group: 'AI & Backend', color: '#3776AB', r: 210, angle: Math.PI / 4, speed: -0.005 },
      { name: 'Node.js', group: 'Backend', color: '#339933', r: 170, angle: Math.PI / 2, speed: 0.009 },
      { name: 'AWS Cloud', group: 'Cloud', color: '#FF9900', r: 250, angle: (3 * Math.PI) / 4, speed: -0.004 },
      { name: 'PyTorch', group: 'AI Engine', color: '#EE4C2C', r: 190, angle: Math.PI, speed: 0.008 },
      { name: 'Docker', group: 'DevOps', color: '#2496ED', r: 230, angle: (5 * Math.PI) / 4, speed: -0.006 },
      { name: 'PostgreSQL', group: 'Database', color: '#4169E1', r: 160, angle: (3 * Math.PI) / 2, speed: 0.01 },
      { name: 'Cyber Shield', group: 'Security', color: '#00F5D4', r: 270, angle: (7 * Math.PI) / 4, speed: -0.003 },
    ]

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.offsetWidth || 1100
      height = canvas.height = canvas.parentElement.offsetHeight || 500
    }

    window.addEventListener('resize', handleResize)

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      const cx = width / 2
      const cy = height / 2

      // Central Nucleus Halo
      const halo = ctx.createRadialGradient(cx, cy, 10, cx, cy, isMobile ? 120 : 200)
      halo.addColorStop(0, 'rgba(157, 78, 221, 0.35)')
      halo.addColorStop(0.5, 'rgba(0, 245, 212, 0.2)')
      halo.addColorStop(1, 'rgba(0, 0, 0, 0)')

      ctx.fillStyle = halo
      ctx.beginPath()
      ctx.arc(cx, cy, isMobile ? 120 : 200, 0, Math.PI * 2)
      ctx.fill()

      // Center Core
      ctx.fillStyle = '#08030F'
      ctx.strokeStyle = '#00F5D4'
      ctx.lineWidth = 2.5
      ctx.beginPath()
      ctx.arc(cx, cy, isMobile ? 42 : 60, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()

      ctx.fillStyle = '#FFFFFF'
      ctx.font = `bold ${isMobile ? 11 : 14}px sans-serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('OUR TECH STACK', cx, cy)

      // Orbit Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)'
      ctx.lineWidth = 1
      for (let r = 140; r <= 280; r += 40) {
        ctx.beginPath()
        ctx.ellipse(cx, cy, r, r * 0.45, 0, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Constellation Nodes
      const projected = []

      constellationNodes.forEach((node) => {
        node.angle += node.speed

        const nx = cx + Math.cos(node.angle) * node.r
        const ny = cy + Math.sin(node.angle) * (node.r * 0.45)

        projected.push({ ...node, x: nx, y: ny })

        // Energy Ray
        ctx.strokeStyle = `rgba(33, 182, 255, 0.2)`
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(nx, ny)
        ctx.stroke()

        // Node Capsule
        ctx.fillStyle = '#0B0614'
        ctx.strokeStyle = node.color
        ctx.lineWidth = 1.8
        ctx.beginPath()
        ctx.arc(nx, ny, isMobile ? 18 : 24, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()

        ctx.fillStyle = '#FFFFFF'
        ctx.font = 'bold 10px sans-serif'
        ctx.fillText(node.name, nx, ny)
      })

      // Inter-node Constellation Mesh
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i]
          const p2 = projected[j]
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y)

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.25
            ctx.strokeStyle = `rgba(0, 245, 212, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative w-full h-[450px] sm:h-[550px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
