import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { SiFigma } from 'react-icons/si'
import { MdOutlineDesignServices, MdSearch, MdDevices } from 'react-icons/md'

const floatingTags = [
  { icon: <SiFigma size={14} />, label: 'Figma', delay: 0, x: '-10%', y: '20%' },
  { icon: <MdOutlineDesignServices size={14} />, label: 'UI Design', delay: 0.4, x: '105%', y: '10%' },
  { icon: <MdSearch size={14} />, label: 'UX Research', delay: 0.8, x: '108%', y: '60%' },
  { icon: <MdDevices size={14} />, label: 'Prototype', delay: 1.2, x: '-14%', y: '68%' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[480px] h-[480px] rounded-full opacity-30 animate-float-slow"
          style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-5%] left-[-8%] w-[400px] h-[400px] rounded-full opacity-20 animate-float"
          style={{ background: 'radial-gradient(circle, #FF7DAA 0%, transparent 70%)' }} />
        <div className="absolute top-[40%] left-[30%] w-[280px] h-[280px] rounded-full opacity-15 animate-float-delayed"
          style={{ background: 'radial-gradient(circle, #5EDFFF 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-5 pt-28 pb-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text side */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="section-label inline-flex items-center gap-2 bg-background-lavender px-4 py-2 rounded-full border border-border-soft">
              ✦ UI/UX Designer based in Sri Lanka
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-6"
          >
            Amani
            <br />
            <span className="italic font-normal text-primary-purple">Dulfi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-text-body text-lg md:text-xl leading-relaxed max-w-md mb-10"
          >
            Designing elegant, user-friendly digital experiences with creativity and purpose.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="primary-btn px-7 py-3.5 text-sm font-medium inline-flex items-center gap-2">
              View Projects
              <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">→</span>
            </a>
            <a href="#contact" className="outline-btn px-7 py-3.5 text-sm font-medium inline-block">
              Contact Me
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-12 flex gap-8"
          >
            {[
              { num: '3+', label: 'Projects' },
              { num: '6+', label: 'Certificates' },
              { num: '2+', label: 'Years Learning' },
            ].map((s) => (
              <div key={s.label}>
                <p className="section-title text-3xl font-bold text-primary-purple">{s.num}</p>
                <p className="text-text-muted text-xs mt-0.5 font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Illustration side */}
        <div className="relative flex items-center justify-center">
          {/* Portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
          >
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-pink opacity-50 animate-float-slow" />
            {/* Inner blob shape */}
            <div
              className="absolute inset-4 rounded-[60%_40%_55%_45%/50%_60%_40%_50%] animate-float"
              style={{ background: 'var(--gradient-button)', opacity: 0.12 }}
            />
            {/* Avatar circle */}
            <div
              className="absolute inset-8 rounded-full flex items-center justify-center overflow-hidden shadow-glass"
              style={{ background: 'var(--gradient-card)', border: '2px solid rgba(255,255,255,0.6)' }}
            >
              <div className="flex flex-col items-center gap-2 p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-purple to-accent-rose flex items-center justify-center shadow-md">
                  <span className="text-white text-3xl font-bold font-display">A</span>
                </div>
                <p className="section-title text-lg">Amani Dulfi</p>
                <p className="text-text-muted text-xs">UI/UX Designer</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent-gold text-xs">★</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating tags */}
          {floatingTags.map((tag) => (
            <motion.div
              key={tag.label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + tag.delay }}
              className="absolute glass-card px-3.5 py-2 rounded-2xl flex items-center gap-2 text-xs font-medium text-text-heading shadow-card animate-float"
              style={{ left: tag.x, top: tag.y, animationDelay: `${tag.delay}s` }}
            >
              <span className="text-primary-purple">{tag.icon}</span>
              {tag.label}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
        >
          <HiArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}
