import { motion } from 'framer-motion'
import { MdAutoAwesome, MdPalette, MdSchool, MdStorefront } from 'react-icons/md'

const highlights = [
  { icon: <MdAutoAwesome size={20} />, label: 'Creative Designer', text: 'Refined visuals with user-friendly structure.', meta: 'Visual craft' },
  { icon: <MdPalette size={20} />, label: 'UI/UX Learner', text: 'Growing through hands-on case studies.', meta: 'User flows' },
  { icon: <MdSchool size={20} />, label: 'IT Undergraduate', text: 'Studying technology and digital systems.', meta: 'BSc IT' },
  { icon: <MdStorefront size={20} />, label: 'Founder', text: 'Running a craft brand with design ownership.', meta: 'Brand owner' },
]

const stats = [
  { label: 'Availability', value: 'Open' },
  { label: 'Focus', value: 'UI/UX' },
  { label: 'Education', value: 'BSc IT' },
  { label: 'Tools', value: 'Figma' },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 dark-glass-section zigzag-section zigzag-right relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 xl:gap-10 items-start"
        >
          <div className="lg:sticky lg:top-28">
            <span className="section-kicker">04 / Profile</span>
            <h2 className="section-title text-4xl md:text-5xl xl:text-[3.5rem] leading-[1.04] mt-3 max-w-md">
              Calm, practical design process.
            </h2>
            <p className="section-subtitle mt-5 max-w-sm">
              A compact look at my design focus, study path, and creative background.
            </p>
          </div>

          <div className="space-y-5">
            <div className="about-profile-card motion-strip p-6 md:p-7">
              <div className="grid md:grid-cols-[auto_1fr] gap-6 items-start">
                <div className="about-avatar">
                  <span className="font-display text-4xl font-bold">A</span>
                  <span className="about-avatar-ring" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-background-lavender px-3 py-1 text-primary-purple text-xs font-bold uppercase tracking-[0.14em] mb-4">
                    Designer Profile
                  </span>
                  <p className="text-text-body text-lg leading-relaxed">
                    Creative and detail-oriented UI/UX Designer passionate about creating user-friendly and visually appealing digital experiences. Currently pursuing a BSc in Information Technology while building skills in research, wireframing, prototyping, and responsive design.
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed mt-4">
                    Every project is an opportunity to turn a rough idea into a clean journey: understand the user, simplify the flow, refine the interface, and make each screen feel intentional.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="about-highlight-card corner-accent rounded-2xl p-4"
                >
                  <div className="about-highlight-icon w-10 h-10 rounded-xl text-white flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <span className="text-primary-purple text-[10px] font-bold uppercase tracking-[0.16em]">{item.meta}</span>
                  <h3 className="text-text-heading font-bold mb-1">{item.label}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="about-stat-strip grid sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border-soft rounded-[1.5rem] overflow-hidden">
              {stats.map((item) => (
                <div key={item.label} className="about-stat-item p-4">
                  <p className="text-text-muted text-xs font-bold uppercase tracking-[0.14em]">{item.label}</p>
                  <p className="section-title text-xl md:text-2xl mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
