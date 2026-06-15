import { navLinks } from '../data/portfolioData'

export default function SectionIndex() {
  const visibleLinks = navLinks.filter((link) => ['#home', '#projects', '#skills', '#about', '#contact'].includes(link.href))

  return (
    <aside className="hidden 2xl:block fixed left-8 top-1/2 -translate-y-1/2 z-40 rounded-2xl border border-white/10 bg-primary-dark/28 px-4 py-4 backdrop-blur-md">
      <nav className="space-y-3">
        {visibleLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/64 hover:text-white transition-colors"
          >
            <span className="text-accent-cyan">{String(index + 1).padStart(2, '0')}</span>
            <span className="h-px w-5 bg-white/30 group-hover:w-8 group-hover:bg-accent-cyan transition-all" />
            <span>{link.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}
