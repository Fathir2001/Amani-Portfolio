import { motion } from 'framer-motion'
import { MdSchool } from 'react-icons/md'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="py-28 designed-section relative overflow-hidden">
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

        <div className="education-list relative grid gap-5">
          {education.map((item, i) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="education-card corner-accent rounded-[1.5rem] p-6 md:p-7 grid md:grid-cols-[170px_1fr] gap-5"
            >
              <div>
                <div className="education-year">
                  <MdSchool size={18} />
                  <span>{item.year}</span>
                </div>
              </div>
              <div>
                <span className="education-index">0{i + 1}</span>
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
