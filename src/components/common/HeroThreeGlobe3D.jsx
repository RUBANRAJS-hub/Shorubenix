import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroThreeGlobe3D() {
  const mountRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const width = container.clientWidth || 500
    const height = container.clientHeight || 500

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 7

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // 2. Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x21b6ff, 3, 50)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    const cyanLight = new THREE.PointLight(0x00f5d4, 2, 50)
    cyanLight.position.set(-5, -5, -3)
    scene.add(cyanLight)

    const purpleLight = new THREE.PointLight(0x9d4edd, 2, 50)
    purpleLight.position.set(0, 5, -5)
    scene.add(purpleLight)

    // 3. Central 3D Globe (Icosahedron + Wireframe)
    const globeGroup = new THREE.Group()

    const innerGeo = new THREE.IcosahedronGeometry(2, 2)
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0x071536,
      emissive: 0x0b2e7a,
      wireframe: false,
      transparent: true,
      opacity: 0.85,
      shininess: 80,
    })
    const innerMesh = new THREE.Mesh(innerGeo, innerMat)
    globeGroup.add(innerMesh)

    // Wireframe Outer Mesh
    const wireGeo = new THREE.IcosahedronGeometry(2.05, 3)
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x21b6ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    })
    const wireMesh = new THREE.Mesh(wireGeo, wireMat)
    globeGroup.add(wireMesh)

    // Glowing Core Sphere
    const coreGeo = new THREE.SphereGeometry(1.2, 32, 32)
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00f5d4,
      transparent: true,
      opacity: 0.25,
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    globeGroup.add(coreMesh)

    // 4. Orbiting Rings
    const ringGeo = new THREE.TorusGeometry(3.1, 0.02, 16, 100)
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f5d4, transparent: true, opacity: 0.6 })
    const ringMesh1 = new THREE.Mesh(ringGeo, ringMat)
    ringMesh1.rotation.x = Math.PI / 3
    globeGroup.add(ringMesh1)

    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x9d4edd, transparent: true, opacity: 0.6 })
    const ringMesh2 = new THREE.Mesh(ringGeo, ringMat2)
    ringMesh2.rotation.y = Math.PI / 4
    globeGroup.add(ringMesh2)

    // 5. Floating Particle Satellites
    const particleCount = 120
    const particleGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      const r = 2.4 + Math.random() * 1.5

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      // Color variation: Sky Blue, Cyan, Purple
      const randColor = Math.random()
      if (randColor < 0.33) {
        colors[i * 3] = 0.13 // R
        colors[i * 3 + 1] = 0.71 // G
        colors[i * 3 + 2] = 1.0 // B
      } else if (randColor < 0.66) {
        colors[i * 3] = 0.0
        colors[i * 3 + 1] = 0.96
        colors[i * 3 + 2] = 0.83
      } else {
        colors[i * 3] = 0.61
        colors[i * 3 + 1] = 0.3
        colors[i * 3 + 2] = 0.86
      }
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    })
    const particlePoints = new THREE.Points(particleGeo, particleMat)
    globeGroup.add(particlePoints)

    scene.add(globeGroup)

    // 6. Interactive Mouse Motion Parallax
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      mouseX = (e.clientX - rect.left - width / 2) / (width / 2)
      mouseY = (e.clientY - rect.top - height / 2) / (height / 2)
    }

    window.addEventListener('mousemove', handleMouseMove)

    // 7. Animation Loop
    let animationFrameId
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Smooth rotation
      globeGroup.rotation.y = elapsedTime * 0.35
      wireMesh.rotation.x = elapsedTime * 0.15
      ringMesh1.rotation.z = elapsedTime * 0.2
      ringMesh2.rotation.z = -elapsedTime * 0.25
      particlePoints.rotation.y = -elapsedTime * 0.15

      // Mouse Parallax reaction
      targetX += (mouseX * 0.5 - targetX) * 0.05
      targetY += (mouseY * 0.5 - targetY) * 0.05

      globeGroup.rotation.x = targetY
      globeGroup.rotation.z = targetX

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // 8. Handle Window Resize
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-[450px] sm:h-[500px] flex items-center justify-center">
      {/* Background Ambient Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-[#21B6FF]/15 blur-[90px] pointer-events-none" />
      <div className="absolute w-64 h-64 rounded-full bg-[#00F5D4]/10 blur-[80px] pointer-events-none" />
      
      {/* 3D Canvas Mount Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating 3D Tech Badges Overlay */}
      <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#0B1528]/80 border border-[#21B6FF]/40 text-[#21B6FF] text-xs font-bold shadow-lg backdrop-blur-md animate-bounce">
        ⚡ React 19 &amp; Next.js
      </div>
      <div className="absolute bottom-8 right-6 px-3.5 py-1.5 rounded-full bg-[#0E0B1A]/80 border border-[#9D4EDD]/40 text-[#9D4EDD] text-xs font-bold shadow-lg backdrop-blur-md">
        🤖 AI RAG &amp; Python
      </div>
      <div className="absolute bottom-12 left-8 px-3.5 py-1.5 rounded-full bg-[#051A18]/80 border border-[#00F5D4]/40 text-[#00F5D4] text-xs font-bold shadow-lg backdrop-blur-md">
        ☁️ AWS &amp; Cloud DevOps
      </div>
    </div>
  )
}
