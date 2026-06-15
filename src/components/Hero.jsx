import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { FiArrowRight, FiMousePointer, FiPenTool } from 'react-icons/fi'
import { SiFigma } from 'react-icons/si'
import { MdAutoAwesome, MdSearch, MdDevices } from 'react-icons/md'

const floatingTags = [
  { icon: <SiFigma size={14} />, label: 'Figma', delay: 0, x: '-8%', y: '18%' },
  { icon: <MdSearch size={14} />, label: 'UX Research', delay: 0.35, x: '73%', y: '5%' },
  { icon: <MdDevices size={14} />, label: 'Responsive UI', delay: 0.7, x: '82%', y: '62%' },
  { icon: <FiPenTool size={14} />, label: 'Prototype', delay: 1, x: '-6%', y: '72%' },
]

const frameCards = [
  { title: 'Fitness', color: '#6D5DF6', bars: ['72%', '48%', '88%'] },
  { title: 'Pizza', color: '#FF6B4A', bars: ['64%', '82%', '44%'] },
  { title: 'Travel', color: '#2F6F99', bars: ['90%', '58%', '76%'] },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden hero-grid"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-primary-purple/20 to-transparent" />
        <div className="absolute bottom-24 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent-rose/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-5 pt-28 pb-16 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5"
          >
            <span className="section-label inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-border-soft shadow-card">
              <MdAutoAwesome size={14} /> UI/UX Designer based in Sri Lanka
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6"
          >
            Amani Dulfi
            <span className="block text-primary-purple italic font-normal">designs clear, warm digital experiences.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-text-body text-lg md:text-xl leading-relaxed max-w-xl mb-9"
          >
            I shape mobile apps and web interfaces from research notes to polished prototypes, with a focus on usable flows, expressive visuals, and calm interaction design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="primary-btn px-7 py-3.5 text-sm font-medium inline-flex items-center gap-2">
              View Case Studies
              <FiArrowRight size={16} />
            </a>
            <a href="#contact" className="outline-btn px-7 py-3.5 text-sm font-medium inline-block">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-4 max-w-md"
          >
            {[
              { num: '03', label: 'Design projects' },
              { num: '06', label: 'Certificates' },
              { num: '09', label: 'Core skills' },
            ].map((s) => (
              <div key={s.label} className="border-l border-primary-purple/20 pl-4">
                <p className="section-title text-3xl font-bold text-primary-purple">{s.num}</p>
                <p className="text-text-muted text-xs mt-0.5 font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative min-h-[520px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-[520px] aspect-square"
          >
            <div className="absolute inset-8 rounded-[2rem] bg-white/75 border border-white shadow-glass rotate-[-6deg]" />
            <div className="absolute inset-4 rounded-[2rem] bg-primary-dark shadow-glass overflow-hidden rotate-3">
              <div className="h-10 bg-white/10 flex items-center gap-2 px-5">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-rose" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent-gold" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan" />
                <span className="ml-auto text-white/50 text-xs">Amani.fig</span>
              </div>
              <div className="grid grid-cols-[0.85fr_1.15fr] h-[calc(100%-2.5rem)]">
                <div className="border-r border-white/10 p-5 space-y-3">
                  {frameCards.map((card) => (
                    <div key={card.title} className="rounded-xl bg-white/8 border border-white/10 p-3">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: card.color }} />
                        <span className="text-white/80 text-xs font-semibold">{card.title}</span>
                      </div>
                      <div className="space-y-2">
                        {card.bars.map((bar) => (
                          <span key={bar} className="block h-1.5 rounded-full bg-white/15 overflow-hidden">
                            <span className="block h-full rounded-full" style={{ width: bar, backgroundColor: card.color }} />
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 relative">
                  <div className="absolute right-7 top-7 w-24 h-24 rounded-full bg-accent-cyan/20 blur-2xl" />
                  <div className="relative mx-auto w-40 h-80 rounded-[2rem] bg-white p-3 shadow-2xl">
                    <div className="h-full rounded-[1.5rem] bg-background-lavender overflow-hidden p-4">
                      <div className="h-28 rounded-2xl bg-gradient-to-br from-primary-purple to-accent-rose mb-4" />
                      <div className="space-y-2 mb-5">
                        <div className="h-3 rounded-full bg-primary-dark/80 w-2/3" />
                        <div className="h-2 rounded-full bg-primary-dark/20 w-full" />
                        <div className="h-2 rounded-full bg-primary-dark/20 w-4/5" />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {[1, 2, 3, 4].map((item) => (
                          <div key={item} className="h-16 rounded-xl bg-white border border-border-soft" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ x: [0, 18, 4, 0], y: [0, -12, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                    className="absolute bottom-16 right-12 bg-white text-primary-purple rounded-2xl shadow-glass p-3"
                  >
                    <FiMousePointer size={20} />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {floatingTags.map((tag) => (
            <motion.div
              key={tag.label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + tag.delay }}
              className="absolute glass-card px-3.5 py-2 rounded-2xl flex items-center gap-2 text-xs font-medium text-text-heading shadow-card animate-float"
              style={{ left: tag.x, top: tag.y, animationDelay: `${tag.delay}s` }}
            >
              <span className="text-primary-purple">{tag.icon}</span>
              {tag.label}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
          <HiArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}
