import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { SiBehance } from 'react-icons/si'
import { projects } from '../data/portfolioData'

const gradients = [
  'linear-gradient(135deg, #8B5CF6 0%, #FF7DAA 100%)',
  'linear-gradient(135deg, #FF7DAA 0%, #D6A756 100%)',
  'linear-gradient(135deg, #2F6F99 0%, #5EDFFF 60%, #8B5CF6 100%)',
]

const mockIcons = ['📱', '🍕', '✈️']

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      className="group glass-card rounded-3xl overflow-hidden hover:shadow-glass-hover transition-shadow duration-400"
    >
      {/* Image area */}
      <div
        className="relative h-52 flex items-center justify-center overflow-hidden"
        style={{ background: gradients[index] }}
      >
        {/* Geometric decorations */}
        <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 blur-sm" />
        <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl bg-white/10 rotate-12 blur-sm" />

        <span className="relative text-6xl">{mockIcons[index]}</span>

        {/* Category tag */}
        <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
          {project.category}
        </span>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-dark px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:shadow-lg transition"
          >
            <SiBehance size={14} /> View on Behance
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="section-title text-lg mb-2 group-hover:text-primary-purple transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-5">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary-purple text-sm font-medium hover:gap-3 transition-all duration-200"
        >
          <SiBehance size={14} />
          View Project
          <FiExternalLink size={13} />
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-background-lavender relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #5EDFFF 0%, transparent 70%)', transform: 'translate(20%, -20%)' }} />

      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">✦ My Work</span>
          <h2 className="section-title text-4xl md:text-5xl mt-3">Featured Projects</h2>
          <p className="section-subtitle mt-4 max-w-xl mx-auto text-base">
            Selected design work showcasing UI/UX thinking, visual craft, and user-centered problem solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
