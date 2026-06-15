import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { SiBehance } from 'react-icons/si'
import { contact } from '../data/portfolioData'

const socials = [
  { icon: <FiLinkedin size={16} />, href: contact.linkedin, label: 'LinkedIn' },
  { icon: <FiGithub size={16} />, href: contact.github, label: 'GitHub' },
  { icon: <SiBehance size={16} />, href: contact.behance, label: 'Behance' },
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark relative overflow-hidden">
      <div className="h-px w-full" style={{ background: 'var(--gradient-button)', opacity: 0.55 }} />

      <div className="max-w-6xl mx-auto px-5 py-14 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-md"
                style={{ background: 'var(--gradient-button)' }}>
                A
              </span>
              <span className="font-display text-xl font-bold text-white tracking-tight">Amani Dulfi</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              UI/UX Designer creating elegant, user-friendly digital experiences with creativity and purpose.
            </p>
          </div>

          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Quick Links</p>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-text-muted text-sm hover:text-primary-pink transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Find Me Online</p>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-muted text-sm hover:text-primary-pink transition-colors duration-200 group"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary-purple/20 transition-colors duration-200">
                    {s.icon}
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-sm text-center sm:text-left">
            Copyright 2026 <span className="text-primary-pink font-medium">Amani Dulfi</span>. Designed with creativity and care.
          </p>
          <div className="flex items-center gap-2 text-text-muted text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-rose animate-pulse-soft" />
            Open to Work
          </div>
        </div>
      </div>
    </footer>
  )
}
