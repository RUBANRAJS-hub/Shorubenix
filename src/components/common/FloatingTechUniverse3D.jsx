import { motion } from 'framer-motion'
import {
  FaPython, FaReact, FaNodeJs, FaJava, FaDocker, FaAws, FaEthereum
} from 'react-icons/fa6'
import { SiTypescript, SiCplusplus, SiSolidity, SiOpenai } from 'react-icons/si'

const techBadges = [
  { name: 'Python', icon: <FaPython className="text-[#3776AB]" />, bg: 'rgba(55, 118, 171, 0.15)', border: '#3776AB' },
  { name: 'React 19', icon: <FaReact className="text-[#61DAFB]" />, bg: 'rgba(97, 218, 251, 0.15)', border: '#61DAFB' },
  { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" />, bg: 'rgba(49, 120, 198, 0.15)', border: '#3178C6' },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, bg: 'rgba(51, 153, 51, 0.15)', border: '#339933' },
  { name: 'Generative AI', icon: <SiOpenai className="text-[#00F5D4]" />, bg: 'rgba(0, 245, 212, 0.15)', border: '#00F5D4' },
  { name: 'Java', icon: <FaJava className="text-[#ED8B00]" />, bg: 'rgba(237, 139, 0, 0.15)', border: '#ED8B00' },
  { name: 'AWS Cloud', icon: <FaAws className="text-[#FF9900]" />, bg: 'rgba(255, 153, 0, 0.15)', border: '#FF9900' },
  { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" />, bg: 'rgba(36, 150, 237, 0.15)', border: '#2496ED' },
  { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" />, bg: 'rgba(0, 89, 156, 0.15)', border: '#00599C' },
  { name: 'Solidity Web3', icon: <SiSolidity className="text-[#9D4EDD]" />, bg: 'rgba(157, 78, 221, 0.15)', border: '#9D4EDD' },
]

export default function FloatingTechUniverse3D() {
  return (
    <div className="relative w-full py-12 overflow-hidden bg-[#08030F]/80 border-y border-[#16152B]">
      <div className="app-container text-center mb-8">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/30 px-3 py-1 rounded-full">
          ⚡ Digital Universe Technologies
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold font-afacad text-white mt-3">
          Recognized Engineering Ecosystems
        </h3>
      </div>

      <div className="flex gap-6 overflow-hidden select-none">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="flex gap-6 min-w-full flex-shrink-0"
        >
          {techBadges.concat(techBadges).map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.05 }}
              data-cursor-text={item.name.toUpperCase()}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl border backdrop-blur-md transition-all shadow-lg"
              style={{
                backgroundColor: item.bg,
                borderColor: item.border,
                boxShadow: `0 8px 24px ${item.bg}`
              }}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-bold text-white font-sansation whitespace-nowrap">
                {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
