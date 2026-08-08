import { useEffect, useRef } from 'react'

export default function TechUniverseAbout3D() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = canvas.parentElement.offsetWidth || 550)
    let height = (canvas.height = canvas.parentElement.offsetHeight || 500)

    const isMobile = window.innerWidth < 768
    const centerNode = { label: 'Shorubenix Core', color: '#00F5D4' }

    const orbitNodes = [
      { label: 'Innovation', color: '#9D4EDD', radius: 130, angle: 0, speed: 0.008 },
      { label: 'AI Models', color: '#21B6FF', radius: 170, angle: Math.PI / 3, speed: -0.006 },
      { label: 'Cloud Ops', color: '#F72585', radius: 140, angle: (Math.PI * 2) / 3, speed: 0.01 },
      { label: 'Security', color: '#FFB703', radius: 180, angle: Math.PI, speed: -0.007 },
      { label: 'UX Design', color: '#00F5D4', radius: 150, angle: (Math.PI * 4) / 3, speed: 0.009 },
      { label: 'Growth Scale', color: '#9D4EDD', radius: 190, angle: (Math.PI * 5) / 3, speed: -0.005 },
    ]

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.offsetWidth || 550
      height = canvas.height = canvas.parentElement.offsetHeight || 500
    }

    window.addEventListener('resize', handleResize)

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      const cx = width / 2
      const cy = height / 2

      // Glowing Center Nucleus
      const nucleusGradient = ctx.createRadialGradient(cx, cy, 5, cx, cy, isMobile ? 80 : 120)
      nucleusGradient.addColorStop(0, 'rgba(0, 245, 212, 0.4)')
      nucleusGradient.addColorStop(0.5, 'rgba(157, 78, 221, 0.25)')
      nucleusGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

      ctx.fillStyle = nucleusGradient
      ctx.beginPath()
      ctx.arc(cx, cy, isMobile ? 80 : 120, 0, Math.PI * 2)
      ctx.fill()

      // Center Core Badge
      ctx.fillStyle = '#0B0614'
      ctx.strokeStyle = '#00F5D4'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(cx, cy, isMobile ? 36 : 48, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()

      ctx.fillStyle = '#FFFFFF'
      ctx.font = 'bold 12px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(centerNode.label, cx, cy)

      // Orbit Nodes & Connecting Energy Rays
      orbitNodes.forEach((node) => {
        node.angle += node.speed

        const nx = cx + Math.cos(node.angle) * node.radius
        const ny = cy + Math.sin(node.angle) * (node.radius * 0.55)

        // Energy Ray to Core
        ctx.strokeStyle = `rgba(33, 182, 255, 0.25)`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(nx, ny)
        ctx.stroke()

        // Orbit Node
        ctx.fillStyle = '#08030F'
        ctx.strokeStyle = node.color
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.arc(nx, ny, isMobile ? 18 : 24, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()

        ctx.fillStyle = '#FFFFFF'
        ctx.font = 'bold 10px sans-serif'
        ctx.fillText(node.label, nx, ny)
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
    <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
