import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  MdOutlineDesignServices, MdOutlineAccountTree, MdDraw,
  MdDevices, MdPhoneIphone,
} from 'react-icons/md'
import { SiFigma, SiCanva, SiHtml5 } from 'react-icons/si'
import { MdOutlineBrush } from 'react-icons/md'

const skillIcons = {
  MdOutlineDesignServices: <MdOutlineDesignServices size={20} />,
  MdOutlineAccountTree: <MdOutlineAccountTree size={20} />,
  MdDraw: <MdDraw size={20} />,
  MdDevices: <MdDevices size={20} />,
  MdPhoneIphone: <MdPhoneIphone size={20} />,
  SiFigma: <SiFigma size={20} />,
  SiAdobexd: <MdOutlineBrush size={20} />,
  SiCanva: <SiCanva size={20} />,
  SiHtml5: <SiHtml5 size={20} />,
}

import { skills } from '../data/portfolioData'

function SkillBar({ skill, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card rounded-2xl p-5 hover:shadow-glass-hover transition-shadow duration-300 group"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-primary-purple group-hover:scale-110 transition-transform duration-200">
            {skillIcons[skill.icon]}
          </span>
          <span className="text-text-heading font-medium text-sm">{skill.name}</span>
        </div>
        <span className="text-primary-purple text-sm font-semibold">{skill.level}%</span>
      </div>
      {/* Bar */}
      <div className="h-1.5 rounded-full bg-border-soft overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.3 + index * 0.08, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: 'var(--gradient-button)' }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="skills" className="py-28 bg-background-main relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FF7DAA 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">✦ What I Do</span>
          <h2 className="section-title text-4xl md:text-5xl mt-3">Skills & Expertise</h2>
          <p className="section-subtitle mt-4 max-w-xl mx-auto text-base">
            A growing toolkit of design skills refined through hands-on projects and dedicated learning.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Pill badges row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {['User Research', 'Information Architecture', 'Interaction Design', 'Design Thinking', 'Visual Design', 'Usability Testing'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-sm font-medium border border-border-soft text-text-body bg-background-card hover:border-primary-purple hover:text-primary-purple transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
