import { motion } from 'framer-motion'
import { FiExternalLink, FiArrowUpRight } from 'react-icons/fi'
import { SiBehance } from 'react-icons/si'
import { MdOutlineInsights, MdOutlineRoute, MdOutlineWbSunny } from 'react-icons/md'
import { projects } from '../data/portfolioData'

const screenLayouts = [
  ['h-24', 'h-8', 'h-16', 'h-12'],
  ['h-16', 'h-20', 'h-10', 'h-16'],
  ['h-28', 'h-10', 'h-12', 'h-12'],
]

function PhoneMockup({ project, index }) {
  return (
    <div className="relative h-72 flex items-center justify-center overflow-hidden project-stage">
      <div className="absolute inset-0 opacity-90" style={{ background: `linear-gradient(135deg, ${project.palette[0]}, ${project.palette[1]})` }} />
      <div className="absolute left-5 top-6 w-28 h-28 rounded-full bg-white/15 blur-xl" />
      <div className="absolute right-8 bottom-8 w-36 h-36 rounded-full bg-primary-dark/20 blur-2xl" />

      <motion.div
        whileHover={{ rotate: 0, scale: 1.03 }}
        className="relative w-36 h-64 rounded-[2rem] bg-white p-2.5 shadow-2xl rotate-[-7deg]"
      >
        <div className="h-full rounded-[1.55rem] overflow-hidden bg-background-main p-3">
          <div className="flex justify-between items-center mb-3">
            <span className="w-10 h-2 rounded-full" style={{ backgroundColor: project.palette[0] }} />
            <span className="w-5 h-5 rounded-full bg-primary-dark/10" />
          </div>
          <div className={`${screenLayouts[index][0]} rounded-2xl mb-3`} style={{ background: `linear-gradient(135deg, ${project.palette[0]}, ${project.palette[1]})` }} />
          <div className="space-y-2 mb-3">
            <span className="block h-2 rounded-full bg-primary-dark/70 w-2/3" />
            <span className="block h-1.5 rounded-full bg-primary-dark/15 w-full" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {screenLayouts[index].slice(1).map((height, i) => (
              <span key={height + i} className={`${height} rounded-xl bg-white border border-border-soft shadow-sm`} />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="absolute left-4 top-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
        {project.category}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const steps = [
    { icon: <MdOutlineInsights size={16} />, label: 'Problem', text: project.problem },
    { icon: <MdOutlineRoute size={16} />, label: 'Process', text: project.process },
    { icon: <MdOutlineWbSunny size={16} />, label: 'Outcome', text: project.outcome },
  ]

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group bg-white rounded-[1.75rem] overflow-hidden shadow-card border border-border-soft hover:shadow-glass-hover transition-shadow duration-300"
    >
      <PhoneMockup project={project} index={index} />

      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="text-primary-purple text-xs font-bold tracking-[0.16em] uppercase mb-2">Case Study 0{index + 1}</p>
            <h3 className="section-title text-2xl leading-tight group-hover:text-primary-purple transition-colors">
              {project.title}
            </h3>
          </div>
          <span className="w-10 h-10 rounded-full bg-background-lavender text-primary-purple flex items-center justify-center group-hover:bg-primary-purple group-hover:text-white transition-colors">
            <FiArrowUpRight size={18} />
          </span>
        </div>

        <p className="text-text-muted text-sm leading-relaxed mb-5">{project.description}</p>

        <div className="space-y-3 mb-6">
          {steps.map((step) => (
            <div key={step.label} className="grid grid-cols-[92px_1fr] gap-3 text-sm">
              <span className="text-primary-purple font-semibold flex items-center gap-2">
                {step.icon}
                {step.label}
              </span>
              <p className="text-text-body leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 pt-5 border-t border-border-soft">
          <div className="flex gap-2">
            {project.palette.map((color) => (
              <span key={color} className="w-5 h-5 rounded-full border border-white shadow-sm" style={{ backgroundColor: color }} />
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-purple text-sm font-semibold hover:gap-3 transition-all duration-200"
          >
            <SiBehance size={15} />
            View Project
            <FiExternalLink size={13} />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-background-lavender relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="section-label">Featured Work</span>
          <h2 className="section-title text-4xl md:text-5xl mt-3">Mini case studies, not just project cards.</h2>
          <p className="section-subtitle mt-4 text-base">
            Each project preview shows the design problem, the thinking behind the flow, and the final experience direction.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://behance.net/amanidulfi"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-btn inline-flex items-center gap-2 px-7 py-3.5 text-sm"
          >
            <SiBehance size={16} />
            View All on Behance
          </a>
        </motion.div>
      </div>
    </section>
  )
}
