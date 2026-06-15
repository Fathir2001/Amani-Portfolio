import { motion } from 'framer-motion'
import {
  MdOutlineDesignServices, MdOutlineAccountTree, MdDraw,
  MdDevices, MdPhoneIphone, MdOutlineBrush,
} from 'react-icons/md'
import { SiFigma, SiCanva, SiHtml5 } from 'react-icons/si'
import { skills } from '../data/portfolioData'

const skillIcons = {
  MdOutlineDesignServices: <MdOutlineDesignServices size={22} />,
  MdOutlineAccountTree: <MdOutlineAccountTree size={22} />,
  MdDraw: <MdDraw size={22} />,
  MdDevices: <MdDevices size={22} />,
  MdPhoneIphone: <MdPhoneIphone size={22} />,
  SiFigma: <SiFigma size={22} />,
  SiAdobexd: <MdOutlineBrush size={22} />,
  SiCanva: <SiCanva size={22} />,
  SiHtml5: <SiHtml5 size={22} />,
}

const notes = [
  'Clean screens, spacing systems, and accessible visual hierarchy.',
  'Research notes, journey mapping, and structure before decoration.',
  'Low-fidelity flows that make ideas easy to test and improve.',
  'Layouts that stay useful across phone, tablet, and desktop.',
  'Mobile-first thinking for everyday product interactions.',
  'Components, variants, auto layout, and clickable prototypes.',
  'Fast concepting and UI exploration for early design ideas.',
  'Social visuals, presentation polish, and brand-friendly graphics.',
  'Front-end basics that help designs translate into real pages.',
]

function SkillTile({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative min-h-[190px] rounded-2xl bg-white border border-border-soft p-5 shadow-card overflow-hidden hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
    >
      <span className="absolute right-5 top-5 text-5xl font-display font-bold text-primary-purple/5">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-background-lavender text-primary-purple flex items-center justify-center mb-5 group-hover:bg-primary-purple group-hover:text-white transition-colors">
          {skillIcons[skill.icon]}
        </div>
        <h3 className="text-text-heading font-semibold leading-snug mb-3">{skill.name}</h3>
        <p className="text-text-muted text-sm leading-relaxed">{notes[index]}</p>
      </div>
      <div className="absolute left-5 right-5 bottom-5 h-1.5 rounded-full bg-background-lavender overflow-hidden">
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 + index * 0.04 }}
          className="block h-full rounded-full"
          style={{ background: 'var(--gradient-button)' }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-background-main relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-end mb-14"
        >
          <div>
            <span className="section-label">Design Toolkit</span>
            <h2 className="section-title text-4xl md:text-5xl mt-3">Tools and skills with purpose.</h2>
          </div>
          <p className="section-subtitle text-base max-w-2xl lg:ml-auto">
            These are the capabilities I use to move from messy ideas to usable interfaces: research, structure, visual design, prototyping, and responsive implementation awareness.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <SkillTile key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 rounded-[1.75rem] bg-primary-dark text-white p-6 md:p-8 grid md:grid-cols-[0.8fr_1.2fr] gap-6 items-center"
        >
          <div>
            <p className="text-accent-cyan text-xs font-bold uppercase tracking-[0.18em] mb-3">Workflow</p>
            <h3 className="section-title text-3xl text-white">Research to prototype</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {['Understand users', 'Structure flows', 'Polish interfaces'].map((item, i) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="text-accent-cyan text-xs font-bold">0{i + 1}</span>
                <p className="mt-2 text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
