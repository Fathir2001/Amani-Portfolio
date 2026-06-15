import { motion } from 'framer-motion'
import { FiArrowRight, FiMousePointer, FiPenTool } from 'react-icons/fi'
import { SiFigma } from 'react-icons/si'
import { MdDevices, MdOutlineAutoFixHigh } from 'react-icons/md'

const previewRows = [
  { label: 'Research', width: '74%' },
  { label: 'Wireframe', width: '58%' },
  { label: 'Prototype', width: '86%' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden premium-grid hero-glass-bg">
      <div className="hero-glass-bands" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-primary-dark/65 to-transparent" />
      <div className="hero-aurora" />
      <div className="hero-noise" />
      <div className="hero-spotlight" />
      <div className="ambient-lines" />
      <span className="hero-line-orb hidden md:block left-[18%] top-[16%]" />
      <span className="hero-line-orb hidden md:block right-[30%] bottom-[18%]" style={{ animationDelay: '-3s' }} />
      <span className="floating-orbit hidden md:block left-[7%] top-[22%] h-16 w-16 rounded-[1.25rem]" />
      <span className="floating-orbit hidden md:block right-[8%] top-[18%] h-24 w-24 rounded-full" style={{ animationDelay: '-2s' }} />
      <span className="floating-orbit hidden lg:block left-[45%] bottom-[13%] h-20 w-20 rounded-[1.5rem]" style={{ animationDelay: '-4s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-28 pb-12 md:pt-32 md:pb-16 w-full">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 xl:gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-6 flex items-center gap-4"
            >
              <span className="text-accent-cyan text-xs font-bold tracking-[0.2em] uppercase">01 / Portfolio</span>
              <span className="h-px flex-1 max-w-32 bg-white/20" />
              <span className="text-white/82 text-xs font-semibold uppercase tracking-[0.16em]">Sri Lanka</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="section-title text-white text-5xl md:text-6xl xl:text-7xl leading-[1.02] max-w-3xl"
            >
              UI/UX design for clear digital journeys.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="mt-7 grid gap-6 max-w-2xl"
            >
              <p className="hero-readable-copy text-base md:text-lg leading-relaxed max-w-xl">
                I am Amani Dulfi, a UI/UX designer crafting mobile apps and web interfaces with thoughtful structure, refined visuals, and a user-first design process.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="primary-btn px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
                  View Work
                  <FiArrowRight size={16} />
                </a>
                <a href="#contact" className="hero-outline-btn px-6 py-3.5 text-sm font-semibold">
                  Contact
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.45 }}
              className="mt-9 grid grid-cols-3 divide-x divide-white/10 border-y border-white/10 max-w-xl"
            >
              {[
                { value: '03', label: 'Selected projects' },
                { value: '09', label: 'Design skills' },
                { value: '06', label: 'Certificates' },
              ].map((item) => (
                <div key={item.label} className="py-4 px-4 first:pl-0">
                  <p className="section-title text-2xl md:text-3xl text-white">{item.value}</p>
                  <p className="text-white/76 text-xs font-semibold uppercase tracking-[0.12em] mt-1">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.18, ease: 'easeOut' }}
            className="relative max-w-[560px] lg:max-w-none lg:justify-self-end"
          >
            <div className="motion-strip rounded-[2rem] bg-primary-dark p-3 md:p-4 shadow-premium relative overflow-hidden transition-all duration-500 ease-out hover:scale-[1.035] hover:shadow-[0_34px_110px_rgba(31,34,51,0.22)]">
              <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-accent-cyan/25 blur-3xl" />
              <div className="absolute -left-16 bottom-8 h-36 w-36 rounded-full bg-primary-purple/30 blur-3xl" />
              <div className="rounded-[1.5rem] bg-white overflow-hidden">
                <div className="h-11 border-b border-border-soft flex items-center gap-2 px-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-rose" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-gold" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan" />
                  <span className="ml-auto text-text-muted text-xs font-semibold">Amani.fig</span>
                </div>

                <div className="grid grid-cols-[0.78fr_1.22fr] min-h-[340px] md:min-h-[380px]">
                  <div className="bg-background-lavender/70 border-r border-border-soft p-4">
                    <p className="text-text-muted text-[11px] font-bold uppercase tracking-[0.16em] mb-4">Design System</p>
                    <div className="space-y-3">
                      {previewRows.map((row) => (
                        <div key={row.label} className="rounded-2xl bg-white p-3 border border-border-soft">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-text-heading text-[11px] font-bold">{row.label}</span>
                            <span className="w-7 h-7 rounded-lg bg-primary-purple/10 text-primary-purple flex items-center justify-center">
                              <FiPenTool size={13} />
                            </span>
                          </div>
                          <span className="block h-2 rounded-full bg-border-soft overflow-hidden">
                            <span className="block h-full rounded-full bg-primary-purple" style={{ width: row.width }} />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative p-5 md:p-6 bg-[radial-gradient(circle_at_top_right,rgba(94,223,255,0.26),transparent_38%),linear-gradient(135deg,rgba(139,92,246,0.06),transparent_42%)]">
                    <div className="absolute left-6 top-20 h-28 w-28 rounded-full border border-primary-purple/15" />
                    <div className="absolute right-10 bottom-10 h-32 w-32 rounded-[2rem] border border-accent-cyan/25 rotate-12" />
                    <div className="absolute right-5 top-5 flex gap-2">
                      <span className="rounded-full bg-primary-dark text-white text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1.5">Prototype</span>
                      <span className="rounded-full bg-background-lavender text-primary-purple text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1.5">UI Kit</span>
                    </div>

                    <div className="absolute left-6 bottom-6 w-36 md:w-40 rounded-[1.5rem] bg-primary-dark p-2 shadow-2xl rotate-[-4deg]">
                      <div className="rounded-[1.35rem] bg-white p-3">
                        <div className="h-20 rounded-2xl bg-gradient-to-br from-primary-purple to-accent-rose mb-3" />
                        <div className="h-2 rounded-full bg-primary-dark/70 w-2/3 mb-2" />
                        <div className="h-2 rounded-full bg-primary-dark/15 w-full mb-4" />
                        <div className="grid grid-cols-2 gap-2">
                          <span className="h-14 rounded-xl bg-background-lavender" />
                          <span className="h-14 rounded-xl bg-background-lavender" />
                        </div>
                      </div>
                    </div>

                    <div className="ml-auto mt-20 w-40 md:w-44 rounded-[1.75rem] bg-white border border-border-soft p-4 shadow-card rotate-3">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-10 h-10 rounded-2xl bg-primary-purple text-white flex items-center justify-center">
                          <SiFigma size={18} />
                        </span>
                        <div>
                          <p className="text-text-heading text-xs md:text-sm font-bold">Mobile Flow</p>
                          <p className="text-text-muted text-xs">6 screens</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <span className="block h-2 rounded-full bg-border-soft" />
                        <span className="block h-2 rounded-full bg-border-soft w-4/5" />
                        <span className="block h-12 md:h-14 rounded-2xl bg-background-lavender mt-3" />
                      </div>
                    </div>

                    <motion.div
                      animate={{ x: [0, 18, 8, 0], y: [0, -10, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
                      className="absolute right-12 bottom-16 bg-white text-primary-purple rounded-2xl shadow-glass p-3"
                    >
                      <FiMousePointer size={20} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-5 top-10 hidden md:flex items-center gap-2 bg-white border border-border-soft rounded-2xl px-4 py-3 shadow-card">
              <MdDevices className="text-primary-purple" size={18} />
              <span className="text-text-heading text-xs font-bold">Responsive</span>
            </div>
            <div className="absolute right-4 -bottom-5 hidden md:flex items-center gap-2 bg-white border border-border-soft rounded-2xl px-4 py-3 shadow-card">
              <MdOutlineAutoFixHigh className="text-accent-gold" size={18} />
              <span className="text-text-heading text-xs font-bold">Polished UI</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
