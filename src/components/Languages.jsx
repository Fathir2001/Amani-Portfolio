import { motion } from 'framer-motion'
import { languages } from '../data/portfolioData'

const initials = { English: 'EN', Sinhala: 'SI', Tamil: 'TA', Arabic: 'AR' }
const levelColors = {
  Professional: 'text-primary-purple bg-background-lavender',
  Fluent: 'text-primary-navy bg-blue-50',
  Conversational: 'text-accent-gold bg-yellow-50',
  Basic: 'text-text-muted bg-background-lavender',
}

export default function Languages() {
  return (
    <section id="languages" className="py-20 bg-background-lavender">
      <div className="max-w-4xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-label">Communication</span>
          <h2 className="section-title text-3xl md:text-4xl mt-3">Languages</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl border border-border-soft p-5 text-center hover:shadow-card-hover transition-shadow duration-300 group"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-primary-dark text-white flex items-center justify-center font-bold mb-4 group-hover:bg-primary-purple transition-colors">
                {initials[lang.name]}
              </div>
              <h3 className="text-text-heading font-semibold text-base mb-1">{lang.name}</h3>
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${levelColors[lang.level]}`}>
                {lang.level}
              </span>
              <div className="mt-4 h-1.5 rounded-full bg-border-soft overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: 'var(--gradient-button)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
