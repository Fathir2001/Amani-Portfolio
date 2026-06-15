import { motion } from 'framer-motion'
import { MdVerified } from 'react-icons/md'
import { certificates } from '../data/portfolioData'

const accentColors = [
  'from-primary-purple to-accent-rose',
  'from-accent-rose to-accent-gold',
  'from-primary-navy to-accent-cyan',
  'from-primary-purple to-primary-navy',
  'from-accent-cyan to-primary-purple',
  'from-accent-gold to-accent-rose',
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-28 bg-background-lavender relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D6A756 0%, transparent 70%)', transform: 'translate(30%, 30%)' }} />

      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">✦ Credentials</span>
          <h2 className="section-title text-4xl md:text-5xl mt-3">Certificates</h2>
          <p className="section-subtitle mt-4 max-w-xl mx-auto text-base">
            Continuous learning and professional development in UI/UX design.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.name + cert.issuer}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 hover:shadow-glass-hover transition-shadow duration-300 group"
            >
              {/* Top bar gradient */}
              <div className={`h-1 rounded-full bg-gradient-to-r ${accentColors[i]} mb-5 opacity-70 group-hover:opacity-100 transition-opacity`} />

              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accentColors[i]} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <MdVerified size={18} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-text-heading font-semibold text-sm leading-snug mb-1 group-hover:text-primary-purple transition-colors">{cert.name}</h3>
                  <p className="text-text-muted text-xs mb-3">{cert.issuer}</p>
                  <span className="inline-flex items-center gap-1.5 bg-background-lavender text-primary-purple text-xs font-semibold px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-purple" />
                    {cert.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
