import { motion } from 'framer-motion'
import { languages } from '../data/portfolioData'

const initials = { English: 'EN', Sinhala: 'SI', Tamil: 'TA', Arabic: 'AR' }
const levelColors = {
  Professional: 'text-primary-purple bg-background-lavender',
  Fluent: 'text-primary-navy bg-blue-50',
  Conversational: 'text-accent-gold bg-yellow-50',
  Basic: 'text-text-muted bg-background-lavender',
}

const languageAccents = {
  English: ['#8B5CF6', '#5EDFFF'],
  Sinhala: ['#2F6F99', '#5EDFFF'],
  Tamil: ['#FF7DAA', '#D6A756'],
  Arabic: ['#1F2233', '#8B5CF6'],
}

export default function Languages() {
  return (
    <section id="languages" className="dark-glass-section zigzag-section zigzag-right py-24 relative overflow-hidden">
      <div className="ambient-lines opacity-50" />
      <div className="max-w-4xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-kicker">08 / Communication</span>
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
              className="language-card rounded-2xl p-5 text-center group"
              style={{ '--lang-from': languageAccents[lang.name][0], '--lang-to': languageAccents[lang.name][1] }}
            >
              <div className="language-orbit mx-auto mb-4">
                <div className="language-initial">
                  {initials[lang.name]}
                </div>
              </div>
              <h3 className="text-text-heading font-semibold text-base mb-1">{lang.name}</h3>
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${levelColors[lang.level]}`}>
                {lang.level}
              </span>
              <div className="language-progress mt-4 h-2 rounded-full bg-border-soft overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                  className="language-progress-fill h-full rounded-full"
                />
              </div>
              <p className="mt-3 text-primary-purple text-xs font-bold">{lang.pct}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
