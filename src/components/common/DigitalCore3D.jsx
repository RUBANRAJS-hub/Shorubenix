import { useEffect, useRef } from 'react'

export default function DigitalCore3D() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = canvas.parentElement.offsetWidth || 600)
    let height = (canvas.height = canvas.parentElement.offsetHeight || 550)

    const isMobile = window.innerWidth < 768
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    // Orbital Nodes with Icons & Symbols
    const nodes = [
      { label: '</>', color: '#00F5D4', r: 160, speed: 0.015, angle: 0, size: 28 },
      { label: 'AI', color: '#9D4EDD', r: 200, speed: -0.012, angle: Math.PI / 3, size: 30 },
      { label: '☁️', color: '#21B6FF', r: 170, speed: 0.018, angle: (Math.PI * 2) / 3, size: 26 },
      { label: '🛡️', color: '#F72585', r: 220, speed: -0.01, angle: Math.PI, size: 28 },
      { label: '⚡', color: '#FFB703', r: 150, speed: 0.02, angle: (Math.PI * 4) / 3, size: 26 },
      { label: '{}', color: '#00F5D4', r: 190, speed: -0.016, angle: (Math.PI * 5) / 3, size: 28 },
    ]

    const particles = []
    const numParticles = isMobile ? 30 : 65

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 360,
        y: (Math.random() - 0.5) * 360,
        z: (Math.random() - 0.5) * 360,
        radius: Math.random() * 2 + 1,
        color: i % 2 === 0 ? '#21B6FF' : '#9D4EDD',
      })
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.offsetWidth || 600
      height = canvas.height = canvas.parentElement.offsetHeight || 550
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      targetMouseX = (e.clientX - rect.left - width / 2) * 0.0008
      targetMouseY = (e.clientY - rect.top - height / 2) * 0.0008
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    let globalRotation = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05
      globalRotation += 0.008

      const cx = width / 2
      const cy = height / 2

      // Central Core Outer Glow Ring
      const coreGradient = ctx.createRadialGradient(cx, cy, 10, cx, cy, isMobile ? 120 : 180)
      coreGradient.addColorStop(0, 'rgba(0, 245, 212, 0.35)')
      coreGradient.addColorStop(0.4, 'rgba(157, 78, 221, 0.25)')
      coreGradient.addColorStop(0.8, 'rgba(11, 46, 122, 0.15)')
      coreGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

      ctx.fillStyle = coreGradient
      ctx.beginPath()
      ctx.arc(cx, cy, isMobile ? 120 : 180, 0, Math.PI * 2)
      ctx.fill()

      // Rotating Central 3D Core Sphere Wireframe
      ctx.lineWidth = 1.2
      for (let i = 0; i < 3; i++) {
        const ringRadius = (isMobile ? 65 : 95) + i * 15
        ctx.strokeStyle = i === 0 ? 'rgba(0, 245, 212, 0.5)' : i === 1 ? 'rgba(157, 78, 221, 0.4)' : 'rgba(33, 182, 255, 0.3)'
        ctx.beginPath()
        ctx.ellipse(
          cx,
          cy,
          ringRadius,
          ringRadius * 0.45,
          globalRotation * (i % 2 === 0 ? 1 : -1) + mouseX,
          0,
          Math.PI * 2
        )
        ctx.stroke()
      }

      // Draw Orbiting 3D Nodes
      nodes.forEach((node) => {
        node.angle += node.speed

        const x3d = node.r * Math.cos(node.angle + mouseX)
        const z3d = node.r * Math.sin(node.angle + mouseX)
        const y3d = Math.sin(node.angle * 2 + mouseY) * 40

        const fov = 350
        const scale = fov / (fov + z3d + 200)
        const px = cx + x3d * scale
        const py = cy + y3d * scale

        // Connecting Beam to Core Center
        ctx.strokeStyle = `rgba(33, 182, 255, ${0.15 * scale})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(px, py)
        ctx.stroke()

        // 3D Node Capsule
        const nodeSize = node.size * scale
        ctx.fillStyle = 'rgba(9, 15, 30, 0.85)'
        ctx.strokeStyle = node.color
        ctx.lineWidth = 1.5 * scale
        ctx.beginPath()
        ctx.arc(px, py, nodeSize, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()

        // Glow Ring on Front Nodes
        if (z3d > -50) {
          ctx.fillStyle = node.color
          ctx.shadowColor = node.color
          ctx.shadowBlur = 12
        }

        // Node Label
        ctx.fillStyle = '#FFFFFF'
        ctx.font = `bold ${Math.max(10, 13 * scale)}px sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(node.label, px, py)
        ctx.shadowBlur = 0
      })

      // Draw 3D Ambient Dust Particles
      particles.forEach((p) => {
        const x3d = p.x * Math.cos(globalRotation * 0.5) - p.z * Math.sin(globalRotation * 0.5)
        const z3d = p.z * Math.cos(globalRotation * 0.5) + p.x * Math.sin(globalRotation * 0.5)
        const scale = 300 / (300 + z3d + 180)
        const px = cx + x3d * scale
        const py = cy + p.y * scale

        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(px, py, Math.max(1, p.radius * scale), 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative w-full h-[450px] sm:h-[550px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
