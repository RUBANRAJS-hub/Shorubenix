import { motion } from 'framer-motion'
import { FiSearch, FiLayout, FiCode, FiShield, FiSend, FiTrendingUp } from 'react-icons/fi'

const processSteps = [
  { step: '01', title: 'DISCOVER', desc: 'Requirements, Architecture & Persona Discovery', icon: <FiSearch className="text-[#00F5D4]" /> },
  { step: '02', title: 'DESIGN', desc: 'Futuristic UI/UX Wireframing & System Schemas', icon: <FiLayout className="text-[#9D4EDD]" /> },
  { step: '03', title: 'DEVELOP', desc: 'Agile Modular Sprint Code Execution', icon: <FiCode className="text-[#21B6FF]" /> },
  { step: '04', title: 'TEST', desc: 'Security Audits, QA & Performance Benchmarks', icon: <FiShield className="text-[#F72585]" /> },
  { step: '05', title: 'LAUNCH', desc: 'Zero-Downtime Cloud Pipeline Release', icon: <FiSend className="text-[#FFB703]" /> },
  { step: '06', title: 'SCALE', desc: 'Continuous AI Analytics & Global Scaling', icon: <FiTrendingUp className="text-[#00F5D4]" /> },
]

export default function ProcessTimeline3D() {
  return (
    <section className="relative py-24 bg-[#08030F] overflow-hidden border-t border-[#16152B]">
      <div className="app-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/30 px-3.5 py-1.5 rounded-full">
            ⚡ 3D Execution Roadmap
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-afacad text-white mt-4">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#9D4EDD]">AGILE 3D PROCESS</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-4 font-sansation">
            A curved digital energy path guiding your solution seamlessly from initial discovery to global enterprise scale.
          </p>
        </div>

        {/* Curved Path Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {processSteps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-[#0B0614]/90 border border-[#21B6FF]/30 backdrop-blur-xl shadow-2xl hover:border-[#00F5D4] transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-extrabold font-afacad text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#9D4EDD]">
                  {item.step}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#00F5D4]/10 border border-[#00F5D4]/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold font-afacad text-white mb-3 group-hover:text-[#00F5D4] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 font-sansation leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
