import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MdPalette, MdSchool, MdAutoAwesome, MdStorefront } from 'react-icons/md'

const highlights = [
  { icon: <MdAutoAwesome size={18} />, label: 'Creative Designer', color: 'text-primary-purple bg-background-lavender' },
  { icon: <MdPalette size={18} />, label: 'UI/UX Learner', color: 'text-accent-rose bg-pink-50' },
  { icon: <MdSchool size={18} />, label: 'IT Undergraduate', color: 'text-primary-navy bg-blue-50' },
  { icon: <MdStorefront size={18} />, label: 'Craft Business Founder', color: 'text-accent-gold bg-yellow-50' },
]

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-28 bg-background-lavender relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

      <div className="max-w-6xl mx-auto px-5">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="section-label">✦ Who I Am</span>
            <h2 className="section-title text-4xl md:text-5xl mt-3">About Me</h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left visual */}
          <FadeIn delay={0.1}>
            <div className="relative flex justify-center">
              <div className="glass-card rounded-3xl p-8 max-w-sm w-full">
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-purple to-accent-rose flex items-center justify-center shadow-glass">
                      <span className="text-white text-4xl font-bold font-display">A</span>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-accent-gold flex items-center justify-center text-white text-xs shadow">✦</span>
                  </div>
                </div>
                <h3 className="section-title text-xl text-center mb-1">Amani Dulfi</h3>
                <p className="text-text-muted text-sm text-center mb-6">UI/UX Designer · Sri Lanka</p>

                {/* Info rows */}
                <div className="space-y-3">
                  {[
                    { label: 'Availability', value: 'Open to Work' },
                    { label: 'Focus', value: 'UI/UX Design' },
                    { label: 'Education', value: 'BSc IT (Ongoing)' },
                    { label: 'Tools', value: 'Figma, Canva, XD' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center text-sm py-2 border-b border-border-soft last:border-0">
                      <span className="text-text-muted font-medium">{item.label}</span>
                      <span className="text-text-heading font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative dot pattern */}
              <div className="absolute -top-6 -left-6 w-20 h-20 opacity-30 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #8B5CF6 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
            </div>
          </FadeIn>

          {/* Right text */}
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <p className="text-text-body text-lg leading-relaxed">
                Creative and detail-oriented UI/UX Designer passionate about creating user-friendly and visually appealing digital experiences. Currently pursuing a BSc in Information Technology and continuously developing skills in user research, wireframing, prototyping, and responsive design using tools such as Figma and Canva.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-text-body leading-relaxed">
                Focused on delivering intuitive solutions that improve user experience and engagement. Every project is an opportunity to merge beautiful aesthetics with meaningful functionality.
              </p>
            </FadeIn>

            {/* Highlight chips */}
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-medium text-sm ${h.color} transition-transform hover:-translate-y-0.5 duration-200`}
                  >
                    {h.icon}
                    {h.label}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex gap-4 pt-2">
                <a href="#projects" className="primary-btn px-6 py-3 text-sm">View My Work</a>
                <a href="#contact" className="outline-btn px-6 py-3 text-sm">Get in Touch</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
