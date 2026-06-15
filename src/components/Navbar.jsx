import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks } from '../data/portfolioData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    setActive(href.replace('#', ''))
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-glass shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="group flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-button flex items-center justify-center text-white text-sm font-bold shadow-md">
            A
          </span>
          <span className="section-title text-xl tracking-tight">Amani</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                active === link.href.replace('#', '')
                  ? 'text-primary-purple bg-background-lavender'
                  : 'text-text-body hover:text-primary-purple hover:bg-background-lavender'
              }`}
            >
              {link.label}
              {active === link.href.replace('#', '') && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-purple"
                />
              )}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="mailto:amanidulfi@gmail.com"
          className="hidden md:inline-flex primary-btn px-5 py-2 text-sm"
        >
          Hire Me ✦
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-text-heading p-2 rounded-xl hover:bg-background-lavender transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden nav-glass border-t border-border-soft overflow-hidden"
          >
            <nav className="flex flex-col px-5 py-4 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 text-sm font-medium text-text-body hover:text-primary-purple hover:bg-background-lavender rounded-xl transition"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="mailto:amanidulfi@gmail.com"
                className="primary-btn px-5 py-3 text-sm text-center mt-2"
              >
                Hire Me ✦
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
