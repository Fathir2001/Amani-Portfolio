import { motion } from 'framer-motion'
import { FiArrowUpRight, FiExternalLink } from 'react-icons/fi'
import { SiBehance } from 'react-icons/si'
import { MdOutlineInsights, MdOutlineRoute, MdOutlineWbSunny } from 'react-icons/md'
import { projects } from '../data/portfolioData'

function DevicePreview({ project, large = false }) {
  return (
    <div
      className={`project-device motion-strip relative ${large ? 'min-h-[520px]' : 'h-80'} overflow-hidden rounded-[1.75rem] bg-primary-dark p-5`}
      style={{ '--project-from': project.palette[0], '--project-to': project.palette[1] }}
    >
      <div className="absolute inset-0 opacity-80" style={{ background: `linear-gradient(135deg, ${project.palette[0]}, ${project.palette[1]})` }} />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18),transparent_45%)]" />
      <div className="project-device-grid" />
      <div className="relative h-full flex items-center justify-center">
        <div className={`project-phone ${large ? 'w-52 h-[410px]' : 'w-36 h-64'} rounded-[2rem] bg-white p-3 shadow-2xl rotate-[-5deg]`}>
          <div className="h-full rounded-[1.5rem] bg-background-main overflow-hidden p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="h-2 w-12 rounded-full" style={{ backgroundColor: project.palette[0] }} />
              <span className="w-7 h-7 rounded-full bg-primary-dark/10" />
            </div>
            <div className={`${large ? 'h-40' : 'h-24'} rounded-2xl mb-4`} style={{ background: `linear-gradient(135deg, ${project.palette[0]}, ${project.palette[1]})` }} />
            <div className="space-y-2 mb-4">
              <span className="block h-2.5 rounded-full bg-primary-dark/80 w-2/3" />
              <span className="block h-2 rounded-full bg-primary-dark/15" />
              <span className="block h-2 rounded-full bg-primary-dark/15 w-5/6" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((item) => (
                <span key={item} className={`${large ? 'h-20' : 'h-14'} rounded-xl bg-white border border-border-soft`} />
              ))}
            </div>
          </div>
        </div>

        {large && (
          <div className="project-impact absolute right-8 bottom-10 w-56 rounded-3xl bg-white/90 backdrop-blur p-5 shadow-glass">
            <p className="text-text-muted text-xs font-bold uppercase tracking-[0.16em] mb-3">Design Impact</p>
            <div className="space-y-3">
              {['Clear dashboard', 'Fast task flow', 'Friendly visual system'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.palette[0] }} />
                  <span className="text-text-heading text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function CaseStudyDetails({ project }) {
  const steps = [
    { icon: <MdOutlineInsights size={16} />, label: 'Problem', text: project.problem },
    { icon: <MdOutlineRoute size={16} />, label: 'Process', text: project.process },
    { icon: <MdOutlineWbSunny size={16} />, label: 'Outcome', text: project.outcome },
  ]

  return (
    <div className="space-y-3">
      {steps.map((step) => (
        <div key={step.label} className="project-step grid sm:grid-cols-[105px_1fr] gap-3 text-sm">
          <span className="text-primary-purple font-bold flex items-center gap-2">
            {step.icon}
            {step.label}
          </span>
          <p className="text-text-body leading-relaxed">{step.text}</p>
        </div>
      ))}
    </div>
  )
}

function SupportingProject({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="project-card rounded-[1.75rem] p-4"
      style={{ '--project-from': project.palette[0], '--project-to': project.palette[1] }}
    >
      <DevicePreview project={project} />
      <div className="p-3 pt-6">
        <p className="text-primary-purple text-xs font-bold tracking-[0.16em] uppercase mb-2">Case Study 0{index + 2}</p>
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="section-title text-2xl leading-tight">{project.title}</h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn w-10 h-10 rounded-full text-white flex items-center justify-center transition-colors flex-shrink-0"
            aria-label={`View ${project.title}`}
          >
            <FiArrowUpRight size={18} />
          </a>
        </div>
        <p className="text-text-muted text-sm leading-relaxed mb-5">{project.description}</p>
        <CaseStudyDetails project={project} />
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [featured, ...supporting] = projects

  return (
    <section id="projects" className="dark-glass-section zigzag-section zigzag-right py-28 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading mb-14"
        >
          <div>
            <span className="section-kicker">02 / Selected Work</span>
            <h2 className="section-title text-4xl md:text-6xl mt-3 max-w-3xl">A portfolio that shows the thinking behind the screens.</h2>
          </div>
          <p className="section-subtitle text-base max-w-md">
            The layout now gives the strongest project a premium editorial treatment, then supports it with compact case studies.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="project-card featured-project-card motion-strip rounded-[2rem] p-4 md:p-5 mb-8"
          style={{ '--project-from': featured.palette[0], '--project-to': featured.palette[1] }}
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-7 items-stretch">
            <DevicePreview project={featured} large />
            <div className="p-4 md:p-7 flex flex-col">
              <p className="text-primary-purple text-xs font-bold tracking-[0.16em] uppercase mb-3">Featured Case Study</p>
              <h3 className="section-title text-3xl md:text-5xl leading-tight mb-5">{featured.title}</h3>
              <p className="text-text-muted text-base leading-relaxed mb-7">{featured.description}</p>
              <CaseStudyDetails project={featured} />

              <div className="mt-auto pt-8 flex flex-wrap items-center justify-between gap-5">
                <div className="flex gap-2">
                  {featured.palette.map((color) => (
                    <span key={color} className="project-swatch w-7 h-7 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: color }} />
                  ))}
                </div>
                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                >
                  <SiBehance size={16} />
                  View on Behance
                  <FiExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="grid lg:grid-cols-2 gap-6">
          {supporting.map((project, index) => (
            <SupportingProject key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
