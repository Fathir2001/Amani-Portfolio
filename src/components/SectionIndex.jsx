import { navLinks } from '../data/portfolioData'

export default function SectionIndex() {
  const visibleLinks = navLinks.filter((link) => ['#home', '#projects', '#skills', '#about', '#contact'].includes(link.href))

  return (
    <aside className="hidden 2xl:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
      <nav className="space-y-3">
        {visibleLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-text-muted/70 hover:text-primary-purple transition-colors"
          >
            <span className="text-primary-purple/70">{String(index + 1).padStart(2, '0')}</span>
            <span className="h-px w-5 bg-border-soft group-hover:w-8 group-hover:bg-primary-purple transition-all" />
            <span>{link.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}
