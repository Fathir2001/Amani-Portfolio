import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MdEmail, MdPhone, MdLocationOn,
} from 'react-icons/md'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { SiBehance } from 'react-icons/si'
import { contact } from '../data/portfolioData'

const contactItems = [
  { icon: <MdEmail size={18} />, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: <MdPhone size={18} />, label: 'Phone', value: contact.phone, href: `tel:${contact.phone}` },
  { icon: <MdLocationOn size={18} />, label: 'Location', value: contact.address, href: null },
]

const socialLinks = [
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', href: contact.linkedin },
  { icon: <FiGithub size={18} />, label: 'GitHub', href: contact.github },
  { icon: <SiBehance size={18} />, label: 'Behance', href: contact.behance },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-28 bg-background-main relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-60 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #8B5CF6 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">✦ Let's Connect</span>
          <h2 className="section-title text-4xl md:text-5xl mt-3">Get In Touch</h2>
          <p className="section-subtitle mt-4 max-w-xl mx-auto text-base">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 items-start">
          {/* Left: contact info */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="glass-card rounded-3xl p-6 space-y-4"
            >
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-background-lavender text-primary-purple flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-text-muted text-xs font-medium uppercase tracking-wide mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-text-heading text-sm font-medium hover:text-primary-purple transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-text-heading text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="glass-card rounded-3xl p-6"
            >
              <p className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-4">Find me online</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-text-body hover:text-primary-purple border border-border-soft hover:border-primary-purple px-4 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                    aria-label={s.label}
                  >
                    {s.icon}
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="section-title text-xl mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-text-muted text-xs font-semibold uppercase tracking-wide mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Amani Dulfi"
                  className="w-full px-4 py-3.5 rounded-xl border border-border-soft bg-background-main text-text-heading text-sm placeholder:text-text-muted focus:outline-none focus:border-primary-purple focus:ring-2 focus:ring-primary-purple/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-text-muted text-xs font-semibold uppercase tracking-wide mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="hello@example.com"
                  className="w-full px-4 py-3.5 rounded-xl border border-border-soft bg-background-main text-text-heading text-sm placeholder:text-text-muted focus:outline-none focus:border-primary-purple focus:ring-2 focus:ring-primary-purple/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-text-muted text-xs font-semibold uppercase tracking-wide mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3.5 rounded-xl border border-border-soft bg-background-main text-text-heading text-sm placeholder:text-text-muted focus:outline-none focus:border-primary-purple focus:ring-2 focus:ring-primary-purple/10 transition-all resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="primary-btn w-full py-4 text-sm font-semibold"
              >
                {sent ? '✓ Message Sent!' : 'Send Message ✦'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
