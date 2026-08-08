import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const techNodes = [
  { name: 'React 19', color: 0x21b6ff },
  { name: 'Next.js', color: 0xffffff },
  { name: 'TypeScript', color: 0x3178c6 },
  { name: 'Python RAG', color: 0x3776ab },
  { name: 'Node.js', color: 0x68a063 },
  { name: 'AWS Cloud', color: 0xff9900 },
  { name: 'Docker', color: 0x2496ed },
  { name: 'Solidity Web3', color: 0x9d4edd },
  { name: 'FastAPI', color: 0x00f5d4 },
  { name: 'PostgreSQL', color: 0x336791 },
  { name: 'PyTorch AI', color: 0xee4c2c },
  { name: 'TensorFlow', color: 0xff6f00 }
]

export default function TechStack3DCanvas() {
  const mountRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const width = container.clientWidth || 800
    const height = container.clientHeight || 400

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
    camera.position.z = 8

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const group = new THREE.Group()

    // 3D Nodes System
    const nodesMeshGroup = new THREE.Group()
    const nodeSpheres = []

    techNodes.forEach((node, i) => {
      const radius = 3.2
      const phi = Math.acos(-1 + (2 * i) / techNodes.length)
      const theta = Math.sqrt(techNodes.length * Math.PI) * phi

      const x = radius * Math.cos(theta) * Math.sin(phi)
      const y = radius * Math.sin(theta) * Math.sin(phi)
      const z = radius * Math.cos(phi)

      // Node Sphere
      const geo = new THREE.SphereGeometry(0.28, 24, 24)
      const mat = new THREE.MeshBasicMaterial({
        color: node.color,
        wireframe: false,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(x, y, z)
      nodesMeshGroup.add(mesh)
      nodeSpheres.push(mesh)
    })

    // Connecting lines between nodes
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x21b6ff,
      transparent: true,
      opacity: 0.25,
    })

    for (let i = 0; i < nodeSpheres.length; i++) {
      for (let j = i + 1; j < nodeSpheres.length; j++) {
        const dist = nodeSpheres[i].position.distanceTo(nodeSpheres[j].position)
        if (dist < 3.8) {
          const points = [nodeSpheres[i].position, nodeSpheres[j].position]
          const lineGeo = new THREE.BufferGeometry().setFromPoints(points)
          const line = new THREE.Line(lineGeo, lineMat)
          nodesMeshGroup.add(line)
        }
      }
    }

    group.add(nodesMeshGroup)
    scene.add(group)

    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      mouseX = (e.clientX - rect.left - width / 2) / (width / 2)
      mouseY = (e.clientY - rect.top - height / 2) / (height / 2)
    }

    window.addEventListener('mousemove', handleMouseMove)

    const startTime = performance.now()
    let animId

    const animate = () => {
      const elapsedTime = (performance.now() - startTime) * 0.001
      group.rotation.y = elapsedTime * 0.25
      group.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2

      group.rotation.y += mouseX * 0.02
      group.rotation.x += mouseY * 0.02

      renderer.render(scene, camera)
      animId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animId)
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-[360px] sm:h-[420px] flex items-center justify-center my-8">
      <div className="absolute w-80 h-80 rounded-full bg-[#9D4EDD]/10 blur-[100px] pointer-events-none" />
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  )
}
