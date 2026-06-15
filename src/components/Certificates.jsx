import { motion } from 'framer-motion'
import { MdVerified } from 'react-icons/md'
import { certificates } from '../data/portfolioData'

export default function Certificates() {
  return (
    <section id="certificates" className="section-band py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-14"
        >
          <div>
            <span className="section-kicker">06 / Credentials</span>
            <h2 className="section-title text-4xl md:text-5xl mt-3">Certificates</h2>
          </div>
          <p className="section-subtitle text-base max-w-md">
            Continuous learning across UI/UX design, Figma, Adobe XD, and visual design practice.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <motion.article
              key={cert.name + cert.issuer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="bg-white rounded-2xl border border-border-soft p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-start justify-between gap-4 mb-7">
                <span className="w-11 h-11 rounded-xl bg-primary-dark text-white flex items-center justify-center">
                  <MdVerified size={19} />
                </span>
                <span className="text-primary-purple text-xs font-bold uppercase tracking-[0.14em]">{cert.date}</span>
              </div>
              <h3 className="text-text-heading font-bold leading-snug mb-2">{cert.name}</h3>
              <p className="text-text-muted text-sm">{cert.issuer}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
