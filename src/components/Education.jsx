import { motion } from 'framer-motion'
import { MdSchool } from 'react-icons/md'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="py-28 bg-background-main relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-14"
        >
          <div>
            <span className="section-kicker">05 / My Journey</span>
            <h2 className="section-title text-4xl md:text-5xl mt-3">Education</h2>
          </div>
          <p className="section-subtitle text-base max-w-md">
            A foundation built through dedicated study across design, technology, and communication.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {education.map((item, i) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-border-soft rounded-[1.5rem] p-6 md:p-7 shadow-card grid md:grid-cols-[150px_1fr] gap-5"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-primary-purple text-xs font-bold uppercase tracking-[0.14em]">
                  <MdSchool size={16} />
                  {item.year}
                </span>
              </div>
              <div>
                <h3 className="section-title text-2xl leading-snug mb-2">{item.degree}</h3>
                {item.field && <p className="text-primary-purple text-sm font-semibold mb-1">{item.field}</p>}
                <p className="text-text-muted text-sm font-semibold mb-3">{item.institution}</p>
                <p className="text-text-body text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
