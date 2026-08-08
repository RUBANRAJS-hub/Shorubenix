import { useEffect, useRef } from 'react'

export default function Cyber3DBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement.offsetHeight || window.innerHeight)

    const isMobile = window.innerWidth < 768
    const numParticles = isMobile ? 35 : 75
    const fov = 300
    let mouseX = 0
    let mouseY = 0

    // Create 3D particles on a sphere surface
    const particles = []
    for (let i = 0; i < numParticles; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const radius = isMobile ? 140 : 240

      particles.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        baseRadius: Math.random() * 2 + 1.5,
        speedX: (Math.random() - 0.5) * 0.006,
        speedY: (Math.random() - 0.5) * 0.006,
      })
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth
      height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = (e.clientX - rect.left - width / 2) * 0.0005
      mouseY = (e.clientY - rect.top - height / 2) * 0.0005
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    let angleX = 0.002
    let angleY = 0.003

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Ambient radial glow behind 3D sphere
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        width > 768 ? 320 : 180
      )
      gradient.addColorStop(0, 'rgba(33, 182, 255, 0.12)')
      gradient.addColorStop(0.5, 'rgba(11, 46, 122, 0.08)')
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Rotate particles in 3D
      const rotX = angleX + mouseY
      const rotY = angleY + mouseX

      const projected = []

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // 3D Y rotation
        let x1 = p.x * Math.cos(rotY) - p.z * Math.sin(rotY)
        let z1 = p.z * Math.cos(rotY) + p.x * Math.sin(rotY)

        // 3D X rotation
        let y1 = p.y * Math.cos(rotX) - z1 * Math.sin(rotX)
        let z2 = z1 * Math.cos(rotX) + p.y * Math.sin(rotX)

        p.x = x1
        p.y = y1
        p.z = z2

        // Perspective Projection
        const scale = fov / (fov + z2 + 300)
        const projX = x1 * scale + width / 2
        const projY = y1 * scale + height / 2

        projected.push({ x: projX, y: projY, z: z2, scale, radius: p.baseRadius * scale })
      }

      // Draw 3D connecting cyber mesh lines
      ctx.lineWidth = 0.8
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i]
          const p2 = projected[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          const maxDist = isMobile ? 80 : 130
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35 * Math.min(p1.scale, p2.scale)
            ctx.strokeStyle = `rgba(33, 182, 255, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      // Draw 3D particle nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i]
        const alpha = Math.max(0.2, (p.z + 240) / 480)

        ctx.fillStyle = `rgba(33, 182, 255, ${alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(1, p.radius), 0, Math.PI * 2)
        ctx.fill()

        // Outer glow on front nodes
        if (p.z > 50) {
          ctx.fillStyle = `rgba(11, 46, 122, ${alpha * 0.4})`
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2)
          ctx.fill()
        }
      }

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
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.85, zIndex: 1, position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
    />
  )
}
