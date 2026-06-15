import { motion } from 'framer-motion'
import { MdSchool } from 'react-icons/md'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="py-28 bg-background-main relative overflow-hidden">
      <div className="absolute left-0 top-1/2 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)', transform: 'translate(-40%, -50%)' }} />

      <div className="max-w-4xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">✦ My Journey</span>
          <h2 className="section-title text-4xl md:text-5xl mt-3">Education</h2>
          <p className="section-subtitle mt-4 max-w-xl mx-auto text-base">
            A foundation built through dedicated study across diverse disciplines.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border-soft" />

          <div className="space-y-10">
            {education.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className={`relative flex gap-8 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-2 border-primary-purple bg-background-main shadow-md flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary-purple" />
                </div>

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'}`}>
                  <div className="glass-card rounded-2xl p-6 hover:shadow-glass-hover transition-shadow duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-background-lavender flex items-center justify-center flex-shrink-0 group-hover:bg-primary-purple group-hover:text-white transition-colors duration-300 text-primary-purple">
                        <MdSchool size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="inline-block bg-background-lavender text-primary-purple text-xs font-semibold px-3 py-1 rounded-full mb-2">
                          {item.year}
                        </span>
                        <h3 className="section-title text-base leading-snug mb-1">{item.degree}</h3>
                        {item.field && (
                          <p className="text-primary-purple text-sm font-medium mb-0.5">{item.field}</p>
                        )}
                        <p className="text-text-muted text-sm font-medium mb-2">{item.institution}</p>
                        <p className="text-text-body text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
